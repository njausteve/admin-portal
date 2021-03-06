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
        .controller('mainController', mainController);

    /** @ngInject */
    function mainController($log, $http, constants, $state, $rootScope) {
        var vm = this;
        vm.user = {};
        vm.user.userId = "User Id";
        vm.user.userName = "User Name";
        vm.user.emailId = "Email Id";



        vm.isNavCollapsed = true;
        vm.isProfCollapsed = true;

        // toggle navigation and profile collapse
        vm.expandContent = _expandContent;
        vm.clicked = _clicked;

        activate();

        function activate() {

            _getUser();

        }

        /////////////////////////////////////////////////////////////////////////
        /// implementation
        /// all internal functions shall be prefixed with '_' for differentiating

        function _clicked() {
            // Collapsing all navbar when clicked
            vm.isNavCollapsed = true;
            vm.isProfCollapsed = true;

        }

        function _expandContent(param) {
            if (param === "prof") {
                vm.isNavCollapsed = true;
                vm.isProfCollapsed = !vm.isProfCollapsed;
            } else if (param === "nav") {
                vm.isProfCollapsed = true;
                vm.isNavCollapsed = !vm.isNavCollapsed;
            }
        }

        // Get User Service
        function _getUser() {

            return $http.get('ssp/' + constants.apiHost + 'getUser')
                .then(getUserComplete)
                .catch(getUserFailed);

            function getUserComplete(response) {
                if (response.statusCode == 100) {
                    $state.go('error', { 'errorData': '' });
                } else
                    vm.user = response.data.data;
                if (!vm.user.emailId || !vm.user.userName) {
                    vm.user.userName = "User Name";
                    vm.user.emailId = "Email Id";
                } else if (vm.user.userId === null) {
                    $state.go('error', { 'errorData': null });
                }
                $rootScope.user = vm.user;
                return vm.user;
            }

            function getUserFailed(error) {

                if (error.status != 404 && error.status != 500) {
                    $state.go('error', { 'errorData': error });
                }

            }
        }
    }

})();
