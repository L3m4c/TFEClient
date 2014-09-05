var BoarderCtrl = module.exports = function ($scope, $state, BoarderService) {
    $scope = $scope;
    $scope.selectedBoarders = [];

    $scope.gridOptions = {
        i18n: 'fr',
        data: 'data',
        columnDefs: [
            {
                field : 'name',
                displayName : 'Nom'
            },
            {
                field : 'surname',
                displayName : 'Prénom'
            },
            {
                field : 'room',
                displayName : 'Chambre'
            },
            {
                field : 'age',
                displayName : 'Age'
            },
            {
                field : 'dateBirth',
                displayName : 'Date de naissance'
            },
            {
                field : 'mutuel',
                displayName : 'Mutuel'
            },
            {
                field : 'personResponsible',
                displayName : 'Personne responsable'
            },
            {
                field : 'phone',
                displayName : 'Téléphone'
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: false
    };

    BoarderService.getBoarders().then(function (data) {
        $scope.data = data.map(function(boarder) {

            return boarder;
        });
    });

    $scope.removeSelectedBoarders = function () {
        BoarderService.removeBoarders($scope.selectedBoarders).then(function () {
            $state.go('reload', {reload:'boarder'});
        });
    }
};
