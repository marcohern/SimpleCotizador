
app.controller('AboutCtrl', [
    '$scope', 'AuthService',
    function ConfigurarCtrl($scope, auth) {

        function init() {
            console.log("AboutCtrl.init");
        }

        init();
    }
]);

app.component('about', {
    controller: 'AboutCtrl',
    templateUrl: '/app/about/about.tpl.html'
});