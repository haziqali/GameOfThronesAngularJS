myApp.controller('houseController', ['loadDataService','$routeParams','$scope', function(loadDataService, $routeParams, $scope){

    var main = this;
    this.house = {};
    $scope.id = "";
    this.sub = function(character){
        $scope.id = character.substring(character.lastIndexOf("/") + 1);
        console.log($scope.id);
    }
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