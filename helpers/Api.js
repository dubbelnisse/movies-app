'use strict';

var Api = {
  core: function (method, url) {
    return fetch
      (url, {
        method: method
      })
      .then( (response) => response.json() );
  },

  get: function (url) {
    return Api.core('get', url);
  },

  post: function (url) {
    return Api.core('post', url);
  }
};

module.exports = Api;
