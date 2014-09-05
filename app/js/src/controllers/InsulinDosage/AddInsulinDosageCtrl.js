var InsulinDosageCtrl = module.exports = function ($scope, $state, InsulinDosageService) {
    this.$scope = $scope;
    this.$state = $state;
    this.InsulinDosageService = InsulinDosageService;
    $scope.date = new Date();
    $scope.dosage = 0;

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

InsulinDosageCtrl.prototype.ajouterInsulinDosage = function() {
    _this = this;
    this.InsulinDosageService.addInsulinDosage(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(), this.$scope.dosage).then(function () {});
    _this.$state.go('insulinDosage');
};

//InsulinDosageCtrl.prototype.getInsulinDosages = function() {
//    this.InsulinDosageService.getInsulinDosages().then(function () {});
//};
