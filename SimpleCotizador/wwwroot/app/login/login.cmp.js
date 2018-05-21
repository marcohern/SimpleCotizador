
app.controller('LoginCtrl', [
    '$scope', '$location','$rootScope', 'AuthService',
    function CotizacionesCtrl($scope, $location, $rootScope, auth) {

        $scope.submit = submit;

        function init() {
            console.log("LoginCtrl.init");
        }

        function submit() {
            console.log("LoginCtrl.submit");
            auth.login("admin", "admin", function (res) {
                $rootScope.$broadcast('$login.success');
                $location.path('/dashboard');
            });
            
        }

        init();
    }
]);

app.component('login', {
    controller: 'LoginCtrl',
    templateUrl: '/app/login/login.tpl.html'
});