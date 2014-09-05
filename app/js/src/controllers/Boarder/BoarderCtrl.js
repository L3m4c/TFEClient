var BoarderCtrl = module.exports = function ($scope, $state, BoarderService, $rootScope) {
    $scope = $scope;
    $scope.selectedBoarders = [];
    $scope.filterOptions = {
        filterText: $rootScope.search
    };

    $rootScope.$watch('search', function(newValue) {
        $scope.filterOptions.filterText = newValue;
    });

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
                displayName : 'Age',
                visible: !!$scope.showDetailedInformations
            },
            {
                field : 'dateBirth',
                displayName : 'Date de naissance',
                visible: !!$scope.showDetailedInformations
            },
            {
                field : 'mutuel',
                displayName : 'Mutuel',
                visible: !!$scope.showDetailedInformations
            },
            {
                field : 'personResponsible',
                displayName : 'Personne responsable',
                visible: !!$scope.showDetailedInformations
            },
            {
                field : 'phone',
                displayName : 'Téléphone',
                visible: !!$scope.showDetailedInformations
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: false,
        filterOptions: $scope.filterOptions
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
