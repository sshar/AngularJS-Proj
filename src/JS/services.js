/* Sample service vcode to pull data from JSON file using ajax call */

angular.module('homeApp', []).
  factory('myAPIservice', function($http) {

    var myAPI = {};

    myAPI.getProjects = function() {
      return $http({
        method: 'JSONP',
        url: '\data\todos.json'
      });
    }

    return myAPI;
  });