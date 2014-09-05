var TherapeuticCtrl = module.exports = function ($scope, $state, TherapeuticService) {
    $scope = $scope;
    $scope.selectedTherapeutics = [];

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
                field : 'preparation',
                displayName : 'Préparation'
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
            $scope.selectedTherapeutics = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    TherapeuticService.getTherapeutics().then(function (data) {
        $scope.data = data.map(function(therapeutic) {
            therapeutic.date = new Date(therapeutic.date);
            return therapeutic;
        });
    });
    $scope.removeSelectedTherapeutics = function () {
        TherapeuticService.removeTherapeutics($scope.selectedTherapeutics).then(function () {
            $state.go('reload', {reload:'therapeutic'});
        });
    }
};