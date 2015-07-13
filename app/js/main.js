// 
// Here is how to define your module 
// has dependent on mobile-angular-ui
// 
var app = angular.module('MainEatsmart', [
  'ngRoute',
  'mobile-angular-ui',
  'mobile-angular-ui.gestures'
]);

app.run(function($transform) {
  window.$transform = $transform;
});

app.controller('MainController', function($rootScope, $scope){

});