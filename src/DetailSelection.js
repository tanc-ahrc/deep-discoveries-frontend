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
    marginBottom: '10px',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
      opacity: theme.palette.action.hoverOpacity,
    },
  },
}));

export default function DetailSelection({input, setInput, detailList, setDetailList, cancelDetailSearch}) {
  const classes = useStyles();

  const [detailImage, setDetailImage] = useState();
  const [selections, setSelections] = useState();

  function pushSelection(newSelection) {
    const newCurrent = selections.current + 1;
    const newStack = selections.stack.slice(0, newCurrent);
    newStack.push(newSelection);
    setSelections({stack: newStack, current: newCurrent});
  }
  function undo() { setSelections({stack: selections.stack, current: selections.current - 1}); }
  function redo() { setSelections({stack: selections.stack, current: selections.current + 1}); }
  function clear(){ setSelections({stack: [[]], current: 0}); }

  if(typeof detailImage === typeof undefined) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h3'>Click an image to highlight areas of interest</Typography>
        </Grid>
        <Grid container>
          <Grid container item xs={2}>
            <Grid item xs={11}>
              <Button fullWidth={true} onClick={cancelDetailSearch}>Update search</Button>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Masonry
              breakpointCols={3}
              className={classes.masonry}
              columnClassName={classes.masonryColumn}
            >
              <div className={classes.masonryCell} key={input.aid}>
                <ScaledImage id={input.aid}
                             src={input.url}
                             onClick={()=>{setSelections(input.cloneSelections()); setDetailImage(input);}}
                />
                <CancelIcon
                  style={{position: 'absolute', top: 0, right: 0}}
                  onClick={ () => {
                    if(detailList.length !== 0) {
                      const d = detailList[0];
                      setDetailList({type: 'remove', payload: d});
                      setInput(d);
                    }
                    else setInput(undefined);
                  }}
                />
              </div>
              {detailList.map((d) => (
                <div className={classes.masonryCell} key={d.aid}>
                  <ScaledImage id={d.aid}
                               src={d.url}
                               onClick={()=>{setSelections(d.cloneSelections()); setDetailImage(d);}}
                  />
                  <CancelIcon
                    style={{position: 'absolute', top: 0, right: 0}}
                    onClick={ ()=>{setDetailList({type: 'remove', payload: d});} }
                  />
                </div>
              ))}
            </Masonry>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  else {
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

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h3'>Click and draw over the image to highlight areas of interest.</Typography>
        </Grid>
        <Grid container item xs={2}>
          <Grid item xs={11}>
            <Button fullWidth={true} onClick={()=>{setDetailImage(undefined);}}>Cancel</Button>
            <Button fullWidth={true} onClick={()=>{
                      const d = detailImage.clone();
                      d.selections = selectionsChomp();
                      if(d.aid === input.aid) { setInput(d); }
                      else { setDetailList({type: 'update', payload: d}); }
                      setDetailImage(undefined);
                    }}
                    disabled={selectionsMatch()}
            >Update selections</Button>
            <div style={{paddingTop: '2vh'}}/>
            <Button fullWidth={true} disabled={selections.current === 0}                           onClick={undo}>Undo</Button>
            <Button fullWidth={true} disabled={selections.current === selections.stack.length - 1} onClick={redo}>Redo</Button>
            <Button fullWidth={true} disabled={selections.current === 0} onClick={clear}>Clear</Button>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <DetailSelector src={detailImage.url}
                          shadingColor='black'
                          shadingOpacity={0.5}
                          selections={selections.stack[selections.current]}
                          setSelections={pushSelection}/>
        </Grid>
      </Grid>
    );
  }
}
