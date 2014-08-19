var InsulinDosageService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

InsulinDosageService.prototype.addInsulinDosage = function (idBoarder, date, dosage) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&dosage=" + dosage;

    return this.$http.post(this.SERVER_ROOT + 'insulinDosage', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinDosageService.prototype.getInsulinDosages = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinDosage/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
