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
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import Masonry from 'react-masonry-css';
import { getCollectionInfo } from './Backend.js';

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

  const likenessTip = '<div><p align="center">Areas of the image that are recognised as most or least alike. The left side (blue) is least alike. The right side (red) is most alike.</p><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="245px" height="24px" viewBox="0 0 245 24" enable-background="new 0 0 245 24" xml:space="preserve">  <image id="image0" width="245" height="24" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAAAYCAMAAAAVtUsLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC4lBMVEUAAIEAAIQAAIcAAI0AAJEAAJUBAJoAAJ0AAKIAAKYAAKsAAK8AALQAALcAALsAAL8AAMIAAMUAAMsAANAAANQBANgAANwAAOAAAOQAAOgAAO0AAPMAAPYAAPkAAvwABP4ACP8ADP8AEP4AFP4AGf8AHf8AIf8AJv8AKf8ALf4AMf4ANf4AOf4AP/4AQv8AR/8AS/8AT/8AVP8AV/4AW/4AX/8AZP8BZ/8AbP8AcP4AdP4AeP8Ae/4Af/4AhP4BiP8Ai/8Akf8Alf8AmP4Anf8Aof8Apf8Aqf8Arv4Asf4Btv8Buf8Avf8Awv8Axf8Ayv8Azv8A0/8A1/8A2/4A4f8A5P8A5/8A6/8A8P4A8/4B+P8C/P4D/vsH//gK//QO//AS/+0X/+gb/+Mf/98i/94n/9ks/9Mw/s82/so5/8c9/8JB/75F/7lH/7dM/7NR/61V/6lZ/6Rd/6Fh/55l/5tq/5Vu/5Fz/4x4/4d7/oR+/3+B/3uE/3eI/3WO/3CS/2yX/2ec/2Of/2Cj/1um/1ir/1Sw/1C1/0u3/0e8/0PA/z7E/zrI/zfL/zPQ/y7U/yrZ/yXd/yLh/x7l/xnp/xXu/xHy/gz3/gn7/gb+/QT/+wH/9gD+8gD/7gD+6QD+5gD/4gD/3gD+2QD/1gD/0QD/zAH/yAH/xAH+wAD/vAD/uAD+tAD+sQD+rAD/pwH/owH/nwH/mwD/lgD/kgD/jgH/igH/hgH/gQD/fgD/egD/dwD/cgD/bgD/aQD/ZgD/YQD/XQD+WQD+VQD+UQH/TAH/SAH/RAD/QQD/PAD/OAD/NAD/MQD+LAD+JwD/JAH+HwD+HAD/FwD/EgH/DgH/CwH/BwD+AwD7AQD4AAD1AADxAADqAADnAADiAADfAQDaAADWAADSAADOAQDJAQHEAQLBAAG9AAC5AAC2AQCzAACtAACpAAClAACgAQGdAACXAACUAACQAAGMAAGIAACFAAD///+0LjPXAAAAAWJLR0T1RdIb2wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UFHBIeAwqYXr0AAAFASURBVFjDY2BgZGJmYWVj5+Dk4ubh5eMXEBQSFhEVE5eQlJKWkZWTV1BUUlZRVVPX0NTS1tHV0zcwNDI2MTUzt7C0sraxtbN3cHRydnF1c/fw9PL28fXzDwgMCg4JDQuPiIyKjomNi09ITEpOSU1Lz8jMys7JzcsvKCwqLiktK6+orKquqa2rb2hsam5pbWvv6Ozq7unt658wcdLkKVOnTZ8xc9bsOXPnzV+wcNHiJUuXLV+xctXqNWvXrd+wcdPmLVu3bd+xc9fuPXv37T9w8NDhI0ePHT9x8tTpM2fPnb9w8dLlK1evXb9x89btO3fv3X/w8NHjJ0+fPX/x8tXrN2/fvf/w8dPnLwyjvh719aivR3096utRX4/6etTXo74e9fWor0d9PerrUV+P+nrU16O+HvX1qK9HfT3q6xHmawBSUfLHjvdTOwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0yOFQxNzozMDowMyswMTowMHLbfNcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMjhUMTc6MzA6MDMrMDE6MDADhsRrAAAAAElFTkSuQmCC"/></svg></div>'

  return (
    <Container>
      <ReactTooltip/>
      <Typography variant='h2' align='left'>Similar Images</Typography>
      <Grid container>
        <Grid item xs={6}>
          <ToggleButtonGroup style={{width: '100%'}} exclusive value={showLikeness} onChange={(e, n)=>{if(n === true || n === false) setShowLikeness(n);}}>
            <ToggleButton style={{borderRadius: '5px 0   0   5px', width: '50%'}} value={false} disabled={!showLikeness}>Image view</ToggleButton>
            <ToggleButton style={{borderRadius: '0   5px 5px 0'  , width: '50%'}} value={true}  disabled={ showLikeness} data-tip={likenessTip} data-html={true}>Likeness view</ToggleButton>
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
