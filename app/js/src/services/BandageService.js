var BandageService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

BandageService.prototype.addBandage = function (idBoarder, date, product, bandageCovering, comment) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&product=" + product +
        "&bandageCovering=" + bandageCovering +
        "&comment=" + comment;

    return this.$http.post(this.SERVER_ROOT + 'bandage', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

BandageService.prototype.getBandages = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'bandage/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};