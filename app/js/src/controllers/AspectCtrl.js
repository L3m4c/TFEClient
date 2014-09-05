var AspectCtrl = module.exports = function ($scope, AspectService) {
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

    AspectService.getAspects().then(function (data) {
        $scope.data = data.map(function(aspect) {
            aspect.date = new Date(aspect.date);
            return aspect;
        });
    });
};