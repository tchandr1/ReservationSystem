/**
 * Created by Thanusha on 12/31/2015.
 */


(function(){
    'use strict';

    angular.module('restaurant')
        .factory("CustomerAssignTableFactory",CustomerAssignTableFactoryFn)


    function CustomerAssignTableFactoryFn(){
        var reservedSeats = [];
        return{
            reservedTable:function(reserved){
                reservedSeats.push(reserved);
                console.log("FactoryReservedSeats:"+reservedSeats);
            },
            getData:function(){
                return reservedSeats;

            },
            getLength:function(){
                return reservedSeats.length;
            }
        }
    }

})();