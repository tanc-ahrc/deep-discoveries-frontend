import Grid from '@material-ui/core/Grid';
import BasicSearchSidebar from './BasicSearchSidebar.js';
import BasicSearchResults from './BasicSearchResults.js';

export default function BasicSearch({input}) {
  return (
    <Grid container spacing={3} style={{paddingTop: '20vh'}}>
      <Grid item xs={3}>
        <BasicSearchSidebar input={input}/>
      </Grid>
      <Grid item xs={9}>
        <BasicSearchResults input={input}/>
      </Grid>
    </Grid>
  );
}
