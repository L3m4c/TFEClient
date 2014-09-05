var UpdateBoarderCtrl = module.exports = function ($scope, BoarderService, $stateParams, $state) {
    this.$scope = $scope;
    this.BoarderService = BoarderService;
    this.$stateParams = $stateParams;
    this.$state = $state;

    $scope.update = true;

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

    BoarderService.getBoarder($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.name = data.name;
        $scope.surname = data.surname;
        $scope.room = data.room;
        $scope.age = data.age;
        $scope.dateBirth = data.dateBirth;
        $scope.mutuel = data.mutuel;
        $scope.personResponsible = data.personResponsible;
        $scope.phone = data.phone;

    });
};

UpdateBoarderCtrl.prototype.updateBoarder = function() {
    _this = this;
    this.BoarderService.updateBoarder(this.$stateParams.id, this.$scope.name,this.$scope.surname,this.$scope.room,this.$scope.age,this.$scope.dateBirth,this.$scope.mutuel,this.$scope.personResponsible,this.$scope.phone).then(function () {
        _this.$state.go('boarder');
    });
};