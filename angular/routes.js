myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/index-view.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
    })
        .when('/book/:id', {

        templateUrl: 'views/book-view.html',
        controller: 'bookController',
        controllerAs: 'bookCtrl'
    })
        .when('/character/:id', {

        templateUrl: 'views/character-view.html',
        controller: 'charController',
        controllerAs: 'charCtrl'
    })
        .when('/house/:id', {

        templateUrl: 'views/house-view.html',
        controller: 'houseController',
        controllerAs: 'houseCtrl'
    })

        .otherwise({
        //redirectTo:'/'
        template: '<h1>404 page not found</h1>'
    });
}]);
