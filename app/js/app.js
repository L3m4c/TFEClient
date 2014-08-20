require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"RouteService":[function(require,module,exports){
module.exports=require('6YVD1J');
},{}],"6YVD1J":[function(require,module,exports){
var RouteService = module.exports = function () {
    return 'http://localhost:8080/';
};
},{}],3:[function(require,module,exports){
var app =  angular.module('app', ['ui.router', 'ui.bootstrap', 'ngGrid', 'pascalprecht.translate', 'app.controllers', 'app.services', 'app.directives']);

app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            views: {
                content: {
                    templateUrl: "views/login.html",
                    controller: 'LoginCtrl as ctrl'
                }
            }
        }).state('main-content', {
            abstract: true,
            views: {
                'footer': {
                    templateUrl: 'views/footer.html'
                },
                'header': {
                    templateUrl: 'views/header.html',
                    controller: 'HeaderCtrl as ctrl'
                },
                'content': {
                    templateUrl: 'views/main-content.html'
                }
            }
        }).state('menu', {
            url: "/menu",
            parent: "main-content",
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl as ctrl'
        }).state('meal', {
            url: "/meal",
            parent: "main-content",
            templateUrl: '../../views/meal.html',
            controller: 'MealCtrl as ctrl'
        }).state('addmeal', {
            url: "/meal/add",
            parent: "main-content",
            templateUrl: '../../views/add-meal.html',
            controller: 'AddMealCtrl as ctrl'
        }).state('swaddle', {
            url: "/swaddle",
            parent: "main-content",
            templateUrl: 'views/swaddle.html',
            controller: 'SwaddleCtrl as ctrl'
        }).state('insulinDosage', {
            url: "/insulin/insulinDosage",
            parent: "main-content",
            templateUrl: '../../views/insulinDosage.html',
            controller: 'InsulinDosageCtrl as ctrl'
        }).state('addinsulinDosage', {
            url: "/insulin/add-insulinDosage",
            parent: "main-content",
            templateUrl: '../../views/add-insulinDosage.html',
            controller: 'AddInsulinDosageCtrl as ctrl'
        }).state('observation', {
            url: "/observation",
            parent: "main-content",
            templateUrl: '../../views/observation.html',
            controller: 'ObservationCtrl as ctrl'
        }).state('addobservation', {
            url: "/addobservation",
            parent: "main-content",
            templateUrl: '../../views/add-observation.html',
            controller: 'AddObservationCtrl as ctrl'
        })
}).config(['$httpProvider', function ($httpProvider) {
    // Autorisation des cookies pour les requétes CORS
    $httpProvider.defaults.withCredentials = true;
}]).config(['$translateProvider', function($translateProvider) {
    $translateProvider.preferredLanguage('fr');
    $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        suffix: '.json'
    });
}]);
},{}],4:[function(require,module,exports){
'user strict';

var moduleController = angular.module('app.controllers', []);

moduleController.controller("LoginCtrl", require('./controllers/LoginCtrl'));
moduleController.controller("HeaderCtrl", require('./controllers/HeaderCtrl'));
moduleController.controller("BoarderCtrl", require('./controllers/BoarderCtrl'));
moduleController.controller("MenuCtrl", require('./controllers/MenuCtrl'));
moduleController.controller("MealCtrl", require('./controllers/MealCtrl'));
moduleController.controller("AddMealCtrl", require('./controllers/AddMealCtrl'));
moduleController.controller("SwaddleCtrl", require('./controllers/SwaddleCtrl'));
moduleController.controller("InsulinDosageCtrl", require('./controllers/InsulinDosageCtrl'));
moduleController.controller("AddInsulinDosageCtrl", require('./controllers/AddInsulinDosageCtrl'));
moduleController.controller("ObservationCtrl", require('./controllers/ObservationCtrl'));
moduleController.controller("AddObservationCtrl", require('./controllers/AddObservationCtrl'));



//moduleController.controller("InsulinTakingCtrl", require('./controllers/InsulinTakingCtrl'));
//moduleController.controller("AddInsulinTakingCtrl", require('./controllers/AddInsulinTakingCtrl'));

},{"./controllers/AddInsulinDosageCtrl":5,"./controllers/AddMealCtrl":6,"./controllers/AddObservationCtrl":7,"./controllers/BoarderCtrl":9,"./controllers/HeaderCtrl":10,"./controllers/InsulinDosageCtrl":11,"./controllers/LoginCtrl":12,"./controllers/MealCtrl":13,"./controllers/MenuCtrl":14,"./controllers/ObservationCtrl":15,"./controllers/SwaddleCtrl":16}],5:[function(require,module,exports){
var InsulinDosageCtrl = module.exports = function ($scope, InsulinDosageService) {
    this.$scope = $scope;
    this.InsulinDosageService = InsulinDosageService;
    $scope.date = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = false;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.changed = function () {
        console.log('Time changed to: ' + $scope.date);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };

};

InsulinDosageCtrl.prototype.ajouterInsulinDosage = function() {
    this.InsulinDosageService.addInsulinDosage(this.$scope.selectedBoarders[0].id, this.$scope.date.getMilliseconds(), this.$scope.dosage).then(function () {});
};

//InsulinDosageCtrl.prototype.getInsulinDosages = function() {
//    this.InsulinDosageService.getInsulinDosages().then(function () {});
//};

},{}],6:[function(require,module,exports){
var AddMealCtrl = module.exports = function ($scope, MealService) {
    this.$scope = $scope;
    this.MealService = MealService;
    $scope.date = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = false;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.changed = function () {
        console.log('Time changed to: ' + $scope.date);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };
};

AddMealCtrl.prototype.ajouterMeal = function() {
    this.MealService.addMeal(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime()).then(function () {});
};
},{}],7:[function(require,module,exports){
var AddObservationCtrl = module.exports = function ($scope, ObservationService) {
    this.$scope = $scope;
    this.ObservationService = ObservationService;
    $scope.date = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = false;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.changed = function () {
        console.log('Time changed to: ' + $scope.date);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };
};

AddObservationCtrl.prototype.ajouterObservation = function() {
    this.ObservationService.addObservation(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(), this.$scope.comment).then(function () {});
};
},{}],8:[function(require,module,exports){
var AddSwaddleCtrl = module.exports = function ($scope, SwaddleService) {
    this.$scope = $scope;
    this.SwaddleService = SwaddleService;
    $scope.date = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = false;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.changed = function () {
        console.log('Time changed to: ' + $scope.date);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };
};

AddSwaddleCtrl.prototype.ajouterSwaddle = function() {
    this.SwaddleService.addSwaddle(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime()).then(function () {});
};
},{}],9:[function(require,module,exports){
var BoarderCtrl = module.exports = function ($scope, BoarderService) {

    $scope.gridOptions = {
        i18n: 'fr',
        data: 'data',
        columnDefs: [
            {
                field : 'name',
                displayName : 'Nom'
            },
            {
                field : 'surname',
                displayName : 'Prénom'
            },
            {
                field : 'room',
                displayName : 'Chambre'
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: false,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: false
    };

    BoarderService.getBoarders().then(function (data) {
        $scope.data = data;
    });
};

},{}],10:[function(require,module,exports){
var HeaderCtrl = module.exports = function (LoginService, $state) {
    this.LoginService = LoginService;
    this.$state = $state;
};

HeaderCtrl.prototype.disconnect  = function () {
    this.LoginService.doLogout();
    this.$state.go("login");
};
},{}],11:[function(require,module,exports){
var InsulinDosageCtrl = module.exports = function ($scope, InsulinDosageService) {
    $scope = $scope;


    $scope.gridOptions = {
        i18n: 'fr',
        data: 'data',
        columnDefs: [
            {
                field : 'boarder.name',
                displayName : 'Pensionnaire'
            },
            {
                field : 'user.name',
                displayName : 'Personnel'
            },
            {
                field : 'dosage',
                displayName : 'Dosage (en unité)'
            },
            {
                field : 'date',
                displayName : 'Date'
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: false,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    InsulinDosageService.getInsulinDosages().then(function (data) {
        $scope.data = data.map(function(insulinDosage) {
            insulinDosage.date = new Date(insulinDosage.date);
            return insulinDosage;
        });
    });
};
},{}],12:[function(require,module,exports){
var LoginCtrl = module.exports = function ($scope, $translate, $state, LoginService) {
    $scope.email = "";
    $scope.password = "";
    $scope.rememberMe = false;
    $scope.errormsg = "";

    if(LoginService.isLog()) {
        $state.go("main");
    }

    $scope.connexion = function () {
        if($scope.email === undefined || $scope.password === undefined) {
            $scope.errormsg = $translate('login.message.error');
        }else {
            LoginService.doLogin($scope.email, $scope.password, $scope.rememberMe).then(
                function (isOk) {
                    if (isOk) {
                        $state.go("menu");
                    } else {
                        $scope.errormsg = $translate('login.message.error');
                    }
                }
            );
        }
    }
}
},{}],13:[function(require,module,exports){
var MealCtrl = module.exports = function ($scope, MealService) {
    $scope = $scope;


    $scope.gridOptions = {
        i18n: 'fr',
        data: 'data',
        columnDefs: [
            {
                field : 'boarder.name',
                displayName : 'Pensionnaire'
            },
            {
                field : 'user.name',
                displayName : 'Personnel'
            },
            {
                field : 'date',
                displayName : 'Date'
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: false,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    MealService.getMeals().then(function (data) {
        $scope.data = data.map(function(meal) {
            meal.date = new Date(meal.date);
            return meal;
        });
    });
};
},{}],14:[function(require,module,exports){
var MenuCtrl = module.exports = function ($scope) {

    $scope.permission = {};
    $scope.permission.meal = true;
    $scope.permission.swaddle = true;

}
},{}],15:[function(require,module,exports){
var ObservationCtrl = module.exports = function ($scope, ObservationService) {
    $scope = $scope;


    $scope.gridOptions = {
        i18n: 'fr',
        data: 'data',
        columnDefs: [
            {
                field : 'boarder.name',
                displayName : 'Pensionnaire'
            },
            {
                field : 'user.name',
                displayName : 'Personnel'
            },
            {
                field : 'comment',
                displayName : 'Observation'
            },
            {
                field : 'date',
                displayName : 'Date'
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: false,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    ObservationService.getObservations().then(function (data) {
        $scope.data = data.map(function(observation) {
            observation.date = new Date(observation.date);
            return observation;
        });
    });
};
},{}],16:[function(require,module,exports){
var SwaddleCtrl = module.exports = function ($scope, SwaddleService) {
    $scope = $scope;


    $scope.gridOptions = {
        i18n: 'fr',
        data: 'data',
        columnDefs: [
            {
                field : 'boarder.name',
                displayName : 'Pensionnaire'
            },
            {
                field : 'user.name',
                displayName : 'Personnel'
            },
            {
                field : 'date',
                displayName : 'Date'
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: false,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    SwaddleService.getSwaddles().then(function (data) {
        $scope.data = data.map(function(swaddle) {
            swaddle.date = new Date(swaddle.date);
            return swaddle;
        });
    });
};
},{}],17:[function(require,module,exports){
'user strict';

var moduleDirective = angular.module('app.directives', ['app.services']);

moduleDirective.directive("boarderlist", require("./directives/BoarderListDirective"));

},{"./directives/BoarderListDirective":18}],18:[function(require,module,exports){
var BoarderListDirective = module.exports =  function(BoarderService) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selectedBoarders: "="
        },
        controller: "BoarderCtrl",
        templateUrl: 'views/directives/boarderlist.html',
        link: function (scope) {
            console.log(scope);
        }
    };
};
},{}],19:[function(require,module,exports){
'user strict';
var RouteService = require('RouteService');

var moduleService = angular.module('app.services', []);

moduleService.constant('SERVER_ROOT', RouteService());
moduleService.service("LoginService", require('./services/LoginService'));
moduleService.service("BoarderService", require('./services/BoarderService'));
moduleService.service("MealService", require('./services/MealService'));
moduleService.service("SwaddleService", require('./services/SwaddleService'));
moduleService.service("InsulinDosageService", require('./services/InsulinDosageService'));
moduleService.service("ObservationService", require('./services/ObservationService'));

//moduleService.service("InsulinTakingService", require('./services/InsulinTakingService'));

},{"./services/BoarderService":20,"./services/InsulinDosageService":21,"./services/LoginService":22,"./services/MealService":23,"./services/ObservationService":24,"./services/SwaddleService":25,"RouteService":"6YVD1J"}],20:[function(require,module,exports){
var BoarderService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

BoarderService.prototype.getBoarders = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'boarder/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],21:[function(require,module,exports){
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
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinDosageService.prototype.getInsulinDosages = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinDosage/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};

},{}],22:[function(require,module,exports){
var LoginService = module.exports = function (SERVER_ROOT, $http, $q) {
    this._user = null;
    this._userRights = null;
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
    this.username = null;
    this.password = null;
};

LoginService.prototype.isLog = function () {
    if(this.username != null && this.password != null) {
        return true;
    } else {
        return false;
    }
}
//TODO : Promise vraiment nécessaire ?
LoginService.prototype.doLogin = function (username, password, rememberMe) {
    var _this = this;
    var data = "username=" + username +
        "&password=" + password;
    return this.$http.post(this.SERVER_ROOT + 'login', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (data) {
        if(data.status == 202) {
            _this.username = username;
            _this.password = password;
            var defer = _this.$q.defer();
            defer.resolve(true);
            return defer.promise;
        }
    }).catch(function (data) {
        var defer2 = _this.$q.defer();
        defer2.resolve(false);
        return defer2.promise;
    });
};

LoginService.prototype.doLogout = function () {
    this.username = null;
    this.password = null;
};
},{}],23:[function(require,module,exports){
var MealService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

MealService.prototype.addMeal = function (idBoarder, date) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date;
    return this.$http.post(this.SERVER_ROOT + 'meal', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MealService.prototype.getMeals = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'meal/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],24:[function(require,module,exports){
var ObservationService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

ObservationService.prototype.addObservation = function (idBoarder, date, comment) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&comment" + comment;
    return this.$http.post(this.SERVER_ROOT + 'observation', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ObservationService.prototype.getObservations = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'observation/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],25:[function(require,module,exports){
var SwaddleService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

MealService.prototype.addMeal = function (idBoarder, date) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date;
    return this.$http.post(this.SERVER_ROOT + 'meal', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MealService.prototype.getMeals = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'meal/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}]},{},[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFtc1xcV2ViU3Rvcm1Qcm9qZWN0XFxURkVDbGllbnRcXG5vZGVfbW9kdWxlc1xcZ3J1bnQtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL2NvbmZpZy9kZXYvUm91dGVTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvYXBwbGljYXRpb24uanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5Eb3NhZ2VDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkTWVhbEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRPYnNlcnZhdGlvbkN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRTd2FkZGxlQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0JvYXJkZXJDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSGVhZGVyQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2VDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTG9naW5DdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTWVhbEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9NZW51Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL09ic2VydmF0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1N3YWRkbGVDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvZGlyZWN0aXZlcy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2RpcmVjdGl2ZXMvQm9hcmRlckxpc3REaXJlY3RpdmUuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0JvYXJkZXJTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSW5zdWxpbkRvc2FnZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9NZWFsU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL09ic2VydmF0aW9uU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1N3YWRkbGVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUm91dGVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xyXG59OyIsInZhciBhcHAgPSAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICduZ0dyaWQnLCAncGFzY2FscHJlY2h0LnRyYW5zbGF0ZScsICdhcHAuY29udHJvbGxlcnMnLCAnYXBwLnNlcnZpY2VzJywgJ2FwcC5kaXJlY3RpdmVzJ10pO1xyXG5cclxuYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAvLyBGb3IgYW55IHVubWF0Y2hlZCB1cmwsIHJlZGlyZWN0IHRvIC9zdGF0ZTFcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvbG9naW5cIik7XHJcbiAgICAvL1xyXG4gICAgLy8gTm93IHNldCB1cCB0aGUgc3RhdGVzXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbG9naW5cIixcclxuICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9sb2dpbi5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhdGUoJ21haW4tY29udGVudCcsIHtcclxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAnZm9vdGVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9vdGVyLmh0bWwnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2hlYWRlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hlYWRlci5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdjb250ZW50Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbi1jb250ZW50Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdGF0ZSgnbWVudScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tZW51XCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tZW51Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVudUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnbWVhbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tZWFsXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9tZWFsLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVhbEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkbWVhbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tZWFsL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLW1lYWwuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRNZWFsQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdzd2FkZGxlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3N3YWRkbGVcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3N3YWRkbGUuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTd2FkZGxlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbnN1bGluRG9zYWdlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW4vaW5zdWxpbkRvc2FnZVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvaW5zdWxpbkRvc2FnZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luc3VsaW5Eb3NhZ2VDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGluc3VsaW5Eb3NhZ2UnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5zdWxpbi9hZGQtaW5zdWxpbkRvc2FnZVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWluc3VsaW5Eb3NhZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRJbnN1bGluRG9zYWdlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdvYnNlcnZhdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9vYnNlcnZhdGlvblwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3Mvb2JzZXJ2YXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPYnNlcnZhdGlvbkN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkb2JzZXJ2YXRpb24nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvYWRkb2JzZXJ2YXRpb25cIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1vYnNlcnZhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZE9ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pXHJcbn0pLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCBmdW5jdGlvbiAoJGh0dHBQcm92aWRlcikge1xyXG4gICAgLy8gQXV0b3Jpc2F0aW9uIGRlcyBjb29raWVzIHBvdXIgbGVzIHJlcXXDqXRlcyBDT1JTXHJcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbn1dKS5jb25maWcoWyckdHJhbnNsYXRlUHJvdmlkZXInLCBmdW5jdGlvbigkdHJhbnNsYXRlUHJvdmlkZXIpIHtcclxuICAgICR0cmFuc2xhdGVQcm92aWRlci5wcmVmZXJyZWRMYW5ndWFnZSgnZnInKTtcclxuICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VTdGF0aWNGaWxlc0xvYWRlcih7XHJcbiAgICAgICAgcHJlZml4OiAnbGFuZ3VhZ2VzLycsXHJcbiAgICAgICAgc3VmZml4OiAnLmpzb24nXHJcbiAgICB9KTtcclxufV0pOyIsIid1c2VyIHN0cmljdCc7XHJcblxyXG52YXIgbW9kdWxlQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSk7XHJcblxyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJMb2dpbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9Mb2dpbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkhlYWRlckN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9IZWFkZXJDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJCb2FyZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0JvYXJkZXJDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJNZW51Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL01lbnVDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJNZWFsQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL01lYWxDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRNZWFsQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZE1lYWxDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJTd2FkZGxlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1N3YWRkbGVDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5Eb3NhZ2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJPYnNlcnZhdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9PYnNlcnZhdGlvbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZE9ic2VydmF0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZE9ic2VydmF0aW9uQ3RybCcpKTtcclxuXHJcblxyXG5cclxuLy9tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbnN1bGluVGFraW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5UYWtpbmdDdHJsJykpO1xyXG4vL21vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluc3VsaW5UYWtpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSW5zdWxpblRha2luZ0N0cmwnKSk7XHJcbiIsInZhciBJbnN1bGluRG9zYWdlQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5zdWxpbkRvc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZSA9IEluc3VsaW5Eb3NhZ2VTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbkluc3VsaW5Eb3NhZ2VDdHJsLnByb3RvdHlwZS5ham91dGVySW5zdWxpbkRvc2FnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZS5hZGRJbnN1bGluRG9zYWdlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRoaXMuJHNjb3BlLmRvc2FnZSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbn07XHJcblxyXG4vL0luc3VsaW5Eb3NhZ2VDdHJsLnByb3RvdHlwZS5nZXRJbnN1bGluRG9zYWdlcyA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICB0aGlzLkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLmdldEluc3VsaW5Eb3NhZ2VzKCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbi8vfTtcclxuIiwidmFyIEFkZE1lYWxDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBNZWFsU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLk1lYWxTZXJ2aWNlID0gTWVhbFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRNZWFsQ3RybC5wcm90b3R5cGUuYWpvdXRlck1lYWwgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuTWVhbFNlcnZpY2UuYWRkTWVhbCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbn07IiwidmFyIEFkZE9ic2VydmF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgT2JzZXJ2YXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuT2JzZXJ2YXRpb25TZXJ2aWNlID0gT2JzZXJ2YXRpb25TZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkT2JzZXJ2YXRpb25DdHJsLnByb3RvdHlwZS5ham91dGVyT2JzZXJ2YXRpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuT2JzZXJ2YXRpb25TZXJ2aWNlLmFkZE9ic2VydmF0aW9uKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLCB0aGlzLiRzY29wZS5jb21tZW50KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTsiLCJ2YXIgQWRkU3dhZGRsZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFN3YWRkbGVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuU3dhZGRsZVNlcnZpY2UgPSBTd2FkZGxlU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFN3YWRkbGVDdHJsLnByb3RvdHlwZS5ham91dGVyU3dhZGRsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5Td2FkZGxlU2VydmljZS5hZGRTd2FkZGxlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTsiLCJ2YXIgQm9hcmRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJvYXJkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdOb20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3N1cm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUHLDqW5vbSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAncm9vbScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdDaGFtYnJlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgQm9hcmRlclNlcnZpY2UuZ2V0Qm9hcmRlcnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsInZhciBIZWFkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTG9naW5TZXJ2aWNlLCAkc3RhdGUpIHtcclxuICAgIHRoaXMuTG9naW5TZXJ2aWNlID0gTG9naW5TZXJ2aWNlO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbn07XHJcblxyXG5IZWFkZXJDdHJsLnByb3RvdHlwZS5kaXNjb25uZWN0ICA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuTG9naW5TZXJ2aWNlLmRvTG9nb3V0KCk7XHJcbiAgICB0aGlzLiRzdGF0ZS5nbyhcImxvZ2luXCIpO1xyXG59OyIsInZhciBJbnN1bGluRG9zYWdlQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5zdWxpbkRvc2FnZVNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZG9zYWdlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0Rvc2FnZSAoZW4gdW5pdMOpKSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBJbnN1bGluRG9zYWdlU2VydmljZS5nZXRJbnN1bGluRG9zYWdlcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGluc3VsaW5Eb3NhZ2UpIHtcclxuICAgICAgICAgICAgaW5zdWxpbkRvc2FnZS5kYXRlID0gbmV3IERhdGUoaW5zdWxpbkRvc2FnZS5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3VsaW5Eb3NhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgTG9naW5DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkdHJhbnNsYXRlLCAkc3RhdGUsIExvZ2luU2VydmljZSkge1xyXG4gICAgJHNjb3BlLmVtYWlsID0gXCJcIjtcclxuICAgICRzY29wZS5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAkc2NvcGUucmVtZW1iZXJNZSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVycm9ybXNnID0gXCJcIjtcclxuXHJcbiAgICBpZihMb2dpblNlcnZpY2UuaXNMb2coKSkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhcIm1haW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmNvbm5leGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZigkc2NvcGUuZW1haWwgPT09IHVuZGVmaW5lZCB8fCAkc2NvcGUucGFzc3dvcmQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZXJyb3Jtc2cgPSAkdHJhbnNsYXRlKCdsb2dpbi5tZXNzYWdlLmVycm9yJyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBMb2dpblNlcnZpY2UuZG9Mb2dpbigkc2NvcGUuZW1haWwsICRzY29wZS5wYXNzd29yZCwgJHNjb3BlLnJlbWVtYmVyTWUpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXNPaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbyhcIm1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVycm9ybXNnID0gJHRyYW5zbGF0ZSgnbG9naW4ubWVzc2FnZS5lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ2YXIgTWVhbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE1lYWxTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgTWVhbFNlcnZpY2UuZ2V0TWVhbHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihtZWFsKSB7XHJcbiAgICAgICAgICAgIG1lYWwuZGF0ZSA9IG5ldyBEYXRlKG1lYWwuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIE1lbnVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24gPSB7fTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLm1lYWwgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uc3dhZGRsZSA9IHRydWU7XHJcblxyXG59IiwidmFyIE9ic2VydmF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgT2JzZXJ2YXRpb25TZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnT2JzZXJ2YXRpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgT2JzZXJ2YXRpb25TZXJ2aWNlLmdldE9ic2VydmF0aW9ucygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uLmRhdGUgPSBuZXcgRGF0ZShvYnNlcnZhdGlvbi5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmF0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFN3YWRkbGVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBTd2FkZGxlU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIFN3YWRkbGVTZXJ2aWNlLmdldFN3YWRkbGVzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oc3dhZGRsZSkge1xyXG4gICAgICAgICAgICBzd2FkZGxlLmRhdGUgPSBuZXcgRGF0ZShzd2FkZGxlLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3dhZGRsZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsIid1c2VyIHN0cmljdCc7XHJcblxyXG52YXIgbW9kdWxlRGlyZWN0aXZlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgWydhcHAuc2VydmljZXMnXSk7XHJcblxyXG5tb2R1bGVEaXJlY3RpdmUuZGlyZWN0aXZlKFwiYm9hcmRlcmxpc3RcIiwgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9Cb2FyZGVyTGlzdERpcmVjdGl2ZVwiKSk7XHJcbiIsInZhciBCb2FyZGVyTGlzdERpcmVjdGl2ZSA9IG1vZHVsZS5leHBvcnRzID0gIGZ1bmN0aW9uKEJvYXJkZXJTZXJ2aWNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJvYXJkZXJzOiBcIj1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlcjogXCJCb2FyZGVyQ3RybFwiLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9ib2FyZGVybGlzdC5odG1sJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07IiwiJ3VzZXIgc3RyaWN0JztcclxudmFyIFJvdXRlU2VydmljZSA9IHJlcXVpcmUoJ1JvdXRlU2VydmljZScpO1xyXG5cclxudmFyIG1vZHVsZVNlcnZpY2UgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xyXG5cclxubW9kdWxlU2VydmljZS5jb25zdGFudCgnU0VSVkVSX1JPT1QnLCBSb3V0ZVNlcnZpY2UoKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkxvZ2luU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0xvZ2luU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiQm9hcmRlclNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Cb2FyZGVyU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiTWVhbFNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9NZWFsU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiU3dhZGRsZVNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Td2FkZGxlU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiSW5zdWxpbkRvc2FnZVNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9JbnN1bGluRG9zYWdlU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiT2JzZXJ2YXRpb25TZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvT2JzZXJ2YXRpb25TZXJ2aWNlJykpO1xyXG5cclxuLy9tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbnN1bGluVGFraW5nU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0luc3VsaW5UYWtpbmdTZXJ2aWNlJykpO1xyXG4iLCJ2YXIgQm9hcmRlclNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Cb2FyZGVyU2VydmljZS5wcm90b3R5cGUuZ2V0Qm9hcmRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYm9hcmRlci9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSW5zdWxpbkRvc2FnZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5JbnN1bGluRG9zYWdlU2VydmljZS5wcm90b3R5cGUuYWRkSW5zdWxpbkRvc2FnZSA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGRvc2FnZSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluRG9zYWdlJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5JbnN1bGluRG9zYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdWxpbkRvc2FnZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5zdWxpbkRvc2FnZS9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuIiwidmFyIExvZ2luU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuX3VzZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fdXNlclJpZ2h0cyA9IG51bGw7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gbnVsbDtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xyXG59O1xyXG5cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5pc0xvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKHRoaXMudXNlcm5hbWUgIT0gbnVsbCAmJiB0aGlzLnBhc3N3b3JkICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8vVE9ETyA6IFByb21pc2UgdnJhaW1lbnQgbsOpY2Vzc2FpcmUgP1xyXG5Mb2dpblNlcnZpY2UucHJvdG90eXBlLmRvTG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlck1lKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcInVzZXJuYW1lPVwiICsgdXNlcm5hbWUgK1xyXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgcGFzc3dvcmQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbG9naW4nLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gMjAyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgICAgIF90aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIHZhciBkZWZlciA9IF90aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIGRlZmVyMiA9IF90aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXIyLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcjIucHJvbWlzZTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5kb0xvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudXNlcm5hbWUgPSBudWxsO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XHJcbn07IiwidmFyIE1lYWxTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuTWVhbFNlcnZpY2UucHJvdG90eXBlLmFkZE1lYWwgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ21lYWwnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbk1lYWxTZXJ2aWNlLnByb3RvdHlwZS5nZXRNZWFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdtZWFsL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBPYnNlcnZhdGlvblNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5PYnNlcnZhdGlvblNlcnZpY2UucHJvdG90eXBlLmFkZE9ic2VydmF0aW9uID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgY29tbWVudCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImY29tbWVudFwiICsgY29tbWVudDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdvYnNlcnZhdGlvbicsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuT2JzZXJ2YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnb2JzZXJ2YXRpb24vYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIFN3YWRkbGVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuTWVhbFNlcnZpY2UucHJvdG90eXBlLmFkZE1lYWwgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ21lYWwnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbk1lYWxTZXJ2aWNlLnByb3RvdHlwZS5nZXRNZWFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdtZWFsL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyJdfQ==
