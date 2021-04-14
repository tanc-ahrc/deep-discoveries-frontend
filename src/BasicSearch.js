import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import DetailSelection from './DetailSelection.js';
import BasicSearchSidebar from './BasicSearchSidebar.js';
import BasicSearchResults from './BasicSearchResults.js';

export default function BasicSearch({input}) {
  const [detailSearch, setDetailSearch] = useState(false);
  if(detailSearch) {
    return (
      <DetailSelection input={input}
                       cancelDetailSearch={() => {setDetailSearch(false)}}
      />
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
