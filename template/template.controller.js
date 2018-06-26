(function () {
    'use strict';

    /*
    *  @ {moduleName}
    *  Author: {author}, Date: {date}
    * */
    angular.module('app.template').controller('templateCtrl', templateCtrl);

    templateCtrl.$inject = ['$scope', 'templateService', 'templateUtils', 'CodeRepositoryMarketService'];

    function templateCtrl($scope, templateService, templateUtils, CodeRepositoryMarketService) {
        var vm = this;

        //数据集合
        vm.data = {

        };

        //方法集合
        vm.method = {
            test: test
        };

        /**
         * test方法
         */
        function test() {

        }

        //全屏显示
        CodeRepositoryMarketService.setFullScreen();
        //关闭页面取消全屏
        $scope.$on('$destroy', function () {
            CodeRepositoryMarketService.setNormalScreen();
        });
    }
})();
