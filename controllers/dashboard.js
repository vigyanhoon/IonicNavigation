app.controller('dashboardController',function($scope, $ionicNavBarDelegate, $state) {
    $scope.loadView = function() {
//      alert("button clicked");
        $state.go('listview');
    };
});