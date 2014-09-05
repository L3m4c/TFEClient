var SurroundingSkinService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

SurroundingSkinService.prototype.addSurroundingSkin = function (idBoarder, date, healthy, fragile, dry, hyperpigmented, hyperkeration, inflammatory,
                                                                  macerated,ulcerated) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&healthy=" + healthy +
        "&fragile=" + fragile +
        "&dry=" + dry +
        "&hyperpigmented=" + hyperpigmented +
        "&hyperkeration=" + hyperkeration +
        "&inflammatory=" + inflammatory +
        "&macerated=" + macerated +
        "&ulcerated=" + ulcerated ;
    return this.$http.post(this.SERVER_ROOT + 'surroundingSkin', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

SurroundingSkinService.prototype.getSurroundingSkins = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'surroundingSkin/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};