 /* Angular JS Routing code and respective controller codes*/

 var module = angular.module("sampleApp", ['ngRoute']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                    when('/route1', {
                        templateUrl: 'app.html',
                        controller: 'RouteController'
                    }).
                    when('/home/:param', {
                        templateUrl: 'app.html',
                        controller: 'RouteController'
                    }).
                    when('/Home', {
                        templateUrl: '../Templates/partial-home.html',
                        controller: 'HomeController'
                    }).
                    when('/Contact', {
                        templateUrl: '../Templates/partial-contact.html',
                        controller: 'ContactController'
                    }).
                    when('/About', {
                        templateUrl: '../Templates/partial-about.html',
                        controller: 'AboutController'
                    }).
                    otherwise({
                        redirectTo: '/'
                    });
        }]);

    module.controller("RouteController", function($scope, $routeParams) {
        $scope.param = $routeParams.param;
    })

    module.controller("HomeController", function($scope) {
	    $scope.message = 'Thanks for visiting my Portfolio';
    })

    module.controller("ContactController", function($scope) {
        $scope.email = 'ssharvari@live.com'
	    $scope.message = 'This is Contact page';
    })

    module.controller("AboutController", function($scope) {
	    $scope.message = 'This is About page';
	    $scope.projectsList = [
          {
              project: {
                  companyName: 'Microsoft',
                  projectName: 'MSN & SMC'
              },
              Years: 2,
              NumberOfProjects: "Two",
              Constructors: [
                  {locationName: "Redmond"}
              ]
          },
          {
              project: {
                  companyName: 'T-Mobile',
                  projectName: 'Web Sustainment'
              },
              Years: 3,
              NumberOfProjects: "One",
              Constructors: [
                  {locationName: "Bothell"}
              ]
          }
        ];
    })



