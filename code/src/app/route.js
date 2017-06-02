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
                views: {
                    '': {
                        templateUrl: 'app/components/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    },
                    '@home': {
                        templateUrl: 'app/components/home/home-content.html'
                    }
                },
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
            .state('home.faq', {
                url: 'faq',
                views: {
                    '@home': {
                        templateUrl: 'app/components/faq/faq.html',
                        controller: 'faqController',
                        controllerAs: 'faq'
                    }
                }
            })
            .state('error', {
                url: '/error',
                templateUrl: 'app/components/error/error.html',
                controller: 'ErrorController',
                controllerAs: 'error',
                params: { 'errorData': null },
                resolve: {
                    deps: ['$ocLazyLoad', 'cfpLoadingBar', function($ocLazyLoad, cfpLoadingBar) {
                        cfpLoadingBar.start();
                        return $ocLazyLoad.load([
                            'ErrorModule'
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
