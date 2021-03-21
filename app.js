(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope){
    $scope.food="";
    console.log("Hi");
    $scope.message="";
    $scope.chec=function(){
      if($scope.food.trim().length==0){
        $scope.message="Please enter text first";
        return;
      }
      var res=$scope.food.split(",");
      console.log(res);
      if (res.length>3){
        $scope.message="Too much!";
      }else{
        $scope.message="Enjoy";
      }
    }
  }
})();
