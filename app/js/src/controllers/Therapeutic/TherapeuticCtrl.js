var TherapeuticCtrl = module.exports = function ($scope, TherapeuticService) {
    $scope = $scope;


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
        multiSelect: false,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    TherapeuticService.getTherapeutics().then(function (data) {
        $scope.data = data.map(function(therapeutic) {
            therapeutic.date = new Date(therapeutic.date);
            return therapeutic;
        });
    });
};