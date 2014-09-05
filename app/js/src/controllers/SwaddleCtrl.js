var SwaddleCtrl = module.exports = function ($scope, $state, SwaddleService) {
    $scope = $scope;
    $scope.selectedSwaddles = [];

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
            $scope.selectedSwaddles = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    SwaddleService.getSwaddles().then(function (data) {
        $scope.data = data.map(function(swaddle) {
            swaddle.date = new Date(swaddle.date);
            return swaddle;
        });
    });

    $scope.removeSelectedSwaddles = function () {
    SwaddleService.removeSwaddles($scope.selectedSwaddles).then(function () {
        $state.go('reload', {reload:'swaddle'});
    });
}
};