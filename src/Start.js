/* TODO: The functional components in here would be
 *       pulled out to separate files, in an ideal
 *       world.
 * TODO: There must be a better way to space out the
 *       Container's components than putting
 *       paddingBottom: 1em everywhere.
 */

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import { NativeTypes, HTML5Backend } from 'react-dnd-html5-backend';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center',
  },
  uploadText: {
    textAlign: 'center',
    color: '#3030EE',
    '&:hover': {
      color: '#3090EE',
      cursor: 'pointer',
    }
  },
  inputZone: {
    background: '#F5F5F5',
    border: '1px dashed #595959',
    boxSizing: 'border-box',
    borderRadius: '5px',
    textAlign: 'center',
  },
  tile: {
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
    },
  },
}));

export default function Start() {
  const classes = useStyles();

  const [input, setInput] = useState();

  //For onFileDrop and onFileUpload in the InputZone, below
  async function updateFileInput(file) {
    const url = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => { resolve(e.target.result); };
      reader.readAsDataURL(file);
    });
    setInput(url);
  }

  //TODO: Placeholder. This will route us to another part of the app.
  useEffect(()=>{console.log(input);}, [input]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Container style={{width:'50vw', height:'80vh'}} justify='center' spacing='1em'>
        <Typography className={classes.text} style={{fontSize: '1.5em', fontWeight: 500, paddingBottom: '1em'}}>
          Explore our National Collection
        </Typography>
        <Typography className={classes.text} style={{color: '#717171', paddingBottom: '1em'}}>
          Search with an image to find similar results
        </Typography>
        <InputZone style={{paddingBottom: '1em'}}
          onFileDrop   = { (f) => updateFileInput(f) }
          onURLDrop    = { (u) => setInput(u) }
          onFileUpload = { (e) => updateFileInput(e.target.files[0]) }
        />
        <DecoratedDivider style={{paddingBottom: '1em'}}>
          <Typography className={classes.text}>&nbsp;Or&nbsp;</Typography>
        </DecoratedDivider>
        <Typography className={classes.text} style={{paddingBottom: '1em'}}>
          Click a sample image to try it
        </Typography>

        {/*TODO: Display properties set by trial and error. Rarely, this sizes so that I have more than 2 rows.
                 This could surely be better, but it is plenty enough for a prototype. */}
        <GridList cols={4} style={{justifyContent: 'center'}} spacing={document.documentElement.clientWidth * 0.01}>
        {
          randomImages().map(
            (url) => (
              <GridListTile key={url} style={{height: '11vw', width: '11vw'}}>
                <ImageTile
                  className={classes.tile}
                  url={url}
                  onClick={ () => setInput(url) }
                />
              </GridListTile>
            )
          )
        }
        </GridList>
      </Container>
    </DndProvider>
  )
}

function ImageTile({className, url, onClick}) {
  const [, drag] = useDrag({
    type: NativeTypes.URL,
    item: {
      urls: [url]
    }
  });

  return (
    <img className={className} ref={drag} onClick={onClick} src={url} height='100%' width='100%' style={{objectFit: 'cover'}}/>
  );
}

function InputZone({style, onFileDrop, onURLDrop, onFileUpload}) {
  const classes = useStyles();

  const [, drop] = useDrop({
    accept: [NativeTypes.FILE, NativeTypes.URL],
    drop: (item, monitor) => {
      if(monitor.getItemType() === NativeTypes.FILE) {
        const files = monitor.getItem().files;
        if(files.length !== 1) return;
        const file = files[0];
        if(file.type !== 'image/jpeg' && file.type !== 'image/png') return;
        onFileDrop(file);
      }
      else if(monitor.getItemType() === NativeTypes.URL) {
        const urls = monitor.getItem().urls;
        if(urls.length !== 1) return;
        const url = urls[0]
        const ext = url.substring(url.lastIndexOf('.') + 1);
        if(ext !== "jpg" &&
           ext !== "jpeg" &&
           ext !== "png") return;
        onURLDrop(url);
      }
    },
  });

  //Following https://stackoverflow.com/a/25825731 for the file input trick 
  //Following https://stackoverflow.com/a/56342694 for the text alignment (CardContent style)
  return(
    <div ref={drop} style={style}>
      <Card className={classes.inputZone}>
        <CardContent style={{height: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography className={classes.text}>
            Drag an image here or
            <label className={classes.uploadText}>
              <input style={{display: 'none'}}
                     type='file'
                     accept='image/jpeg,image/png'
                     onChange={onFileUpload}
              />
              &nbsp;browse files on this computer
            </label>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

//Following https://stackoverflow.com/a/61731037
function DecoratedDivider({style, children}) {
  return (
    <div style={{alignItems: 'center', display: 'flex', ...style}}>
      <div style={{border: '1px solid #E9E9E9', width: '50%'}}/>
        {children}
      <div style={{border: '1px solid #E9E9E9', width: '50%'}}/>
    </div>
  );
}

// TODO: Stub pending random image API call
function randomImages() {
  return [
    'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/TNA2/4723.jpg',
    'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/TNA1/13800.jpg',
    'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/TNA1/14105.jpg',
    'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/TNA3/2034.jpg',
    'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/TNA1/13365.jpg',
    'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/TNA1/13549.jpg',
    'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/TNA2/3985.jpg',
    'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/TNA1/14769.jpg',
  ];
}
