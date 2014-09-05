var TreatmentService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

TreatmentService.prototype.addTreatment = function (idBoarder, date, pst, irrigation, therapeuticBath, drillWidth, drillLength, debridement, treatmentOther) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&pst=" + pst +
        "&irrigation=" + irrigation +
        "&therapeuticBath=" + therapeuticBath +
        "&drillWidth=" + drillWidth +
        "&drillLength=" + drillLength +
        "&debridement=" + debridement +
        "&treatmentOther=" + treatmentOther;

    return this.$http.post(this.SERVER_ROOT + 'treatment', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

TreatmentService.prototype.getTreatments = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'treatment/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};