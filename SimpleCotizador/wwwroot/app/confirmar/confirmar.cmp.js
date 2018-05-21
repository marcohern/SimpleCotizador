
app.controller('ConfirmarCtrl', [
    '$scope', '$location', 'CotService', 'AuthService',
    function CotizacionesCtrl($scope, $location, cot, auth) {

        $scope.fechaCotizacion = null;
        $scope.formaPago = '';
        $scope.numeroPoliza = '';
        $scope.activa = false;
        $scope.guardar = guardar;

        function init() {
            
            console.log("ConfirmarCtrl.init", cot.getConf());
            if (!cot.checkConf()) {
                $location.path('/configurar');
                return;
            }
            cot.generarNumeroPoliza(function (res) {
                $scope.numeroPoliza = res.data.guid;
            });
        }

        function guardar() {
            var cotizacion = cot.getConf();
            cotizacion.fechaVencimiento = cotizacion.fechaVencimiento.format("YYYY-MM-DD");
            cotizacion.fechaCotizacion = $scope.fechaCotizacion.format("YYYY-MM-DD");
            cotizacion.formaPago = $scope.formaPago;
            cotizacion.numeroPoliza = $scope.numeroPoliza;
            cotizacion.activa = $scope.activa;

            cot.crear(cotizacion, function (res) {
                $location.path('/cotizaciones');
            });
        }

        if (!auth.isAuthenticated()) {
            $location.path('/login');
            return;
        }
        init();
    }
]);

app.component('confirmar', {
    controller: 'ConfirmarCtrl',
    templateUrl: '/app/confirmar/confirmar.tpl.html'
});