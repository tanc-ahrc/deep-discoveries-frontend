import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FbImageLibrary from 'react-fb-image-grid';

export default function BasicSearchSidebar({input, detailList, onNewSearch, onDetailSearch, fetching}) {
  return (
    <Container>
      <div style={{position: 'relative', top: 0, left: 0}}>
        <FbImageLibrary
          images={[input.url].concat(detailList.map(d => d.url))}
          hideOverlay={true}
          countFrom={4}
        />
      </div>
      <Grid container style={{paddingTop: '3vh'}} spacing={2}>
        <Grid item xs={6}>
          <Button fullWidth={true} disabled={fetching} onClick={onNewSearch}>Update search</Button>
        </Grid>
        <Grid item xs={6} align='right'>
          <Button fullWidth={true} disabled={fetching} onClick={onDetailSearch}>Edit search</Button>
        </Grid>
      </Grid>
      <div style={{paddingTop: '6vh'}}/>
      <FormControl fullWidth={true}>
        <InputLabel id='recentSearchesLabel'>&nbsp;Recent searches</InputLabel>
        <Select labelId='recentSearchesLabel' disabled={fetching}>
          <option>Placeholder recent 1</option>
          <option>Placeholder recent 2</option>
        </Select>
      </FormControl>
      <div style={{paddingTop: '1vh'}}/>
      <FormControl fullWidth={true}>
        <InputLabel id='savedCollectionsLabel'>&nbsp;Saved collections</InputLabel>
        <Select labelId='savedCollectionsLabel' disabled={fetching}>
          <option>Placeholder saved 1</option>
          <option>Placeholder saved 2</option>
        </Select>
      </FormControl>
    </Container>
  );
}
