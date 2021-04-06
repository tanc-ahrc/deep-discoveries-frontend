import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

export default function BasicSearchSidebar({input}) {
  return (
    <Container>
      <img src={input.url} width='100%'/>
      <div>
        <Button align='left'>Start a new search</Button>
        <Button align='right'>Detail search</Button>
      </div>
      <InputLabel id='recentSearchesLabel'>Recent searches</InputLabel>
      <Select labelId='recentSearchesLabel'>
        <option>Placeholder 1</option>
        <option>Placeholder 2</option>
      </Select>
      <InputLabel id='savedCollectionsLabel'>Saved collections</InputLabel>
      <Select labelId='savedCollectionsLabel'>
        <option>Placeholder 1</option>
        <option>Placeholder 2</option>
      </Select>
    </Container>
  );
}
