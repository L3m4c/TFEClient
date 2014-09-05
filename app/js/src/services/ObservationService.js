var ObservationService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

ObservationService.prototype.addObservation = function (idBoarder, date, comment) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&comment=" + comment;
    return this.$http.post(this.SERVER_ROOT + 'observation', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ObservationService.prototype.getObservations = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'observation/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
ObservationService.prototype.getObservation = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'observation?id=' + id, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};


ObservationService.prototype.updateObservation = function (id, idBoarder, date, comment) {
    var _this = this;
    var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
    data += '&comment=' + comment;
    return this.$http.put(this.SERVER_ROOT + 'observation?' + data, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
ObservationService.prototype.removeObservation = function (idObservation) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'observation?id=' + idObservation, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ObservationService.prototype.removeObservations = function (observations) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    observations.forEach(function (observation) {
        var defer = _this.$q.defer();
        _this.removeObservation(observation.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
};