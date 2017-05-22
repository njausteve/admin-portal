/**
* (C) TATA Consultancy Services, 2017
* Highly Confidential and Inflammable also
* AppMart SSP Portal
* by njausteve and Pirate
*/
(function() {
  'use strict';

  angular
  .module('ssp')
  .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(deviceDetector, homeService, $log) {
    var vm = this;
    vm.os = '';
    vm.browser = '';
    vm.device = '';
    vm.showDownloadButton = false;
    vm.user = {};
    vm.modal = {};
    vm.taggedDevices = [
    {
      "deviceName": "SAMSUNG",
      "deviceType": "Android",
      "deviceIdentifier": "861895037955581",
      "modelNo": "GALAXY-GRAND"
    },
    {
      "deviceName": "Samsung",
      "deviceType": "Android",
      "deviceIdentifier": "7890654321345",
      "modelNo": "Galaxy"
    },
    {
      "deviceName": "Lenovo K6",
      "deviceType": "Android",
      "deviceIdentifier": "861895037955582",
      "modelNo": "AS3456"
    }
    ];

 // Carousel settings
        vm.myInterval = 4000;
        vm.noWrapSlides = false;
        vm.active = 0;
        vm.users = [

            {
                name: 'Pramod Mohandas',
                title: 'PL AppMart',
                image: '/assets/images/user.svg',
                comment: 'Lorem ipsum dolor sit amet, Possimus voluptate cum nobis Lorem ipsum dolor sit amet, Possimus voluptate cum nobis Lorem ipsum dolor sit amet, an aeque discere duo, ea meis voluptua constituam cum. Cu eum iusto oporteat. Decore fastidii id est, ex quo quidam conclusionemque. Petentium constituto in nam. Id nonumy delicatissimi necessitatibus has, mel eripuit eligendi euripidis id, ut amet homero cum.',
                id: 2

            },
            {
                name: 'Abhijit Mazumder',
                title: 'Global Head,Strategic Solutions & Sales Enablement',
                image: '/assets/images/user.svg',
                comment: 'Ius cu vero contentiones, ei eloquentiam. Suscipit  ipsum legimus consectetuer an duo. Nam te dicta ridens, pri doctus volumus oportere et, te ius illud perpetua postulant. Sea ea invenire maiestatis suscipiantur, no vim eligendi ponderum, vis no nostro alterum.',
                id: 0

            }, {
                name: 'Anurag Sinha',
                title: 'Program Manager Ultimatix-Special Projects',
                image: '/assets/images/user.svg',
                comment: 'Qui ut summo debet feugiat, per et agam definitiones mediocritatem. Nullam sanctus definitiones qui id, id exerci quodsi sed. Ei brute debet mandamus mel. Cu eos sale reque omittantur, in vidisse voluptaria scripserit pri. Ne sea partiendo voluptaria. Et vel timeam apeirian gubergren, vim an diceret dissentiunt consequuntur, solum harum recteque no quo.',
                id: 1

            },
        ];

//temp User value
var user = {
  userID:"1000287"
};

activate();

function activate(){

  _getTaggedDevices(user);
  _detectDevice();
  _showDownloadButton();

}

///////////////////////////////////////////////////////////////
// Modal utilities

// Selecting modal div (Plain JS)
var modal = document.getElementById('modal-container');
var modalBackground = document.getElementsByClassName("modal-background");
var body = document.body;

// Open Modal
vm.openModal = function(modalIdentity, modalData){
  vm.modal.data = modalData || 0;
  vm.modal.identity = modalIdentity;
  modal.removeAttribute("class");
  modal.classList.add("in");
  body.style.overflow = "hidden";
}

// Close Modal
vm.closeModal = function(){
  modal.classList.add("out");
  body.style.overflow = "auto";
}


// When the user clicks anywhere outside of the Modal, Close it
window.onclick = function(event) {
  if (event.target == modalBackground[0] || event.target == modal) {
    modal.classList.add("out");
    body.style.overflow = "auto";
  }
}
// Modal utilities - end

/////////////////////////////////////////////////////////////////////////
/// implementation
/// all internal functions shall be prefixed with '_' for differentiating
///

function _detectDevice() {
  vm.os       = deviceDetector.os;
  vm.browser  = deviceDetector.browser;
  vm.device   = deviceDetector.device;
  return vm;
}

function _showDownloadButton() {
  if (vm.device == 'ipad' || vm.device == 'android' || vm.device == 'iphone'){
    vm.showDownloadButton = true;
  }else{
    vm.showDownloadButton = false;
  }
}

function _getUser() {
  return homeService.getUser(user).then(function(response){
    vm.user = response.data;
    return vm.user;
  });
}

function _getTaggedDevices(user) {
// it always return a promise
return homeService.getTaggedDevices(user).then(function(response){
  console.log("response", response);
  vm.taggedDevices = response.data;
  return vm.taggedDevices;
})
.catch(getTaggedDevicesFailed);
}

function getTaggedDevicesFailed(error) {
  console.log("error", error);
  $log.error('XHR Failed for getTaggedDevices.\n' + angular.toJson(error.data, true));
}

function _untaggDevice(device) {
// it always return a promise
return homeService.untaggDevice(device).then(function(response){
  vm.taggedDevices = response.data;
  return vm.taggedDevices;
});
}

}
})();
