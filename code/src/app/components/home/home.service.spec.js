/**
 * (C) TATA Consultancy Services, 2017
 * Highly Confidential and Inflammable also
 * AppMart SSP Portal
 * by Nikhil
 */
(function() {
  'use strict';

  describe('homeService', function(){
    var vm,
        httpBackend;

    beforeEach(module('ssp'));

    beforeEach(inject(function(_homeService_, $httpBackend) {

      vm= _homeService_;
      httpBackend= $httpBackend;

    }));

    afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

    it('homeService should be defined', function() {
       expect(vm).toBeDefined();
    });

    it('homeService expect getTaggedDevices to be defined', function() {
      expect(vm.getTaggedDevices).toBeDefined();

    });
    it('homeService expect untaggDevice to be defined', function() {
      expect(vm.untaggDevice).toBeDefined();

    });
    it('homeService expect getUserDevicePolicy to be defined', function() {
      expect(vm.getUserDevicePolicy).toBeDefined();

    });

    it('homeService expect getSupportedOsVersions to be defined', function() {
      expect(vm.getSupportedOsVersions).toBeDefined();

    });





  });
})();
