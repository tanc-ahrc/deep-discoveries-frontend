import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo, forwardRef, useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Konva from 'konva/lib/Core';
import 'konva/lib/shapes/Image';

const useStyles = makeStyles((theme) => ({
  masonry: {
    display: 'flex',
    marginLeft: '-10px',
  },
  masonryColumn: {
    paddingLeft: '10px',
  },
  masonryCell: {
    marginBottom: '10px',
  },
}));


export default function BasicSearchResults({input}) {
  const classes = useStyles();

  const [results, setResults] = useState([]);
  const [tileSize, setTileSize] = useState(2);

  function getSimilar() {
    const endpoint = 'https://decade.ac.uk/deepdiscovery/api/upload';
    const formData = new FormData();
    if     (input.file) formData.append('query_file', input.file);
    else if(input.aid)  formData.append('query_aid',  input.aid);
    else                formData.append('query_url',  input.url);
    formData.append('searchengine', 'Style');
    formData.append('resultcount', 111);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.onload = function() {
      let initialResults = JSON.parse(this.responseText);

      //If the input was an asset, do not display it in the results
      //TODO: We should shortcircuit. Or, probably, it is safe just to shift the first element off.
      if(input.aid) initialResults = initialResults.filter((r) => { return r.aid !== input.aid; });

      //Only display images from named collections
      initialResults = initialResults.filter((r) => {
        return r.collection != null && getCollectionInfo(r.collection).name != null;
      });

      setResults(initialResults);
    };
    xhr.send(formData);
  }

  useEffect(getSimilar, [input]);

  return (
    <Container>
      <Typography>Similar Images</Typography>
      <Grid container>
        <Grid item xs={3}>
          <Button>Image view</Button>
        </Grid>
        <Grid item xs={3}>
          <Button>Area of likeness</Button>
        </Grid>
        <Grid item xs={3}>
          <div/>
        </Grid>
        <Grid item xs={3}>
          <Slider
            value={tileSize}
            onChange={ (e, x) => { setTileSize(x); } }
            step={1}
            min={1}
            max={3}
          />
        </Grid>
      </Grid>
      <Masonry breakpointCols={5 - tileSize}
               className={classes.masonry}
               columnClassName={classes.masonryColumn}>
        {results.map((result) => (
          <ResultTile className={classes.masonryCell} key={result.aid} result={result} tileSize={tileSize}/>
        ))}
      </Masonry>
    </Container>
  );
}

function getCollectionInfo(collection) {
  if(collection == null) return null; /* matches on undefined or null */

  let c = { id: collection };

  if     (collection === "RGBE")   c.name = "Royal Botanic Garden Edinburgh";
  else if(collection === "TNA1" ||
          collection === "TNA2" ||
          collection === "TNA3")   c.name = "The National Archives";
  else if(collection === "VA1" ||
          collection === "VA2")    c.name = "Victoria & Albert Museum";
  else                             c.name = null;

  return c;
}

function ResultTile({result, tileSize, ...props}) {
  //Following https://material-ui.com/guides/composition/#caveat-with-inlining
  //TODO: React docs indicate that there is no semantic guarantee here, is
  //      material-ui relying on the semantics?
  //      See https://reactjs.org/docs/hooks-reference.html#usememo
  const ResultImagePart = useMemo(
    () =>
      forwardRef((p, ref) => (
        <ResultImage result={result} tileSize={tileSize}/>
      )),
      [result, tileSize]
  );

  return (
    <Card {...props}><CardMedia component={ResultImagePart}/></Card>
  );
}

/* Derived from src/avatar.jsx, in master branch of
    https://github.com/kirill3333/react-avatar.git, commit
    60d7a5f728ce276d9cbe84f1773ebf32abddf995.
 * avatar.jsx copyright (c) 2017 Kirill Novikov, MIT license
 * All changes copyright (c) 2021 Crown Copyright (The National Archives), MIT license
 * For MIT license, see https://github.com/tanc-ahrc/deep-discoveries-interface-building-blocks/blob/master/LICENSE.
 */
function ResultImage({result}) {
  const containerId = 'ResultTile_' + result.aid;
  const [width, setWidth] = useState(0);
  const [image] = useState(new Image());
  image.src = result.url;

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

    return (<div id={containerId}/>);
}
