var HygieneService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

HygieneService.prototype.addHygiene = function (idBoarder, date, toiletPartiel, toiletComplete, hygieneStimulated, bath) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&toiletPartiel=" + toiletPartiel +
        "&toiletComplete=" + toiletComplete +
        "&hygieneStimulated=" + hygieneStimulated +
        "&bath=" + bath ;
    return this.$http.post(this.SERVER_ROOT + 'hygiene', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

HygieneService.prototype.getHygienes = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'hygiene/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};