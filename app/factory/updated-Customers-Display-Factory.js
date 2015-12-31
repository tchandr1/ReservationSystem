/**
 * Created by Thanusha on 12/31/2015.
 */
(function(){
    angular.module('restaurant')
        .factory("UpdatedCustomersDisplayFactory",UpdatedCustomersDisplayFactoryFn)


    function UpdatedCustomersDisplayFactoryFn() {
        var updatecustData;
        var updatecustDataArray = [];

        return {
            updatedData: function (newData) {
                console.log("UpdatedCustomersDisplayFactoryFn Entered");
                updatecustData = newData;

            },

            getData: function () {
                console.log("GET UpdatedCustomersDisplayFactoryFn Entered");
                return updatecustData;
            }
        }
    }

})();