'use strict';
/**
* @ngdoc overview
* @name familyhistorydatabaseApp
* @description
* # familyhistorydatabaseApp
*
* Main module of the application.
*/
var app = angular.module('familyhistorydatabaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'mgcrea.ngStrap'
  ]).config([
    '$routeProvider',
    '$asideProvider',
    function ($routeProvider, $asideProvider) {
      $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).otherwise({ redirectTo: '/' });
      angular.extend($asideProvider.defaults, {
        container: 'body',
        html: true,
        animation: 'am-fadeAndSlideLeft',
        placement: 'left'
      });
    }
  ]);
'use strict';
/**
 * @ngdoc function
 * @name familyhistorydatabaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the familyhistorydatabaseApp
 */
app.controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name familyhistorydatabaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the familyhistorydatabaseApp
 */
app.controller('AboutCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
/**
* @ngdoc function
* @name familyhistorydatabaseApp.controller:NavCtrl
* @description
* # NavCtrl
* Controller of the familyhistorydatabaseApp
*/
app.controller('NavCtrl', [
  '$scope',
  '$aside',
  function ($scope, $aside) {
    /*jshint unused:false*/
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.aside = {
      'title': 'Title',
      'content': 'Hello Aside<br />This is a multiline message!'
    };  // Pre-fetch an external template populated with a custom scope
        // var myOtherAside = $aside({scope: $scope, template: 'views/navAside.html'});
        // // Show when some event occurs (use $promise property to ensure the template has been loaded)
        // myOtherAside.$promise.then(function() {
        //   myOtherAside.show();
        // })
  }
]);