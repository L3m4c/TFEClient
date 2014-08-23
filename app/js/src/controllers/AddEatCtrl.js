var AddEatCtrl = module.exports = function ($scope, EatService) {
    this.$scope = $scope;
    this.EatService = EatService;
    $scope.date = new Date();

    $scope.priorAid = false;
    $scope.fullAid = false;
    $scope.eatStimulated = false;
    $scope.hydration = false;

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

AddEatCtrl.prototype.ajouterEat = function() {
    this.EatService.addEat(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.priorAid,this.$scope.fullAid,this.$scope.eatStimulated,this.$scope.hydration).then(function () {});


};