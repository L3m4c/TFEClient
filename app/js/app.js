require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"RouteService":[function(require,module,exports){
module.exports=require('6YVD1J');
},{}],"6YVD1J":[function(require,module,exports){
var RouteService = module.exports = function () {
    return 'http://localhost:8080/';
};
},{}],3:[function(require,module,exports){
var app =  angular.module('app', ['ui.router','ngGrid', 'pascalprecht.translate', 'app.controllers', 'app.services']);

app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/",
            templateUrl: "views/login.html",
            controller: 'LoginCtrl'
        }).state('main', {
            url: "/main",
            templateUrl: "views/main.html",
            controller: 'MainCtrl'
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
moduleController.controller("MainCtrl", require('./controllers/MainCtrl'));
},{"./controllers/LoginCtrl":5,"./controllers/MainCtrl":6}],5:[function(require,module,exports){
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
                        $state.go("main");
                    } else {
                        $scope.errormsg = $translate('login.message.error');
                    }
                }
            );
        }
    }
}
},{}],6:[function(require,module,exports){
/**
 * Created by Samuel on 15/08/2014.
 */
var MainCtrl = module.exports = function ($scope, LoginService, BoarderService) {

    BoarderService.getBoarders().then(function (data) {
       $scope.data = data;
    });

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

    $scope.disconnect  = function () {
        LoginService.doLogout();
    };
};
},{}],7:[function(require,module,exports){
'user strict';
var RouteService = require('RouteService');

var moduleService = angular.module('app.services', []);

moduleService.constant('SERVER_ROOT', RouteService());
moduleService.service("LoginService", require('./services/LoginService'));
moduleService.service("BoarderService", require('./services/BoarderService'));
},{"./services/BoarderService":8,"./services/LoginService":9,"RouteService":"6YVD1J"}],8:[function(require,module,exports){
/**
 * Created by Samuel on 15/08/2014.
 */
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
},{}],9:[function(require,module,exports){
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
},{}]},{},[3,4,5,6,7,8,9])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2FtdWVsXFxXZWJzdG9ybVByb2plY3RzXFxURkUgY2xpZW50XFxub2RlX21vZHVsZXNcXGdydW50LWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvY29uZmlnL2Rldi9Sb3V0ZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvYXBwbGljYXRpb24uanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTG9naW5DdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL01haW5DdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0JvYXJkZXJTZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0xvZ2luU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJvdXRlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0OjgwODAvJztcclxufTsiLCJ2YXIgYXBwID0gIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsJ25nR3JpZCcsICdwYXNjYWxwcmVjaHQudHJhbnNsYXRlJywgJ2FwcC5jb250cm9sbGVycycsICdhcHAuc2VydmljZXMnXSk7XHJcblxyXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgIC8vIEZvciBhbnkgdW5tYXRjaGVkIHVybCwgcmVkaXJlY3QgdG8gL3N0YXRlMVxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9cIik7XHJcbiAgICAvL1xyXG4gICAgLy8gTm93IHNldCB1cCB0aGUgc3RhdGVzXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2xvZ2luLmh0bWxcIixcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnbWFpbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tYWluXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL21haW4uaHRtbFwiLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXHJcbiAgICAgICAgfSlcclxufSkuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsIGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XHJcbiAgICAvLyBBdXRvcmlzYXRpb24gZGVzIGNvb2tpZXMgcG91ciBsZXMgcmVxdcOpdGVzIENPUlNcclxuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxufV0pLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCR0cmFuc2xhdGVQcm92aWRlcikge1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdmcicpO1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcclxuICAgICAgICBwcmVmaXg6ICdsYW5ndWFnZXMvJyxcclxuICAgICAgICBzdWZmaXg6ICcuanNvbidcclxuICAgIH0pO1xyXG59XSk7IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcclxuXHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0xvZ2luQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiTWFpbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9NYWluQ3RybCcpKTsiLCJ2YXIgTG9naW5DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkdHJhbnNsYXRlLCAkc3RhdGUsIExvZ2luU2VydmljZSkge1xyXG4gICAgJHNjb3BlLmVtYWlsID0gXCJcIjtcclxuICAgICRzY29wZS5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAkc2NvcGUucmVtZW1iZXJNZSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVycm9ybXNnID0gXCJcIjtcclxuXHJcbiAgICBpZihMb2dpblNlcnZpY2UuaXNMb2coKSkge1xyXG4gICAgICAgICRzdGF0ZS5nbyhcIm1haW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmNvbm5leGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZigkc2NvcGUuZW1haWwgPT09IHVuZGVmaW5lZCB8fCAkc2NvcGUucGFzc3dvcmQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZXJyb3Jtc2cgPSAkdHJhbnNsYXRlKCdsb2dpbi5tZXNzYWdlLmVycm9yJyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBMb2dpblNlcnZpY2UuZG9Mb2dpbigkc2NvcGUuZW1haWwsICRzY29wZS5wYXNzd29yZCwgJHNjb3BlLnJlbWVtYmVyTWUpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXNPaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbyhcIm1haW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVycm9ybXNnID0gJHRyYW5zbGF0ZSgnbG9naW4ubWVzc2FnZS5lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQ3JlYXRlZCBieSBTYW11ZWwgb24gMTUvMDgvMjAxNC5cclxuICovXHJcbnZhciBNYWluQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgTG9naW5TZXJ2aWNlLCBCb2FyZGVyU2VydmljZSkge1xyXG5cclxuICAgIEJvYXJkZXJTZXJ2aWNlLmdldEJvYXJkZXJzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdOb20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3N1cm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUHLDqW5vbSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAncm9vbScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdDaGFtYnJlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGlzY29ubmVjdCAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgTG9naW5TZXJ2aWNlLmRvTG9nb3V0KCk7XHJcbiAgICB9O1xyXG59OyIsIid1c2VyIHN0cmljdCc7XHJcbnZhciBSb3V0ZVNlcnZpY2UgPSByZXF1aXJlKCdSb3V0ZVNlcnZpY2UnKTtcclxuXHJcbnZhciBtb2R1bGVTZXJ2aWNlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcclxuXHJcbm1vZHVsZVNlcnZpY2UuY29uc3RhbnQoJ1NFUlZFUl9ST09UJywgUm91dGVTZXJ2aWNlKCkpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJMb2dpblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkJvYXJkZXJTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvQm9hcmRlclNlcnZpY2UnKSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgU2FtdWVsIG9uIDE1LzA4LzIwMTQuXHJcbiAqL1xyXG52YXIgQm9hcmRlclNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Cb2FyZGVyU2VydmljZS5wcm90b3R5cGUuZ2V0Qm9hcmRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYm9hcmRlci9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgTG9naW5TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy5fdXNlciA9IG51bGw7XHJcbiAgICB0aGlzLl91c2VyUmlnaHRzID0gbnVsbDtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxuICAgIHRoaXMudXNlcm5hbWUgPSBudWxsO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XHJcbn07XHJcblxyXG5Mb2dpblNlcnZpY2UucHJvdG90eXBlLmlzTG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYodGhpcy51c2VybmFtZSAhPSBudWxsICYmIHRoaXMucGFzc3dvcmQgIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuLy9UT0RPIDogUHJvbWlzZSB2cmFpbWVudCBuw6ljZXNzYWlyZSA/XHJcbkxvZ2luU2VydmljZS5wcm90b3R5cGUuZG9Mb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIHJlbWVtYmVyTWUpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwidXNlcm5hbWU9XCIgKyB1c2VybmFtZSArXHJcbiAgICAgICAgXCImcGFzc3dvcmQ9XCIgKyBwYXNzd29yZDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdsb2dpbicsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAyMDIpIHtcclxuICAgICAgICAgICAgX3RoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICAgICAgX3RoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICAgICAgdmFyIGRlZmVyID0gX3RoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICAgICAgZGVmZXIucmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB2YXIgZGVmZXIyID0gX3RoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICBkZWZlcjIucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVyMi5wcm9taXNlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Mb2dpblNlcnZpY2UucHJvdG90eXBlLmRvTG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy51c2VybmFtZSA9IG51bGw7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcclxufTsiXX0=
