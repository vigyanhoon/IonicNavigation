app.controller('loginController', function($scope, $state) {
    $scope.loginForm={username:""};

    $scope.login = function() {
        if($scope.loginForm.username == "sanjay")
        {
            $state.go('dashboard');
        }
        else
        {
            alert("username should be sanjay");
        }

    };
})