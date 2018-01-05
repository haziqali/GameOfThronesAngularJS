myApp.service('loadDataService',['$http', function($http){

    var baseUrl = "https://anapioficeandfire.com/api";

    this.getAllBooks = function(){
        return $http({
            method: 'GET',
            url: baseUrl + "/books"

        });
    }

    this.getBook = function(bookId){
        return $http({

            method: 'GET',
            url: baseUrl + "/books/" + bookId

        });
    }
    this.getAllCharacters = function(){
        return $http({

            method: 'GET',
            url: baseUrl + "/characters"

        });
    }

    this.getCharacter = function(characterId){
        return $http({

            method: 'GET',
            url: baseUrl + "/characters/" + characterId

        });
    }

    this.getAllHouses = function(){
        return $http({

            method: 'GET',
            url: baseUrl + "/houses"

        });
    }

    this.getHouse = function(houseId){
        return $http({

            method: 'GET',
            url: baseUrl + "/houses/" + houseId

        });
    }
}]);