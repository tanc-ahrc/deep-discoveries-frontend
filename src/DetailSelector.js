/* Derived from src/avatar.jsx, in master branch of
    https://github.com/kirill3333/react-avatar.git, commit
    60d7a5f728ce276d9cbe84f1773ebf32abddf995.
 * avatar.jsx copyright (c) 2017 Kirill Novikov, MIT license
 * All changes copyright (c) 2021 Crown Copyright (The National Archives), MIT license
 * For MIT license, see https://github.com/tanc-ahrc/deep-discoveries-interface-building-blocks/blob/master/LICENSE.
 */

import React from 'react'
import { useState, useEffect } from 'react';
import Konva from 'konva/lib/Core';
import 'konva/lib/shapes/Image';
import 'konva/lib/shapes/Rect';
import 'konva/lib/shapes/Circle';

export default function DetailSelector({src, shadingColor, shadingOpacity, selections, setSelections, ...props}) {
  const containerId = 'imageviewer_component';
  const [image] = useState(new Image());
  image.src = src;
  const [width, setWidth] = useState(image.naturalWidth);
  const [height, setHeight] = useState(image.naturalHeight);

  React.useEffect(() => {
    // Scale to the smaller dimension
    let widthScale = width / image.naturalWidth;
    let heightScale = height / image.naturalHeight;
    const scale = widthScale < heightScale ? widthScale : heightScale;

    // Base selector size on the smaller factor. Magic constant arrived at by trial and error.
    const selectorSize = widthScale < heightScale ? image.naturalWidth  * scale * 0.025 * 0.5
                                                  : image.naturalHeight * scale * 0.025 * 0.5;

    const newSelections = [];

    // TODO: Could make more sense to create a subclass of Rect.
    //       This would handle the boilerplate repetition in the
    //       event handlers.
    function initHole(x, y, opacity) {
      return new Konva.Circle({
        x: x,
        y: y,
        radius: selectorSize * 2,
        fillPatternImage: image,
        fillPatternOffset: { x: x, y: y },
        fillPatternScale: { x: scale, y: scale },
        opacity: opacity
      });
    }

    const stage = new Konva.Stage({
      container: containerId,
      width: image.naturalWidth * scale,
      height: image.naturalHeight * scale
    });

    const background = new Konva.Image({
      x: 0,
      y: 0,
      width: image.naturalWidth * scale,
      height: image.naturalHeight * scale,
      image: image
    });

    const shading = new Konva.Rect({
      x: 0,
      y: 0,
      width: background.width(),
      height: background.height(),
      fill: shadingColor,
      strokeWidth: 0,
      opacity: shadingOpacity,
      visible: true
    });

    const select = initHole(0, 0, 1);
    select.visible(false);
    select.draggable(true);
    select.stroke('white');
    select.strokeWidth(1);
    //TODO: May want to fiddle the size of select so that the part covered
    //      by the stroke is not included in the selection.

    const layer = new Konva.Layer();
    layer.add(background);
    layer.add(shading);
    layer.add(select);
    stage.add(layer);

    selections.forEach((selection) => {
      selection.forEach((hole) => {
        const holeScale = hole.fillPatternScaleX();
        if(holeScale !== hole.fillPatternScaleY()) console.error('Inconsistent scale');

        const scaledX = Math.max(Math.min(scale * (hole.x() / holeScale), image.width * scale - 1), 0);
        const scaledY = Math.max(Math.min(scale * (hole.y() / holeScale), image.height * scale - 1), 0);
        const scaledRadius = Math.max(scale * hole.radius() / holeScale, 1);
        hole.x(scaledX);
        hole.y(scaledY);
        hole.radius(scaledRadius);
        hole.fillPatternOffset({ x: scaledX, y: scaledY });
        hole.fillPatternScale({ x: scale, y: scale});

        layer.add(hole);
      });
    });

    stage.on("mouseenter", (e) => {
      select.visible(true);
      stage.container().style.cursor = 'none';
    });

    stage.on("mouseleave", (e) => {
      select.visible(false);
      stage.container().style.cursor = 'default';
      layer.draw();
    });

    stage.on("mousemove", (e) => {
      const x = e.evt.layerX - selectorSize;
      const y = e.evt.layerY - selectorSize;
      select.x(x);
      select.y(y);
      select.fillPatternOffset({x: x, y: y});
      layer.batchDraw();
    });

    stage.on("mousedown dragmove", (e) => {
      const x = e.evt.layerX - selectorSize;
      const y = e.evt.layerY - selectorSize;
      const hole = initHole(x, y, 1);
      layer.add(hole);
      newSelections.push(hole);
      layer.batchDraw();
    });

    stage.on("mouseup dragend dragleave dragexit", () => {
      const s = selections.slice();
      s.push(newSelections);
      setSelections(s);
    });

    layer.draw();
  }, [width, height, shadingColor, shadingOpacity, image, selections, setSelections]);

  /* Resizing tricks following https://www.pluralsight.com/guides/re-render-react-component-on-window-resize */
  useEffect(
    () => {
      const e = document.getElementById(containerId);
      function handleResize() {
        // -1 here to avoid infinite loops when the width is fractionally smaller than the offsetWidth
        if(width < e.offsetWidth - 1 ||      // make the image bigger if it is not using all the space
          e.offsetWidth < e.scrollWidth) {   // make the image smaller if it is using too much space
          setWidth(e.offsetWidth);
        }

        // -1 here to avoid infinite loops when the height is fractionally smaller than the offsetHeight
        if(height < e.offsetHeight - 1 ||    // make the image bigger if it is not using all the space
          e.offsetHeight < e.scrollHeight) { // make the image smaller if it is using too much space
          setHeight(e.offsetHeight);
        }
      }
      handleResize(); //ensure that we are sized correctly
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    },
    [image, width, height]
  );

  return (
    <div>
      <div id={containerId} {...props}/>
    </div>
  );
}
