var InsulinTakingService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

InsulinTakingService.prototype.addInsulinTaking = function (idBoarder, date, glycemia) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&glycemia=" + glycemia;

    return this.$http.post(this.SERVER_ROOT + 'insulinTaking', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinTakingService.prototype.getInsulinTakings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinTaking/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
InsulinTakingService.prototype.getInsulinTaking = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinTaking?id=' + id, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};


InsulinTakingService.prototype.updateInsulinTaking = function (id, idBoarder, date, glycemia) {
    var _this = this;
    var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
    data += '&glycemia=' + glycemia;
    return this.$http.put(this.SERVER_ROOT + 'insulinTaking?' + data, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
InsulinTakingService.prototype.removeInsulinTaking = function (idInsulinTaking) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'insulinTaking?id=' + idInsulinTaking, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinTakingService.prototype.removeInsulinTakings = function (insulinTakings) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    insulinTakings.forEach(function (insulinTaking) {
        var defer = _this.$q.defer();
        _this.removeInsulinTaking(insulinTaking.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
};