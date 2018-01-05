myApp.controller('houseController', ['loadDataService','$routeParams','$scope', function(loadDataService, $routeParams, $scope){

    var main = this;
    this.house = {};

    $scope.loader = true; 

    loadDataService.getHouse($routeParams.id)
        .then(function successCallback(response) {
        main.house = response.data;
        $scope.loader = false; 
    },
              function errorCallback(response) {
        alert("some error occurred. Check the console.");
        $scope.loader = false; 
        console.log(response);
    });
}])