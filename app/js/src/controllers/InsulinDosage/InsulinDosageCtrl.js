var InsulinDosageCtrl = module.exports = function ($scope, InsulinDosageService) {
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
                field : 'dosage',
                displayName : 'Dosage (en unité)'
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

    InsulinDosageService.getInsulinDosages().then(function (data) {
        $scope.data = data.map(function(insulinDosage) {
            insulinDosage.date = new Date(insulinDosage.date);
            return insulinDosage;
        });
    });
};