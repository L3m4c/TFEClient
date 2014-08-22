var IncontinenceService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

IncontinenceService.prototype.addIncontinence = function (idBoarder, date, diurnal, nocturnal, both) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&diurnal=" + diurnal +
        "&nocturnal=" + nocturnal +
        "&both=" + both ;
    return this.$http.post(this.SERVER_ROOT + 'incontinence', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

IncontinenceService.prototype.getIncontinences = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'incontinence/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};