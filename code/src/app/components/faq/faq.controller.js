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
    function faqController() {

        var vm = this;

        vm.oneAtATime = true;
        vm.open = false;
    }

})();