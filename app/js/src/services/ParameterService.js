var ParameterService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

ParameterService.prototype.addParameter= function (idBoarder, date, pulse, tension, temperature) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&pulse=" + pulse +
        "&tension=" + tension +
        "&temperature=" + temperature ;
    return this.$http.post(this.SERVER_ROOT + 'parameter', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ParameterService.prototype.getParameters = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'parameter/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};