require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"RouteService":[function(require,module,exports){
module.exports=require('6YVD1J');
},{}],"6YVD1J":[function(require,module,exports){
var RouteService = module.exports = function () {
    return 'http://localhost:8080/';
};
},{}],3:[function(require,module,exports){
var app =  angular.module('app', ['ui.router','ngGrid', 'pascalprecht.translate', 'app.controllers', 'app.services', 'app.directives']);

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
            templateUrl: 'views/meal.html',
            controller: 'MealCtrl as ctrl'
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
},{"./controllers/BoarderCtrl":5,"./controllers/HeaderCtrl":6,"./controllers/LoginCtrl":7,"./controllers/MealCtrl":8,"./controllers/MenuCtrl":9}],5:[function(require,module,exports){
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
        showGroupPanel: false
    };

    BoarderService.getBoarders().then(function (data) {
        $scope.data = data;
    });
};

},{}],6:[function(require,module,exports){
var HeaderCtrl = module.exports = function (LoginService, $state) {
    this.LoginService = LoginService;
    this.$state = $state;
};

HeaderCtrl.prototype.disconnect  = function () {
    this.LoginService.doLogout();
    this.$state.go("login");
};
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
var MealCtrl = module.exports = function ($scope) {

};
},{}],9:[function(require,module,exports){
var MenuCtrl = module.exports = function ($scope) {

    $scope.permission = {};
    $scope.permission.meal = true;

}
},{}],10:[function(require,module,exports){
'user strict';

var moduleDirective = angular.module('app.directives', ['app.services']);

moduleDirective.directive("boarderlist", require("./directives/BoarderListDirective"));

},{"./directives/BoarderListDirective":11}],11:[function(require,module,exports){
var BoarderListDirective = module.exports =  function(BoarderService) {
    return {
        restrict: 'E',
        transclude: true,
        scope: false,
        controller: "BoarderCtrl",
        templateUrl: 'views/directives/boarderlist.html'
    };
};
},{}],12:[function(require,module,exports){
'user strict';
var RouteService = require('RouteService');

var moduleService = angular.module('app.services', []);

moduleService.constant('SERVER_ROOT', RouteService());
moduleService.service("LoginService", require('./services/LoginService'));
moduleService.service("BoarderService", require('./services/BoarderService'));
},{"./services/BoarderService":13,"./services/LoginService":14,"RouteService":"6YVD1J"}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
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
},{}]},{},[3,4,5,6,7,8,9,10,11,12,13,14])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2FtdWVsXFxXZWJzdG9ybVByb2plY3RzXFxURkUgY2xpZW50XFxub2RlX21vZHVsZXNcXGdydW50LWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvY29uZmlnL2Rldi9Sb3V0ZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvYXBwbGljYXRpb24uanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQm9hcmRlckN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSGVhZGVyQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Mb2dpbkN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTWVhbEN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTWVudUN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvZGlyZWN0aXZlcy5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9kaXJlY3RpdmVzL0JvYXJkZXJMaXN0RGlyZWN0aXZlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0JvYXJkZXJTZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0xvZ2luU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUm91dGVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xyXG59OyIsInZhciBhcHAgPSAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJywnbmdHcmlkJywgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnLCAnYXBwLmNvbnRyb2xsZXJzJywgJ2FwcC5zZXJ2aWNlcycsICdhcHAuZGlyZWN0aXZlcyddKTtcclxuXHJcbmFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgLy8gRm9yIGFueSB1bm1hdGNoZWQgdXJsLCByZWRpcmVjdCB0byAvc3RhdGUxXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2xvZ2luXCIpO1xyXG4gICAgLy9cclxuICAgIC8vIE5vdyBzZXQgdXAgdGhlIHN0YXRlc1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbG9naW4uaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgY3RybCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXRlKCdtYWluLWNvbnRlbnQnLCB7XHJcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgJ2Zvb3Rlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zvb3Rlci5odG1sJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdoZWFkZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oZWFkZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckN0cmwgYXMgY3RybCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21haW4tY29udGVudC5odG1sJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhdGUoJ21lbnUnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVudVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWVudS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lbnVDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ21lYWwnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVhbFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWVhbC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lYWxDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSlcclxufSkuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsIGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XHJcbiAgICAvLyBBdXRvcmlzYXRpb24gZGVzIGNvb2tpZXMgcG91ciBsZXMgcmVxdcOpdGVzIENPUlNcclxuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxufV0pLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCR0cmFuc2xhdGVQcm92aWRlcikge1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdmcicpO1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcclxuICAgICAgICBwcmVmaXg6ICdsYW5ndWFnZXMvJyxcclxuICAgICAgICBzdWZmaXg6ICcuanNvbidcclxuICAgIH0pO1xyXG59XSk7IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcclxuXHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0xvZ2luQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiSGVhZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0hlYWRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkJvYXJkZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQm9hcmRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lbnVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVudUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lYWxDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVhbEN0cmwnKSk7IiwidmFyIEJvYXJkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBCb2FyZGVyU2VydmljZSkge1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnTm9tJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdzdXJuYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1Byw6lub20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3Jvb20nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnQ2hhbWJyZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgQm9hcmRlclNlcnZpY2UuZ2V0Qm9hcmRlcnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsInZhciBIZWFkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTG9naW5TZXJ2aWNlLCAkc3RhdGUpIHtcclxuICAgIHRoaXMuTG9naW5TZXJ2aWNlID0gTG9naW5TZXJ2aWNlO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbn07XHJcblxyXG5IZWFkZXJDdHJsLnByb3RvdHlwZS5kaXNjb25uZWN0ICA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuTG9naW5TZXJ2aWNlLmRvTG9nb3V0KCk7XHJcbiAgICB0aGlzLiRzdGF0ZS5nbyhcImxvZ2luXCIpO1xyXG59OyIsInZhciBMb2dpbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICR0cmFuc2xhdGUsICRzdGF0ZSwgTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUuZW1haWwgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICRzY29wZS5yZW1lbWJlck1lID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZXJyb3Jtc2cgPSBcIlwiO1xyXG5cclxuICAgIGlmKExvZ2luU2VydmljZS5pc0xvZygpKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKFwibWFpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuY29ubmV4aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCRzY29wZS5lbWFpbCA9PT0gdW5kZWZpbmVkIHx8ICRzY29wZS5wYXNzd29yZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5lcnJvcm1zZyA9ICR0cmFuc2xhdGUoJ2xvZ2luLm1lc3NhZ2UuZXJyb3InKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIExvZ2luU2VydmljZS5kb0xvZ2luKCRzY29wZS5lbWFpbCwgJHNjb3BlLnBhc3N3b3JkLCAkc2NvcGUucmVtZW1iZXJNZSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKFwibWVudVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXJyb3Jtc2cgPSAkdHJhbnNsYXRlKCdsb2dpbi5tZXNzYWdlLmVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInZhciBNZWFsQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxufTsiLCJ2YXIgTWVudUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgICAkc2NvcGUucGVybWlzc2lvbiA9IHt9O1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24ubWVhbCA9IHRydWU7XHJcblxyXG59IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVEaXJlY3RpdmUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbJ2FwcC5zZXJ2aWNlcyddKTtcclxuXHJcbm1vZHVsZURpcmVjdGl2ZS5kaXJlY3RpdmUoXCJib2FyZGVybGlzdFwiLCByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL0JvYXJkZXJMaXN0RGlyZWN0aXZlXCIpKTtcclxuIiwidmFyIEJvYXJkZXJMaXN0RGlyZWN0aXZlID0gbW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24oQm9hcmRlclNlcnZpY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiBmYWxzZSxcclxuICAgICAgICBjb250cm9sbGVyOiBcIkJvYXJkZXJDdHJsXCIsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2JvYXJkZXJsaXN0Lmh0bWwnXHJcbiAgICB9O1xyXG59OyIsIid1c2VyIHN0cmljdCc7XHJcbnZhciBSb3V0ZVNlcnZpY2UgPSByZXF1aXJlKCdSb3V0ZVNlcnZpY2UnKTtcclxuXHJcbnZhciBtb2R1bGVTZXJ2aWNlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcclxuXHJcbm1vZHVsZVNlcnZpY2UuY29uc3RhbnQoJ1NFUlZFUl9ST09UJywgUm91dGVTZXJ2aWNlKCkpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJMb2dpblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkJvYXJkZXJTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvQm9hcmRlclNlcnZpY2UnKSk7IiwidmFyIEJvYXJkZXJTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuQm9hcmRlclNlcnZpY2UucHJvdG90eXBlLmdldEJvYXJkZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2JvYXJkZXIvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIExvZ2luU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuX3VzZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fdXNlclJpZ2h0cyA9IG51bGw7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gbnVsbDtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xyXG59O1xyXG5cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5pc0xvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKHRoaXMudXNlcm5hbWUgIT0gbnVsbCAmJiB0aGlzLnBhc3N3b3JkICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8vVE9ETyA6IFByb21pc2UgdnJhaW1lbnQgbsOpY2Vzc2FpcmUgP1xyXG5Mb2dpblNlcnZpY2UucHJvdG90eXBlLmRvTG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlck1lKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcInVzZXJuYW1lPVwiICsgdXNlcm5hbWUgK1xyXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgcGFzc3dvcmQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbG9naW4nLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gMjAyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgICAgIF90aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIHZhciBkZWZlciA9IF90aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIGRlZmVyMiA9IF90aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXIyLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcjIucHJvbWlzZTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5kb0xvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudXNlcm5hbWUgPSBudWxsO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XHJcbn07Il19
