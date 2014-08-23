var MealCtrl = module.exports = function ($scope, $state, MealService) {
    $scope = $scope;
    $scope.selectedMeals = [];

    $scope.gridOptions = {
        i18n: 'fr',
        data: 'data',
        columnDefs: [
            {
                field : 'boarder.name',
                displayName : 'Pensionnaire'
            },
            {
                field : 'user.name',
                displayName : 'Personnel'
            },
            {
                field : 'date',
                displayName : 'Date'
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedMeals = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    MealService.getMeals().then(function (data) {
        $scope.data = data.map(function(meal) {
            meal.date = new Date(meal.date);
            return meal;
        });
    });

    $scope.removeSelectedMeals = function () {
        MealService.removeMeals($scope.selectedMeals).then(function () {
            $state.go('reload', {reload:'meal'});
        });
    }
};