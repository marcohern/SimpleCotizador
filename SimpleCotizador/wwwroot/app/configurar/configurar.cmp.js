
app.controller('ConfigurarCtrl', [
    '$scope', '$location', 'CotService', 'AuthService',
    function ConfigurarCtrl($scope, $location, cot, auth) {

        $scope.tipoSeguro = '';
        $scope.cliente = '';
        $scope.fechaVencimiento = '';
        $scope.confirmar = confirmar;

        function init() {
            console.log("ConfigurarCtrl.init");
        }

        function confirmar() {
            //console.log("confirmar", $scope.tipoSeguro, $scope.cliente, $scope.fechaVencimiento);
            cot.guardarConf(
                $scope.cliente,
                $scope.tipoSeguro,
                $scope.fechaVencimiento
            );
            $location.path('/confirmar');
        }

        if (!auth.isAuthenticated()) {
            $location.path('/login');
            return;
        }
        init();
    }
]);

app.component('configurar', {
    controller: 'ConfigurarCtrl',
    templateUrl: '/app/configurar/configurar.tpl.html'
});