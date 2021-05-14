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
    callback(JSON.parse(this.responseText));
  };
  xhr.send(formData);
}

