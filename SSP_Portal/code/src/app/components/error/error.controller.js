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
  .controller('ErrorController', ErrorController);


  /** @ngInject */
  function ErrorController($stateParams) {

    var vm = this;
    vm.error = $stateParams.errorData || null;

}

})();
