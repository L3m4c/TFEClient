var AerosolService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

AerosolService.prototype.addAerosol = function (idBoarder, date, doctor, nameMedic, dosage, unit) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        // "&dateStart=" + dateStart +
        // "&dateEnd=" + dateEnd +
        "&doctor=" + doctor +
        "&nameMedic=" + nameMedic +
        "&dosage=" + dosage +
        "&unit=" + unit ;
    return this.$http.post(this.SERVER_ROOT + 'aerosol', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

AerosolService.prototype.getAerosols = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'aerosol/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};

AerosolService.prototype.getAerosol = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'aerosol?id=' + id, {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};


AerosolService.prototype.updateAerosol = function (id, idBoarder, date, dateStart, dateEnd, doctor, nameMedic, dosage, unit) {
    var _this = this;
    var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime() + '&dateStart=' + dateStart;
    data += '&dateEnd=' + dateEnd + '&doctor=' + doctor + '&nameMedic=' + nameMedic + '&dosage=' + dosage + '&unit=' + unit;
    return this.$http.put(this.SERVER_ROOT + 'aerosol?' + data, {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};