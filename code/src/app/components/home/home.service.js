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
  function homeService($log, $http, $q, api, FileSaver, Blob) {

    var service = {
      getTaggedDevices: _getTaggedDevices,
      untaggDevice: _untaggDevice,
      downloadAppmart : _downloadAppmart
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
        return response.data;
      }

      function getTaggedDevicesFailed(error) {
        //ignore... handlled in implemetation...
        return $q.reject(error);
      }
    }

    // Un-tagg Devic
    function _untaggDevice(data) {

      // data.empId = "1038040";

      return $http.post( api.apiHost + 'untagDevice', data)
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


    // Downlaod AppMart
    function _downloadAppmart(deviceType) {

      if(deviceType == 'android'){
        return $http.post( api.apiHost + 'downloadAPK', {"appId" : 2000})
        .then(_downloadAppmartAPKComplete)
        .catch(_downloadAppmartFailed);
      }else{
        return $http.post( api.apiHost + 'downloadPlist', {"appId" : 2000})
          .then(_downloadAppmartIOSComplete)
          .catch(_downloadAppmartFailed);
      }


      function _downloadAppmartAPKComplete(response) {
        var data = new Blob([response], { type: 'application/octet-stream' });
        FileSaver.saveAs(data, 'appmart.apk');
        return response;
      }

      function _downloadAppmartIOSComplete(response) {
        var data = new Blob([response], { type: 'application/octet-stream' });
        FileSaver.saveAs(data, 'plist.xml');
        return response;
      }

      function _downloadAppmartFailed(error) {
        //ignore... handlled in implemetation...
        return $q.reject(error);
      }
    }


  }
})();
