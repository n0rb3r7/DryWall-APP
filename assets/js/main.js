var app = angular.module('drywallapp', [
  'ngRoute'
]);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "PageCtrl"
        })
        // Pages
        .when("/info", {
            templateUrl: "partials/info.html",
            controller: "PageCtrl"
        })
        .when("/desmontable", {
            templateUrl: "partials/desmontable.html",
            controller: "PageCtrl"
        })
        .when("/juntatomada", {
            templateUrl: "partials/juntatomada.html",
            controller: "PageCtrl"
        })
        .when("/paredinterior", {
            templateUrl: "partials/paredinterior.html",
            controller: "PageCtrl"
        })
        .when("/paredintext", {
            templateUrl: "partials/paredintext.html",
            controller: "PageCtrl"
        })
        .when("/revestimiento", {
            templateUrl: "partials/revestimiento.html",
            controller: "PageCtrl"
        })
        .when("/120", {
            templateUrl: "partials/120.html",
            controller: "PageCtrl"
        })
        .when("/60", {
            templateUrl: "partials/60.html",
            controller: "PageCtrl"
        })
        .when("/opciones", {
            templateUrl: "partials/opciones.html",
            controller: "PageCtrl"
        })
        .when("/tablajuntatomada", {
            templateUrl: "partials/tablajuntatomada.html",
            controller: "PageCtrl"
        })
        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html",
            controller: "PageCtrl"
        });
}]);



/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( /* $scope, $location, $http */ ) {
    console.log("Page Controller reporting for duty.");
});
