const endpoint = 'https://decade.ac.uk/deepdiscovery/api/upload';

export function send(input, resultCount, callback) {
  const formData = new FormData();
  if     (input.file) formData.append('query_file', input.file);
  else if(input.aid)  formData.append('query_aid',  input.aid);
  else                formData.append('query_url',  input.url);
  formData.append('searchengine', 'Style');
  formData.append('resultcount', resultCount);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', endpoint, true);
  xhr.onload = function() {
    let initialResults = JSON.parse(this.responseText);
    initialResults = initialResults.filter((r) => {
      return r.collection != null && getCollectionInfo(r.collection).name != null;
    });
    callback(initialResults);
  };
  xhr.send(formData);
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
