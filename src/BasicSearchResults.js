import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

const useStyles = makeStyles((theme) => ({
  masonry: {
    display: 'flex',
    marginLeft: '-10px',
  },
  masonryColumn: {
    paddingLeft: '10px',
    '& img': {
      marginBottom: '10px',
    },
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
    formData.append('resultcount', 999);
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
          <img key={result.aid} src={result.url}/>
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
