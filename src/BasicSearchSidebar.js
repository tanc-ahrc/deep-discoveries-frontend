import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function BasicSearchSidebar({input, onNewSearch, onDetailSearch}) {
  return (
    <Container>
      <img src={input.url} width='100%'/>
      <Grid container style={{paddingTop: '3vh'}} spacing={2}>
        <Grid item xs={6}>
          <Button fullWidth={true} onClick={onNewSearch}>New search</Button>
        </Grid>
        <Grid item xs={6} align='right'>
          <Button fullWidth={true} onClick={onDetailSearch}>Detail search</Button>
        </Grid>
      </Grid>
      <div style={{paddingTop: '6vh'}}/>
      <FormControl fullWidth={true}>
        <InputLabel id='recentSearchesLabel'>&nbsp;Recent searches</InputLabel>
        <Select labelId='recentSearchesLabel'>
          <option>Placeholder recent 1</option>
          <option>Placeholder recent 2</option>
        </Select>
      </FormControl>
      <div style={{paddingTop: '1vh'}}/>
      <FormControl fullWidth={true}>
        <InputLabel id='savedCollectionsLabel'>&nbsp;Saved collections</InputLabel>
        <Select labelId='savedCollectionsLabel'>
          <option>Placeholder saved 1</option>
          <option>Placeholder saved 2</option>
        </Select>
      </FormControl>
    </Container>
  );
}
