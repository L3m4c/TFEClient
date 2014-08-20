var ObservationService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

ObservationService.prototype.addObservation = function (idBoarder, date, comment) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&comment" + comment;
    return this.$http.post(this.SERVER_ROOT + 'observation', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ObservationService.prototype.getObservations = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'observation/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};