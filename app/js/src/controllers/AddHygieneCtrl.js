var AddHygieneCtrl = module.exports = function ($scope, HygieneService) {
    this.$scope = $scope;
    this.HygieneService = HygieneService;
    $scope.date = new Date();

    $scope.toiletPartiel = false;
    $scope.toiletComplete = false;
    $scope.stimulated = false;
    $scope.bath = false;
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

AddHygieneCtrl.prototype.ajouterHygiene = function() {
    this.HygieneService.addHygiene(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.toiletPartiel,this.$scope.toiletComplete,this.$scope.stimulated,this.$scope.bath).then(function () {});


};