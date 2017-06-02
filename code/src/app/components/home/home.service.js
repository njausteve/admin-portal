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
  function homeService($log, $http, $q, constants) {

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

      return $http.post( constants.apiHost + 'getTaggedDeviceList', user)
        .then(getTaggedDevicesComplete)
        .catch(getTaggedDevicesFailed);

      function getTaggedDevicesComplete(response) {
        return response.data;
      }

      function getTaggedDevicesFailed(error) {
        //ignore... handlled in implemetation...
        return $q.reject(error);
      }
    }

    // Un-tag Device
    function _untaggDevice(data) {

      // data.empId = "1038040";

      return $http.post( constants.apiHost + 'untagDevice', data)
        .then(untaggDeviceComplete)
        .catch(untaggDeviceFailed);

      function untaggDeviceComplete(response) {
        return response.data;
      }

      function untaggDeviceFailed(error) {
        //ignore... handlled in implemetation...
        return $q.reject(error);
      }
    }

  }
})();
