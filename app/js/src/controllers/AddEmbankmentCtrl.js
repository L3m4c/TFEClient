var AddEmbankmentCtrl = module.exports = function ($scope, EmbankmentService) {
    this.$scope = $scope;
    this.EmbankmentService = EmbankmentService;
    $scope.date = new Date();

    $scope.regular = false;
    $scope.irregular = false;
    $scope.furrow = false;
    $scope.detachment = false;
    $scope.budding = false;

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

AddEmbankmentCtrl.prototype.ajouterEmbankment = function() {
    this.EmbankmentService.addEmbankment(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.regular,this.$scope.irregular,this.$scope.furrow,
        this.$scope.detachment,this.$scope.budding).then(function () {});


};