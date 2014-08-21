var InsulinTakingService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

InsulinTakingService.prototype.addInsulinTaking = function (idBoarder, date, glycemia) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&glycemia=" + glycemia;

    return this.$http.post(this.SERVER_ROOT + 'insulinTaking', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinTakingService.prototype.getInsulinTakings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinTaking/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
