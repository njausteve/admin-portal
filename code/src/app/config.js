(function() {
    'use strict';

    angular
        .module('ssp')
        .config(config);

    /** @ngInject */
    function config($logProvider, $ocLazyLoadProvider, cfpLoadingBarProvider, $httpProvider, $compileProvider) {

        // Enable log
        $logProvider.debugEnabled(true);

        // Pushing Interceptor in Angular module
        $httpProvider.interceptors.push('httpInterceptor');

        // ocLazyLoding config
        $ocLazyLoadProvider.config({
            modules: [
                // Home module
                {
                    name: 'HomeModule',
                    files: ['assets/css/app.css', 'assets/css/ie.css', 'assets/css/sass/appStyle.css', 'app/components/home/home.controller.js', 'app/components/faq/faq.controller.js', 'app/components/home/home.service.js', 'app/externalModules/ng-device-detector.min.js', 'app/externalModules/re-tree.min.js', 'app/externalModules/angular-toastr.tpls.min.js', 'app/externalModules/angular-touch.min.js', 'assets/css/external/angular-toastr.min.css']
                },
                // About module
                {
                    name: 'AboutModule',
                    files: ['app/components/about/about.controller.js']
                },
                // Error module
                {
                    name: 'ErrorModule',
                    files: ['app/components/error/error.controller.js']
                }
            ]
        });

        // ocLazyLoad debuging mode true/false
        // set false or COMMENT this while building Production version
        $ocLazyLoadProvider.config({
            debug: false
        });

        // Loading bar config
        cfpLoadingBarProvider.includeSpinner = true;

        // white-listing URL protocols Specifically itms-services
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|itms-services):/);
    }

})();
