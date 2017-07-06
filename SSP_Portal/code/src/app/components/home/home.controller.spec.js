/**
 * (C) TATA Consultancy Services, 2017
 * Highly Confidential and Inflammable also
 * AppMart SSP Portal
 * by njausteve and Pirate
 */
(function() {
  'use strict';

  describe('HomeController', function(){
    var vm,
        deviceDetector,
        homeService,
        toastrConfig,
        toastr;


    beforeEach(angular.mock.module('ssp'));
    beforeEach(angular.mock.module('toastr'));
    beforeEach(angular.mock.module('ng.deviceDetector'));


    beforeEach(inject(function(_$controller_,  _deviceDetector_, _homeService_, _toastr_, _toastrConfig_ ) {

      //spyOn(_homeService_, 'getUser').and.callThrough();
      spyOn(_homeService_, 'getTaggedDevices').and.callThrough();

      vm = _$controller_('HomeController');
      homeService = _homeService_;
      deviceDetector = _deviceDetector_;
      toastrConfig= _toastrConfig_;
      toastr= _toastr_;


    }));

    it('HomeController should be defined', function() {
       expect(vm).toBeDefined();
    });

    it('HomeController expect getTaggedDevices to be called', function() {
      expect(homeService.getTaggedDevices).toHaveBeenCalled();
    });

    it('HomeController should Detect OS, Browser and Device', function() {
      vm._detectDevice ;
      expect(vm.os).not.toBe(null);
      expect(vm.browser).not.toBe(null);
      //vm.device may or may not be defined
    });

  });
})();
