var UpdateObservationCtrl = module.exports = function ($scope, ObservationService, $stateParams, $state) {
    this.$scope = $scope;
    this.ObservationService = ObservationService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();

    $scope.comment = "";
    $scope.update = true;

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

    ObservationService.getObservation($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.comment = data.comment;
    });
};

UpdateObservationCtrl.prototype.updateObservation = function() {
    _this = this;
    this.ObservationService.updateObservation(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.comment).then(function () {
        _this.$state.go('observation');
    });
};