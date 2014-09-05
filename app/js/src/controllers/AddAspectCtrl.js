var AddAspectCtrl = module.exports = function ($scope, AspectService) {
    this.$scope = $scope;
    this.AspectService = AspectService;
    $scope.date = new Date();

    $scope.redness = false;
    $scope.fibrin = false;
    $scope.necrosis = false;
    $scope.pink = false;
    $scope.aspectOther = "";

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

AddAspectCtrl.prototype.ajouterAspect = function() {
    this.AspectService.addAspect(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.redness,
        this.$scope.fibrin, this.$scope.necrosis, this.$scope.pink,
         this.$scope.aspectOther).then(function () {});


};