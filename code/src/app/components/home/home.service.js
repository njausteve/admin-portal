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
    .factory('homeService', homeService);

  /** @ngInject */
  function homeService($log, $http, $q, api) {

    var service = {
      getTaggedDevices: _getTaggedDevices,
      untaggDevice: _untaggDevice
    };

    return service;

  /////////////////////////////////////////////////////////////////////////
  /// implementation
  /// all internal functions shall be prefixed with '_' for differentiating

    // Get Tagged Devices
    function _getTaggedDevices(user) {

      return $http.post( api.apiHost + 'getTaggedDeviceList', user)
        .then(getTaggedDevicesComplete)
        .catch(getTaggedDevicesFailed);

      function getTaggedDevicesComplete(response) {
          console.log("getTaggedDevicesComplete response", response);
           // $log.info("getTaggedDevices response: ", response);
        return response.data;
      }

      function getTaggedDevicesFailed(error) {
          console.log("error", error);
        console.log('XHR Failed.\n' + angular.toJson(error.data, true));
              return $q.reject(error);
      }
    }

    // Un-tagg Devic
    function _untaggDevice(device) {

      return $http.post( api.apiHost + 'untagDevice', device)
        .then(untaggDeviceComplete)
        .catch(untaggDeviceFailed);

      function untaggDeviceComplete(response) {
           // $log.info("untaggDevice response: ", response);
        return response.data;
      }

      function untaggDeviceFailed(error) {
        console.log('XHR Failed for untaggDevice.\n' + angular.toJson(error.data, true));
              return $q.reject(error);
      }
    }

  }
})();
