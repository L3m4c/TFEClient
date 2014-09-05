var UpdatePatchCtrl = module.exports = function ($scope, PatchService, $stateParams, $state) {
    this.$scope = $scope;
    this.PatchService = PatchService;
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

    PatchService.getPatch($stateParams.id).then(function (data) {
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

UpdatePatchCtrl.prototype.updatePatch = function() {
    _this = this;
    this.PatchService.updatePatch(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.doctor, this.$scope.nameMedic, this.$scope.dosage, this.$scope.unit).then(function () {
        _this.$state.go('patch');
    });
};