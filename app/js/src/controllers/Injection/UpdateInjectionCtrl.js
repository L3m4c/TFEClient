var UpdateInjectionCtrl = module.exports = function ($scope, InjectionService, $stateParams, $state) {
    this.$scope = $scope;
    this.InjectionService = InjectionService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();
    $scope.doctor = "";
    $scope.establishment = "";
    $scope.nameMedic = "";
    $scope.unit = "";
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

    InjectionService.getInjection($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.dateStart = data.dateStart;
        $scope.dateEnd = data.dateEnd;
        $scope.doctor = data.doctor;
        $scope.establishment = data.establishment;
        $scope.nameMedic = data.nameMedic;
        $scope.dosage = data.dosage;
        $scope.unit = data.unit;
    });
};

UpdateInjectionCtrl.prototype.updateInjection = function() {
    _this = this;
    this.InjectionService.updateInjection(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.doctor, this.$scope.establishment, this.$scope.nameMedic, this.$scope.dosage, this.$scope.unit).then(function () {
        _this.$state.go('injection');
    });
};