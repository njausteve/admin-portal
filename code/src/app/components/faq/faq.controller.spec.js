/**
 * (C) TATA Consultancy Services, 2017
 * Highly Confidential and Inflammable also
 * AppMart SSP Portal
 * by Nikhil
 */
(function() {
  'use strict';

  describe('faqController', function(){
    var vm;

    beforeEach(module('ssp'));

    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('faqController');

    }));

    it('faqController should be defined', function() {
       expect(vm).toBeDefined();
    });

    it('faqController expect faqList to be defined', function() {
      expect(vm.faqList).toBeDefined();
      expect(vm.faqList).not.toBe(null);
    });



  });
})();
