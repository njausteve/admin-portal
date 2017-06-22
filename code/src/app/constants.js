(function() {
    'use strict';

    angular
        .module('ssp')
        .constant('constants', {


            //used for name of the app
            application_name: 'Apps',

            // API endpoint
            // while on server
            apiHost: 'rest/',

            // while on local
            // apiHost: 'http://10.18.81.41:8082/Appmart/rest/',

            // APK IPA download URLS

            // while on server
            downloadUrlAndroid: 'appmart/rest/downloadAPK?appId=1000',
            downloadUrliOS: 'itms-services://?action=download-manifest&url=https%3A%2F%2Fm.appmartdev.ultimatix.net%2Fappmart%2Frest%2FdownloadPlist%3FappId%3D2000'

            // while on local local
            // downloadUrlAndroid : 'http://10.18.81.41:8082/Appmart/rest/downloadAPK?appId=1000',
            // downloadUrliOS : 'itms-services://?action=download-manifest&url=rest%2FdownloadPlist%3FappId%3D1001'



        });
})();
