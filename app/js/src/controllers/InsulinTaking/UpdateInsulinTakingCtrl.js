var UpdateInsulinTakingCtrl = module.exports = function ($scope, InsulinTakingService, $stateParams, $state) {
    this.$scope = $scope;
    this.InsulinTakingService = InsulinTakingService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();

    $scope.glycemia = 0;
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

    InsulinTakingService.getInsulinTaking($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.glycemia = data.glycemia;
    });
};

UpdateInsulinTakingCtrl.prototype.updateInsulinTaking = function() {
    _this = this;
    this.InsulinTakingService.updateInsulinTaking(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.glycemia).then(function () {
        _this.$state.go('insulinTaking');
    });
};