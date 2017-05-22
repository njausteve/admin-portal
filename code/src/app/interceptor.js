(function() {
  'use strict';

  angular
  .module('ssp')
  .factory('httpInterceptor', httpInterceptor);

  /** @ngInject */
  function httpInterceptor($q) {
    return {

      request: function (config) {

          config.requestTimestamp = new Date().getTime();
          // console.log(config); // Contains the data about the request before it is sent.

          // Return the config or wrap it in a promise if blank.
          return config || $q.when(config);
      },

      // On request failure
      requestError: function (rejection) {
          // console.log(rejection); // Contains the data about the error on the request.

          // Return the promise rejection.
          return $q.reject(rejection);
      },

      // On response success
      response: function (response) {

          response.config.responseTimestamp = new Date().getTime();

          // console.log(response); // Contains the data from the response.

          // Return the response or promise.
          return response || $q.when(response);
      },

      // On response failture
      responseError: function (rejection) {
          console.log(rejection); // Contains the data about the error.

          // Return the promise rejection.
          return $q.reject(rejection);
      }

    }

  }

})();
