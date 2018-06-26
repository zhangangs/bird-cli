
(function () {
    "use strict";

    /*
    *  @ {moduleName}
    *  Author: {author}, Date: {date}
    * */
    angular.module('app.template').factory('templateUtils', templateUtils);

    templateUtils.$inject = [];

    function templateUtils() {

        /**
         * 返回上一页
         */
        function pageBack() {
            history.back();
        }

        return {
            pageBack: pageBack
        };
    }
})();