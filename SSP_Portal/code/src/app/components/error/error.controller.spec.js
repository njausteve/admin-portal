/**
 * (C) TATA Consultancy Services, 2017
 * Highly Confidential and Inflammable also
 * AppMart SSP Portal
 * by Nikhil
 */
(function() {
  'use strict';

  describe('ErrorController', function(){
    var vm;



    beforeEach(module('ssp'));

    beforeEach(inject(function(_$controller_) {



      vm = _$controller_('ErrorController');


    }));



    it('ErrorController should be defined', function() {
       expect(vm).toBeDefined();
    });

    it('ErrorController expect error variable to be defined', function() {
      expect(vm.error).toBeDefined();

    });



  });
})();
