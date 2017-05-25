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
  function mainController($log, $http, api, $state) {
    var vm = this;
    vm.user = {};



    vm.isNavCollapsed = true;
    vm.isProfCollapsed = true;

// toggle navigation and profile collapse
vm.expandContent = _expandContent;
vm.clicked = _clicked;

activate();

function activate(){

  vm.user = _getUser();
  if(vm.user){
    vm.username = "User Name";
    vm.UserId = "EMP ID";
  }

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

  return $http.get(api.apiHost + 'getUser')
  .then(getUserComplete)
  .catch(getUserFailed);

  function getUserComplete(response) {
    return response.data;
  }

  function getUserFailed(error) {

// if(error.status != 404 && error.status != 500){
//   $state.go('error', {'errorData': error})
// }

}
}
}

})();
