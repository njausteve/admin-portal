/**
 * (C) TATA Consultancy Services, 2017
 * Highly Confidential and Inflammable also
 * AppMart SSP Portal
 * by njausteve
 */
(function() {
    'use strict';

    angular
        .module('ssp')
        .controller('faqController', faqController);


    /** @ngInject */
    function faqController(constants) {

        var vm = this;

        vm.oneAtATime = true;
        vm.open = false;


        vm.faqList = [

            {
                question: 'How do I download ' + constants.application_name + '?',
                answer: 'On mobile browser, go to url : apps.ultimatix.net and tap on download.'
            }, {
                question: 'What credentials should I use to log-in to  ' + constants.application_name + '?',
                answer: 'Your Ultimatix credentials.'
            }, {
                question: 'What is a tagged device?  ',
                answer: 'Whenever a user logs into  ' + constants.application_name + ' through any mobile device, the device gets tagged to the respective user and can be viewed in the device list.'
            }, {
                question: 'How does a device get tagged?',
                answer: 'Whenever a user logs into  ' + constants.application_name + ' from a mobile device for the first time, the device gets tagged to the respective user and can be viewed in the device list.'
            }, {
                question: 'How many devices can I tag? Or What is the device policy?',
                answer: 'Each user can tag up to five devices.'
            }, {
                question: 'What happens when I try to tag more devices than the maximum allowed limit?',
                answer: 'You have exhausted the limit of registering maximum devices allowed appears when a user has exhausted the maximum allowed limit (i.e, five devices) and tries to log into  ' + constants.application_name + ' from another device. To log in to  ' + constants.application_name + ' through this device, user should un-tag one of his devices before logging in through this.'
            }, {
                question: 'How to un-tag a device?',
                answer: 'There are two ways to un-tag a device: 1.  On the native application, Menu Drawer>> Device Management>> Un-tag the desired devices 2.  On the Self Service Portal, Device Management >> Un-tag the desired devices'
            }
        ];
    }

})();
