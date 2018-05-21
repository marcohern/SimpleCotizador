
app.controller('DashboardCtrl', [
    '$scope', 'AuthService',
    function DashboardCtrl($scope, auth) {
        $scope.gridOptions = {
            data: [
                {
                    firstName: "Cox",
                    lastName: "Carney",
                    company: "Enormo",
                    employed: true
                },
                {
                    firstName: "Lorraine",
                    lastName: "Wise",
                    company: "Comveyer",
                    employed: false
                },
                {
                    firstName: "Nancy",
                    lastName: "Waters",
                    company: "Fuelton",
                    employed: false
                }
            ]
        };

        function init() {
            console.log("DashboardCtrl.init");
        }

        init();
    }
]);

app.component('dashboard', {
    controller: 'DashboardCtrl',
    templateUrl: '/app/dashboard/dashboard.tpl.html'
});