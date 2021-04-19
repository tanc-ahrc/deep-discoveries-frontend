import Grid from '@material-ui/core/Grid';
import { useState, useReducer } from 'react';
import DetailSelection from './DetailSelection.js';
import BasicSearchSidebar from './BasicSearchSidebar.js';
import BasicSearchResults from './BasicSearchResults.js';

export default function BasicSearch({input, setInput}) {
  const [results, setResults] = useReducer(
    (oldResults, action) => {
      const newResult = action.payload;
      switch(action.type) {
        case 'replace': { return newResult; }
        case 'update':  { return oldResults.map((r) => { return r.aid === newResult.aid ? newResult : r; }); }
        default:        throw new Error();
      }
    },
    []
  );
    },
    []
  );
  const [detailSearch, setDetailSearch] = useState(false);
  if(detailSearch) {
    return (
      <DetailSelection input={input}
                       results={results}
                       setResults={setResults}
                       cancelDetailSearch={() => {setDetailSearch(false)}}
      />
    )
  }
  else {
    return (
      <Grid container spacing={3} style={{paddingTop: '20vh'}}>
        <Grid item xs={3}>
          <BasicSearchSidebar input={input} onNewSearch={() => {setInput(undefined);}} onDetailSearch={() => {setDetailSearch(true)}}/>
        </Grid>
        <Grid item xs={9}>
          <BasicSearchResults input={input} results={results} setResults={setResults}/>
        </Grid>
      </Grid>
    );
  }
}
