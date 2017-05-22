(function() {
    'use strict';

    angular
        .module('ssp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home',
                resolve: {
                    deps: ['$ocLazyLoad', 'cfpLoadingBar', function($ocLazyLoad, cfpLoadingBar) {
                        cfpLoadingBar.start();
                        return $ocLazyLoad.load([
                            'HomeModule'
                        ]).then(function() {
                            cfpLoadingBar.complete();
                        });
                    }]
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/components/about/about.html',
                controller: 'AboutController',
                controllerAs: 'about',
                resolve: {
                    deps: ['$ocLazyLoad', 'cfpLoadingBar', function($ocLazyLoad, cfpLoadingBar) {
                        cfpLoadingBar.start();
                        return $ocLazyLoad.load([
                            'AboutModule'
                        ]).then(function() {
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
                    deps: ['$ocLazyLoad', 'cfpLoadingBar', function($ocLazyLoad, cfpLoadingBar) {
                        cfpLoadingBar.start();
                        return $ocLazyLoad.load([
                            'DeviceDetailsModule'
                        ]).then(function() {
                            cfpLoadingBar.complete();
                        });
                    }]
                }
            });

        $urlRouterProvider.otherwise('/');

        // // use the HTML5 History API
        // $locationProvider.html5Mode(true);
    }

})();
