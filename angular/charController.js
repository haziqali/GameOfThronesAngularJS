myApp.controller('charController', ['loadDataService','$routeParams','$scope', function(loadDataService, $routeParams,$scope){

    var main = this;
    this.character = {}

    $scope.loader = true; 

    loadDataService.getCharacter($routeParams.id)
        .then(function successCallback(response) {
        main.character = response.data;
        $scope.loader = false; 
    },
              function errorCallback(response) {
        alert("some error occurred. Check the console.");
        $scope.loader = false;
        console.log(response);
    });
}])