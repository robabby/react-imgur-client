var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'eca7200f9a7110a';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'AUTHORIZATION': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json();
    })
  }
};
