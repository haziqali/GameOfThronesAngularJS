myApp.controller('bookController', ['loadDataService','$routeParams','$scope', function(loadDataService, $routeParams, $scope){

    $scope.loader = true; 
    var main = this;
    this.book = {};
    $scope.id = "";
    
    this.sub = function(character){
        $scope.id = character.substring(character.lastIndexOf("/") + 1);
        console.log($scope.id);
    }
    
    loadDataService.getBook($routeParams.id)
        .then(function successCallback(response) {
        main.book = response.data;
        $scope.loader = false;
    },
              function errorCallback(response) {
        alert("some error occurred. Check the console.");
        $scope.loader = false;
        console.log(response);
    });

    
     
}])