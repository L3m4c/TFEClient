var DrugTreatmentCtrl = module.exports = function ($scope, DrugTreatmentService) {
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
                field : 'morning',
                displayName : 'Matin'
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

    DrugTreatmentService.getDrugTreatments().then(function (data) {
        $scope.data = data.map(function(drugTreatment) {
            drugTreatment.date = new Date(drugTreatment.date);
            return drugTreatment;
        });
    });
};