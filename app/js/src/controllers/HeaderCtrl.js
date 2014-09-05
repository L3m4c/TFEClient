var HeaderCtrl = module.exports = function (LoginService, $state, $scope, $rootScope) {
    this.LoginService = LoginService;
    this.$state = $state;
    $scope.$rootScope = $rootScope;
};

HeaderCtrl.prototype.disconnect  = function () {
    this.LoginService.doLogout();
    this.$state.go("login");
};