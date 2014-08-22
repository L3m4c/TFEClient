var DisorderService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

DisorderService.prototype.addDisorder = function (idBoarder, date, timeDisorientation, spaceDisorientation, termDifficulty, verbalDifficulty, lossConcept, agitated) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&timeDisorientation=" + timeDisorientation +
        "&spaceDisorientation=" + spaceDisorientation +
        "&termDifficulty=" + termDifficulty +
        "&verbalDifficulty=" + verbalDifficulty +
        "&lossConcept=" + lossConcept +
        "&agitated=" + agitated;
    return this.$http.post(this.SERVER_ROOT + 'disorder', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

DisorderService.prototype.getDisorders = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'disorder/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};