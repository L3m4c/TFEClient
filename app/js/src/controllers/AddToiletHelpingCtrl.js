var AddToiletHelpingCtrl = module.exports = function ($scope, ToiletHelpingService) {
    this.$scope = $scope;
    this.ToiletHelpingService = ToiletHelpingService;
    $scope.date = new Date();
    $scope.move = false;



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

AddToiletHelpingCtrl.prototype.ajouterToiletHelping = function() {
    this.ToiletHelpingService.addToiletHelping(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.move).then(function () {});

};