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
    function HomeController(deviceDetector, homeService, $log, toastrConfig, toastr, constants) {

        // Toastr configuration
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 8000;
        toastrConfig.positionClass = 'toast-bottom-full-width';
        toastrConfig.preventDuplicates = false;
        toastrConfig.progressBar = true;

        var vm = this;
        vm.os = deviceDetector.os;
        vm.browser = deviceDetector.browser;
        vm.device = deviceDetector.device;
        vm.showDownloadButton = false;
        vm.validOS = false;
        vm.modal = {};
        vm.taggedDevices = [];
        vm.untaggDevice = _untaggDevice;
        vm.devicePolicy = 5;

        // Carousel settings
        vm.myInterval = 4000;
        vm.noWrapSlides = false;
        vm.active = 0;

        vm.users = [

            {
                name: 'Pramod Mohandas',
                title: 'PL AppMart',
                image: 'assets/images/user.svg',
                comment: 'Lorem ipsum dolor sit amet, Possimus voluptate cum nobis Lorem ipsum dolor sit amet, Possimus voluptate cum nobis Lorem ipsum dolor sit amet, an aeque discere duo, ea meis voluptua constituam cum. Cu eum iusto oporteat. Decore fastidii id est, ex quo quidam conclusionemque. Petentium constituto in nam. Id nonumy delicatissimi necessitatibus has, mel eripuit eligendi euripidis id, ut amet homero cum.',
                id: 2

            }, {
                name: 'Abhijit Mazumder',
                title: 'Global Head,Strategic Solutions & Sales Enablement',
                image: 'assets/images/user.png',
                comment: 'Ius cu vero contentiones, ei eloquentiam. Suscipit  ipsum legimus consectetuer an duo. Nam te dicta ridens, pri doctus volumus oportere et, te ius illud perpetua postulant. Sea ea invenire maiestatis suscipiantur, no vim eligendi ponderum, vis no nostro alterum.',
                id: 0

            }, {
                name: 'Anurag Sinha',
                title: 'Program Manager Ultimatix-Special Projects',
                image: 'assets/images/user.svg',
                comment: 'Qui ut summo debet feugiat, per et agam definitiones mediocritatem. Nullam sanctus definitiones qui id, id exerci quodsi sed. Ei brute debet mandamus mel. Cu eos sale reque omittantur, in vidisse voluptaria scripserit pri. Ne sea partiendo voluptaria. Et vel timeam apeirian gubergren, vim an diceret dissentiunt consequuntur, solum harum recteque no quo.',
                id: 1

            },
        ];

        activate();

        function activate() {

            _showDownloadButton();
            _detectDevice();
            _getTaggedDevices();
            _getUserDevicePolicy();
        }

        ///////////////////////////////////////////////////////////////
        // Modal utilities

        // Selecting modal div (Plain JS)
        var modal = document.getElementById('modal-container');
        var modalBackground = document.getElementsByClassName("modal-background");
        var body = document.body;

        // Open Modal
        vm.openModal = function(modalIdentity, modalData, index) {
            vm.modal.data = modalData || 0;
            vm.modal.index = index || 0;
            vm.modal.identity = modalIdentity;
            modal.removeAttribute("class");
            modal.classList.add("in");
            body.style.overflow = "hidden";
        };

        // Close Modal
        vm.closeModal = function() {
            modal.classList.add("out");
            body.style.overflow = "auto";
        };


        // When the user clicks anywhere outside of the Modal, Close it
        window.onclick = function(event) {
            if (event.target == modalBackground[0] || event.target == modal) {
                modal.classList.add("out");
                body.style.overflow = "auto";
            }
        };
        // Modal utilities - end

        /////////////////////////////////////////////////////////////////////////
        /// implementation
        /// all internal functions shall be prefixed with '_' for differentiating
        ///

        function _detectDevice() {

            _getSupportedOsVersions().then(function(response) {

                if (vm.supportedOsVersions) {
                    if (vm.os == "ios") {
                        vm.downloadURL = constants.downloadUrliOS;
                        console.log("vm.downloadURL", vm.downloadURL);

                        vm.n = deviceDetector.raw.userAgent.indexOf("OS ") + 3;
                        vm.m = deviceDetector.raw.userAgent.indexOf(" like");
                        vm.deviceVersion = deviceDetector.raw.userAgent.substring(vm.n, vm.m);
                        vm.deviceVersion = vm.deviceVersion.replace("_", ".");

                        if (parseInt(vm.deviceVersion) >= parseInt(vm.supportedOsVersions[1].minVersion) && parseInt(vm.deviceVersion) <= parseInt(vm.supportedOsVersions[1].maxVersion)) {
                            vm.validOS = true;
                        }

                    } else if (vm.os == "android") {
                        vm.downloadURL = constants.downloadUrlAndroid;

                        vm.n = deviceDetector.raw.userAgent.indexOf("Android ") + 8;
                        vm.m = deviceDetector.raw.userAgent.indexOf(";", 25);
                        vm.deviceVersion = deviceDetector.raw.userAgent.substring(vm.n, vm.m);

                        if (parseInt(vm.deviceVersion) >= parseInt(vm.supportedOsVersions[0].minVersion) && parseInt(vm.deviceVersion) <= parseInt(vm.supportedOsVersions[0].maxVersion)) {
                            vm.validOS = true;
                        }
                    }
                } else {
                    if (vm.os == "ios") {
                        vm.downloadURL = constants.downloadUrliOS;

                    } else if (vm.os == "android") {
                        vm.downloadURL = constants.downloadUrlAndroid;
                    }
                    vm.validOS = true;
                }

            });

            return vm;
        }

        function _showDownloadButton() {
            if (vm.device == 'ipad' || vm.device == 'android' || vm.device == 'iphone') {
                vm.showDownloadButton = true;
            } else {
                vm.showDownloadButton = false;
            }
        }


        function _getTaggedDevices() {
            // it always return a promise
            return homeService.getTaggedDevices().then(function(response) {
                    if (response.statusCode == 100) {
                        toastr.error('Error \'' + response.statusMsg + '\' while getting Tagged Devices list.', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    }
                    vm.taggedDevices = response.data || null;
                    return vm.taggedDevices;
                })
                .catch(function(error) {
                    if (error.status != 404 && error.status != 500) {
                        toastr.error('Error ' + error.status + ' while getting Tagged Devices list.', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    }
                });
        }


        function _untaggDevice(device, index) {

            vm.closeModal();
            var data = {};
            data.empId = $rootScope.user.userId;
            data.deviceIdentifier = device.deviceIdentifier;
            data.macAddress = device.macAddress;

            // it always return a promise
            return homeService.untaggDevice(data).then(function(response) {

                    if (response.statusCode == 100) {
                        toastr.error('Error \'' + response.statusMsg + '\' while Untagging the Devices<br>Please try again.', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    } else if (response.data.responseStatus == 'failure') {
                        toastr.error('Something went wrong while Untagging the Devices<br>Please try again.', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                        return vm.taggedDevices;
                    } else {

                        vm.taggedDevices.splice(index, 1);

                        toastr.success('Selected device removed successfully.', 'Success', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    }
                    return vm.taggedDevices;
                })
                .catch(function(error) {
                    if (error.status != 404 && error.status != 500) {
                        toastr.error('Error ' + error.status + ' while Untagging the Devices', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    }
                });
        }

        function _getUserDevicePolicy() {
            // it always return a promise
            return homeService.getUserDevicePolicy().then(function(response) {
                    if (response.statusCode == 100) {
                        toastr.error('Error \'' + response.statusMsg + '\' while getting Devices Policy.', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    }
                    vm.devicePolicy = response.data.total;
                    return vm.devicePolicy;
                })
                .catch(function(error) {
                    if (error.status != 404 && error.status != 500) {
                        toastr.error('Error ' + error.status + ' while getting Devices Policy.', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    }
                });
        }

        function _getSupportedOsVersions() {

            // it always return a promise
            return homeService.getSupportedOsVersions().then(function(response) {
                    console.log("response", response);
                    if (response.statusCode == 100) {
                        toastr.error('Error \'' + response.statusMsg + '\' while getting Supported OS versions.', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    }
                    vm.supportedOsVersions = response.data || null;
                    return vm.supportedOsVersions;
                })
                .catch(function(error) {
                    if (error.status != 404 && error.status != 500) {
                        toastr.error('Error ' + error.status + ' while getting Supported OS versions.', 'Error!', {
                            closeButton: true,
                            timeOut: 10000,
                            progressBar: false,
                            allowHtml: true
                        });
                    }
                    vm.supportedOsVersions = null;
                    return vm.supportedOsVersions;
                });
        }

    }
})();
