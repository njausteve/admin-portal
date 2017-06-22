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
        .filter('dateFilter', function() {

            return function(data) {
                data = data + '';
                data = data.substring(0, 10);
                var formattedDate = new Date(data).toDateString();

                return formattedDate;
            };
        });

})();
