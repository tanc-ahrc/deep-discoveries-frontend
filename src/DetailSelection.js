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
    },
  },
}));

export default function DetailSelection({input, detailList, cancelDetailSearch}) {
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
      <Container>
        <Grid container>
          <Grid item><div xs={8}/></Grid>
          <Grid item xs={2}>
            <Button onClick={cancelDetailSearch}>Cancel</Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={cancelDetailSearch}>Update search</Button>
          </Grid>
        </Grid>
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
    return (
      <Container style={{paddingTop: '10vh', paddingBottom: '10vh'}} height='90vh'>
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
            <Button onClick={()=>{setDetailImage(undefined);}}>Cancel selections</Button>
          </Grid>
          <Grid item xs={2} align='right'>
            <Button>Update selections</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
