var ungdungAngularJS = angular.module("ungdungAngularJS", ['ngRoute']);

ungdungAngularJS.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/themSV', {
            templateUrl: 'themSV.html',
            controller: 'themSVController'
        }).
        when('/quansatSV', {
            templateUrl: 'quansatSV.html',
            controller: 'quansatSVController'
        }).
        otherwise({
            redirectTo: '/themSV'
        });
    }
]);
