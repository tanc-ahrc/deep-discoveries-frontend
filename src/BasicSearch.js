import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import DetailSelector from './DetailSelector.js';
import BasicSearchSidebar from './BasicSearchSidebar.js';
import BasicSearchResults from './BasicSearchResults.js';

export default function BasicSearch({input}) {
  const [detailSearch, setDetailSearch] = useState(false);
  if(detailSearch) {
    return (
      <Container style={{paddingTop: '10vh', paddingBottom: '10vh'}} height='90vh'>
        <Typography>Click and draw over the image to highlight areas of interest.</Typography>
        <DetailSelector src={input.url} shadingColor='black' shadingOpacity={0.5}/>
      </Container>
    )
  }
  else {
    return (
      <Grid container spacing={3} style={{paddingTop: '20vh'}}>
        <Grid item xs={3}>
          <BasicSearchSidebar input={input} onDetailSearch={() => {setDetailSearch(true)}}/>
        </Grid>
        <Grid item xs={9}>
          <BasicSearchResults input={input}/>
        </Grid>
      </Grid>
    );
  }
}
