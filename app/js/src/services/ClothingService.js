var ClothingService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

ClothingService.prototype.addClothing = function (idBoarder, date, clothingComplete, clothingStimulated) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&clothingComplete=" + clothingComplete +
        "&clothingStimulated=" + clothingStimulated;
    return this.$http.post(this.SERVER_ROOT + 'clothing', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ClothingService.prototype.getClothings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'clothing/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};