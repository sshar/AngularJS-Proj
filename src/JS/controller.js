/* Sample Controller code*/

var app= angular.module('homeApp', []);

    app.controller('projectsController', function($scope)
    {
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

        $scope.nameFilter = null;
        $scope.todosList = [];

            myAPIservice.getProjects().success(function (response) {
                //Dig into the responde to get the relevant data
                alert("HI");
                $scope.todosList = response.data;
            });
    });

angular.bootstrap(document.getElementById("app1"),['homeApp']);


