var appl = angular.module('trololo',[]);

appl.controller('myCtrl', function($scope){
  $scope.nameOfMag = 'Voque';
});

appl.controller('putData',function($scope){
  $scope.sayHello= function(email){
  console.log("access");
  };
});
