var AddTherapeuticCtrl = module.exports = function ($scope, $state, TherapeuticService) {
    this.$scope = $scope;
    this.$state = $state;
    this.TherapeuticService = TherapeuticService;
    $scope.date = new Date();
    $scope.preparation = false;
    $scope.adMorning = false;
    $scope.adMidday = false;
    $scope.adEvening = false;
    $scope.adNight = false;


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

AddTherapeuticCtrl.prototype.ajouterTherapeutic = function() {
    _this = this;
    this.TherapeuticService.addTherapeutic(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.preparation,
    this.$scope.adMorning,this.$scope.adMidday,this.$scope.adEvening,this.$scope.adNight).then(function () {});
    _this.$state.go('therapeutic');
};