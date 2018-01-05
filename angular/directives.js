myApp.directive('bookInfo', function() {
    return {
        restrict : 'E',
        templateUrl : "views/AllBooks-view.html",
        scope: {
            books: '='
        }
    }
});

myApp.directive('characterInfo', function() {
    return {
        restrict : 'E',
        templateUrl : "views/AllCharacters-view.html",
        scope: {
            characters: '='
        }
    }
});

myApp.directive('houseInfo', function() {
    return {
        restrict : 'E',
        templateUrl : "views/AllHouses-view.html",
        scope: {
            houses: '='
        }
    }
});




