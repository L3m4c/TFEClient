var InsulinTakingCtrl = module.exports = function ($scope, $state, InsulinTakingService) {
    this.$scope = $scope;
    this.$state = $state;
    this.InsulinTakingService = InsulinTakingService;
    $scope.date = new Date();
    $scope.glycemia = 0;

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

InsulinTakingCtrl.prototype.ajouterInsulinTaking = function() {
    _this = this;
    this.InsulinTakingService.addInsulinTaking(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(), this.$scope.glycemia).then(function () {});
    _this.$state.go('insulinTaking');
};

//InsulinDosageCtrl.prototype.getInsulinDosages = function() {
//    this.InsulinDosageService.getInsulinDosages().then(function () {});
//};
