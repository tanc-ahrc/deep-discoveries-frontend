import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DetailSelector from './DetailSelector.js';

export default function DetailSelection({input}) {
  return (
    <Container style={{paddingTop: '10vh', paddingBottom: '10vh'}} height='90vh'>
      <Typography>Click and draw over the image to highlight areas of interest.</Typography>
      <DetailSelector src={input.url} shadingColor='black' shadingOpacity={0.5}/>
    </Container>
  );
}
