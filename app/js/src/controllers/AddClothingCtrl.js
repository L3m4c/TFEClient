var AddClothingCtrl = module.exports = function ($scope, ClothingService) {
    this.$scope = $scope;
    this.ClothingService = ClothingService;
    $scope.date = new Date();

    $scope.clothingComplete = false;
    $scope.stimulated = false;

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

AddClothingCtrl.prototype.ajouterClothing = function() {
    this.ClothingService.addClothing(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.clothingComplete,this.$scope.stimulated).then(function () {});


};