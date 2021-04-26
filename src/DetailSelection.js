//TODO: The {stack, current} entity should really be
//      a proper class with its own methods, rather
//      than being externally manipulated all over
//      the place.

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import { useState } from 'react';
import Masonry from 'react-masonry-css';
import DetailSelector from './DetailSelector.js';
import ScaledImage from './ScaledImage.js';

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
    '&:hover': {
      cursor: 'pointer',
      opacity: theme.palette.action.hoverOpacity,
    },
  },
  outerComponent: {...theme.outerComponent},
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
      <Container className={classes.outerComponent}>
        <Button onClick={cancelDetailSearch}>Update search</Button>
        <Masonry
          className={classes.masonry}
          columnClassName={classes.masonryColumn}
          style={{paddingTop: '3vh'}}
        >
          <ScaledImage className={classes.masonryCell}
                       key={input.aid}
                       id={input.aid}
                       src={input.url}
                       onClick={()=>{setSelections(input.cloneSelections()); setDetailImage(input);}}
          />
          {detailList.map((d) => (
            <ScaledImage className={classes.masonryCell}
                         key={d.aid}
                         id={d.aid}
                         src={d.url}
                         onClick={()=>{setSelections(d.cloneSelections()); setDetailImage(d)}}
            />
          ))}
        </Masonry>
      </Container>
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
      <Container className={classes.outerComponent}>
        <Typography>Click and draw over the image to highlight areas of interest.</Typography>
        <Grid container>
          <Grid item xs={2}>
            <Container>
              <Button fullWidth={true} disabled={selections.current === 0}                           onClick={undo}>Undo</Button>
              <Button fullWidth={true} disabled={selections.current === selections.stack.length - 1} onClick={redo}>Redo</Button>
              <Button fullWidth={true} disabled={selections.current === 0} onClick={clear}>Clear</Button>
            </Container>
          </Grid>
          <Grid item xs={10}>
            <DetailSelector src={detailImage.url}
                            shadingColor='black'
                            shadingOpacity={0.5}
                            selections={selections.stack[selections.current]}
                            setSelections={pushSelection}/>
          </Grid>
        </Grid>
        <Grid container align='right'>
          <Grid item><div xs={8}/></Grid>
          <Grid item xs={2} align='right'>
            <Button onClick={()=>{setDetailImage(undefined);}}>Cancel</Button>
          </Grid>
          <Grid item xs={2} align='right'>
            <Button onClick={()=>{
                      const d = detailImage.clone();
                      d.selections = selectionsChomp();
                      if(d.aid === input.aid) { setInput(d); }
                      else { setDetailList({type: 'update', payload: d}); }
                      setDetailImage(undefined);
                    }}
                    disabled={selectionsMatch()}
            >Update selections</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
