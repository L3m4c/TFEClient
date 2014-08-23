var EatService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

EatService.prototype.addEat = function (idBoarder, date, priorAid, fullAid, eatStimulated, hydration) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&priorAid=" + priorAid +
        "&fullAid=" + fullAid +
        "&eatStimulated=" + eatStimulated +
        "&hydration=" + hydration ;
    return this.$http.post(this.SERVER_ROOT + 'eat', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

EatService.prototype.getEats = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'eat/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};