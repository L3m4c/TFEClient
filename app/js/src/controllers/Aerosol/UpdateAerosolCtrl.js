var UpdateAerosolCtrl = module.exports = function ($scope, AerosolService, $stateParams, $state) {
    this.$scope = $scope;
    this.AerosolService = AerosolService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();
    $scope.doctor = "";
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

    AerosolService.getAerosol($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.dateStart = data.dateStart;
        $scope.dateEnd = data.dateEnd;
        $scope.doctor = data.doctor;
        $scope.nameMedic = data.nameMedic;
        $scope.dosage = data.dosage;
        $scope.unit = data.unit;
    });
};

UpdateAerosolCtrl.prototype.updateAerosol = function() {
    _this = this;
    this.AerosolService.updateAerosol(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.doctor, this.$scope.nameMedic, this.$scope.dosage, this.$scope.unit).then(function () {
        _this.$state.go('aerosol');
    });
};