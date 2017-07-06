(function() {
  'use strict';

  angular
    .module('ssp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, constants) {

    $log.info('TATA Consultancy Services, 2017 \nTCS internal \nHighly Confidential and Inflammable also! \n(c) Pirates');
    //setting up application Name
    $rootScope.application_name = constants.application_name;
  }

})();
