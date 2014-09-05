var EmbankmentService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

EmbankmentService.prototype.addEmbankment = function (idBoarder, date, regular, irregular, furrow, detachment, budding) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&regular=" + regular +
        "&irregular=" + irregular +
        "&furrow=" + furrow +
        "&detachment=" + detachment +
        "&budding=" + budding ;
    return this.$http.post(this.SERVER_ROOT + 'embankment', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

EmbankmentService.prototype.getEmbankments = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'embankment/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};