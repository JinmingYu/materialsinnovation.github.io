angular.module('myApp', []);
angular.module('myApp').directive('toolTile', function () {
    return {
      restrict: 'A',
      scope: {
        tool: '='
      },
      replace: true,
      templateUrl: 'tool-tile-template.html',
      link: function (scope, elem, attrs) {
        //link restricts that function can only access to the directive scope
        scope.hi = function () {
          alert('This tool... ' + scope.tool.name);
        }
      }
    };
});
angular.module('myApp').controller('toolCtrl', function ($scope) {
  $scope.tools = [ 
    {
      name: 'pymks',
      description: 'Materials Knowledge System in Python',
      language: 'Python'
    },
    {
      name: 'project-pages',
      description: 'Not up yet',
      language: 'JavaScript'
    }];

});

angular.module('myApp').directive('actorTile', function () {
    return {
      restrict: 'A',
      scope: {
        actor: '='
      },
      replace: true,
      templateUrl: 'actor-tile-template.html',
      link: function (scope, elem, attrs) {
        //link restricts that function can only access to the directive scope
        scope.hi = function () {
          alert('HI THERE, MY NAME IS ' + scope.actor.name);
        }
      }
    };
});

angular.module('myApp').controller('actorCtrl', function ($scope) {
  $scope.projects = [
    {
      name: 'MIC-OFET-Processing',
      image: 'https://raw.githubusercontent.com/Materials-Informatics-Class-Fall2014/MIC-OFET-Processing/gh-pages/assets/III-icon.png',
      description: 'Not up yet'
    },
    {
      name: 'MIC-Modeling-Polymer-Composites',
      image: 'https://raw.githubusercontent.com/Materials-Informatics-Class-Fall2014/MIC-OFET-Processing/gh-pages/assets/III-icon.png',
      description: 'Not up yet'
    }
  ];
});
