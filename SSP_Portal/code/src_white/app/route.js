(function() {
    'use strict';

    angular
        .module('ssp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider

            .state('main', {
                url: '',
                templateUrl: 'app/components/main/main.html',
                controller: 'mainController',
                controllerAs: 'main',
                resolve: {
                    deps: ['$ocLazyLoad', 'cfpLoadingBar', function($ocLazyLoad, cfpLoadingBar) {
                        cfpLoadingBar.start();
                        return $ocLazyLoad.load([
                            'MainModule'
                        ]).then(function() {
                            cfpLoadingBar.complete();
                        });
                    }]
                }
            })
            .state('main.home', {
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
            .state('main.home.faq', {
                url: 'faq',
                templateUrl: 'app/components/faq/faq.html',
                controller: 'faqController',
                controllerAs: 'faq',
                resolve: {
                    deps: ['$ocLazyLoad', 'cfpLoadingBar', function($ocLazyLoad, cfpLoadingBar) {
                        cfpLoadingBar.start();
                        return $ocLazyLoad.load([
                            'FAQModule'
                        ]).then(function() {
                            cfpLoadingBar.complete();
                        });
                    }]
                }
            })
            .state('main.error', {
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
