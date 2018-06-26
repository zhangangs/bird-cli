(function () {
    'use strict';

    /*
    *  @ {moduleName}
    *  Author: {author}, Date: {date}
    * */
    angular.module('app.template')
        .filter('testFilter', testFilter)
        ;

    /**
     * testFilter
     */
    function testFilter() {
        return function (val) {
            //操作代码
            console.log(val);
        }
    }



})();
