var ToiletHelpingService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

ToiletHelpingService.prototype.addToiletHelping = function (idBoarder, date, move) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&move=" + move ;

    return this.$http.post(this.SERVER_ROOT + 'toiletHelping', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ToiletHelpingService.prototype.getToiletHelpings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'toiletHelping/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};