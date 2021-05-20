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
  const [detailList, setDetailList] = useReducer(
    (oldDetailList, action) => {
      const newDetail = action.payload;
console.log(newDetail);
      switch(action.type) {
        case 'add': {
          return oldDetailList.concat(newDetail);
        }
        case 'remove': {
          for(let i = 0; i < oldDetailList.length; i++) {
            if(newDetail.aid === oldDetailList[i].aid) {
              oldDetailList.splice(i, 1);
              return oldDetailList.slice();
            }
          }

          //TODO: This function gets called twice when we hit the checkbox, so we always see this
          //      warning. We must return a clone of the list in this case: even though it has not
          //      changed, the checkbox will not get cleared unless we make it look like it has.
          console.warn('Attempted to remove non-member from detailList', newDetail, oldDetailList);
          return oldDetailList.slice();
        }
        case 'update': {
          return oldDetailList.map((d) => { return d.aid === newDetail.aid ? newDetail: d; });
        }
        default: throw new Error();
      }
    },
    []
  );
  const [detailSearch, setDetailSearch] = useState(false);
console.log('detailList:', detailList);
  if(detailSearch) {
    return (
      <DetailSelection input={input}
                       setInput={setInput}
                       results={results}
                       setResults={setResults}
                       detailList={detailList}
                       setDetailList={setDetailList}
                       cancelDetailSearch={() => {setDetailSearch(false)}}
      />
    )
  }
  else {
    return (
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <BasicSearchSidebar input={input} onNewSearch={() => {setInput(undefined);}} onDetailSearch={() => {setDetailSearch(true)}}/>
        </Grid>
        <Grid item xs={9}>
          <BasicSearchResults input={input} results={results} setResults={setResults} detailList={detailList} setDetailList={setDetailList}/>
        </Grid>
      </Grid>
    );
  }
}
