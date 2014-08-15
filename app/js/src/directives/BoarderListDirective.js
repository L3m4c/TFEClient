var BoarderListDirective = module.exports =  function(BoarderService) {
    return {
        restrict: 'E',
        transclude: true,
        scope: false,
        controller: "BoarderCtrl",
        templateUrl: 'views/directives/boarderlist.html'
    };
};