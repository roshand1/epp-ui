let agent = require('superagent');

const get = function (url, callBack) {
  agent('GET', url)
    .then(function onResult (res) {
      if (res.body) {
        callBack('OK', res.body);
      }
      else {
        callBack('OK', JSON.parse(res.text));
      }
    }, function onError (err) {
      callBack(err);
    });
};

const post = function (url, body,callBack) {
  // helper functions: options, head, get, post, put, patch, del 
  agent.put(url, body)
    .then(function (res) {
      callBack('OK', JSON.parse(res.text));
    });
};

const fetch = (url, options = {}, callBack) => {
  if (url === undefined || !url || typeof url !== 'string') {
    return callBack('ERROR', 'InvalidPayload');
  }
  const { method, body = {} } = options;
  if (!method) {
    get(url, callBack);
  }
  if (method === 'GET') {
    get(url, callBack);
  }
  else if (method === 'POST') {
    post(url, body, callBack);
  }
};





export default fetch;