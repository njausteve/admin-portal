// (c) TATA Consultancy Services 2017
// AppMart SSP Portal
// by Pirate


(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var toastr;
    var toastrConfig;

    beforeEach(module('ssp'));
    beforeEach(module('toastr'));

    beforeEach(inject(function(_$controller_, _toastr_, _toastrConfig_) {

      spyOn(_toastr_, 'info').and.callThrough();

      vm = _$controller_('AboutController');
      toastr = _toastr_;
      toastrConfig = _toastrConfig_;


    }));

    it('AboutController should be defined', function() {
       expect(vm).toBeDefined();
    });

    it('AboutController expect Toaster to be called', function() {
      vm.pop();
      expect(toastr.info).toHaveBeenCalled();
    });


  });
})();
