var UpdateInsulinDosageCtrl = module.exports = function ($scope, InsulinDosageService, $stateParams, $state) {
    this.$scope = $scope;
    this.InsulinDosageService = InsulinDosageService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();
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

    InsulinDosageService.getInsulinDosage($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.dosage = data.dosage;

    });
};

UpdateInsulinDosageCtrl.prototype.updateInsulinDosage = function() {
    _this = this;
    this.InsulinDosageService.updateInsulinDosage(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.dosage).then(function () {
        _this.$state.go('insulinDosage');
    });
};