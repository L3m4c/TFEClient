var InjectionService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

InjectionService.prototype.addInjection = function (idBoarder, date, doctor, establishment, nameMedic, dosage, unit) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        // "&dateStart=" + dateStart +
        // "&dateEnd=" + dateEnd +
        "&doctor=" + doctor +
        "&establishment=" + establishment +
        "&nameMedic=" + nameMedic +
        "&dosage=" + dosage +
        "&unit=" + unit ;
    return this.$http.post(this.SERVER_ROOT + 'injection', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InjectionService.prototype.getInjections = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'injection/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};