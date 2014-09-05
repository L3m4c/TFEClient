var BoarderService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

BoarderService.prototype.getBoarders = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'boarder/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};

BoarderService.prototype.getBoarder = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'boarder?id=' + id, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
BoarderService.prototype.addBoarder = function ( name, surname, room, age, dateBirth, mutuel, personResponsible, phone) {
    var _this = this;
    var data = "name=" + name +
        "&surname=" + surname +
        "&room=" + room +
        "&age=" + age +
        "&dateBirth=" + dateBirth +
        "&mutuel=" + mutuel +
        "&personResponsible=" + personResponsible +
        "&phone=" + phone;
    return this.$http.post(this.SERVER_ROOT + 'boarder', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};
BoarderService.prototype.updateBoarder = function (id, name, surname, room, age, dateBirth, mutuel, personResponsible, phone) {
    var _this = this;
    var data = 'id=' + id + '&name=' + name + '&surname=' + surname;
    data += '&room=' + room + '&age=' + age + '&dateBirth=' + dateBirth + '&mutuel=' + mutuel + '&personResponsible=' + personResponsible + '&phoen=' + phone;
    return this.$http.put(this.SERVER_ROOT + 'boarder?' + data, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};

BoarderService.prototype.removeBoarder = function (idBoarder) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'boarder?id=' + idBoarder, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

BoarderService.prototype.removeBoarders = function (boarders) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    boarders.forEach(function (boarder) {
        var defer = _this.$q.defer();
        _this.removeBoarder(boarder.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
}