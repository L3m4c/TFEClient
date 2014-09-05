var AddSurroundingSkinCtrl = module.exports = function ($scope, SurroundingSkinService) {
    this.$scope = $scope;
    this.SurroundingSkinService = SurroundingSkinService;
    $scope.date = new Date();

    $scope.healthy = false;
    $scope.fragile = false;
    $scope.dry = false;
    $scope.hyperpigmented = false;
    $scope.hyperkeration = false;
    $scope.inflammatory = false;
    $scope.macerated = false;
    $scope.ulcerated = false;

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

AddSurroundingSkinCtrl.prototype.ajouterSurroundingSkin = function() {
    this.SurroundingSkinService.addSurroundingSkin(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.healthy,this.$scope.fragile,this.$scope.dry,
        this.$scope.hyperpigmented,this.$scope.hyperkeration,this.$scope.inflammatory,this.$scope.macerated,this.$scope.ulcerated).then(function () {});


};