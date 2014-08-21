var TherapeuticService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

TherapeuticService.prototype.addTherapeutic = function (idBoarder, date, preparation, adMorning, adMidday, adEvening, adNight) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&preparation=" + preparation +
        "&adMorning=" + adMorning +
        "&adMidday=" + adMidday +
        "&adEvening=" + adEvening +
        "&adNight=" + adNight;
    return this.$http.post(this.SERVER_ROOT + 'therapeutic', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

TherapeuticService.prototype.getTherapeutics = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'therapeutic/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};