var UpdateTherapeuticCtrl = module.exports = function ($scope, TherapeuticService, $stateParams, $state) {
    this.$scope = $scope;
    this.TherapeuticService = TherapeuticService;
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

    TherapeuticService.getTherapeutic($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.preparation = data.preparation;
        $scope.adMorning = data.adMorning;
        $scope.adMidday = data.adMidday;
        $scope.adEvening = data.adEvening;
        $scope.adNight = data.adNight;
    });
};

UpdateTherapeuticCtrl.prototype.updateTherapeutic = function() {
    _this = this;
    this.TherapeuticService.updateTherapeutic(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.preparation,
        this.$scope.adMorning,this.$scope.adMidday,this.$scope.adEvening,this.$scope.adNight).then(function () {
        _this.$state.go('therapeutic');
    });
};