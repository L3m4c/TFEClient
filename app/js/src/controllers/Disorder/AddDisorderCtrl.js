var AddDisorderCtrl = module.exports = function ($scope, DisorderService) {
    this.$scope = $scope;
    this.DisorderService = DisorderService;
    $scope.date = new Date();

    $scope.timeDisorientation = false;
    $scope.spaceDisorientation = false;
    $scope.termDifficulty = false;
    $scope.verbalDifficulty = false;
    $scope.lossConcept = false;
    $scope.agitated = false;

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

AddDisorderCtrl.prototype.ajouterDisorder = function() {
    this.DisorderService.addDisorder(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.timeDisorientation,this.$scope.spaceDisorientation,this.$scope.termDifficulty,
        this.$scope.verbalDifficulty,this.$scope.lossConcept,this.$scope.agitated).then(function () {});


};