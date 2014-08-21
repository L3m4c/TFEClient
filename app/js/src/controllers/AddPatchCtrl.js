var AddPatchCtrl = module.exports = function ($scope, PatchService) {
    this.$scope = $scope;
    this.PatchService = PatchService;
    $scope.date = new Date();
    //$scope.dateStart = new Date();
    //$scope.dateEnd = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";

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

AddPatchCtrl.prototype.ajouterPatch = function() {
    this.PatchService.addPatch(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit).then(function () {});
       // this.$scope.dateStart.getTime(),
       // this.$scope.dateEnd.getTime()

};