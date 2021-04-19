import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo, forwardRef, useState, useEffect } from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
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
  button: {
    border: '2px solid #1F1F4D',
    boxSizing: 'border-box',
    borderRadius: '5px',
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '23px',
    textTransform: 'none',
    color: '#292929',
    '&:hover': {
      backgroundColor: '#1F1F4D',
      color: '#FFFFFF',
    },
  },
  title: {
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '29px',
    textAlign: 'left',
    color: '#292929',
  },
  sliderText: {
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '1.4',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  sliderButton: {
    color: '#292929',
    padding: 0,
  },
}));

export default function BasicSearchResults({input, results, setResults}) {
  const classes = useStyles();

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

  useEffect(getSimilar, [input, setResults]);

  return (
    <Container>
      <Typography className={classes.title} align='left'>Similar Images</Typography>
      <Grid style={{paddingTop: '3vh'}} container>
        <Grid item xs={3}>
          <Button className={classes.button} fullWidth={true}>Image view</Button>
        </Grid>
        <Grid item xs={3}>
          <Button className={classes.button} fullWidth={true} endIcon={<InfoOutlinedIcon/>}>Areas of likeness</Button>
        </Grid>
        <Grid item xs={3}>
          <div/>
        </Grid>
        <Grid container item xs={3}>
          <Grid item xs={12}>
            <Typography className={classes.sliderText}>Image Size</Typography>
          </Grid>
          <Grid item xs={2} align='left'>
            {/* Using IconButton 'disabled' can result in conditions where the images constantly switch
              * between two sizes until the user clicks anywhere in the page, or the page crashes. */}
            {/*disabled={tileSize === 1}*/}
            <IconButton
              classes={{root: classes.sliderButton}}
              size='small'
              onClick={() => setTileSize(tileSize => tileSize > 1 ? tileSize - 1 : tileSize)}>
              <RemoveCircleOutlineOutlinedIcon/>
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={tileSize}
              onChange={ (e, x) => { setTileSize(x); } }
              step={1}
              min={1}
              max={3}
            />
          </Grid>
          <Grid item xs={2} align='right'>
            <IconButton
              classes={{root: classes.sliderButton}}
              size='small'
              onClick={() => setTileSize(tileSize => tileSize < 3 ? tileSize + 1 : tileSize)}>
              <AddCircleOutlineOutlinedIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Masonry breakpointCols={5 - tileSize}
               className={classes.masonry}
               columnClassName={classes.masonryColumn}
               style={{paddingTop: '3vh'}}>
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
    <Card {...props} variant='outlined' style={{borderColor:'black'}}>
      <CardContent style={{margin: 0, padding: 0, paddingRight: 3}}>
        <Grid container justify='space-between'>
          <Grid item><Checkbox style={{margin: 0, padding: 0}}/></Grid>
          <Grid item><Typography>{getCollectionInfo(result.collection).name}</Typography></Grid>
        </Grid>
      </CardContent>
      <CardMedia component={ResultImagePart}/>
    </Card>
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
