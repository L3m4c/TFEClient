var InjectionCtrl = module.exports = function ($scope, $state, InjectionService) {
    $scope = $scope;
    $scope.selectedInjections = [];

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
                field : 'doctor',
                displayName : 'Docteur'
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
            $scope.selectedInjections = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    InjectionService.getInjections().then(function (data) {
        $scope.data = data.map(function(injection) {
            injection.date = new Date(injection.date);
            return injection;
        });
    });
    $scope.removeSelectedInjections = function () {
        InjectionService.removeInjections($scope.selectedInjections).then(function () {
            $state.go('reload', {reload:'injection'});
        });
    }
};