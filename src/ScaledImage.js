import { useState, useEffect } from 'react';
import Konva from 'konva/lib/Core';
import 'konva/lib/shapes/Image';

/* Derived from src/avatar.jsx, in master branch of
    https://github.com/kirill3333/react-avatar.git, commit
    60d7a5f728ce276d9cbe84f1773ebf32abddf995.
 * avatar.jsx copyright (c) 2017 Kirill Novikov, MIT license
 * All changes copyright (c) 2021 Crown Copyright (The National Archives), MIT license
 * For MIT license, see https://github.com/tanc-ahrc/deep-discoveries-interface-building-blocks/blob/master/LICENSE.
 */
export default function ScaledImage({id, src, ...props}) {
  const containerId = 'ScaledImage_' + id;
  const [width, setWidth] = useState(0);
  const [image] = useState(new Image());
  image.src = src;

  useEffect(
    /* Resizing tricks following
     * www.pluralsight.com/guides/re-render-react-component-on-window-resize
     */
    () => {
      const e = document.getElementById(containerId);
      function handleResize() {
        if(image.width !== e.offsetWidth || e.offsetWidth !== e.scrollWidth) {
          setWidth(e.offsetWidth);
        }
      }
      handleResize(); //ensure that we are sized correctly
      window.addEventListener('resize', handleResize);

      image.onload = () => {
        const scale = width / image.width;
        const stage = new Konva.Stage({
          container: containerId,
          width: width,
          height: image.height * scale,
        });
        const background = new Konva.Image({
          x: 0,
          y: 0,
          width: image.width * scale,
          height: image.height * scale,
          image: image,
        });
        const layer = new Konva.Layer();
        layer.add(background);
        stage.add(layer);
        layer.draw();
      };

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [containerId, image, width]);

    return (<div id={containerId} {...props}/>);
}
