myApp.controller('charController', ['loadDataService', '$routeParams', '$scope', function (loadDataService, $routeParams, $scope) {

    var main = this;
    this.character = {};
    $scope.id = "";

    $scope.loader = true;
    this.sub = function(character){
        $scope.id = character.substring(character.lastIndexOf("/") + 1);
        console.log($scope.id);
    }

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
