/**
 * (C) TATA Consultancy Services, 2017
 * Highly Confidential and Inflammable also
 * AppMart SSP Portal
 * by Stephen, Piyush & the Pirate
 */
(function() {
  'use strict';

  angular
  .module('ssp')
  .controller('AboutController', AboutController);


  /** @ngInject */
  function AboutController(toastr) {

    var vm = this;
    vm.name = "Pirate";
    vm.pop = _pop;

    /////////////////////////////////////////////////////////////////////////
    /// implementation
    /// all internal functions shall be prefixed with '_' for differentiating
    ///

  function _pop() {
    toastr.info('It\'s an Info!', 'Toast...');
    toastr.success('It\'s a Success!', 'Toast...');
    toastr.error('It\'s an Error!', 'Toast...');
    toastr.warning('It\'s a Warning!', 'Toast...');
  }
}

})();
