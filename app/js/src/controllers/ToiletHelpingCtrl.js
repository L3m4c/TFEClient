var ToiletHelpingCtrl = module.exports = function ($scope, ToiletHelpingService) {
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

    ToiletHelpingService.getToiletHelpings().then(function (data) {
        $scope.data = data.map(function(toiletHelping) {
            toiletHelping.date = new Date(toiletHelping.date);
            return toiletHelping;
        });
    });
};