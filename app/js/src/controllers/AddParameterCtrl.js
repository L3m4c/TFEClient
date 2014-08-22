var AddParameterCtrl = module.exports = function ($scope, ParameterService) {
    this.$scope = $scope;
    this.ParameterService = ParameterService;
    $scope.date = new Date();

    $scope.pulse = "";
    $scope.tension = "";
    $scope.temperature = "";

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = false;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.changed = function () {
        console.log('Time changed to: ' + $scope.date);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };
};

AddParameterCtrl.prototype.ajouterParameter = function() {
    this.ParameterService.addParameter(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.pulse,this.$scope.tension,this.$scope.temperature).then(function () {});
    // this.$scope.dateStart.getTime(),
    // this.$scope.dateEnd.getTime()

};