var AddBandageCtrl = module.exports = function ($scope, BandageService) {
    this.$scope = $scope;
    this.BandageService = BandageService;
    $scope.date = new Date();

    $scope.product = "";
    $scope.bandageCovering = "";
    $scope.comment = "";

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

AddBandageCtrl.prototype.ajouterBandage = function() {
    this.BandageService.addBandage(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.product,this.$scope.bandageCovering,this.$scope.comment).then(function () {});


};