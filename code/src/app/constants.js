(function() {
  'use strict';

  angular
  .module('ssp')
  .constant( 'constants', {

    // API endpoint
    // apiHost: 'rest/'
    apiHost: 'http://10.18.81.41:8082/Appmart/rest/',

    // APK IPA download URLS
    downloadUrlAndroid : 'http://10.18.81.41:8082/Appmart/rest/downloadAPK?appId=1000',
    downloadUrliOS : 'itms-services://?action=download-manifest&url=https%3A%2F%2Fm.appmartdev.ultimatix.net%2Fappmart%2Frest%2FdownloadPlist%3FappId%3D1001'


  })
})();
