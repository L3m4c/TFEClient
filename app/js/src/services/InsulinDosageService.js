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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinDosageService.prototype.getInsulinDosages = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinDosage/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
    InsulinDosageService.prototype.getInsulinDosage = function (id) {
        var _this = this;
        return this.$http.get(this.SERVER_ROOT + 'insulinDosage?id=' + id, {
            headers: {
                'Authorization': 'Basic ZGFtOmRhbQ=='
            }}).then(function (response) {
            return response.data;
        }).catch(function (response) {

        });
    };


InsulinDosageService.prototype.updateInsulinDosage = function (id, idBoarder, date, dosage) {
        var _this = this;
        var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
        data += '&dosage=' + dosage;
        return this.$http.put(this.SERVER_ROOT + 'insulinDosage?' + data, {
            headers: {
                'Authorization': 'Basic ZGFtOmRhbQ=='
            }}).then(function (response) {
            return response.data;
        }).catch(function (response) {

        });
    };

InsulinDosageService.prototype.removeInsulinDosage = function (idInsulinDosage) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'insulinDosage?id=' + idInsulinDosage, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinDosageService.prototype.removeInsulinDosages = function (insulinDosages) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    insulinDosages.forEach(function (insulinDosage) {
        var defer = _this.$q.defer();
        _this.removeInsulinDosage(insulinDosage.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
}