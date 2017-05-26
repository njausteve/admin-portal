(function() {
    'use strict';

    angular
        .module('ssp')
        .config(config);

    /** @ngInject */
    function config($logProvider, $ocLazyLoadProvider, cfpLoadingBarProvider, $httpProvider) {

        // Enable log
        $logProvider.debugEnabled(true);

        // pushing interceptor in Angular module
        $httpProvider.interceptors.push('httpInterceptor');

        //ocLazyLoding config
        $ocLazyLoadProvider.config({
            modules: [
                // Home module
                {
                    name: 'HomeModule',
                    files: ['assets/css/app.css', 'assets/css/sass/appStyle.css', 'app/components/home/home.controller.js', 'app/components/faq/faq.controller.js', 'app/components/home/home.service.js', 'app/externalModules/ng-device-detector.min.js', 'app/externalModules/re-tree.min.js', 'app/externalModules/angular-toastr.tpls.min.js', 'assets/css/external/angular-toastr.min.css', 'app/externalModules/angular-file-saver.bundle.min.js']
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

        //ocLazyLoad debuging mode
        //COMMENT this while building Production version

        $ocLazyLoadProvider.config({
            debug: false
        });

        //loading bar config
        cfpLoadingBarProvider.includeSpinner = false;


    }

})();