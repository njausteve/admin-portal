/**
 * (C) TATA Consultancy Services, 2017
 * AppMart SSP Portal
 * by Pirate
 */
(function() {
  'use strict';

  angular
  .module('ssp')
  .controller('AboutController', AboutController);


  /** @ngInject */
  function AboutController(toastr, toastrConfig) {

        // // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 8000;
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = true;

    var vm = this;
    vm.name = "Pirate";
    vm.pop = pop;

  /////////////////
  ///implementation
  function pop() {
    toastr.info('It\'s an Info!', 'Toast...');
    toastr.success('It\'s a Success!', 'Toast...');
    toastr.error('It\'s an Error!', 'Toast...');
    toastr.warning('It\'s a Warning!', 'Toast...');
  }
}

})();
