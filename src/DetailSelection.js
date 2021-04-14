import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import DetailSelector from './DetailSelector.js';

export default function DetailSelection({input, cancelDetailSearch}) {
  const [selections, setSelections] = useState({
    stack: [[]],
    current: 0
  });

  function pushSelection(newSelection) {
    const newCurrent = selections.current + 1;
    const newStack = selections.stack.slice(0, newCurrent);
    newStack.push(newSelection);
    setSelections({stack: newStack, current: newCurrent});
  }
  function undo() { setSelections({stack: selections.stack, current: selections.current - 1}); }
  function redo() { setSelections({stack: selections.stack, current: selections.current + 1}); }
  function clear(){ setSelections({stack: [[]], current: 0}); }

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
          <DetailSelector src={input.url}
                          shadingColor='black'
                          shadingOpacity={0.5}
                          selections={selections.stack[selections.current]}
                          setSelections={pushSelection}/>
        </Grid>
      </Grid>
      <Grid container align='right'>
        <Grid item><div xs={8}/></Grid>
        <Grid item xs={2} align='right'>
          <Button onClick={cancelDetailSearch}>Cancel</Button>
        </Grid>
        <Grid item xs={2} align='right'>
          <Button>Update search</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
