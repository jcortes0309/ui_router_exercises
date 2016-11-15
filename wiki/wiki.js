function WikiPage(title, content) {
  this.title = title;
  this.content = content;
}

var pages = {
  Python: new WikiPage('Python', 'Python is a fun to use programming language. It is great for beginners.'),
  HTML: new WikiPage('HTML', 'HTML is the markup language used for making pages on the world wide web.')
};

var app = angular.module("wiki", ['ui.router']);


app.controller("HomeController", function($scope) {
  // controller code
});

app.controller("PageViewController", function($scope, $stateParams) {

  $scope.pageName = $stateParams.page_name;
  console.log($scope.pageName);
  $scope.page = pages[$scope.pageName];
  console.log($scope.page);
});

// app.controller("PagesController", function($scope, $stateParams) {
//   $scope.pages = pages;
// });
//
// app.controller("PageController", function($scope, $stateParams) {
//   $scope.page = pages[$stateParams.title];
// });

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: "home",
      url: "/",
      templateUrl: "home.html"
    })
    .state({
      name: "page_view",
      url: "/{page_name}",
      templateUrl: "page_view.html",
      controller: "PageViewController"
    })
    .state({
      name: "pages",
      url: "/pages",
      templateUrl: "pages.html",
      controller: "PagesController"
    })
    .state({
      name: "pages.page",
      url: "/{title}",
      templateUrl: "page.html",
      controller: "PageController"
    });

    $urlRouterProvider.otherwise("/");
});
