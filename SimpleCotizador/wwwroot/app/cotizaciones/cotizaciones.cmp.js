
app.controller('CotizacionesCtrl', [
    '$scope', '$location', 'CotService', 'AuthService',
    function CotizacionesCtrl($scope, $location, cot, auth) {

        $scope.gridOptions = {
            columnDefs: [
                { field: "numeroPoliza", name:"Número de Póliza" },
                { field: "cliente" },
                { field: "tipoSeguro" },
                { field: "formaPago", name: "Forma de Pago" },
                { field: "fechaVencimiento", name: "Fecha Cotización", cellFilter: 'date:\'dd/MM/yyyy\'' },
                { field: "fechaCotizacion", name: "Fecha de Vencimiento", cellFilter: 'date:\'dd/MM/yyyy\'' }
            ],
            data: []
        };
        $scope.configurar = configurar;
        $scope.query = '';
        $scope.filtrar = filtrar;
        $scope.filtrarEnter = filtrarEnter;

        function init() {
            console.log("CotizacionesCtrl.init");
            cot.consultar(null, function (res) {
                //console.log("CotizacionesCtrl.init", res);
                $scope.gridOptions.data = res.data;
            });
        }

        function configurar() {
            $location.path('/configurar');
        }

        function filtrar() {
            console.log("filtrar", $scope.query);
            cot.consultar($scope.query, function (res) {
                $scope.gridOptions.data = res.data;
            });
        }

        function filtrarEnter($event) {
            if ($event.charCode == 13) {
                filtrar();
            }
        }

        if (!auth.isAuthenticated()) {
            $location.path('/login');
            return;
        }
        init();
    }
]);

app.component('cotizaciones', {
    controller: 'CotizacionesCtrl',
    templateUrl: '/app/cotizaciones/cotizaciones.tpl.html'
});