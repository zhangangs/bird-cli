(function () {
    'use strict';

    /*
    *  @ {moduleName}
    *  Author: {author}, Date: {date}
    * */
    angular.module('app.template')
        .directive('testDirective', testDirective);

    /**
     * testDirective 
     */
    function testDirective() {
        return {
            restrict: "EA",
            scope: {},
            template: ''
        };
    }

})();
