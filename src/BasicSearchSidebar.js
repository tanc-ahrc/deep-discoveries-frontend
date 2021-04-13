import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    border: '2px solid #1F1F4D',
    boxSizing: 'border-box',
    borderRadius: '5px',
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '1vw',
    lineHeight: '1.25',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1F1F4D',
      color: '#FFFFFF',
    },
  },
  selector: {
    border: '2px solid #E9E9E9',
    boxSizing: 'border-box',
    borderRadius: '5px',
  },
  selectorLabel: {
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.25',
  },
}));

export default function BasicSearchSidebar({input}) {
  const classes = useStyles();

  return (
    <Container>
      <img src={input.url} width='100%'/>
      <Grid container style={{paddingTop: '3vh'}} spacing={2}>
        <Grid item xs={6}>
          <Button className={classes.button} fullWidth={true}>New search</Button>
        </Grid>
        <Grid item xs={6} align='right'>
          <Button className={classes.button} fullWidth={true}>Detail search</Button>
        </Grid>
      </Grid>
      <div style={{paddingTop: '6vh'}}/>
      <FormControl fullWidth={true}>
        <InputLabel className={classes.selectorLabel} id='recentSearchesLabel'>&nbsp;Recent searches</InputLabel>
        <Select className={classes.selector} labelId='recentSearchesLabel'>
          <option>Placeholder recent 1</option>
          <option>Placeholder recent 2</option>
        </Select>
      </FormControl>
      <div style={{paddingTop: '1vh'}}/>
      <FormControl fullWidth={true}>
        <InputLabel className={classes.selectorLabel} id='savedCollectionsLabel'>&nbsp;Saved collections</InputLabel>
        <Select className={classes.selector} labelId='savedCollectionsLabel'>
          <option>Placeholder saved 1</option>
          <option>Placeholder saved 2</option>
        </Select>
      </FormControl>
    </Container>
  );
}
