/**
 * (C) TATA Consultancy Services, 2017
 * AppMart SSP Portal
 * by Pirate
 */
(function() {
  'use strict';

  angular
    .module('ssp')
    .controller('DeviceDetailsController', Controller);

  /** @ngInject */
  function Controller() {
    var vm = this;

    vm.imei = 123456789;
  }
})();
