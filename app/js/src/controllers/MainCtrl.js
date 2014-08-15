/**
 * Created by Samuel on 15/08/2014.
 */
var MainCtrl = module.exports = function ($scope, BoarderService) {

    BoarderService.getBoarders().then(function (data) {
       $scope.data = data;
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
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: false,
        showGroupPanel: false
    };
};