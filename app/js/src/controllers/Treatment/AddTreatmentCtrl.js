var AddTreatmentCtrl = module.exports = function ($scope, TreatmentService) {
    this.$scope = $scope;
    this.TreatmentService = TreatmentService;
    $scope.date = new Date();

    $scope.pst = false;
    $scope.irrigation = false;
    $scope.therapeuticBath = false;
    $scope.drillWidth = 0;
    $scope.drillLength = 0;
    $scope.debridement = false;
    $scope.treatmentOther = "";

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

AddTreatmentCtrl.prototype.ajouterTreatment = function() {
    this.TreatmentService.addTreatment(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.pst,this.$scope.irrigation,
        this.$scope.therapeuticBath,
        this.$scope.drillWidth,
        this.$scope.drillLength,
        this.$scope.debridement,
        this.$scope.treatmentOther).then(function () {});


};