import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import Masonry from 'react-masonry-css';
import SearchDatum from './SearchDatum.js';
import { send, getCollectionInfo } from './Backend.js';

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
  const [showLikeness, setShowLikeness] = useState(false);

  function getSelections(circle, map) {
    const scale = circle.fillPatternScaleX();
    if(scale !== circle.fillPatternScaleY()) {
      console.error('Inconsistent scale');
      //This is a Bad Thing as it means that the radius warps differently
      //in each dimension, which'll make computing the selected pixels more
      //tricky. We maintain aspect ratio when we scale images, so
      //it should not happen. (And in an ideal world, we'd generate a png of
      //the selections, so we would not need to do any of this calculation
      //at all.)
    }
    const center_x = circle.x() / scale;
    const center_y = circle.y() / scale;
    const radius = circle.radius() / scale;
//console.log('first', scale, center_x, center_y, radius);
    //following https://stackoverflow.com/a/14487680
    const rect_top =    Math.max(Math.round(center_y - radius), 0);
    const rect_bottom = Math.min(Math.round(center_y + radius), map[0].length - 1);
    const rect_left =   Math.max(Math.round(center_x - radius), 0);
    const rect_right =  Math.min(Math.round(center_x + radius), map.length - 1);
    const sq_radius =   Math.round(radius * radius);
//console.log('second', rect_left, rect_top, rect_right, rect_bottom);
    for(let x = rect_left; x <= rect_right; x++) {
      for(let y = rect_top; y <= rect_bottom; y++) {
        let sq_x = (x - center_x); sq_x = sq_x * sq_x;
        let sq_y = (y - center_y); sq_y = sq_y * sq_y;
        if(sq_x + sq_y < sq_radius) {
//console.log(Math.round(x), Math.round(y));
          map[x][y] = 1;
        }
      }
    }
  }

  function getSimilar() {
    console.log('sending details');
    let selection_encodings = [];
const t1 = performance.now();
    for(const detail of [input].concat(detailList)) {
//console.log(detail.aid);
//console.log(detail.url);
//console.log(detail);
//TODO: may be able to pull this out of the circle itself (it has an img attribute)
      const image = new Image();
      image.src = detail.url;
      let selection_encoding = '' + detail.aid + '*' + detail.url + '*' + image.naturalWidth + '*' + image.naturalHeight + '*';
      const map = new Array(image.naturalWidth);
      map.fill(new Array(image.naturalHeight));
      for(const column of map) column.fill(0);
//console.log(map);
      for(const circleArray of detail.selections.stack[detail.selections.current]) {
const t2 = performance.now();
        for(const circle of circleArray) {
//console.log(circle);
          getSelections(circle, map);
        }
const t3 = performance.now();
console.log('one circle took', t3 - t2);
      }
      for(const column of map) {
        selection_encoding += column.join('');
      }
      selection_encodings.push(selection_encoding);
    }
const t4 = performance.now();
console.log('all circles took', t4 - t1);
console.log('encodings', selection_encodings);
    send(input, 3, (initialResults) => {
      //If the input was an asset, do not display it in the results
      //TODO: We should shortcircuit. Or, probably, it is safe just to shift the first element off.
      if(input.aid) initialResults = initialResults.filter((r) => { return r.aid !== input.aid; });

      setResults({type: 'replace', payload: initialResults.map((x) => {
        const y = new SearchDatum(x.aid, x.url);
        y.collection = x.collection;
        y.heatmapurl = x.heatmapurl;
        return y;
      })});
    });
  }

  useEffect(getSimilar, [input, setResults, detailList]);

  return (
    <Container>
      <Typography variant='h2' align='left'>Similar Images</Typography>
      <Grid container>
        <Grid item xs={6}>
          <ToggleButtonGroup style={{width: '100%'}} exclusive value={showLikeness} onChange={(e, n)=>{if(n === true || n === false) setShowLikeness(n);}}>
            <ToggleButton style={{borderRadius: '5px 0   0   5px', width: '50%'}} value={false} disabled={!showLikeness}>Image view</ToggleButton>
            <ToggleButton style={{borderRadius: '0   5px 5px 0'  , width: '50%'}} value={true}  disabled={ showLikeness}>Likeness view</ToggleButton>
          </ToggleButtonGroup>
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
          <ResultTile className={classes.masonryCell} key={result.aid} result={result} detailList={detailList} setDetailList={setDetailList} showLikeness={showLikeness} tileSize={tileSize}/>
        ))}
      </Masonry>
    </Container>
  );
}

function ResultTile({result, detailList, setDetailList, tileSize, showLikeness, ...props}) {
  let isChecked = false;
  for(const detail of detailList) {
    if(result.aid === detail.aid) {
      isChecked = true;
      break;
    }
  }

  // Pointer to a transparent png, for testing this:
  // result.likeness = 'https://onlinepngtools.com/images/examples-onlinepngtools/clouds-transparent.png';
  let overlay;
  if(showLikeness) overlay = (
    <img style={{height: '100%', width: '100%', padding: 0, margin: 0, position: 'absolute', top: 0, left: 0, zIndex: 2}}
         src={result.heatmapurl}/>
  );

  return (
    <Card {...props} variant='outlined' style={{borderColor:'#292929', borderRadius: '5px 5px 0 0'}}>
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
        <div style={{position: 'relative', top: 0, left: 0}}>
          <img style={{height: '100%', width: '100%', padding: 0, margin: 0, position: 'relative', top: 0, left: 0, zIndex: 1}} src={result.url}/>
          {overlay}
        </div>
      </CardContent>
    </Card>
  );
}
