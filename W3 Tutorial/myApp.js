var app = angular.module("myApp", [])

// app.directive("testDirective", function() {
//     return {
//       template : "<p>Made by a directive!</p>"
//     };
// });

app.run(function($rootScope) {
    $rootScope.rootVar = "TEST";
});