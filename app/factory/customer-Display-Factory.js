/**
 * Created by Thanusha on 12/31/2015.
 */
(function(){
    angular.module('restaurant')
        .factory("CustomersDisplayFactory",CustomersDisplayFactoryFn)


    function CustomersDisplayFactoryFn() {
        var custData ;
        var custDataArray = [];
        return {
            updatedData: function (newData) {
                console.log("CustomersDisplayFactoryFn Entered");
                custData = newData;
                custDataArray.push(custData);
                console.log("Factory forms:"+custDataArray);
            },

            getData: function () {
                console.log("CustomersDisplayFactoryFn Entered");
                return custDataArray;
            }
        }
    }

})();