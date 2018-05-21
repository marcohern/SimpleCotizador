
app.controller('MenuCtrl', [
    '$scope', '$location', 'AuthService',
    function MenuCtrl($scope, $location, auth) {

        $scope.loggedIn = false;
        $scope.logout = logout;
        $scope.username = '';
        $scope.$on('$login.success', onLoginSuccess);
        $scope.$on('$logout.success', onLogoutSuccess);
        

        function init() {
            console.log("MenuCtrl.init");
        }

        function onLoginSuccess() {
            $scope.loggedIn = true;
            $scope.username = auth.getUsername();
        }

        function onLogoutSuccess() {
            $scope.loggedIn = false;
        }

        function login() {
            $scope.loggedIn = true;
        }

        function logout() {
            auth.logout(function () {
                $scope.loggedIn = false;
                $location.path('/login');
            });
        }

        init();
    }
]);

app.component('menu', {
    controller: 'MenuCtrl',
    templateUrl: '/app/menu/menu.tpl.html'
});