import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import DetailSelector from './DetailSelector.js';

export default function DetailSelection({input}) {
  const [selections, setSelections] = useState([]);
  return (
    <Container style={{paddingTop: '10vh', paddingBottom: '10vh'}} height='90vh'>
      <Typography>Click and draw over the image to highlight areas of interest.</Typography>
      <Grid container>
        <Grid item xs={2}>
          <Container>
            <Button fullWidth={true} disabled={selections.length === 0} onClick={() => {setSelections(selections.slice(0, -1))}}>Undo</Button>
            <Button fullWidth={true}>Redo</Button>
          </Container>
        </Grid>
        <Grid item xs={10}>
          <DetailSelector src={input.url} shadingColor='black' shadingOpacity={0.5} selections={selections} setSelections={setSelections}/>
        </Grid>
      </Grid>
      <Grid container align='right'>
        <Grid item><div xs={8}/></Grid>
        <Grid item xs={2} align='right'>
          <Button>Cancel</Button>
        </Grid>
        <Grid item xs={2} align='right'>
          <Button>Update search</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
