var AddInjectionCtrl = module.exports = function ($scope, $state, InjectionService) {
    this.$scope = $scope;
    this.$state = $state;
    this.InjectionService = InjectionService;
    $scope.date = new Date();
    //$scope.dateStart = new Date();
    //$scope.dateEnd = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";
    $scope.establishment= "";
    $scope.dosage= 0;

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

AddInjectionCtrl.prototype.ajouterInjection = function() {
    _this = this;
    this.InjectionService.addInjection(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.establishment,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit).then(function () {});
    _this.$state.go('injection');
    // this.$scope.dateStart.getTime(),
    // this.$scope.dateEnd.getTime()

};