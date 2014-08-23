var AddMealCtrl = module.exports = function ($scope, $state, MealService) {
    this.$scope = $scope;
    this.MealService = MealService;
    this.$state = $state;
    $scope.date = new Date();
    $scope.selectedMeals = [];

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

AddMealCtrl.prototype.ajouterMeal = function() {
    var _this = this;
    if (this.$scope.selectedMeals.length !== 0) {
        this.MealService.addMeal(this.$scope.selectedMeals[0].id, this.$scope.date.getTime()).then(function () {
            _this.$state.go('meal');
        });
    }
};