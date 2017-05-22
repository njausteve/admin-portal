(function() {
  'use strict';

  angular
  .module('ssp')
  .config(config);

  /** @ngInject */
  function config($logProvider, $ocLazyLoadProvider, cfpLoadingBarProvider) {
    // Enable log
    $logProvider.debugEnabled(true);


    //ocLazyLoding config
    $ocLazyLoadProvider.config({
      modules: [
      // [0] test module
      {
        name: 'AboutModule',
        files: ['app/components/about/about.controller.js', 'app/externalModules/angular-toastr.tpls.min.js', 'assets/css/external/angular-toastr.min.css']
      },
      {
        name: 'DeviceDetailsModule',
        files: ['app/components/deviceDetails/deviceDetails.controller.js']
      }
      ]
    });

    $ocLazyLoadProvider.config({
      debug: true
    });

    //loading bar config
    cfpLoadingBarProvider.includeSpinner = false;

  }

})();
