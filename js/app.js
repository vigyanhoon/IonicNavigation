var app = angular.module('LoudCloud', ['ionic', 'ui.router'])
    .controller('LoudCloudController',function($scope) {

    });

/*app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})*/

app.config(function($stateProvider, $urlRouterProvider) {

//    $urlRouterProvider.otherwise('login')

    $stateProvider
        .state('login', {
            url: '/login',
//            template:  '<p>Hello, world!</p>',
            views: {
                'containerView': {
                    templateUrl: 'templates/login/login.html',
                    controller: 'loginController'
                }
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            views: {
                'containerView': {
                    templateUrl: 'templates/dashboard/dashboard.html',
                    controller: 'dashboardController'
                }
            }
        })
        .state('listview', {
            url: '/templates/listview',
            views: {
                'containerView': {
                    templateUrl: 'templates/listview/listview.html',
                    controller: 'listViewController'
                }
            }
        });

    $urlRouterProvider.otherwise('/login');

});

//app.controller('LoginController', function($scope, $state) {
//    $scope.loginForm={username:""};
//
//    $scope.login = function() {
//        if($scope.loginForm.username == "sanjay")
//        {
//            $state.go('dashboard');
//        }
//        else
//        {
//            alert("username should be sanjay");
//        }
//
//    };
//})


//app.controller('dashboardController',function($scope, $ionicNavBarDelegate, $state) {
//    $scope.loadView = function() {
////      alert("button clicked");
//        $state.go('tmp');
//    };
//});

/*app.controller('tmpController',function($scope, $ionicNavBarDelegate) {

});*/
