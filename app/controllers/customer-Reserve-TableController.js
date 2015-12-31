/**
 * Created by Thanusha on 9/25/2015.
 */
(function(){
    angular.module('restaurant')
        .controller('CustomerReserveTableController',CustomerReserveTableControllerFn)


    CustomerReserveTableControllerFn.$inject = ['$routeParams'];
    function CustomerReserveTableControllerFn($routeParams){
        var crVm = this;
        console.log("Entered CustomerReserveTableController");

    }



})();


