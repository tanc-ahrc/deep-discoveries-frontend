//TODO: The {stack, current} entity should really be
//      a proper class with its own methods, rather
//      than being externally manipulated all over
//      the place.

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import { useState } from 'react';
import Masonry from 'react-masonry-css';
import DetailSelector from './DetailSelector.js';
import ScaledImage from './ScaledImage.js';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  masonry: {
    display: 'flex',
    marginLeft: '-10px',
  },
  masonryColumn: {
    paddingLeft: '10px',
  },
  masonryCell: {
    marginTop: '10px',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
      opacity: theme.palette.action.hoverOpacity,
    },
  },
}));

export default function DetailSelection({input, setInput, detailList, setDetailList, endDetailSearch}) {
  const classes = useStyles();

  const [detailImage, setDetailImage] = useState(input)
  const [selections, setSelections] = useState(input.cloneSelections());

  const shadingColor='black'
  const shadingOpacity=0.5

  function pushSelection(newSelection) {
    const newCurrent = selections.current + 1;
    const newStack = selections.stack.slice(0, newCurrent);
    newStack.push(newSelection);
    setSelections({stack: newStack, current: newCurrent});
  }
  function undo() { setSelections({stack: selections.stack, current: selections.current - 1}); }
  function redo() { setSelections({stack: selections.stack, current: selections.current + 1}); }
  function clear(){ setSelections({stack: [[]], current: 0}); }

  //Item is a dummy parameter. Both funcs must have the same signature
  //See CancelIcon's onClick, where they are used.
  function deleteInput(item) {
    if(detailList.length !== 0) {
      const d = detailList[0];
      setDetailList({type: 'remove', payload: d});
      setInput(d);
    }
    else setInput(undefined);
  }

  function deleteDetailItem(item) {
    setDetailList({type: 'remove', payload: item});
  }

  const allImages = [{datum: input, deleteFunc: deleteInput}].concat(detailList.map((d) => { return { datum: d, deleteFunc: deleteDetailItem};}));

  let selector;
  if(typeof detailImage !== typeof undefined) {
    function selectionsChomp() {
      return {
        stack: selections.stack.slice(0, selections.current + 1),
        current: selections.current,
      };
    }

    function selectionsMatch() {
      const s = selectionsChomp();
      if(s.stack.length !== detailImage.selections.stack.length) return false;
      if(s.current !== detailImage.selections.current) return false;
      for(let i = 0; i < s.stack.length; i++) {
        if(s.stack[i].length !== detailImage.selections.stack[i].length) return false;
      }
      for(let i = 0; i < s.stack.length; i++) {
        for(let j = 0; j < s.stack[i].length; j++) {
          const s1 = s.stack[i][j];
          const s2 = detailImage.selections.stack[i][j];
          if(s1.radius !== s2.radius) return false;
          if(s1.x !== s2.x) return false;
          if(s1.y !== s2.y) return false;
        }
      }
      return true;
    }

    selector = (
      <>
        <Grid item xs={12}>
          <Typography variant='h3'>Click and draw over the image to highlight areas of interest.</Typography>
        </Grid>
        <Grid item xs={10}>
          <DetailSelector src={detailImage.url}
                          shadingColor={shadingColor}
                          shadingOpacity={shadingOpacity}
                          selections={selections.stack[selections.current]}
                          setSelections={pushSelection}/>
        </Grid>
        <Grid container item xs={2}>
          <Grid item xs={11}>
            <Button fullWidth={true} onClick={()=>{
                      const d = detailImage.clone();
                      d.selections = selectionsChomp();
                      if(d.aid === input.aid) { setInput(d); }
                      else { setDetailList({type: 'update', payload: d}); }
                      setDetailImage(undefined); /* Workaround: without this, we fill new selections in one image with the background image from the next image. TODO: fix said bug.*/
                    }}
                    disabled={selectionsMatch()}
            >Update selections</Button>
            <div style={{paddingTop: '2vh'}}/>
            <Button fullWidth={true} disabled={selections.current === 0}                           onClick={undo}>Undo</Button>
            <Button fullWidth={true} disabled={selections.current === selections.stack.length - 1} onClick={redo}>Redo</Button>
            <Button fullWidth={true} disabled={selections.current === 0} onClick={clear}>Clear</Button>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <Grid container>
      <Grid container>
        <Grid container item xs={4}>
          <Grid item xs={12}>
            <Button onClick={endDetailSearch}>Back to results</Button>
          </Grid>
          <Grid item xs={12}>
            <Masonry
              breakpointCols={2}
              className={classes.masonry}
              columnClassName={classes.masonryColumn}
            >
              {allImages.map((image) => (
                <div className={classes.masonryCell} key={image.datum.aid}>
                  <ScaledImage id={image.datum.aid}
                               src={image.datum.url}
                               shadingColor={shadingColor}
                               shadingOpacity={image.datum.selections.current === 0 ? 0 : shadingOpacity}
                               selections={image.datum.selections.stack[image.datum.selections.current]}
                               onClick={()=>{setSelections(image.datum.cloneSelections()); setDetailImage(image.datum);}}
                  />
                  <CancelIcon
                    style={{position: 'absolute', top: 0, right: 0}}
                    onClick={ () => { image.deleteFunc(image.datum) }}
                  />
                </div>
              ))}
            </Masonry>
          </Grid>
        </Grid>
        <Grid container item xs={8} align='right'>
          {selector}
        </Grid>
      </Grid>
    </Grid>
  );
}
