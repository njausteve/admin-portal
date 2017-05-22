(function() {
  'use strict';

  angular
    .module('ssp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.info('TATA Consultancy Services, 2017 \nTCS internal \nHighly Confidential and Inflammable also! \n(c) Pirates');
  }

})();
