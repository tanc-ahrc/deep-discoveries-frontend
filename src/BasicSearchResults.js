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
import ScaledImage from './ScaledImage.js';
import SearchDatum from './SearchDatum.js';

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

export default function BasicSearchResults({input, results, setResults, detailList, setDetailList}) {
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

      setResults({type: 'replace', payload: initialResults.map((x) => {
        const y = new SearchDatum(x.aid, x.url);
        y.collection = x.collection;
        return y;
      })});
    };
    xhr.send(formData);
  }

  useEffect(getSimilar, [input, setResults]);

  return (
    <Container>
      <Typography variant='h2' align='left'>Similar Images</Typography>
      <Grid container>
        <Grid item xs={3}>
          <Button fullWidth={true}>Image view</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth={true} endIcon={<InfoOutlinedIcon/>}>Areas of likeness</Button>
        </Grid>
        <Grid item xs={3}>
          <div/>
        </Grid>
        <Grid container item xs={3}>
          <Grid item xs={12}>
            <Typography style={{fontSize: 12, lineHeight: 1, textTransform: 'uppercase'}}>Image Size</Typography>
          </Grid>
          <Grid item xs={2} align='left'>
            {/* Using IconButton 'disabled' can result in conditions where the images constantly switch
              * between two sizes until the user clicks anywhere in the page, or the page crashes. */}
            {/*disabled={tileSize === 1}*/}
            <IconButton
              size='small'
              color='primary'
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
              size='small'
              color='primary'
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
          <ResultTile className={classes.masonryCell} key={result.aid} result={result} detailList={detailList} setDetailList={setDetailList} tileSize={tileSize}/>
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

function ResultTile({result, detailList, setDetailList, tileSize, ...props}) {
  let isChecked = false;
  for(const detail of detailList) {
    if(result.aid === detail.aid) {
      isChecked = true;
      break;
    }
  }

  return (
    <Card {...props} variant='outlined' style={{borderColor:'black'}}>
      <CardContent style={{margin: 0, padding: 0}}>
        <Grid container justify='space-between'>
          <Grid item>
            <Checkbox style={{margin: 0, padding: 0}}
                      checked={isChecked}
                      onChange={() => { setDetailList({type: isChecked ? 'remove' : 'add', payload: result.clone()}); }}
            />
          </Grid>
          <Grid item><Typography style={{paddingRight: '3px'}}>{getCollectionInfo(result.collection).name}</Typography></Grid>
        </Grid>
        <img style={{height: '100%', width: '100%', padding: 0, margin: 0}} src={result.url}/>
      </CardContent>
    </Card>
  );
}
