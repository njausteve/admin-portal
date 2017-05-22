(function() {
    'use strict';

    angular
        .module('ssp')
        .config(config);

    /** @ngInject */
    function config($logProvider, $ocLazyLoadProvider, cfpLoadingBarProvider, $httpProvider) {
        // Enable log
        $logProvider.debugEnabled(true);


        //ocLazyLoding config
        $ocLazyLoadProvider.config({
            modules: [
                // Home module
                {
                    name: 'HomeModule',
                    files: ['assets/css/app.css', 'assets/css/sass/appStyle.css', 'app/components/home/home.controller.js', 'app/components/home/home.service.js', 'app/externalModules/ng-device-detector.min.js', 'app/externalModules/re-tree.min.js', 'app/externalModules/angular-touch.min.js']
                },

                // About module
                {
                    name: 'AboutModule',
                    files: ['app/components/about/about.controller.js', 'app/externalModules/angular-toastr.tpls.min.js', 'assets/css/external/angular-toastr.min.css']
                },

                // Device Details Module
                {
                    name: 'DeviceDetailsModule',
                    files: ['app/components/deviceDetails/deviceDetails.controller.js']
                }
            ]
        });

        //ocLazyLoad debuging mode
        //COMMENT this while building Production version

        $ocLazyLoadProvider.config({
            debug: true
        });

        //loading bar config
        cfpLoadingBarProvider.includeSpinner = false;

        // pushing interceptor in Angular module
        $httpProvider.interceptors.push('httpInterceptor');


    }

})();