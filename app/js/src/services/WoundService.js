var WoundService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

WoundService.prototype.addWound = function (idBoarder, date, localisation, type, description) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&localisation=" + localisation +
        "&type=" + type +
        "&description=" + description ;

    return this.$http.post(this.SERVER_ROOT + 'wound', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

WoundService.prototype.getWounds = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'wound/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};