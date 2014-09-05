var BoarderListDirective = module.exports =  function(BoarderService) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selectedBoarders: "=",
            showDetailedInformations: "@"
        },
        controller: "BoarderCtrl",
        templateUrl: 'views/directives/boarderlist.html',
        link: function (scope) {
        }
    };
};