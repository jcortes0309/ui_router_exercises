var app = angular.module("family-members", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: "home",
      url: "/",
      templateUrl: "home.html"
    })
    .state({
      name: "parents",
      url: "/parents",
      templateUrl: "parents.html"
    })
    .state({
      name: "siblings",
      url: "/siblings",
      templateUrl: "siblings.html"
    })
    .state({
      name: "pets",
      url: "/pets",
      templateUrl: "pets.html"
    });

    $urlRouterProvider.otherwise("/");
});
