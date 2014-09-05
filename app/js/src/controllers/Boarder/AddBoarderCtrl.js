var AddBoarderCtrl = module.exports = function ($scope, $state, BoarderService) {
    this.$state = $state;
    this.$scope = $scope;
    this.BoarderService = BoarderService;

    $scope.dateBirth = "";
    $scope.name = "";
    $scope.surname = "";
    $scope.room = 0;
    $scope.age = 0;

    $scope.mutuel = "";
    $scope.personResponsible = "";
    $scope.phone = "";

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = false;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.changed = function () {
        console.log('Time changed to: ' + $scope.date);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };

};

AddBoarderCtrl.prototype.ajouterBoarder = function() {
    _this = this;
    this.BoarderService.addBoarder(this.$scope.name,this.$scope.surname,this.$scope.room,this.$scope.age,this.$scope.dateBirth,this.$scope.mutuel,this.$scope.personResponsible,this.$scope.phone).then(function () {});
    _this.$state.go('boarder');

};