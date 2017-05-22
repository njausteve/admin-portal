// (c) TATA Consultancy Services 2017
// AppMart SSP Portal
// by Pirate


(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('ssp'));
    beforeEach(module('toastr'));

    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('DeviceDetailsController');

    }));

    it('DeviceDetailsController should be defined', function() {
       expect(vm).toBeDefined();
    });

    it('DeviceDetailsController: dummy imei present', function() {
       expect(vm.imei).toBeDefined();
    });


  });
})();
