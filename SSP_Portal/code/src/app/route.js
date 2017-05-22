(function() {
  'use strict';

  angular
  .module('ssp')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'app/components/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about',
      resolve: {
        deps: ['$ocLazyLoad','cfpLoadingBar', function($ocLazyLoad, cfpLoadingBar) {
          cfpLoadingBar.start();
          return $ocLazyLoad.load([
            'AboutModule'
            ]).then(function () {
              cfpLoadingBar.complete();
            });
        }]
      }
    })
    .state('deviceDetails', {
      url: '/device',
      templateUrl: 'app/components/deviceDetails/deviceDetails.html',
      controller: 'DeviceDetailsController',
      controllerAs: 'device',
      resolve: {
        deps: ['$ocLazyLoad','cfpLoadingBar', function($ocLazyLoad, cfpLoadingBar) {
          cfpLoadingBar.start();
          return $ocLazyLoad.load([
            'DeviceDetailsModule'
            ]).then(function () {
              cfpLoadingBar.complete();
            });
        }]
      }
    });

    $urlRouterProvider.otherwise('/about');
  }

})();
