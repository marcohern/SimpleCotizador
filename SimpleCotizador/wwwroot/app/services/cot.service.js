app.factory('CotService', [
    '$http', '$location', '$rootScope', 'AuthService',
    function CotService($http, $location, $rootScope, auth) {
        var authenticated = false;

        var service = [];

        service.guardarConf = guardarConf;
        service.getConf = getConf;
        service.checkConf = checkConf;
        service.generarNumeroPoliza = generarNumeroPoliza;
        service.crear = crear;
        service.consultar = consultar;
        service.cotizacion = { };

        return service;

        function clearCotizacion() {
            service.cotizacion = {};
        }

        function getConf() {
            return service.cotizacion;
        }

        function checkConf() {
            if (service.cotizacion.cliente && service.cotizacion.tipoSeguro && service.cotizacion.fechaVencimiento) {
                return true;
            }
            return false;
        }

        function guardarConf(cliente, tipoSeguro, fechaVencimiento) {
            service.cotizacion.cliente = cliente;
            service.cotizacion.tipoSeguro = tipoSeguro;
            service.cotizacion.fechaVencimiento = fechaVencimiento;
        }

        function crear(cotizacion, onSuccess) {
            $http.post('/api/Cotizaciones', cotizacion, { headers: auth.headers() }).then(function (res) { auth.handleSuccess(res, onSuccess); }, auth.handleError);
        }

        function consultar(q, onSuccess) {
            var params = '';
            if (q != null && q != '') {
                params += 'q=' + encodeURI(q);
            }
            if (params != '') params = '?' + params;
            $http.get('/api/Cotizaciones' + params, { headers: auth.headers() }).then(function (res) { auth.handleSuccess(res, onSuccess); }, auth.handleError);
        }

        function generarNumeroPoliza(onSuccess) {
            $http.get('/api/Cotizaciones/NewGuid', { headers: auth.headers() }).then(function (res) { auth.handleSuccess(res, onSuccess); }, auth.handleError);
        }
    }
]);