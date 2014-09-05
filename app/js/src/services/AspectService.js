var AspectService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

AspectService.prototype.addAspect = function (idBoarder, date, redness, fibrin, necrosis, pink, aspectOther) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&redness=" + redness +
        "&fibrin=" + fibrin +
        "&necrosis=" + necrosis +
        "&pink=" + pink +
        "&aspectOther=" + aspectOther;
    return this.$http.post(this.SERVER_ROOT + 'aspect', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

AspectService.prototype.getAspects = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'aspect/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};