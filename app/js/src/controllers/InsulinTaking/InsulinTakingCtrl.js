var InsulinTakingCtrl = module.exports = function ($scope, $state, InsulinTakingService) {
    $scope = $scope;
    $scope.selectedInsulinTakings = [];

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
                field : 'glycemia',
                displayName : 'Glycémie'
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
            $scope.selectedInsulinTakings = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    InsulinTakingService.getInsulinTakings().then(function (data) {
        $scope.data = data.map(function(insulinTaking) {
            insulinTaking.date = new Date(insulinTaking.date);
            return insulinTaking;
        });
    });

    $scope.removeSelectedInsulinTakings = function () {
        InsulinTakingService.removeInsulinTakings($scope.selectedInsulinTakings).then(function () {
            $state.go('reload', {reload:'insulinTaking'});
        });
    }
};