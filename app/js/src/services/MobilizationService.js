var MobilizationService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

MobilizationService.prototype.addMobilization = function (idBoarder, date, help, material, cane) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&help=" + help +
        "&material=" + material +
        "&cane=" + cane ;
    return this.$http.post(this.SERVER_ROOT + 'mobilization', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'BBasic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MobilizationService.prototype.getMobilizations = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'mobilization/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};