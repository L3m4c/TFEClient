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
        }).state('addswaddle', {
            url: "/swaddle/add",
            parent: "main-content",
            templateUrl: 'views/add-swaddle.html',
            controller: 'AddSwaddleCtrl as ctrl'
        }).state('insulinDosage', {
            url: "/insulinDosage",
            parent: "main-content",
            templateUrl: '../../views/insulinDosage.html',
            controller: 'InsulinDosageCtrl as ctrl'
        }).state('addinsulinDosage', {
            url: "/insulinDosage/add",
            parent: "main-content",
            templateUrl: '../../views/add-insulinDosage.html',
            controller: 'AddInsulinDosageCtrl as ctrl'
        }).state('observation', {
            url: "/observation",
            parent: "main-content",
            templateUrl: '../../views/observation.html',
            controller: 'ObservationCtrl as ctrl'
        }).state('addobservation', {
            url: "/observation/add",
            parent: "main-content",
            templateUrl: '../../views/add-observation.html',
            controller: 'AddObservationCtrl as ctrl'
        }).state('patch', {
            url: "/patch",
            parent: "main-content",
            templateUrl: '../../views/patch.html',
            controller: 'PatchCtrl as ctrl'
        }).state('addpatch', {
            url: "/patch/add",
            parent: "main-content",
            templateUrl: '../../views/add-patch.html',
            controller: 'AddPatchCtrl as ctrl'
        }).state('aerosol', {
            url: "/aerosol",
            parent: "main-content",
            templateUrl: '../../views/aerosol.html',
            controller: 'AerosolCtrl as ctrl'
        }).state('addaerosol', {
            url: "/aerosol/add",
            parent: "main-content",
            templateUrl: '../../views/add-aerosol.html',
            controller: 'AddAerosolCtrl as ctrl'
        }).state('wound', {
            url: "/wound",
            parent: "main-content",
            templateUrl: '../../views/wound.html',
            controller: 'WoundCtrl as ctrl'
        }).state('addwound', {
            url: "/wound/add",
            parent: "main-content",
            templateUrl: '../../views/add-wound.html',
            controller: 'AddWoundCtrl as ctrl'
        }).state('drugTreatment', {
            url: "/drugTreatment",
            parent: "main-content",
            templateUrl: '../../views/drugTreatment.html',
            controller: 'DrugTreatmentCtrl as ctrl'
        }).state('adddrugTreatment', {
            url: "/drugTreatment/add",
            parent: "main-content",
            templateUrl: '../../views/add-drugTreatment.html',
            controller: 'AddDrugTreatmentCtrl as ctrl'
        }).state('insulinTaking', {
            url: "/insulinTaking",
            parent: "main-content",
            templateUrl: '../../views/insulinTaking.html',
            controller: 'InsulinTakingCtrl as ctrl'
        }).state('addinsulinTaking', {
            url: "/insulinTaking/add",
            parent: "main-content",
            templateUrl: '../../views/add-insulinTaking.html',
            controller: 'AddInsulinTakingCtrl as ctrl'
        }).state('therapeutic', {
            url: "/therapeutic",
            parent: "main-content",
            templateUrl: '../../views/therapeutic.html',
            controller: 'TherapeuticCtrl as ctrl'
        }).state('addtherapeutic', {
            url: "/therapeutic/add",
            parent: "main-content",
            templateUrl: '../../views/add-therapeutic.html',
            controller: 'AddTherapeuticCtrl as ctrl'
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
moduleController.controller("AddSwaddleCtrl", require('./controllers/AddSwaddleCtrl'));
moduleController.controller("InsulinDosageCtrl", require('./controllers/InsulinDosageCtrl'));
moduleController.controller("AddInsulinDosageCtrl", require('./controllers/AddInsulinDosageCtrl'));
moduleController.controller("ObservationCtrl", require('./controllers/ObservationCtrl'));
moduleController.controller("AddObservationCtrl", require('./controllers/AddObservationCtrl'));
moduleController.controller("PatchCtrl", require('./controllers/PatchCtrl'));
moduleController.controller("AddPatchCtrl", require('./controllers/AddPatchCtrl'));
moduleController.controller("AerosolCtrl", require('./controllers/AerosolCtrl'));
moduleController.controller("AddAerosolCtrl", require('./controllers/AddAerosolCtrl'));
moduleController.controller("WoundCtrl", require('./controllers/WoundCtrl'));
moduleController.controller("AddWoundCtrl", require('./controllers/AddWoundCtrl'));
moduleController.controller("DrugTreatmentCtrl", require('./controllers/DrugTreatmentCtrl'));
moduleController.controller("AddDrugTreatmentCtrl", require('./controllers/AddDrugTreatmentCtrl'));
moduleController.controller("InsulinTakingCtrl", require('./controllers/InsulinTakingCtrl'));
moduleController.controller("AddInsulinTakingCtrl", require('./controllers/AddInsulinTakingCtrl'));
moduleController.controller("TherapeuticCtrl", require('./controllers/TherapeuticCtrl'));
moduleController.controller("AddTherapeuticCtrl", require('./controllers/AddTherapeuticCtrl'));

//moduleController.controller("InsulinTakingCtrl", require('./controllers/InsulinTakingCtrl'));
//moduleController.controller("AddInsulinTakingCtrl", require('./controllers/AddInsulinTakingCtrl'));

},{"./controllers/AddAerosolCtrl":5,"./controllers/AddDrugTreatmentCtrl":6,"./controllers/AddInsulinDosageCtrl":7,"./controllers/AddInsulinTakingCtrl":8,"./controllers/AddMealCtrl":9,"./controllers/AddObservationCtrl":10,"./controllers/AddPatchCtrl":11,"./controllers/AddSwaddleCtrl":12,"./controllers/AddTherapeuticCtrl":13,"./controllers/AddWoundCtrl":14,"./controllers/AerosolCtrl":15,"./controllers/BoarderCtrl":16,"./controllers/DrugTreatmentCtrl":17,"./controllers/HeaderCtrl":18,"./controllers/InsulinDosageCtrl":19,"./controllers/InsulinTakingCtrl":20,"./controllers/LoginCtrl":21,"./controllers/MealCtrl":22,"./controllers/MenuCtrl":23,"./controllers/ObservationCtrl":24,"./controllers/PatchCtrl":25,"./controllers/SwaddleCtrl":26,"./controllers/TherapeuticCtrl":27,"./controllers/WoundCtrl":28}],5:[function(require,module,exports){
var AddAerosolCtrl = module.exports = function ($scope, AerosolService) {
    this.$scope = $scope;
    this.AerosolService = AerosolService;
    $scope.date = new Date();
    //$scope.dateStart = new Date();
    //$scope.dateEnd = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";

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

AddAerosolCtrl.prototype.ajouterAerosol = function() {
    this.AerosolService.addAerosol(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit).then(function () {});
    // this.$scope.dateStart.getTime(),
    // this.$scope.dateEnd.getTime()

};
},{}],6:[function(require,module,exports){
var AddDrugTreatmentCtrl = module.exports = function ($scope, DrugTreatmentService) {
    this.$scope = $scope;
    this.DrugTreatmentService = DrugTreatmentService;
    $scope.date = new Date();
    //$scope.dateStart = new Date();
    //$scope.dateEnd = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";

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

AddDrugTreatmentCtrl.prototype.ajouterDrugTreatment = function() {
    this.DrugTreatmentService.addDrugTreatment(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit,
        this.$scope.morning, this.$scope.midday, this.$scope.evening, this.$scope.night).then(function () {});
    // this.$scope.dateStart.getTime(),
    // this.$scope.dateEnd.getTime()

};
},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
var InsulinTakingCtrl = module.exports = function ($scope, InsulinTakingService) {
    this.$scope = $scope;
    this.InsulinTakingService = InsulinTakingService;
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

InsulinTakingCtrl.prototype.ajouterInsulinTaking = function() {
    this.InsulinTakingService.addInsulinTaking(this.$scope.selectedBoarders[0].id, this.$scope.date.getMilliseconds(), this.$scope.glycemia).then(function () {});
};

//InsulinDosageCtrl.prototype.getInsulinDosages = function() {
//    this.InsulinDosageService.getInsulinDosages().then(function () {});
//};

},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
var AddObservationCtrl = module.exports = function ($scope, ObservationService) {
    this.$scope = $scope;
    this.ObservationService = ObservationService;
    $scope.date = new Date();
    $scope.comment = "";

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
},{}],11:[function(require,module,exports){
var AddPatchCtrl = module.exports = function ($scope, PatchService) {
    this.$scope = $scope;
    this.PatchService = PatchService;
    $scope.date = new Date();
    //$scope.dateStart = new Date();
    //$scope.dateEnd = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";

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

AddPatchCtrl.prototype.ajouterPatch = function() {
    this.PatchService.addPatch(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit).then(function () {});
       // this.$scope.dateStart.getTime(),
       // this.$scope.dateEnd.getTime()

};
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
var AddTherapeuticCtrl = module.exports = function ($scope, TherapeuticService) {
    this.$scope = $scope;
    this.TherapeuticService = TherapeuticService;
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

AddTherapeuticCtrl.prototype.ajouterTherapeutic = function() {
    this.TherapeuticService.addTherapeutic(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.preparation,
    this.$scope.adMorning,this.$scope.adMidday,this.$scope.adEvening,this.$scope.adNight).then(function () {});

};
},{}],14:[function(require,module,exports){
var AddWoundCtrl = module.exports = function ($scope, WoundService) {
    this.$scope = $scope;
    this.WoundService = WoundService;
    $scope.date = new Date();
    $scope.localisation = "";
    $scope.type = "";
    $scope.description = "";

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

AddWoundCtrl.prototype.ajouterWound = function() {
    this.WoundService.addWound(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.localisation,this.$scope.type,this.$scope.description).then(function () {});

};
},{}],15:[function(require,module,exports){
var AerosolCtrl = module.exports = function ($scope, AerosolService) {
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

    AerosolService.getAerosols().then(function (data) {
        $scope.data = data.map(function(aerosol) {
            aerosol.date = new Date(aerosol.date);
            return aerosol;
        });
    });
};
},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
var DrugTreatmentCtrl = module.exports = function ($scope, DrugTreatmentService) {
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
                field : 'morning',
                displayName : 'Matin'
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

    DrugTreatmentService.getDrugTreatments().then(function (data) {
        $scope.data = data.map(function(drugTreatment) {
            drugTreatment.date = new Date(drugTreatment.date);
            return drugTreatment;
        });
    });
};
},{}],18:[function(require,module,exports){
var HeaderCtrl = module.exports = function (LoginService, $state) {
    this.LoginService = LoginService;
    this.$state = $state;
};

HeaderCtrl.prototype.disconnect  = function () {
    this.LoginService.doLogout();
    this.$state.go("login");
};
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
var InsulinTakingCtrl = module.exports = function ($scope, InsulinTakingService) {
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
                field : 'glycemia',
                displayName : 'Glycémie'
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

    InsulinTakingService.getInsulinTakings().then(function (data) {
        $scope.data = data.map(function(insulinTaking) {
            insulinTaking.date = new Date(insulinTaking.date);
            return insulinTaking;
        });
    });
};
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
var MenuCtrl = module.exports = function ($scope) {

    $scope.permission = {};
    $scope.permission.meal = true;
    $scope.permission.swaddle = true;
    $scope.permission.insulinDosage = true;
    $scope.permission.patch = true;
    $scope.permission.aerosol = true;
    $scope.permission.wound = true;
    $scope.permission.observation = true;
    $scope.permission.drugTreatment = true;
    $scope.permission.insulinTaking = true;
    $scope.permission.therapeutic = true;

}
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
var PatchCtrl = module.exports = function ($scope, PatchService) {
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
                field : 'doctor',
                displayName : 'Docteur'
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

    PatchService.getPatchs().then(function (data) {
        $scope.data = data.map(function(patch) {
            patch.date = new Date(patch.date);
            return patch;
        });
    });
};
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
var TherapeuticCtrl = module.exports = function ($scope, TherapeuticService) {
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
                field : 'preparation',
                displayName : 'Préparation'
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

    TherapeuticService.getTherapeutics().then(function (data) {
        $scope.data = data.map(function(therapeutic) {
            therapeutic.date = new Date(therapeutic.date);
            return therapeutic;
        });
    });
};
},{}],28:[function(require,module,exports){
var WoundCtrl = module.exports = function ($scope, WoundService) {
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
                field : 'description',
                displayName : 'Description des soins'
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

    WoundService.getWounds().then(function (data) {
        $scope.data = data.map(function(wound) {
            wound.date = new Date(wound.date);
            return wound;
        });
    });
};
},{}],29:[function(require,module,exports){
'user strict';

var moduleDirective = angular.module('app.directives', ['app.services']);

moduleDirective.directive("boarderlist", require("./directives/BoarderListDirective"));

},{"./directives/BoarderListDirective":30}],30:[function(require,module,exports){
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
},{}],31:[function(require,module,exports){
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
moduleService.service("PatchService", require('./services/PatchService'));
moduleService.service("AerosolService", require('./services/AerosolService'));
moduleService.service("WoundService", require('./services/WoundService'));
moduleService.service("DrugTreatmentService", require('./services/DrugTreatmentService'));
moduleService.service("InsulinTakingService", require('./services/InsulinTakingService'));
moduleService.service("TherapeuticService", require('./services/TherapeuticService'));


},{"./services/AerosolService":32,"./services/BoarderService":33,"./services/DrugTreatmentService":34,"./services/InsulinDosageService":35,"./services/InsulinTakingService":36,"./services/LoginService":37,"./services/MealService":38,"./services/ObservationService":39,"./services/PatchService":40,"./services/SwaddleService":41,"./services/TherapeuticService":42,"./services/WoundService":43,"RouteService":"6YVD1J"}],32:[function(require,module,exports){
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
},{}],33:[function(require,module,exports){
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
},{}],34:[function(require,module,exports){
var DrugTreatmentService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

DrugTreatmentService.prototype.addDrugTreatment = function (idBoarder, date, doctor, nameMedic, dosage, unit, morning, midday, evening, night) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        // "&dateStart=" + dateStart +
        // "&dateEnd=" + dateEnd +
        "&doctor=" + doctor +
        "&nameMedic=" + nameMedic +
        "&dosage=" + dosage +
        "&unit=" + unit +
        "&morning=" + morning +
        "&midday=" + midday +
        "&evening=" + evening +
        "&night=" + night ;
    return this.$http.post(this.SERVER_ROOT + 'drugTreatment', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

DrugTreatmentService.prototype.getDrugTreatments = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'drugTreatment/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinTakingService.prototype.getInsulinTakings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinTaking/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};

},{}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
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
},{}],39:[function(require,module,exports){
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
},{}],40:[function(require,module,exports){
var PatchService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

PatchService.prototype.addPatch = function (idBoarder, date, doctor, nameMedic, dosage, unit) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
       // "&dateStart=" + dateStart +
       // "&dateEnd=" + dateEnd +
        "&doctor=" + doctor +
        "&nameMedic=" + nameMedic +
        "&dosage=" + dosage +
        "&unit=" + unit ;
    return this.$http.post(this.SERVER_ROOT + 'patch', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

PatchService.prototype.getPatchs = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'patch/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],41:[function(require,module,exports){
var SwaddleService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

SwaddleService.prototype.addSwaddle = function (idBoarder, date) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date;
    return this.$http.post(this.SERVER_ROOT + 'swaddle', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

SwaddleService.prototype.getSwaddles = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'swaddle/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],42:[function(require,module,exports){
var TherapeuticService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

TherapeuticService.prototype.addTherapeutic = function (idBoarder, date, preparation, adMorning, adMidday, adEvening, adNight) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&preparation=" + preparation +
        "&adMorning=" + adMorning +
        "&adMidday=" + adMidday +
        "&adEvening=" + adEvening +
        "&adNight=" + adNight;
    return this.$http.post(this.SERVER_ROOT + 'therapeutic', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

TherapeuticService.prototype.getTherapeutics = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'therapeutic/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],43:[function(require,module,exports){
var WoundService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

WoundService.prototype.addWound = function (idBoarder, date, localisation, type, description) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&localisation=" + localisation +
        "&type=" + type +
        "&description=" + description ;

    return this.$http.post(this.SERVER_ROOT + 'wound', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

WoundService.prototype.getWounds = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'wound/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}]},{},[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFtc1xcV2ViU3Rvcm1Qcm9qZWN0XFxURkVDbGllbnRcXG5vZGVfbW9kdWxlc1xcZ3J1bnQtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL2NvbmZpZy9kZXYvUm91dGVTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvYXBwbGljYXRpb24uanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEFlcm9zb2xDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkRHJ1Z1RyZWF0bWVudEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRJbnN1bGluRG9zYWdlQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5UYWtpbmdDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkTWVhbEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRPYnNlcnZhdGlvbkN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRQYXRjaEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRTd2FkZGxlQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFRoZXJhcGV1dGljQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFdvdW5kQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0Flcm9zb2xDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQm9hcmRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EcnVnVHJlYXRtZW50Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0hlYWRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbnN1bGluRG9zYWdlQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0luc3VsaW5UYWtpbmdDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTG9naW5DdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTWVhbEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9NZW51Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL09ic2VydmF0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1BhdGNoQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1N3YWRkbGVDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvVGhlcmFwZXV0aWNDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvV291bmRDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvZGlyZWN0aXZlcy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2RpcmVjdGl2ZXMvQm9hcmRlckxpc3REaXJlY3RpdmUuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0Flcm9zb2xTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvQm9hcmRlclNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9EcnVnVHJlYXRtZW50U2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0luc3VsaW5Eb3NhZ2VTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSW5zdWxpblRha2luZ1NlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9NZWFsU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL09ic2VydmF0aW9uU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1BhdGNoU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1N3YWRkbGVTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvVGhlcmFwZXV0aWNTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvV291bmRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJvdXRlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0OjgwODAvJztcclxufTsiLCJ2YXIgYXBwID0gIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAnbmdHcmlkJywgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnLCAnYXBwLmNvbnRyb2xsZXJzJywgJ2FwcC5zZXJ2aWNlcycsICdhcHAuZGlyZWN0aXZlcyddKTtcclxuXHJcbmFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgLy8gRm9yIGFueSB1bm1hdGNoZWQgdXJsLCByZWRpcmVjdCB0byAvc3RhdGUxXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2xvZ2luXCIpO1xyXG4gICAgLy9cclxuICAgIC8vIE5vdyBzZXQgdXAgdGhlIHN0YXRlc1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbG9naW4uaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgY3RybCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXRlKCdtYWluLWNvbnRlbnQnLCB7XHJcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgJ2Zvb3Rlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zvb3Rlci5odG1sJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdoZWFkZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oZWFkZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckN0cmwgYXMgY3RybCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21haW4tY29udGVudC5odG1sJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhdGUoJ21lbnUnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVudVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWVudS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lbnVDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ21lYWwnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVhbFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvbWVhbC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lYWxDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZG1lYWwnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVhbC9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1tZWFsLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkTWVhbEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnc3dhZGRsZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9zd2FkZGxlXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9zd2FkZGxlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU3dhZGRsZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkc3dhZGRsZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9zd2FkZGxlL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvYWRkLXN3YWRkbGUuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRTd2FkZGxlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbnN1bGluRG9zYWdlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5Eb3NhZ2VcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luc3VsaW5Eb3NhZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbnN1bGluRG9zYWdlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbnN1bGluRG9zYWdlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5Eb3NhZ2UvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5zdWxpbkRvc2FnZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluc3VsaW5Eb3NhZ2VDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ29ic2VydmF0aW9uJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL29ic2VydmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9vYnNlcnZhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ09ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRvYnNlcnZhdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9vYnNlcnZhdGlvbi9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1vYnNlcnZhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZE9ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdwYXRjaCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9wYXRjaFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvcGF0Y2guaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQYXRjaEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkcGF0Y2gnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvcGF0Y2gvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtcGF0Y2guaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRQYXRjaEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWVyb3NvbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hZXJvc29sXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZXJvc29sLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWVyb3NvbEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkYWVyb3NvbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hZXJvc29sL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWFlcm9zb2wuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRBZXJvc29sQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCd3b3VuZCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi93b3VuZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3Mvd291bmQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdXb3VuZEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkd291bmQnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvd291bmQvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtd291bmQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRXb3VuZEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnZHJ1Z1RyZWF0bWVudCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9kcnVnVHJlYXRtZW50XCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9kcnVnVHJlYXRtZW50Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRHJ1Z1RyZWF0bWVudEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkZHJ1Z1RyZWF0bWVudCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9kcnVnVHJlYXRtZW50L2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWRydWdUcmVhdG1lbnQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGREcnVnVHJlYXRtZW50Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbnN1bGluVGFraW5nJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5UYWtpbmdcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luc3VsaW5UYWtpbmcuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbnN1bGluVGFraW5nQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbnN1bGluVGFraW5nJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5UYWtpbmcvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5zdWxpblRha2luZy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluc3VsaW5UYWtpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ3RoZXJhcGV1dGljJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3RoZXJhcGV1dGljXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy90aGVyYXBldXRpYy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RoZXJhcGV1dGljQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGR0aGVyYXBldXRpYycsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi90aGVyYXBldXRpYy9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC10aGVyYXBldXRpYy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFRoZXJhcGV1dGljQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pXHJcbn0pLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCBmdW5jdGlvbiAoJGh0dHBQcm92aWRlcikge1xyXG4gICAgLy8gQXV0b3Jpc2F0aW9uIGRlcyBjb29raWVzIHBvdXIgbGVzIHJlcXXDqXRlcyBDT1JTXHJcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbn1dKS5jb25maWcoWyckdHJhbnNsYXRlUHJvdmlkZXInLCBmdW5jdGlvbigkdHJhbnNsYXRlUHJvdmlkZXIpIHtcclxuICAgICR0cmFuc2xhdGVQcm92aWRlci5wcmVmZXJyZWRMYW5ndWFnZSgnZnInKTtcclxuICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VTdGF0aWNGaWxlc0xvYWRlcih7XHJcbiAgICAgICAgcHJlZml4OiAnbGFuZ3VhZ2VzLycsXHJcbiAgICAgICAgc3VmZml4OiAnLmpzb24nXHJcbiAgICB9KTtcclxufV0pOyIsIid1c2VyIHN0cmljdCc7XHJcblxyXG52YXIgbW9kdWxlQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSk7XHJcblxyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJMb2dpbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9Mb2dpbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkhlYWRlckN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9IZWFkZXJDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJCb2FyZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0JvYXJkZXJDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJNZW51Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL01lbnVDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJNZWFsQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL01lYWxDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRNZWFsQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZE1lYWxDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJTd2FkZGxlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1N3YWRkbGVDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRTd2FkZGxlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZFN3YWRkbGVDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5Eb3NhZ2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJPYnNlcnZhdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9PYnNlcnZhdGlvbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZE9ic2VydmF0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZE9ic2VydmF0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiUGF0Y2hDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvUGF0Y2hDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRQYXRjaEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRQYXRjaEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFlcm9zb2xDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWVyb3NvbEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEFlcm9zb2xDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkQWVyb3NvbEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIldvdW5kQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1dvdW5kQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkV291bmRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkV291bmRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJEcnVnVHJlYXRtZW50Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0RydWdUcmVhdG1lbnRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGREcnVnVHJlYXRtZW50Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZERydWdUcmVhdG1lbnRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbnN1bGluVGFraW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5UYWtpbmdDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbnN1bGluVGFraW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5UYWtpbmdDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJUaGVyYXBldXRpY0N0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9UaGVyYXBldXRpY0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFRoZXJhcGV1dGljQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZFRoZXJhcGV1dGljQ3RybCcpKTtcclxuXHJcbi8vbW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiSW5zdWxpblRha2luZ0N0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9JbnN1bGluVGFraW5nQ3RybCcpKTtcclxuLy9tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbnN1bGluVGFraW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5UYWtpbmdDdHJsJykpO1xyXG4iLCJ2YXIgQWRkQWVyb3NvbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEFlcm9zb2xTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuQWVyb3NvbFNlcnZpY2UgPSBBZXJvc29sU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlRW5kID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5kb2N0b3IgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XHJcbiAgICAkc2NvcGUudW5pdCA9IFwiXCI7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRBZXJvc29sQ3RybC5wcm90b3R5cGUuYWpvdXRlckFlcm9zb2wgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuQWVyb3NvbFNlcnZpY2UuYWRkQWVyb3NvbCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5kb2N0b3IsdGhpcy4kc2NvcGUubmFtZU1lZGljLHRoaXMuJHNjb3BlLmRvc2FnZSx0aGlzLiRzY29wZS51bml0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgQWRkRHJ1Z1RyZWF0bWVudEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIERydWdUcmVhdG1lbnRTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuRHJ1Z1RyZWF0bWVudFNlcnZpY2UgPSBEcnVnVHJlYXRtZW50U2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlRW5kID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5kb2N0b3IgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XHJcbiAgICAkc2NvcGUudW5pdCA9IFwiXCI7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGREcnVnVHJlYXRtZW50Q3RybC5wcm90b3R5cGUuYWpvdXRlckRydWdUcmVhdG1lbnQgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuRHJ1Z1RyZWF0bWVudFNlcnZpY2UuYWRkRHJ1Z1RyZWF0bWVudCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5kb2N0b3IsdGhpcy4kc2NvcGUubmFtZU1lZGljLHRoaXMuJHNjb3BlLmRvc2FnZSx0aGlzLiRzY29wZS51bml0LFxyXG4gICAgICAgIHRoaXMuJHNjb3BlLm1vcm5pbmcsIHRoaXMuJHNjb3BlLm1pZGRheSwgdGhpcy4kc2NvcGUuZXZlbmluZywgdGhpcy4kc2NvcGUubmlnaHQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZVN0YXJ0LmdldFRpbWUoKSxcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVFbmQuZ2V0VGltZSgpXHJcblxyXG59OyIsInZhciBJbnN1bGluRG9zYWdlQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5zdWxpbkRvc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZSA9IEluc3VsaW5Eb3NhZ2VTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbkluc3VsaW5Eb3NhZ2VDdHJsLnByb3RvdHlwZS5ham91dGVySW5zdWxpbkRvc2FnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZS5hZGRJbnN1bGluRG9zYWdlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRoaXMuJHNjb3BlLmRvc2FnZSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbn07XHJcblxyXG4vL0luc3VsaW5Eb3NhZ2VDdHJsLnByb3RvdHlwZS5nZXRJbnN1bGluRG9zYWdlcyA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICB0aGlzLkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLmdldEluc3VsaW5Eb3NhZ2VzKCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbi8vfTtcclxuIiwidmFyIEluc3VsaW5UYWtpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbnN1bGluVGFraW5nU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkluc3VsaW5UYWtpbmdTZXJ2aWNlID0gSW5zdWxpblRha2luZ1NlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuSW5zdWxpblRha2luZ0N0cmwucHJvdG90eXBlLmFqb3V0ZXJJbnN1bGluVGFraW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkluc3VsaW5UYWtpbmdTZXJ2aWNlLmFkZEluc3VsaW5UYWtpbmcodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdGhpcy4kc2NvcGUuZ2x5Y2VtaWEpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG59O1xyXG5cclxuLy9JbnN1bGluRG9zYWdlQ3RybC5wcm90b3R5cGUuZ2V0SW5zdWxpbkRvc2FnZXMgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZS5nZXRJbnN1bGluRG9zYWdlcygpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG4vL307XHJcbiIsInZhciBBZGRNZWFsQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgTWVhbFNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5NZWFsU2VydmljZSA9IE1lYWxTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkTWVhbEN0cmwucHJvdG90eXBlLmFqb3V0ZXJNZWFsID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLk1lYWxTZXJ2aWNlLmFkZE1lYWwodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCkpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG59OyIsInZhciBBZGRPYnNlcnZhdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE9ic2VydmF0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLk9ic2VydmF0aW9uU2VydmljZSA9IE9ic2VydmF0aW9uU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5jb21tZW50ID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE9ic2VydmF0aW9uQ3RybC5wcm90b3R5cGUuYWpvdXRlck9ic2VydmF0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLk9ic2VydmF0aW9uU2VydmljZS5hZGRPYnNlcnZhdGlvbih0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSwgdGhpcy4kc2NvcGUuY29tbWVudCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbn07IiwidmFyIEFkZFBhdGNoQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgUGF0Y2hTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuUGF0Y2hTZXJ2aWNlID0gUGF0Y2hTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVFbmQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLmRvY3RvciA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmFtZU1lZGljID0gXCJcIjtcclxuICAgICRzY29wZS51bml0ID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFBhdGNoQ3RybC5wcm90b3R5cGUuYWpvdXRlclBhdGNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLlBhdGNoU2VydmljZS5hZGRQYXRjaCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5kb2N0b3IsdGhpcy4kc2NvcGUubmFtZU1lZGljLHRoaXMuJHNjb3BlLmRvc2FnZSx0aGlzLiRzY29wZS51bml0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgQWRkU3dhZGRsZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFN3YWRkbGVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuU3dhZGRsZVNlcnZpY2UgPSBTd2FkZGxlU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFN3YWRkbGVDdHJsLnByb3RvdHlwZS5ham91dGVyU3dhZGRsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5Td2FkZGxlU2VydmljZS5hZGRTd2FkZGxlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTsiLCJ2YXIgQWRkVGhlcmFwZXV0aWNDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUaGVyYXBldXRpY1NlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5UaGVyYXBldXRpY1NlcnZpY2UgPSBUaGVyYXBldXRpY1NlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFRoZXJhcGV1dGljQ3RybC5wcm90b3R5cGUuYWpvdXRlclRoZXJhcGV1dGljID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLlRoZXJhcGV1dGljU2VydmljZS5hZGRUaGVyYXBldXRpYyh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5wcmVwYXJhdGlvbixcclxuICAgIHRoaXMuJHNjb3BlLmFkTW9ybmluZyx0aGlzLiRzY29wZS5hZE1pZGRheSx0aGlzLiRzY29wZS5hZEV2ZW5pbmcsdGhpcy4kc2NvcGUuYWROaWdodCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcblxyXG59OyIsInZhciBBZGRXb3VuZEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFdvdW5kU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLldvdW5kU2VydmljZSA9IFdvdW5kU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5sb2NhbGlzYXRpb24gPSBcIlwiO1xyXG4gICAgJHNjb3BlLnR5cGUgPSBcIlwiO1xyXG4gICAgJHNjb3BlLmRlc2NyaXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFdvdW5kQ3RybC5wcm90b3R5cGUuYWpvdXRlcldvdW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLldvdW5kU2VydmljZS5hZGRXb3VuZCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5sb2NhbGlzYXRpb24sdGhpcy4kc2NvcGUudHlwZSx0aGlzLiRzY29wZS5kZXNjcmlwdGlvbikudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcblxyXG59OyIsInZhciBBZXJvc29sQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQWVyb3NvbFNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBBZXJvc29sU2VydmljZS5nZXRBZXJvc29scygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGFlcm9zb2wpIHtcclxuICAgICAgICAgICAgYWVyb3NvbC5kYXRlID0gbmV3IERhdGUoYWVyb3NvbC5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFlcm9zb2w7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgQm9hcmRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJvYXJkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdOb20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3N1cm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUHLDqW5vbSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAncm9vbScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdDaGFtYnJlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgQm9hcmRlclNlcnZpY2UuZ2V0Qm9hcmRlcnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsInZhciBEcnVnVHJlYXRtZW50Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRHJ1Z1RyZWF0bWVudFNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnbW9ybmluZycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdNYXRpbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBEcnVnVHJlYXRtZW50U2VydmljZS5nZXREcnVnVHJlYXRtZW50cygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGRydWdUcmVhdG1lbnQpIHtcclxuICAgICAgICAgICAgZHJ1Z1RyZWF0bWVudC5kYXRlID0gbmV3IERhdGUoZHJ1Z1RyZWF0bWVudC5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRydWdUcmVhdG1lbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSGVhZGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKExvZ2luU2VydmljZSwgJHN0YXRlKSB7XHJcbiAgICB0aGlzLkxvZ2luU2VydmljZSA9IExvZ2luU2VydmljZTtcclxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG59O1xyXG5cclxuSGVhZGVyQ3RybC5wcm90b3R5cGUuZGlzY29ubmVjdCAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLkxvZ2luU2VydmljZS5kb0xvZ291dCgpO1xyXG4gICAgdGhpcy4kc3RhdGUuZ28oXCJsb2dpblwiKTtcclxufTsiLCJ2YXIgSW5zdWxpbkRvc2FnZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2Rvc2FnZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEb3NhZ2UgKGVuIHVuaXTDqSknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSW5zdWxpbkRvc2FnZVNlcnZpY2UuZ2V0SW5zdWxpbkRvc2FnZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbnN1bGluRG9zYWdlKSB7XHJcbiAgICAgICAgICAgIGluc3VsaW5Eb3NhZ2UuZGF0ZSA9IG5ldyBEYXRlKGluc3VsaW5Eb3NhZ2UuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN1bGluRG9zYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEluc3VsaW5UYWtpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbnN1bGluVGFraW5nU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdnbHljZW1pYScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdHbHljw6ltaWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSW5zdWxpblRha2luZ1NlcnZpY2UuZ2V0SW5zdWxpblRha2luZ3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbnN1bGluVGFraW5nKSB7XHJcbiAgICAgICAgICAgIGluc3VsaW5UYWtpbmcuZGF0ZSA9IG5ldyBEYXRlKGluc3VsaW5UYWtpbmcuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN1bGluVGFraW5nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIExvZ2luQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHN0YXRlLCBMb2dpblNlcnZpY2UpIHtcclxuICAgICRzY29wZS5lbWFpbCA9IFwiXCI7XHJcbiAgICAkc2NvcGUucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnJlbWVtYmVyTWUgPSBmYWxzZTtcclxuICAgICRzY29wZS5lcnJvcm1zZyA9IFwiXCI7XHJcblxyXG4gICAgaWYoTG9naW5TZXJ2aWNlLmlzTG9nKCkpIHtcclxuICAgICAgICAkc3RhdGUuZ28oXCJtYWluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5jb25uZXhpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJHNjb3BlLmVtYWlsID09PSB1bmRlZmluZWQgfHwgJHNjb3BlLnBhc3N3b3JkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmVycm9ybXNnID0gJHRyYW5zbGF0ZSgnbG9naW4ubWVzc2FnZS5lcnJvcicpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgTG9naW5TZXJ2aWNlLmRvTG9naW4oJHNjb3BlLmVtYWlsLCAkc2NvcGUucGFzc3dvcmQsICRzY29wZS5yZW1lbWJlck1lKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oXCJtZW51XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5lcnJvcm1zZyA9ICR0cmFuc2xhdGUoJ2xvZ2luLm1lc3NhZ2UuZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIE1lYWxDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBNZWFsU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIE1lYWxTZXJ2aWNlLmdldE1lYWxzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24obWVhbCkge1xyXG4gICAgICAgICAgICBtZWFsLmRhdGUgPSBuZXcgRGF0ZShtZWFsLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVhbDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBNZW51Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAgICRzY29wZS5wZXJtaXNzaW9uID0ge307XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5tZWFsID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLnN3YWRkbGUgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uaW5zdWxpbkRvc2FnZSA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5wYXRjaCA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5hZXJvc29sID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLndvdW5kID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLm9ic2VydmF0aW9uID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLmRydWdUcmVhdG1lbnQgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uaW5zdWxpblRha2luZyA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi50aGVyYXBldXRpYyA9IHRydWU7XHJcblxyXG59IiwidmFyIE9ic2VydmF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgT2JzZXJ2YXRpb25TZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnT2JzZXJ2YXRpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgT2JzZXJ2YXRpb25TZXJ2aWNlLmdldE9ic2VydmF0aW9ucygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uLmRhdGUgPSBuZXcgRGF0ZShvYnNlcnZhdGlvbi5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmF0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFBhdGNoQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgUGF0Y2hTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RvY3RvcicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEb2N0ZXVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIFBhdGNoU2VydmljZS5nZXRQYXRjaHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihwYXRjaCkge1xyXG4gICAgICAgICAgICBwYXRjaC5kYXRlID0gbmV3IERhdGUocGF0Y2guZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRjaDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBTd2FkZGxlQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgU3dhZGRsZVNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBTd2FkZGxlU2VydmljZS5nZXRTd2FkZGxlcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHN3YWRkbGUpIHtcclxuICAgICAgICAgICAgc3dhZGRsZS5kYXRlID0gbmV3IERhdGUoc3dhZGRsZS5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWRkbGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgVGhlcmFwZXV0aWNDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUaGVyYXBldXRpY1NlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAncHJlcGFyYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUHLDqXBhcmF0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIFRoZXJhcGV1dGljU2VydmljZS5nZXRUaGVyYXBldXRpY3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbih0aGVyYXBldXRpYykge1xyXG4gICAgICAgICAgICB0aGVyYXBldXRpYy5kYXRlID0gbmV3IERhdGUodGhlcmFwZXV0aWMuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGVyYXBldXRpYztcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBXb3VuZEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFdvdW5kU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEZXNjcmlwdGlvbiBkZXMgc29pbnMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgV291bmRTZXJ2aWNlLmdldFdvdW5kcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHdvdW5kKSB7XHJcbiAgICAgICAgICAgIHdvdW5kLmRhdGUgPSBuZXcgRGF0ZSh3b3VuZC5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdvdW5kO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVEaXJlY3RpdmUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbJ2FwcC5zZXJ2aWNlcyddKTtcclxuXHJcbm1vZHVsZURpcmVjdGl2ZS5kaXJlY3RpdmUoXCJib2FyZGVybGlzdFwiLCByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL0JvYXJkZXJMaXN0RGlyZWN0aXZlXCIpKTtcclxuIiwidmFyIEJvYXJkZXJMaXN0RGlyZWN0aXZlID0gbW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24oQm9hcmRlclNlcnZpY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQm9hcmRlcnM6IFwiPVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cm9sbGVyOiBcIkJvYXJkZXJDdHJsXCIsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2JvYXJkZXJsaXN0Lmh0bWwnLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTsiLCIndXNlciBzdHJpY3QnO1xyXG52YXIgUm91dGVTZXJ2aWNlID0gcmVxdWlyZSgnUm91dGVTZXJ2aWNlJyk7XHJcblxyXG52YXIgbW9kdWxlU2VydmljZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XHJcblxyXG5tb2R1bGVTZXJ2aWNlLmNvbnN0YW50KCdTRVJWRVJfUk9PVCcsIFJvdXRlU2VydmljZSgpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiTG9naW5TZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvTG9naW5TZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJCb2FyZGVyU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0JvYXJkZXJTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJNZWFsU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL01lYWxTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJTd2FkZGxlU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1N3YWRkbGVTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbnN1bGluRG9zYWdlU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0luc3VsaW5Eb3NhZ2VTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJPYnNlcnZhdGlvblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9PYnNlcnZhdGlvblNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlBhdGNoU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1BhdGNoU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiQWVyb3NvbFNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9BZXJvc29sU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiV291bmRTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvV291bmRTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJEcnVnVHJlYXRtZW50U2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0RydWdUcmVhdG1lbnRTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbnN1bGluVGFraW5nU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0luc3VsaW5UYWtpbmdTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJUaGVyYXBldXRpY1NlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9UaGVyYXBldXRpY1NlcnZpY2UnKSk7XHJcblxyXG4iLCJ2YXIgQWVyb3NvbFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5BZXJvc29sU2VydmljZS5wcm90b3R5cGUuYWRkQWVyb3NvbCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGRvY3RvciwgbmFtZU1lZGljLCBkb3NhZ2UsIHVuaXQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIC8vIFwiJmRhdGVTdGFydD1cIiArIGRhdGVTdGFydCArXHJcbiAgICAgICAgLy8gXCImZGF0ZUVuZD1cIiArIGRhdGVFbmQgK1xyXG4gICAgICAgIFwiJmRvY3Rvcj1cIiArIGRvY3RvciArXHJcbiAgICAgICAgXCImbmFtZU1lZGljPVwiICsgbmFtZU1lZGljICtcclxuICAgICAgICBcIiZkb3NhZ2U9XCIgKyBkb3NhZ2UgK1xyXG4gICAgICAgIFwiJnVuaXQ9XCIgKyB1bml0IDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdhZXJvc29sJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5BZXJvc29sU2VydmljZS5wcm90b3R5cGUuZ2V0QWVyb3NvbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYWVyb3NvbC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgQm9hcmRlclNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Cb2FyZGVyU2VydmljZS5wcm90b3R5cGUuZ2V0Qm9hcmRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYm9hcmRlci9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRHJ1Z1RyZWF0bWVudFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5EcnVnVHJlYXRtZW50U2VydmljZS5wcm90b3R5cGUuYWRkRHJ1Z1RyZWF0bWVudCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGRvY3RvciwgbmFtZU1lZGljLCBkb3NhZ2UsIHVuaXQsIG1vcm5pbmcsIG1pZGRheSwgZXZlbmluZywgbmlnaHQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIC8vIFwiJmRhdGVTdGFydD1cIiArIGRhdGVTdGFydCArXHJcbiAgICAgICAgLy8gXCImZGF0ZUVuZD1cIiArIGRhdGVFbmQgK1xyXG4gICAgICAgIFwiJmRvY3Rvcj1cIiArIGRvY3RvciArXHJcbiAgICAgICAgXCImbmFtZU1lZGljPVwiICsgbmFtZU1lZGljICtcclxuICAgICAgICBcIiZkb3NhZ2U9XCIgKyBkb3NhZ2UgK1xyXG4gICAgICAgIFwiJnVuaXQ9XCIgKyB1bml0ICtcclxuICAgICAgICBcIiZtb3JuaW5nPVwiICsgbW9ybmluZyArXHJcbiAgICAgICAgXCImbWlkZGF5PVwiICsgbWlkZGF5ICtcclxuICAgICAgICBcIiZldmVuaW5nPVwiICsgZXZlbmluZyArXHJcbiAgICAgICAgXCImbmlnaHQ9XCIgKyBuaWdodCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnZHJ1Z1RyZWF0bWVudCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuRHJ1Z1RyZWF0bWVudFNlcnZpY2UucHJvdG90eXBlLmdldERydWdUcmVhdG1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2RydWdUcmVhdG1lbnQvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuSW5zdWxpbkRvc2FnZVNlcnZpY2UucHJvdG90eXBlLmFkZEluc3VsaW5Eb3NhZ2UgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb3NhZ2UpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmRvc2FnZT1cIiArIGRvc2FnZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5zdWxpbkRvc2FnZScsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuSW5zdWxpbkRvc2FnZVNlcnZpY2UucHJvdG90eXBlLmdldEluc3VsaW5Eb3NhZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5Eb3NhZ2UvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcbiIsInZhciBJbnN1bGluVGFraW5nU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkluc3VsaW5UYWtpbmdTZXJ2aWNlLnByb3RvdHlwZS5hZGRJbnN1bGluVGFraW5nID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZ2x5Y2VtaWEpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmdseWNlbWlhPVwiICsgZ2x5Y2VtaWE7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5UYWtpbmcnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkluc3VsaW5UYWtpbmdTZXJ2aWNlLnByb3RvdHlwZS5nZXRJbnN1bGluVGFraW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluVGFraW5nL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG4iLCJ2YXIgTG9naW5TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy5fdXNlciA9IG51bGw7XHJcbiAgICB0aGlzLl91c2VyUmlnaHRzID0gbnVsbDtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxuICAgIHRoaXMudXNlcm5hbWUgPSBudWxsO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XHJcbn07XHJcblxyXG5Mb2dpblNlcnZpY2UucHJvdG90eXBlLmlzTG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYodGhpcy51c2VybmFtZSAhPSBudWxsICYmIHRoaXMucGFzc3dvcmQgIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuLy9UT0RPIDogUHJvbWlzZSB2cmFpbWVudCBuw6ljZXNzYWlyZSA/XHJcbkxvZ2luU2VydmljZS5wcm90b3R5cGUuZG9Mb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIHJlbWVtYmVyTWUpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwidXNlcm5hbWU9XCIgKyB1c2VybmFtZSArXHJcbiAgICAgICAgXCImcGFzc3dvcmQ9XCIgKyBwYXNzd29yZDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdsb2dpbicsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAyMDIpIHtcclxuICAgICAgICAgICAgX3RoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICAgICAgX3RoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICAgICAgdmFyIGRlZmVyID0gX3RoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICAgICAgZGVmZXIucmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB2YXIgZGVmZXIyID0gX3RoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICBkZWZlcjIucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVyMi5wcm9taXNlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Mb2dpblNlcnZpY2UucHJvdG90eXBlLmRvTG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy51c2VybmFtZSA9IG51bGw7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcclxufTsiLCJ2YXIgTWVhbFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5NZWFsU2VydmljZS5wcm90b3R5cGUuYWRkTWVhbCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGU7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbWVhbCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuTWVhbFNlcnZpY2UucHJvdG90eXBlLmdldE1lYWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ21lYWwvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIE9ic2VydmF0aW9uU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbk9ic2VydmF0aW9uU2VydmljZS5wcm90b3R5cGUuYWRkT2JzZXJ2YXRpb24gPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBjb21tZW50KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZjb21tZW50PVwiICsgY29tbWVudDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdvYnNlcnZhdGlvbicsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuT2JzZXJ2YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnb2JzZXJ2YXRpb24vYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIFBhdGNoU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblBhdGNoU2VydmljZS5wcm90b3R5cGUuYWRkUGF0Y2ggPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgIC8vIFwiJmRhdGVTdGFydD1cIiArIGRhdGVTdGFydCArXHJcbiAgICAgICAvLyBcIiZkYXRlRW5kPVwiICsgZGF0ZUVuZCArXHJcbiAgICAgICAgXCImZG9jdG9yPVwiICsgZG9jdG9yICtcclxuICAgICAgICBcIiZuYW1lTWVkaWM9XCIgKyBuYW1lTWVkaWMgK1xyXG4gICAgICAgIFwiJmRvc2FnZT1cIiArIGRvc2FnZSArXHJcbiAgICAgICAgXCImdW5pdD1cIiArIHVuaXQgO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3BhdGNoJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5QYXRjaFNlcnZpY2UucHJvdG90eXBlLmdldFBhdGNocyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdwYXRjaC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgU3dhZGRsZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Td2FkZGxlU2VydmljZS5wcm90b3R5cGUuYWRkU3dhZGRsZSA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGU7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnc3dhZGRsZScsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuU3dhZGRsZVNlcnZpY2UucHJvdG90eXBlLmdldFN3YWRkbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3N3YWRkbGUvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIFRoZXJhcGV1dGljU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblRoZXJhcGV1dGljU2VydmljZS5wcm90b3R5cGUuYWRkVGhlcmFwZXV0aWMgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBwcmVwYXJhdGlvbiwgYWRNb3JuaW5nLCBhZE1pZGRheSwgYWRFdmVuaW5nLCBhZE5pZ2h0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZwcmVwYXJhdGlvbj1cIiArIHByZXBhcmF0aW9uICtcclxuICAgICAgICBcIiZhZE1vcm5pbmc9XCIgKyBhZE1vcm5pbmcgK1xyXG4gICAgICAgIFwiJmFkTWlkZGF5PVwiICsgYWRNaWRkYXkgK1xyXG4gICAgICAgIFwiJmFkRXZlbmluZz1cIiArIGFkRXZlbmluZyArXHJcbiAgICAgICAgXCImYWROaWdodD1cIiArIGFkTmlnaHQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAndGhlcmFwZXV0aWMnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcblRoZXJhcGV1dGljU2VydmljZS5wcm90b3R5cGUuZ2V0VGhlcmFwZXV0aWNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3RoZXJhcGV1dGljL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBXb3VuZFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Xb3VuZFNlcnZpY2UucHJvdG90eXBlLmFkZFdvdW5kID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgbG9jYWxpc2F0aW9uLCB0eXBlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImbG9jYWxpc2F0aW9uPVwiICsgbG9jYWxpc2F0aW9uICtcclxuICAgICAgICBcIiZ0eXBlPVwiICsgdHlwZSArXHJcbiAgICAgICAgXCImZGVzY3JpcHRpb249XCIgKyBkZXNjcmlwdGlvbiA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3dvdW5kJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Xb3VuZFNlcnZpY2UucHJvdG90eXBlLmdldFdvdW5kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICd3b3VuZC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiXX0=
