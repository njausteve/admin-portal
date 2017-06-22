(function() {
    'use strict';

    angular
        .module('ssp')
        .factory('httpInterceptor', httpInterceptor);

    /** @ngInject */
    function httpInterceptor($q, $injector) {
        return {

            request: function(config) {
                // console.log(config); // Contains the data about the request before it is sent.

                // Return the config or wrap it in a promise if blank.
                return config || $q.when(config);
            },

            // On request failure
            requestError: function(rejection) {
                // console.log(rejection); // Contains the data about the error on the request.

                // Return the promise rejection.
                return $q.reject(rejection);
            },

            // On response success
            response: function(response) {
                // console.log(response); // Contains the data from the response.

                // Return the response or promise.
                return response || $q.when(response);
            },

            // On response failture
            responseError: function(rejection) {

                var rejectedAPI = rejection.config.url.split("/");
                switch (rejection.status) {

                    // turning off for testing puurpose
                    // case 404:
                    case 500:
                        $injector.get("$state").go('error', { 'errorData': rejection });
                        break;

                    default:
                        // May handle with interceptor (but avoid)
                        // It is handled at implementation level
                }

                // Return the promise rejection.
                return $q.reject(rejection);
            }
        };
    }

})();
