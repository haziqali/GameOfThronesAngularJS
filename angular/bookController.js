myApp.controller('bookController', ['loadDataService','$routeParams','$scope', function(loadDataService, $routeParams, $scope){

    var main = this;
    this.book = {}

    $scope.loader = true; 

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