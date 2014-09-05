var AddSwaddleCtrl = module.exports = function ($scope, $state, SwaddleService) {
    this.$scope = $scope;
    this.SwaddleService = SwaddleService;
    this.$state = $state;
    $scope.date = new Date();
    $scope.selectedSwaddles = [];

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

AddSwaddleCtrl.prototype.ajouterSwaddle = function() {
    var _this = this;
    if (this.$scope.selectedSwaddles.length !== 0) {
        this.SwaddleService.addSwaddle(this.$scope.selectedSwaddles[0].id, this.$scope.date.getTime()).then(function () {
            _this.$state.go('swaddle');
        });
    }
};