var AddMeasureCtrl = module.exports = function ($scope, MeasureService) {
    this.$scope = $scope;
    this.MeasureService = MeasureService;
    $scope.date = new Date();

    $scope.size = 0;
    $scope.depth = 0;
    $scope.quantity = "";
    $scope.nature = "";
    $scope.odor = false;

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

AddMeasureCtrl.prototype.ajouterMeasure = function() {
    this.MeasureService.addMeasure(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.size,this.$scope.depth,
    this.$scope.quantity,
    this.$scope.nature,
    this.$scope.odor).then(function () {});


};