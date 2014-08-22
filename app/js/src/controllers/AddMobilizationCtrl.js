var AddMobilizationCtrl = module.exports = function ($scope, MobilizationService) {
    this.$scope = $scope;
    this.MobilizationService = MobilizationService;
    $scope.date = new Date();
    $scope.help = false;
    $scope.material = false;
    $scope.cane = false;

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

AddMobilizationCtrl.prototype.ajouterMobilization = function() {
    this.MobilizationService.addMobilization(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.help,this.$scope.material,this.$scope.cane).then(function () {});


};