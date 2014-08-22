var AddIncontinenceCtrl = module.exports = function ($scope, IncontinenceService) {
    this.$scope = $scope;
    this.IncontinenceService = IncontinenceService;
    $scope.date = new Date();

    $scope.diurnal = false;
    $scope.nocturnal = false;
    $scope.both = false;

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

AddIncontinenceCtrl.prototype.ajouterIncontinence = function() {
    this.IncontinenceService.addIncontinence(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.diurnal,this.$scope.nocturnal,this.$scope.both).then(function () {});


};