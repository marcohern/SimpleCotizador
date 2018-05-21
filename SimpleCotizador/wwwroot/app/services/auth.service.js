app.factory('AuthService', ['$http', '$location', '$rootScope',
    function AuthService($http, $location, $rootScope) {
        var authenticated = false;
        var token = null;
        var username = '';
        var storageId = 'com.marcohern.simplecotizador.auth';

        var service = [];

        service.isAuthenticated = isAuthenticated;
        service.getToken = getToken;
        service.getUsername = getUsername;
        service.recoverAuth = recoverAuth;
        service.login = login;
        service.logout = logout;
        service.headers = headers;
        service.handleSuccess = handleSuccess;
        service.handleError = handleError;

        return service;

        function recoverAuth() {
            console.log("recoverAuth");
            var session = sessionStorage.getItem(storageId);
            if (session != null && session != '') {
                session = JSON.parse(session);
                authenticated = true;
                token = session.token;
                username = session.username;
            }
        }

        function saveAuth() {
            var obj = { token: token, username: username };
            sessionStorage.setItem(storageId, JSON.stringify(obj));
        }

        function clearAuth() {
            sessionStorage.removeItem(storageId);
        }

        function login(username, password, onSuccess) {
            return $http.post('/api/Account/Login', { Username: username, Password: password }).then(function (res) { handleLoginSuccess(res, onSuccess); }, handleError);
        }

        function logout(onSuccess) {
            return $http.post('/api/Account/Logout', {}).then(function (res) { handleLogoutSuccess(res, onSuccess); }, handleError);
        }

        function getToken() {
            return token;
        }

        function getUsername() {
            return username;
        }

        function isAuthenticated() {
            return authenticated;
        }

        function handleError(error) {
            console.error("ERROR", error);
            if (error.status == 403) {
                $location.path('/login');
            }
        }

        function handleSuccess(res, callback) {
            console.info("SUCCESS", res);
            callback(res);
        }

        function handleLoginSuccess(res, callback) {
            console.info("LOGIN", res);
            authenticated = true;
            token = res.data.token;
            username = res.data.name;
            saveAuth();
            callback(res);
        }

        function handleLogoutSuccess(res, callback) {
            console.info("LOGOUT", res);
            authenticated = false;
            token = null;
            username = '';
            clearAuth();
            callback(res);
        }

        function headers() {
            var headers = {};

            if (token != null && token != '') {
                headers["Authorization"] = "Bearer " + token;
            }
            return headers;
        }

        recoverAuth();
    }]);