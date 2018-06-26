
(function () {
    "use strict";

    /*
    *  @ {moduleName}
    *  Author: {author}, Date: {date}
    * */
    angular.module('app.template').service('templateService', templateService);

    templateService.$inject = ['templateRestangular'];

    function templateService(templateRestangular) {
        var service = {};

        /**
         * 基础路径
        */
        service.baseUrl = function baseUrl() {
            return templateRestangular;
        };

        /**
		 * getList
		 */
        service.getList = function getList() {
            //return templateRestangular.one('api/xxx/getList');
        };

        return service;
    }
})();