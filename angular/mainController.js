myApp.controller('mainController', ['loadDataService','$scope', function (loadDataService,$scope) {
    var main = this;

    var audio = new Audio('audio/GOT.mp3');
    audio.play();

    this.books = {};
    this.characters = {};
    this.houses = {};
    $scope.loader = true;
    loadDataService.getAllBooks()
        .then(function successCallback(response) {
        main.books = response.data;
        $scope.loader = false;

    },
              function errorCallback(response) {
        alert("some error occurred. Check the console.");
        $scope.loader = false;
    });

    loadDataService.getAllCharacters()
        .then(function successCallback(response) {
        main.characters = response.data;
    },
              function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
    });

    loadDataService.getAllHouses()
        .then(function successCallback(response) {
        main.houses = response.data;
    },
              function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
    });

    $scope.sort = function(){
        main.books.sort();
        main.books.reverse();
    }
}

                                   ]);
