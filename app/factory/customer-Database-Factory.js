/**
 * Created by Thanusha on 12/31/2015.
 */


(function(){
    angular.module('restaurant')
        .factory("CustomerDatabase",CustomerDatabaseFactoryFn)


    function CustomerDatabaseFactoryFn($resource){
        console.log("CustomerDataFactory from Database Entered");
        return $resource('http://localhost:8080/RestaurantReservationBackend/webresources/customers',{},{
            query: {
                method:'GET', isArray:true
            }
        });
    }

})();