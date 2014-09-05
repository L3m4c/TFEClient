var MeasureService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

MeasureService.prototype.addMeasure = function (idBoarder, date, size, depth, quantity, nature, odor) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&size=" + size +
        "&depth=" + depth +
        "&quantity=" + quantity +
        "&nature=" + nature +
        "&odor=" + odor;

    return this.$http.post(this.SERVER_ROOT + 'measure', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MeasureService.prototype.getMeasures = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'measure/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};