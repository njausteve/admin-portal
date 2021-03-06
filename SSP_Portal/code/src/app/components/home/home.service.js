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
            untaggDevice: _untaggDevice,
            getUserDevicePolicy: _getUserDevicePolicy,
            getSupportedOsVersions: _getSupportedOsVersions
        };

        return service;

        /////////////////////////////////////////////////////////////////////////
        /// implementation
        /// all internal functions shall be prefixed with '_' for differentiating

        // Get Tagged Devices
        function _getTaggedDevices() {

            return $http.get('appmart/' + constants.apiHost + 'getTaggedDeviceList')
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

            return $http.post('appmart/' + constants.apiHost + 'untagDevice', data)
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
        // Get Devices Policy
        function _getUserDevicePolicy() {

            return $http.get(constants.apiHost + 'getUserDevicePolicy')
                .then(getUserDevicePolicyComplete)
                .catch(getUserDevicePolicyFailed);

            function getUserDevicePolicyComplete(response) {
                return response.data;
            }

            function getUserDevicePolicyFailed(error) {
                //ignore... handlled in implemetation...
                return $q.reject(error);
            }
        }
        // Get Supported OS versions Policy
        function _getSupportedOsVersions() {

            return $http.get(constants.apiHost + 'getSupportedOsVersion')
                .then(_getSupportedOsVersionsComplete)
                .catch(_getSupportedOsVersionsFailed);

            function _getSupportedOsVersionsComplete(response) {
                return response.data;
            }

            function _getSupportedOsVersionsFailed(error) {
                //ignore... handlled in implemetation...
                return $q.reject(error);
            }
        }

    }
})();
