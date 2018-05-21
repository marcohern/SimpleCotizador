app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/dashboard'   , { template: '<dashboard></dashboard>' })
            .when('/about'       , { template: '<about></about>' })
            .when('/login'       , { template: '<login></login>' })
            .when('/cotizaciones', { template: '<cotizaciones></cotizaciones>' })
            .when('/configurar'  , { template: '<configurar></configurar>' })
            .when('/confirmar'   , { template: '<confirmar></confirmar>' })
            .otherwise('/dashboard');
    }
]);

app.run([
    'AuthService',
    function (auth) {
        auth.recoverAuth();
    }
]);