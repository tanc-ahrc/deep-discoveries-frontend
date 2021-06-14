import SearchDatum from './SearchDatum.js';

const endpoint = 'https://decade.ac.uk/deepdiscovery/api/upload';

export function send(input, resultCount, details, callback, engine = 'Style', synchronous = false) {
  const formData = new FormData();
  if(input) {
    if     (input.file) formData.append('query_file', input.file);
    else if(input.aid)  formData.append('query_aid',  input.aid);
    else                formData.append('query_url',  input.url);
  }
  formData.append('searchengine', engine);
  formData.append('resultcount', resultCount);
  if(details) formData.append('weights', getWeights(details));
  const params = new URLSearchParams(window.location.search);
  formData.append('weightfactor', params.has('w') ? params.get('w') : 10);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', endpoint, !synchronous);
  xhr.onload = function() {
    let initialResults = JSON.parse(this.responseText);
    initialResults = initialResults.filter((r) => {
      return r.collection != null && getCollectionInfo(r.collection).name != null;
    });
    callback(initialResults);
  };
  xhr.send(formData);
}

export function randomImages(count) {
  let result;
  const params = new URLSearchParams(window.location.search);
  const forcedImages = [];
  if(params.has('f')) {
    for(const f of params.get('f').split(';')) {
      let [aid, collection] = f.split(',');
      let url;
      if(isNaN(aid)) { //aid is not a number: assume it is a URL
        url = aid;
        aid = 0;
      }
      else { //aid is a number: assume it is actually an aid and construct the URL
        url = 'https://s3.eu-west-2.amazonaws.com/deepdiscovery.thumbnails/' + collection + '/' + aid + '.jpg';
      }
      const r = new SearchDatum(aid, url);
      r.collection = collection; //This only works if we are given a collection that getCollectionInfo will accept. TODO: Add a 'none' collection option.
      forcedImages.push(r);
    }
  }
  send(null, count - forcedImages.length, null, (response) => {
    result = response;
  }, 'Random', true);
  return forcedImages.concat(result);
}

export function getCollectionInfo(collection) {
  if(collection == null) return null; /* matches on undefined or null */

  let c = { id: collection };

  if     (collection === "RGBE")   c.name = "Royal Botanic Garden Edinburgh";
  else if(collection === "TNA1" ||
          collection === "TNA2" ||
          collection === "TNA3")   c.name = "The National Archives";
  else if(collection === "VA1" ||
          collection === "VA2")    c.name = "Victoria & Albert Museum";
  else                             c.name = null;

  return c;
}

function computeCircle(circle, map) {
  const scale = circle.fillPatternScaleX();
  if(scale !== circle.fillPatternScaleY()) {
    console.error('Inconsistent scale');
    //This is a Bad Thing as it means that the radius warps differently
    //in each dimension, which'll make computing the selected pixels more
    //tricky. We maintain aspect ratio when we scale images, so
    //it should not happen. (And in an ideal world, we'd generate a png of
    //the selections, so we would not need to do any of this calculation
    //at all.)
  }
  const center_x = Math.max(Math.min(circle.x() / scale, map.length - 1), 0)
  const center_y = Math.max(Math.min(circle.y() / scale, map[0].length - 1), 0)
  const radius = circle.radius() / scale;

  //following https://stackoverflow.com/a/14487680
  const rect_top =    Math.max(Math.round(center_y - radius), 0);
  const rect_bottom = Math.min(Math.round(center_y + radius), map[0].length - 1);
  const rect_left =   Math.max(Math.round(center_x - radius), 0);
  const rect_right =  Math.min(Math.round(center_x + radius), map.length - 1);
  const sq_radius =   Math.round(radius * radius);
  let marked = false;
  for(let x = rect_left; x <= rect_right; x++) {
    for(let y = rect_top; y <= rect_bottom; y++) {
      let sq_x = (x - center_x); sq_x = sq_x * sq_x;
      let sq_y = (y - center_y); sq_y = sq_y * sq_y;
      if(sq_x + sq_y < sq_radius) {
        marked = true;
        map[x][y] = 1;
      }
    }
  }

  //If we did not mark anything at all, at least
  //mark the centre of the circle. This can happen
  //if a small image is drawn upon while very enlarged.
  if(!marked) map[Math.round(center_x)][Math.round(center_y)] = 1;
}

function getWeights(detailList) {
  const weights = [];
  for(const detail of detailList) {
    const image = new Image();
    image.src = detail.url;
    let weight_encoding = '' + detail.aid + '*' + image.naturalWidth + '*' + image.naturalHeight + '*';
    const map = new Array(image.naturalWidth);
    for(let i = 0; i < map.length; i++) {
      map[i] = new Array(image.naturalHeight);
    }
    if(detail.selections.stack[detail.selections.current].length === 0) {
      for(let i = 0; i < map.length; i++) {
        map[i].fill(1);
      }
    }
    else {
      for(let i = 0; i < map.length; i++) {
        map[i].fill(0);
      }
      for(const circleArray of detail.selections.stack[detail.selections.current]) {
        for(const circle of circleArray) {
          computeCircle(circle, map);
        }
      }
    }
    const columns = [];
    for(let y = 0; y < image.naturalHeight; y++) {
      let column = '';
      for(let x = 0; x < image.naturalWidth; x++) {
        column += map[x][y];
      }
      columns.push(column);
    }
    //uncomment next line to dump encodings to console
    //helpful when testing that the encodings are working with testimage.py
    //console.log(weight_encoding + columns.join(''));
    weights.push(weight_encoding + columns.join(''));
  }
  return weights.join('');
}
