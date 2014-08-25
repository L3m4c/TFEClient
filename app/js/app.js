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
        }).state('reload', {
            url: "/reload/:reload",
            controller: function ($stateParams, $state, $timeout) {},
            onEnter: function ($stateParams, $state, $timeout) {
                $timeout(function () {
                    $state.go($stateParams.reload);
                }, 1);
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
        }).state('updateaerosol', {
            url: "/aerosol/update/:id",
            parent: "main-content",
            templateUrl: '../../views/add-aerosol.html',
            controller: 'UpdateAerosolCtrl as ctrl'
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
        }).state('injection', {
            url: "/injection",
            parent: "main-content",
            templateUrl: '../../views/injection.html',
            controller: 'InjectionCtrl as ctrl'
        }).state('addinjection', {
            url: "/injection/add",
            parent: "main-content",
            templateUrl: '../../views/add-injection.html',
            controller: 'AddInjectionCtrl as ctrl'
        }).state('hygiene', {
                url: "/hygiene",
                parent: "main-content",
                templateUrl: '../../views/hygiene.html',
                controller: 'HygieneCtrl as ctrl'
        }).state('addhygiene', {
                url: "/hygiene/add",
                parent: "main-content",
                templateUrl: '../../views/add-hygiene.html',
                controller: 'AddHygieneCtrl as ctrl'
        }).state('clothing', {
            url: "/clothing",
            parent: "main-content",
            templateUrl: '../../views/clothing.html',
            controller: 'ClothingCtrl as ctrl'
        }).state('addclothing', {
            url: "/clothing/add",
            parent: "main-content",
            templateUrl: '../../views/add-clothing.html',
            controller: 'AddClothingCtrl as ctrl'
        }).state('mobilization', {
            url: "/mobilization",
            parent: "main-content",
            templateUrl: '../../views/mobilization.html',
            controller: 'MobilizationCtrl as ctrl'
        }).state('addmobilization', {
            url: "/mobilization/add",
            parent: "main-content",
            templateUrl: '../../views/add-mobilization.html',
            controller: 'AddMobilizationCtrl as ctrl'
        }).state('toiletHelping', {
            url: "/toiletHelping",
            parent: "main-content",
            templateUrl: '../../views/toiletHelping.html',
            controller: 'ToiletHelpingCtrl as ctrl'
        }).state('addtoiletHelping', {
            url: "/toiletHelping/add",
            parent: "main-content",
            templateUrl: '../../views/add-toiletHelping.html',
            controller: 'AddToiletHelpingCtrl as ctrl'
        }).state('incontinence', {
            url: "/incontinence",
            parent: "main-content",
            templateUrl: '../../views/incontinence.html',
            controller: 'IncontinenceCtrl as ctrl'
        }).state('addincontinence', {
            url: "/incontinence/add",
            parent: "main-content",
            templateUrl: '../../views/add-incontinence.html',
            controller: 'AddIncontinenceCtrl as ctrl'
        }).state('eat', {
            url: "/eat",
            parent: "main-content",
            templateUrl: '../../views/eat.html',
            controller: 'EatCtrl as ctrl'
        }).state('addeat', {
            url: "/eat/add",
            parent: "main-content",
            templateUrl: '../../views/add-eat.html',
            controller: 'AddEatCtrl as ctrl'
        }).state('parameter', {
            url: "/parameter",
            parent: "main-content",
            templateUrl: '../../views/parameter.html',
            controller: 'ParameterCtrl as ctrl'
        }).state('addparameter', {
            url: "/parameter/add",
            parent: "main-content",
            templateUrl: '../../views/add-parameter.html',
            controller: 'AddParameterCtrl as ctrl'
        }).state('disorder', {
            url: "/disorder",
            parent: "main-content",
            templateUrl: '../../views/disorder.html',
            controller: 'DisorderCtrl as ctrl'
        }).state('adddisorder', {
            url: "/disorder/add",
            parent: "main-content",
            templateUrl: '../../views/add-disorder.html',
            controller: 'AddDisorderCtrl as ctrl'
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
moduleController.controller("MealCtrl", require('./controllers/Meal/MealCtrl'));
moduleController.controller("AddMealCtrl", require('./controllers/Meal/AddMealCtrl'));
moduleController.controller("SwaddleCtrl", require('./controllers/SwaddleCtrl'));
moduleController.controller("AddSwaddleCtrl", require('./controllers/AddSwaddleCtrl'));
moduleController.controller("InsulinDosageCtrl", require('./controllers/InsulinDosageCtrl'));
moduleController.controller("AddInsulinDosageCtrl", require('./controllers/AddInsulinDosageCtrl'));
moduleController.controller("ObservationCtrl", require('./controllers/ObservationCtrl'));
moduleController.controller("AddObservationCtrl", require('./controllers/AddObservationCtrl'));
moduleController.controller("PatchCtrl", require('./controllers/PatchCtrl'));
moduleController.controller("AddPatchCtrl", require('./controllers/AddPatchCtrl'));
moduleController.controller("AerosolCtrl", require('./controllers/Aerosol/AerosolCtrl'));
moduleController.controller("AddAerosolCtrl", require('./controllers/Aerosol/AddAerosolCtrl'));
moduleController.controller("UpdateAerosolCtrl", require('./controllers/Aerosol/UpdateAerosolCtrl'));
moduleController.controller("WoundCtrl", require('./controllers/WoundCtrl'));
moduleController.controller("AddWoundCtrl", require('./controllers/AddWoundCtrl'));
moduleController.controller("DrugTreatmentCtrl", require('./controllers/DrugTreatement/DrugTreatmentCtrl'));
moduleController.controller("AddDrugTreatmentCtrl", require('./controllers/DrugTreatement/AddDrugTreatmentCtrl'));
moduleController.controller("InsulinTakingCtrl", require('./controllers/InsulinTakingCtrl'));
moduleController.controller("AddInsulinTakingCtrl", require('./controllers/AddInsulinTakingCtrl'));
moduleController.controller("TherapeuticCtrl", require('./controllers/TherapeuticCtrl'));
moduleController.controller("AddTherapeuticCtrl", require('./controllers/AddTherapeuticCtrl'));
moduleController.controller("InjectionCtrl", require('./controllers/InjectionCtrl'));
moduleController.controller("AddInjectionCtrl", require('./controllers/AddInjectionCtrl'));
moduleController.controller("HygieneCtrl", require('./controllers/Hygiene/HygieneCtrl'));
moduleController.controller("AddHygieneCtrl", require('./controllers/Hygiene/AddHygieneCtrl'));
moduleController.controller("ClothingCtrl", require('./controllers/Clothing/ClothingCtrl'));
moduleController.controller("AddClothingCtrl", require('./controllers/Clothing/AddClothingCtrl'));
moduleController.controller("MobilizationCtrl", require('./controllers/MobilizationCtrl'));
moduleController.controller("AddMobilizationCtrl", require('./controllers/AddMobilizationCtrl'));
moduleController.controller("ToiletHelpingCtrl", require('./controllers/ToiletHelpingCtrl'));
moduleController.controller("AddToiletHelpingCtrl", require('./controllers/AddToiletHelpingCtrl'));
moduleController.controller("IncontinenceCtrl", require('./controllers/IncontinenceCtrl'));
moduleController.controller("AddIncontinenceCtrl", require('./controllers/AddIncontinenceCtrl'));
moduleController.controller("EatCtrl", require('./controllers/Eat/EatCtrl'));
moduleController.controller("AddEatCtrl", require('./controllers/Eat/AddEatCtrl'));
moduleController.controller("ParameterCtrl", require('./controllers/ParameterCtrl'));
moduleController.controller("AddParameterCtrl", require('./controllers/AddParameterCtrl'));
moduleController.controller("DisorderCtrl", require('./controllers/Disorder/DisorderCtrl'));
moduleController.controller("AddDisorderCtrl", require('./controllers/Disorder/AddDisorderCtrl'));


},{"./controllers/AddIncontinenceCtrl":5,"./controllers/AddInjectionCtrl":6,"./controllers/AddInsulinDosageCtrl":7,"./controllers/AddInsulinTakingCtrl":8,"./controllers/AddMobilizationCtrl":9,"./controllers/AddObservationCtrl":10,"./controllers/AddParameterCtrl":11,"./controllers/AddPatchCtrl":12,"./controllers/AddSwaddleCtrl":13,"./controllers/AddTherapeuticCtrl":14,"./controllers/AddToiletHelpingCtrl":15,"./controllers/AddWoundCtrl":16,"./controllers/Aerosol/AddAerosolCtrl":17,"./controllers/Aerosol/AerosolCtrl":18,"./controllers/Aerosol/UpdateAerosolCtrl":19,"./controllers/BoarderCtrl":20,"./controllers/Clothing/AddClothingCtrl":21,"./controllers/Clothing/ClothingCtrl":22,"./controllers/Disorder/AddDisorderCtrl":23,"./controllers/Disorder/DisorderCtrl":24,"./controllers/DrugTreatement/AddDrugTreatmentCtrl":25,"./controllers/DrugTreatement/DrugTreatmentCtrl":26,"./controllers/Eat/AddEatCtrl":27,"./controllers/Eat/EatCtrl":28,"./controllers/HeaderCtrl":29,"./controllers/Hygiene/AddHygieneCtrl":30,"./controllers/Hygiene/HygieneCtrl":31,"./controllers/IncontinenceCtrl":32,"./controllers/InjectionCtrl":33,"./controllers/InsulinDosageCtrl":34,"./controllers/InsulinTakingCtrl":35,"./controllers/LoginCtrl":36,"./controllers/Meal/AddMealCtrl":37,"./controllers/Meal/MealCtrl":38,"./controllers/MenuCtrl":39,"./controllers/MobilizationCtrl":40,"./controllers/ObservationCtrl":41,"./controllers/ParameterCtrl":42,"./controllers/PatchCtrl":43,"./controllers/SwaddleCtrl":44,"./controllers/TherapeuticCtrl":45,"./controllers/ToiletHelpingCtrl":46,"./controllers/WoundCtrl":47}],5:[function(require,module,exports){
var AddIncontinenceCtrl = module.exports = function ($scope, IncontinenceService) {
    this.$scope = $scope;
    this.IncontinenceService = IncontinenceService;
    $scope.date = new Date();

    $scope.diurnal = false;
    $scope.nocturnal = false;
    $scope.both = false;

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

AddIncontinenceCtrl.prototype.ajouterIncontinence = function() {
    this.IncontinenceService.addIncontinence(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.diurnal,this.$scope.nocturnal,this.$scope.both).then(function () {});


};
},{}],6:[function(require,module,exports){
var AddInjectionCtrl = module.exports = function ($scope, InjectionService) {
    this.$scope = $scope;
    this.InjectionService = InjectionService;
    $scope.date = new Date();
    //$scope.dateStart = new Date();
    //$scope.dateEnd = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";
    $scope.establishment= "";

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

AddInjectionCtrl.prototype.ajouterInjection = function() {
    this.InjectionService.addInjection(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit,this.$scope.establishment).then(function () {});
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
var AddMobilizationCtrl = module.exports = function ($scope, MobilizationService) {
    this.$scope = $scope;
    this.MobilizationService = MobilizationService;
    $scope.date = new Date();
    $scope.help = false;
    $scope.material = false;
    $scope.cane = false;

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

AddMobilizationCtrl.prototype.ajouterMobilization = function() {
    this.MobilizationService.addMobilization(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.help,this.$scope.material,this.$scope.cane).then(function () {});


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
var AddParameterCtrl = module.exports = function ($scope, ParameterService) {
    this.$scope = $scope;
    this.ParameterService = ParameterService;
    $scope.date = new Date();

    $scope.pulse = "";
    $scope.tension = "";
    $scope.temperature = "";

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

AddParameterCtrl.prototype.ajouterParameter = function() {
    this.ParameterService.addParameter(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.pulse,this.$scope.tension,this.$scope.temperature).then(function () {});
    // this.$scope.dateStart.getTime(),
    // this.$scope.dateEnd.getTime()

};
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
var AddTherapeuticCtrl = module.exports = function ($scope, TherapeuticService) {
    this.$scope = $scope;
    this.TherapeuticService = TherapeuticService;
    $scope.date = new Date();
    $scope.preparation = false;
    $scope.adMorning = false;
    $scope.adMidday = false;
    $scope.adEvening = false;
    $scope.adNight = false;


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
},{}],15:[function(require,module,exports){
var AddToiletHelpingCtrl = module.exports = function ($scope, ToiletHelpingService) {
    this.$scope = $scope;
    this.ToiletHelpingService = ToiletHelpingService;
    $scope.date = new Date();
    $scope.move = false;



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

AddToiletHelpingCtrl.prototype.ajouterToiletHelping = function() {
    this.ToiletHelpingService.addToiletHelping(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.move).then(function () {});

};
},{}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
var AddAerosolCtrl = module.exports = function ($scope, $state, AerosolService) {
    this.$scope = $scope;
    this.$state = $state;
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
    _this = this;
    this.AerosolService.addAerosol(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit).then(function () {
        _this.$state.go('aerosol');
    });
};
},{}],18:[function(require,module,exports){
var AerosolCtrl = module.exports = function ($scope, AerosolService) {
    $scope = $scope;
    $scope.selectedAerosols = [];


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
            $scope.selectedAerosols = angular.copy(row.config.selectedItems);
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
},{}],19:[function(require,module,exports){
var UpdateAerosolCtrl = module.exports = function ($scope, AerosolService, $stateParams, $state) {
    this.$scope = $scope;
    this.AerosolService = AerosolService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";
    $scope.update = true;

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

    AerosolService.getAerosol($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.dateStart = data.dateStart;
        $scope.dateEnd = data.dateEnd;
        $scope.doctor = data.doctor;
        $scope.nameMedic = data.nameMedic;
        $scope.dosage = data.dosage;
        $scope.unit = data.unit;
    });
};

UpdateAerosolCtrl.prototype.updateAerosol = function() {
    _this = this;
    this.AerosolService.updateAerosol(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.doctor, this.$scope.nameMedic, this.$scope.dosage, this.$scope.unit).then(function () {
        _this.$state.go('aerosol');
    });
};
},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
var AddClothingCtrl = module.exports = function ($scope, ClothingService) {
    this.$scope = $scope;
    this.ClothingService = ClothingService;
    $scope.date = new Date();

    $scope.clothingComplete = false;
    $scope.clothingStimulated = false;

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

AddClothingCtrl.prototype.ajouterClothing = function() {
    this.ClothingService.addClothing(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.clothingComplete,this.$scope.clothingStimulated).then(function () {});


};
},{}],22:[function(require,module,exports){
var ClothingCtrl = module.exports = function ($scope, ClothingService) {
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

    ClothingService.getClothings().then(function (data) {
        $scope.data = data.map(function(clothing) {
            clothing.date = new Date(clothing.date);
            return clothing;
        });
    });
};
},{}],23:[function(require,module,exports){
var AddDisorderCtrl = module.exports = function ($scope, DisorderService) {
    this.$scope = $scope;
    this.DisorderService = DisorderService;
    $scope.date = new Date();

    $scope.timeDisorientation = false;
    $scope.spaceDisorientation = false;
    $scope.termDifficulty = false;
    $scope.verbalDifficulty = false;
    $scope.lossConcept = false;
    $scope.agitated = false;

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

AddDisorderCtrl.prototype.ajouterDisorder = function() {
    this.DisorderService.addDisorder(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.timeDisorientation,this.$scope.spaceDisorientation,this.$scope.termDifficulty,
        this.$scope.verbalDifficulty,this.$scope.lossConcept,this.$scope.agitated).then(function () {});


};
},{}],24:[function(require,module,exports){
var DisorderCtrl = module.exports = function ($scope, DisorderService) {
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

    DisorderService.getDisorders().then(function (data) {
        $scope.data = data.map(function(disorder) {
            disorder.date = new Date(disorder.date);
            return disorder;
        });
    });
};
},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
var AddEatCtrl = module.exports = function ($scope, EatService) {
    this.$scope = $scope;
    this.EatService = EatService;
    $scope.date = new Date();

    $scope.priorAid = false;
    $scope.fullAid = false;
    $scope.eatStimulated = false;
    $scope.hydration = false;

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

AddEatCtrl.prototype.ajouterEat = function() {
    this.EatService.addEat(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.priorAid,this.$scope.fullAid,this.$scope.eatStimulated,this.$scope.hydration).then(function () {});


};
},{}],28:[function(require,module,exports){
var EatCtrl = module.exports = function ($scope, EatService) {
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

    EatService.getEats().then(function (data) {
        $scope.data = data.map(function(eat) {
            eat.date = new Date(eat.date);
            return eat;
        });
    });
};
},{}],29:[function(require,module,exports){
var HeaderCtrl = module.exports = function (LoginService, $state) {
    this.LoginService = LoginService;
    this.$state = $state;
};

HeaderCtrl.prototype.disconnect  = function () {
    this.LoginService.doLogout();
    this.$state.go("login");
};
},{}],30:[function(require,module,exports){
var AddHygieneCtrl = module.exports = function ($scope, HygieneService) {
    this.$scope = $scope;
    this.HygieneService = HygieneService;
    $scope.date = new Date();

    $scope.toiletPartiel = false;
    $scope.toiletComplete = false;
    $scope.hygieneStimulated = false;

    $scope.bath = false;
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

AddHygieneCtrl.prototype.ajouterHygiene = function() {
    this.HygieneService.addHygiene(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.toiletPartiel,this.$scope.toiletComplete,this.$scope.hygieneStimulated,this.$scope.bath).then(function () {});


};
},{}],31:[function(require,module,exports){
var HygieneCtrl = module.exports = function ($scope, HygieneService) {
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

    HygieneService.getHygienes().then(function (data) {
        $scope.data = data.map(function(hygiene) {
            hygiene.date = new Date(hygiene.date);
            return hygiene;
        });
    });
};
},{}],32:[function(require,module,exports){
var IncontinenceCtrl = module.exports = function ($scope, IncontinenceService) {
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

    IncontinenceService.getIncontinences().then(function (data) {
        $scope.data = data.map(function(incontinence) {
            incontinence.date = new Date(incontinence.date);
            return incontinence;
        });
    });
};
},{}],33:[function(require,module,exports){
var InjectionCtrl = module.exports = function ($scope, InjectionService) {
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

    InjectionService.getInjections().then(function (data) {
        $scope.data = data.map(function(injection) {
            injection.date = new Date(injection.date);
            return injection;
        });
    });
};
},{}],34:[function(require,module,exports){
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
},{}],35:[function(require,module,exports){
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
},{}],36:[function(require,module,exports){
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
},{}],37:[function(require,module,exports){
var AddMealCtrl = module.exports = function ($scope, $state, MealService) {
    this.$scope = $scope;
    this.MealService = MealService;
    this.$state = $state;
    $scope.date = new Date();
    $scope.selectedMeals = [];

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
    var _this = this;
    if (this.$scope.selectedMeals.length !== 0) {
        this.MealService.addMeal(this.$scope.selectedMeals[0].id, this.$scope.date.getTime()).then(function () {
            _this.$state.go('meal');
        });
    }
};
},{}],38:[function(require,module,exports){
var MealCtrl = module.exports = function ($scope, $state, MealService) {
    $scope = $scope;
    $scope.selectedMeals = [];

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
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedMeals = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    MealService.getMeals().then(function (data) {
        $scope.data = data.map(function(meal) {
            meal.date = new Date(meal.date);
            return meal;
        });
    });

    $scope.removeSelectedMeals = function () {
        MealService.removeMeals($scope.selectedMeals).then(function () {
            $state.go('reload', {reload:'meal'});
        });
    }
};
},{}],39:[function(require,module,exports){
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
    $scope.permission.injection = true;

}
},{}],40:[function(require,module,exports){
var MobilizationCtrl = module.exports = function ($scope, MobilizationService) {
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

    MobilizationService.getMobilizations().then(function (data) {
        $scope.data = data.map(function(mobilization) {
            mobilization.date = new Date(mobilization.date);
            return mobilization;
        });
    });
};
},{}],41:[function(require,module,exports){
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
},{}],42:[function(require,module,exports){
var ParameterCtrl = module.exports = function ($scope, ParameterService) {
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

    ParameterService.getParameters().then(function (data) {
        $scope.data = data.map(function(parameter) {
            parameter.date = new Date(parameter.date);
            return parameter;
        });
    });
};
},{}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
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
},{}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
var ToiletHelpingCtrl = module.exports = function ($scope, ToiletHelpingService) {
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

    ToiletHelpingService.getToiletHelpings().then(function (data) {
        $scope.data = data.map(function(toiletHelping) {
            toiletHelping.date = new Date(toiletHelping.date);
            return toiletHelping;
        });
    });
};
},{}],47:[function(require,module,exports){
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
},{}],48:[function(require,module,exports){
'user strict';

var moduleDirective = angular.module('app.directives', ['app.services']);

moduleDirective.directive("boarderlist", require("./directives/BoarderListDirective"));

},{"./directives/BoarderListDirective":49}],49:[function(require,module,exports){
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
        }
    };
};
},{}],50:[function(require,module,exports){
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
moduleService.service("InjectionService", require('./services/InjectionService'));
moduleService.service("HygieneService", require('./services/HygieneService'));
moduleService.service("ClothingService", require('./services/ClothingService'));
moduleService.service("MobilizationService", require('./services/MobilizationService'));
moduleService.service("ToiletHelpingService", require('./services/ToiletHelpingService'));
moduleService.service("IncontinenceService", require('./services/IncontinenceService'));
moduleService.service("EatService", require('./services/EatService'));
moduleService.service("ParameterService", require('./services/ParameterService'));
moduleService.service("DisorderService", require('./services/DisorderService'));



},{"./services/AerosolService":51,"./services/BoarderService":52,"./services/ClothingService":53,"./services/DisorderService":54,"./services/DrugTreatmentService":55,"./services/EatService":56,"./services/HygieneService":57,"./services/IncontinenceService":58,"./services/InjectionService":59,"./services/InsulinDosageService":60,"./services/InsulinTakingService":61,"./services/LoginService":62,"./services/MealService":63,"./services/MobilizationService":64,"./services/ObservationService":65,"./services/ParameterService":66,"./services/PatchService":67,"./services/SwaddleService":68,"./services/TherapeuticService":69,"./services/ToiletHelpingService":70,"./services/WoundService":71,"RouteService":"6YVD1J"}],51:[function(require,module,exports){
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


AerosolService.prototype.updateAerosol = function (id, idBoarder, date, doctor, nameMedic, dosage, unit) {
    var _this = this;
    var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
    data += '&doctor=' + doctor + '&nameMedic=' + nameMedic + '&dosage=' + dosage + '&unit=' + unit;
    return this.$http.put(this.SERVER_ROOT + 'aerosol?' + data, {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],52:[function(require,module,exports){
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

BoarderService.prototype.getBoarder = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'boarder?id=' + id, {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],53:[function(require,module,exports){
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
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ClothingService.prototype.getClothings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'clothing/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],54:[function(require,module,exports){
var DisorderService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

DisorderService.prototype.addDisorder = function (idBoarder, date, timeDisorientation, spaceDisorientation, termDifficulty, verbalDifficulty, lossConcept, agitated) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&timeDisorientation=" + timeDisorientation +
        "&spaceDisorientation=" + spaceDisorientation +
        "&termDifficulty=" + termDifficulty +
        "&verbalDifficulty=" + verbalDifficulty +
        "&lossConcept=" + lossConcept +
        "&agitated=" + agitated;
    return this.$http.post(this.SERVER_ROOT + 'disorder', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

DisorderService.prototype.getDisorders = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'disorder/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],55:[function(require,module,exports){
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
},{}],56:[function(require,module,exports){
var EatService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

EatService.prototype.addEat = function (idBoarder, date, priorAid, fullAid, eatStimulated, hydration) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&priorAid=" + priorAid +
        "&fullAid=" + fullAid +
        "&eatStimulated=" + eatStimulated +
        "&hydration=" + hydration ;
    return this.$http.post(this.SERVER_ROOT + 'eat', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

EatService.prototype.getEats = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'eat/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],57:[function(require,module,exports){
var HygieneService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

HygieneService.prototype.addHygiene = function (idBoarder, date, toiletPartiel, toiletComplete, hygieneStimulated, bath) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&toiletPartiel=" + toiletPartiel +
        "&toiletComplete=" + toiletComplete +
        "&hygieneStimulated=" + hygieneStimulated +
        "&bath=" + bath ;
    return this.$http.post(this.SERVER_ROOT + 'hygiene', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

HygieneService.prototype.getHygienes = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'hygiene/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],58:[function(require,module,exports){
var IncontinenceService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

IncontinenceService.prototype.addIncontinence = function (idBoarder, date, diurnal, nocturnal, both) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&diurnal=" + diurnal +
        "&nocturnal=" + nocturnal +
        "&both=" + both ;
    return this.$http.post(this.SERVER_ROOT + 'incontinence', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

IncontinenceService.prototype.getIncontinences = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'incontinence/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],59:[function(require,module,exports){
var InjectionService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

InjectionService.prototype.addInjection = function (idBoarder, date, doctor, establishment, nameMedic, dosage, unit) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        // "&dateStart=" + dateStart +
        // "&dateEnd=" + dateEnd +
        "&doctor=" + doctor +
        "&establishment=" + establishment +
        "&nameMedic=" + nameMedic +
        "&dosage=" + dosage +
        "&unit=" + unit ;
    return this.$http.post(this.SERVER_ROOT + 'injection', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InjectionService.prototype.getInjections = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'injection/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],60:[function(require,module,exports){
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

},{}],61:[function(require,module,exports){
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

},{}],62:[function(require,module,exports){
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
},{}],63:[function(require,module,exports){
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

MealService.prototype.removeMeal = function (idMeal) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'meal?id=' + idMeal, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MealService.prototype.removeMeals = function (meals) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    meals.forEach(function (meal) {
        var defer = _this.$q.defer();
        _this.removeMeal(meal.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
}
},{}],64:[function(require,module,exports){
var MobilizationService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

MobilizationService.prototype.addMobilization = function (idBoarder, date, help, material, cane) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&help=" + help +
        "&material=" + material +
        "&cane=" + cane ;
    return this.$http.post(this.SERVER_ROOT + 'mobilization', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MobilizationService.prototype.getMobilizations = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'mobilization/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],65:[function(require,module,exports){
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
},{}],66:[function(require,module,exports){
var ParameterService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

ParameterService.prototype.addParameter= function (idBoarder, date, pulse, tension, temperature) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&pulse=" + pulse +
        "&tension=" + tension +
        "&temperature=" + temperature ;
    return this.$http.post(this.SERVER_ROOT + 'parameter', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ParameterService.prototype.getParameters = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'parameter/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],67:[function(require,module,exports){
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
},{}],68:[function(require,module,exports){
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
},{}],69:[function(require,module,exports){
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
},{}],70:[function(require,module,exports){
var ToiletHelpingService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

ToiletHelpingService.prototype.addToiletHelping = function (idBoarder, date, move) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&move=" + move ;

    return this.$http.post(this.SERVER_ROOT + 'toiletHelping', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ToiletHelpingService.prototype.getToiletHelpings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'toiletHelping/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],71:[function(require,module,exports){
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
},{}]},{},[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2FtdWVsXFxXZWJzdG9ybVByb2plY3RzXFxURkUgY2xpZW50XFxub2RlX21vZHVsZXNcXGdydW50LWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvY29uZmlnL2Rldi9Sb3V0ZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvYXBwbGljYXRpb24uanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkSW5jb250aW5lbmNlQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRJbmplY3Rpb25DdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5Eb3NhZ2VDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5UYWtpbmdDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZE1vYmlsaXphdGlvbkN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkT2JzZXJ2YXRpb25DdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFBhcmFtZXRlckN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkUGF0Y2hDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFN3YWRkbGVDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFRoZXJhcGV1dGljQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRUb2lsZXRIZWxwaW5nQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRXb3VuZEN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWVyb3NvbC9BZGRBZXJvc29sQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZXJvc29sL0Flcm9zb2xDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0Flcm9zb2wvVXBkYXRlQWVyb3NvbEN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQm9hcmRlckN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQ2xvdGhpbmcvQWRkQ2xvdGhpbmdDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0Nsb3RoaW5nL0Nsb3RoaW5nQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EaXNvcmRlci9BZGREaXNvcmRlckN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvRGlzb3JkZXIvRGlzb3JkZXJDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0RydWdUcmVhdGVtZW50L0FkZERydWdUcmVhdG1lbnRDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0RydWdUcmVhdGVtZW50L0RydWdUcmVhdG1lbnRDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0VhdC9BZGRFYXRDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0VhdC9FYXRDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0hlYWRlckN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSHlnaWVuZS9BZGRIeWdpZW5lQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9IeWdpZW5lL0h5Z2llbmVDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0luY29udGluZW5jZUN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSW5qZWN0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbnN1bGluRG9zYWdlQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbnN1bGluVGFraW5nQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Mb2dpbkN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTWVhbC9BZGRNZWFsQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9NZWFsL01lYWxDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL01lbnVDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL01vYmlsaXphdGlvbkN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvT2JzZXJ2YXRpb25DdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1BhcmFtZXRlckN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvUGF0Y2hDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1N3YWRkbGVDdHJsLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1RoZXJhcGV1dGljQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Ub2lsZXRIZWxwaW5nQ3RybC5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Xb3VuZEN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvZGlyZWN0aXZlcy5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9kaXJlY3RpdmVzL0JvYXJkZXJMaXN0RGlyZWN0aXZlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0Flcm9zb2xTZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0JvYXJkZXJTZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0Nsb3RoaW5nU2VydmljZS5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9EaXNvcmRlclNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvRHJ1Z1RyZWF0bWVudFNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvRWF0U2VydmljZS5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9IeWdpZW5lU2VydmljZS5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9JbmNvbnRpbmVuY2VTZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0luamVjdGlvblNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSW5zdWxpbkRvc2FnZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSW5zdWxpblRha2luZ1NlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvTG9naW5TZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL01lYWxTZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL01vYmlsaXphdGlvblNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvT2JzZXJ2YXRpb25TZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1BhcmFtZXRlclNlcnZpY2UuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9URkUgY2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvUGF0Y2hTZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1N3YWRkbGVTZXJ2aWNlLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvVEZFIGNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1RoZXJhcGV1dGljU2VydmljZS5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Ub2lsZXRIZWxwaW5nU2VydmljZS5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL1RGRSBjbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Xb3VuZFNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJvdXRlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0OjgwODAvJztcclxufTsiLCJ2YXIgYXBwID0gIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAnbmdHcmlkJywgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnLCAnYXBwLmNvbnRyb2xsZXJzJywgJ2FwcC5zZXJ2aWNlcycsICdhcHAuZGlyZWN0aXZlcyddKTtcclxuXHJcbmFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgLy8gRm9yIGFueSB1bm1hdGNoZWQgdXJsLCByZWRpcmVjdCB0byAvc3RhdGUxXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2xvZ2luXCIpO1xyXG4gICAgLy9cclxuICAgIC8vIE5vdyBzZXQgdXAgdGhlIHN0YXRlc1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbG9naW4uaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgY3RybCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXRlKCdyZWxvYWQnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvcmVsb2FkLzpyZWxvYWRcIixcclxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcywgJHN0YXRlLCAkdGltZW91dCkge30sXHJcbiAgICAgICAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMsICRzdGF0ZSwgJHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJHN0YXRlUGFyYW1zLnJlbG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXRlKCdtYWluLWNvbnRlbnQnLCB7XHJcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgJ2Zvb3Rlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zvb3Rlci5odG1sJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdoZWFkZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oZWFkZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckN0cmwgYXMgY3RybCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21haW4tY29udGVudC5odG1sJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhdGUoJ21lbnUnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVudVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWVudS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lbnVDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ21lYWwnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVhbFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvbWVhbC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lYWxDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZG1lYWwnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVhbC9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1tZWFsLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkTWVhbEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnc3dhZGRsZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9zd2FkZGxlXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9zd2FkZGxlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU3dhZGRsZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkc3dhZGRsZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9zd2FkZGxlL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvYWRkLXN3YWRkbGUuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRTd2FkZGxlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbnN1bGluRG9zYWdlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5Eb3NhZ2VcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luc3VsaW5Eb3NhZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbnN1bGluRG9zYWdlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbnN1bGluRG9zYWdlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5Eb3NhZ2UvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5zdWxpbkRvc2FnZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluc3VsaW5Eb3NhZ2VDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ29ic2VydmF0aW9uJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL29ic2VydmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9vYnNlcnZhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ09ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRvYnNlcnZhdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9vYnNlcnZhdGlvbi9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1vYnNlcnZhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZE9ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdwYXRjaCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9wYXRjaFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvcGF0Y2guaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQYXRjaEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkcGF0Y2gnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvcGF0Y2gvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtcGF0Y2guaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRQYXRjaEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWVyb3NvbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hZXJvc29sXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZXJvc29sLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWVyb3NvbEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkYWVyb3NvbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hZXJvc29sL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWFlcm9zb2wuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRBZXJvc29sQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCd1cGRhdGVhZXJvc29sJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Flcm9zb2wvdXBkYXRlLzppZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWFlcm9zb2wuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdVcGRhdGVBZXJvc29sQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCd3b3VuZCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi93b3VuZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3Mvd291bmQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdXb3VuZEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkd291bmQnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvd291bmQvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtd291bmQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRXb3VuZEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnZHJ1Z1RyZWF0bWVudCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9kcnVnVHJlYXRtZW50XCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9kcnVnVHJlYXRtZW50Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRHJ1Z1RyZWF0bWVudEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkZHJ1Z1RyZWF0bWVudCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9kcnVnVHJlYXRtZW50L2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWRydWdUcmVhdG1lbnQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGREcnVnVHJlYXRtZW50Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbnN1bGluVGFraW5nJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5UYWtpbmdcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luc3VsaW5UYWtpbmcuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbnN1bGluVGFraW5nQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbnN1bGluVGFraW5nJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5UYWtpbmcvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5zdWxpblRha2luZy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluc3VsaW5UYWtpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ3RoZXJhcGV1dGljJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3RoZXJhcGV1dGljXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy90aGVyYXBldXRpYy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RoZXJhcGV1dGljQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGR0aGVyYXBldXRpYycsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi90aGVyYXBldXRpYy9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC10aGVyYXBldXRpYy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFRoZXJhcGV1dGljQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbmplY3Rpb24nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5qZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9pbmplY3Rpb24uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmplY3Rpb25DdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGluamVjdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9pbmplY3Rpb24vYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5qZWN0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkSW5qZWN0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdoeWdpZW5lJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9oeWdpZW5lXCIsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2h5Z2llbmUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSHlnaWVuZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkaHlnaWVuZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvaHlnaWVuZS9hZGRcIixcclxuICAgICAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWh5Z2llbmUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkSHlnaWVuZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnY2xvdGhpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvY2xvdGhpbmdcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2Nsb3RoaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQ2xvdGhpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGNsb3RoaW5nJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Nsb3RoaW5nL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWNsb3RoaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkQ2xvdGhpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ21vYmlsaXphdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tb2JpbGl6YXRpb25cIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL21vYmlsaXphdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01vYmlsaXphdGlvbkN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkbW9iaWxpemF0aW9uJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL21vYmlsaXphdGlvbi9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1tb2JpbGl6YXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRNb2JpbGl6YXRpb25DdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ3RvaWxldEhlbHBpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvdG9pbGV0SGVscGluZ1wiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvdG9pbGV0SGVscGluZy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RvaWxldEhlbHBpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZHRvaWxldEhlbHBpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvdG9pbGV0SGVscGluZy9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC10b2lsZXRIZWxwaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkVG9pbGV0SGVscGluZ0N0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnaW5jb250aW5lbmNlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luY29udGluZW5jZVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvaW5jb250aW5lbmNlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSW5jb250aW5lbmNlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbmNvbnRpbmVuY2UnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5jb250aW5lbmNlL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWluY29udGluZW5jZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluY29udGluZW5jZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnZWF0Jywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2VhdFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvZWF0Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRWF0Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRlYXQnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvZWF0L2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWVhdC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEVhdEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgncGFyYW1ldGVyJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3BhcmFtZXRlclwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvcGFyYW1ldGVyLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGFyYW1ldGVyQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRwYXJhbWV0ZXInLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvcGFyYW1ldGVyL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLXBhcmFtZXRlci5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFBhcmFtZXRlckN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnZGlzb3JkZXInLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvZGlzb3JkZXJcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2Rpc29yZGVyLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRGlzb3JkZXJDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGRpc29yZGVyJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Rpc29yZGVyL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWRpc29yZGVyLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkRGlzb3JkZXJDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSlcclxufSkuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsIGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XHJcbiAgICAvLyBBdXRvcmlzYXRpb24gZGVzIGNvb2tpZXMgcG91ciBsZXMgcmVxdcOpdGVzIENPUlNcclxuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxufV0pLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCR0cmFuc2xhdGVQcm92aWRlcikge1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdmcicpO1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcclxuICAgICAgICBwcmVmaXg6ICdsYW5ndWFnZXMvJyxcclxuICAgICAgICBzdWZmaXg6ICcuanNvbidcclxuICAgIH0pO1xyXG59XSk7IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcclxuXHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0xvZ2luQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiSGVhZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0hlYWRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkJvYXJkZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQm9hcmRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lbnVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVudUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lYWxDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVhbC9NZWFsQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkTWVhbEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9NZWFsL0FkZE1lYWxDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJTd2FkZGxlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1N3YWRkbGVDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRTd2FkZGxlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZFN3YWRkbGVDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5Eb3NhZ2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJPYnNlcnZhdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9PYnNlcnZhdGlvbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZE9ic2VydmF0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZE9ic2VydmF0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiUGF0Y2hDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvUGF0Y2hDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRQYXRjaEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRQYXRjaEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFlcm9zb2xDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWVyb3NvbC9BZXJvc29sQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkQWVyb3NvbEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZXJvc29sL0FkZEFlcm9zb2xDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJVcGRhdGVBZXJvc29sQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Flcm9zb2wvVXBkYXRlQWVyb3NvbEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIldvdW5kQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1dvdW5kQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkV291bmRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkV291bmRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJEcnVnVHJlYXRtZW50Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0RydWdUcmVhdGVtZW50L0RydWdUcmVhdG1lbnRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGREcnVnVHJlYXRtZW50Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0RydWdUcmVhdGVtZW50L0FkZERydWdUcmVhdG1lbnRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbnN1bGluVGFraW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5UYWtpbmdDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbnN1bGluVGFraW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5UYWtpbmdDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJUaGVyYXBldXRpY0N0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9UaGVyYXBldXRpY0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFRoZXJhcGV1dGljQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZFRoZXJhcGV1dGljQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiSW5qZWN0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luamVjdGlvbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluamVjdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRJbmplY3Rpb25DdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJIeWdpZW5lQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0h5Z2llbmUvSHlnaWVuZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEh5Z2llbmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSHlnaWVuZS9BZGRIeWdpZW5lQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQ2xvdGhpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQ2xvdGhpbmcvQ2xvdGhpbmdDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRDbG90aGluZ0N0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9DbG90aGluZy9BZGRDbG90aGluZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1vYmlsaXphdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9Nb2JpbGl6YXRpb25DdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRNb2JpbGl6YXRpb25DdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkTW9iaWxpemF0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiVG9pbGV0SGVscGluZ0N0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9Ub2lsZXRIZWxwaW5nQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkVG9pbGV0SGVscGluZ0N0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRUb2lsZXRIZWxwaW5nQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiSW5jb250aW5lbmNlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luY29udGluZW5jZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluY29udGluZW5jZUN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRJbmNvbnRpbmVuY2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJFYXRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvRWF0L0VhdEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEVhdEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9FYXQvQWRkRWF0Q3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiUGFyYW1ldGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1BhcmFtZXRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFBhcmFtZXRlckN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRQYXJhbWV0ZXJDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJEaXNvcmRlckN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9EaXNvcmRlci9EaXNvcmRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZERpc29yZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Rpc29yZGVyL0FkZERpc29yZGVyQ3RybCcpKTtcclxuXHJcbiIsInZhciBBZGRJbmNvbnRpbmVuY2VDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbmNvbnRpbmVuY2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuSW5jb250aW5lbmNlU2VydmljZSA9IEluY29udGluZW5jZVNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLmRpdXJuYWwgPSBmYWxzZTtcclxuICAgICRzY29wZS5ub2N0dXJuYWwgPSBmYWxzZTtcclxuICAgICRzY29wZS5ib3RoID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRJbmNvbnRpbmVuY2VDdHJsLnByb3RvdHlwZS5ham91dGVySW5jb250aW5lbmNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkluY29udGluZW5jZVNlcnZpY2UuYWRkSW5jb250aW5lbmNlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmRpdXJuYWwsdGhpcy4kc2NvcGUubm9jdHVybmFsLHRoaXMuJHNjb3BlLmJvdGgpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZEluamVjdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluamVjdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5JbmplY3Rpb25TZXJ2aWNlID0gSW5qZWN0aW9uU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlRW5kID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5kb2N0b3IgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XHJcbiAgICAkc2NvcGUudW5pdCA9IFwiXCI7XHJcbiAgICAkc2NvcGUuZXN0YWJsaXNobWVudD0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZEluamVjdGlvbkN0cmwucHJvdG90eXBlLmFqb3V0ZXJJbmplY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuSW5qZWN0aW9uU2VydmljZS5hZGRJbmplY3Rpb24odGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCx0aGlzLiRzY29wZS5lc3RhYmxpc2htZW50KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgSW5zdWxpbkRvc2FnZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UgPSBJbnN1bGluRG9zYWdlU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5JbnN1bGluRG9zYWdlQ3RybC5wcm90b3R5cGUuYWpvdXRlckluc3VsaW5Eb3NhZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UuYWRkSW5zdWxpbkRvc2FnZSh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldE1pbGxpc2Vjb25kcygpLCB0aGlzLiRzY29wZS5kb3NhZ2UpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG59O1xyXG5cclxuLy9JbnN1bGluRG9zYWdlQ3RybC5wcm90b3R5cGUuZ2V0SW5zdWxpbkRvc2FnZXMgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZS5nZXRJbnN1bGluRG9zYWdlcygpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG4vL307XHJcbiIsInZhciBJbnN1bGluVGFraW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5zdWxpblRha2luZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5JbnN1bGluVGFraW5nU2VydmljZSA9IEluc3VsaW5UYWtpbmdTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbkluc3VsaW5UYWtpbmdDdHJsLnByb3RvdHlwZS5ham91dGVySW5zdWxpblRha2luZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5JbnN1bGluVGFraW5nU2VydmljZS5hZGRJbnN1bGluVGFraW5nKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRoaXMuJHNjb3BlLmdseWNlbWlhKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTtcclxuXHJcbi8vSW5zdWxpbkRvc2FnZUN0cmwucHJvdG90eXBlLmdldEluc3VsaW5Eb3NhZ2VzID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UuZ2V0SW5zdWxpbkRvc2FnZXMoKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuLy99O1xyXG4iLCJ2YXIgQWRkTW9iaWxpemF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgTW9iaWxpemF0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLk1vYmlsaXphdGlvblNlcnZpY2UgPSBNb2JpbGl6YXRpb25TZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLmhlbHAgPSBmYWxzZTtcclxuICAgICRzY29wZS5tYXRlcmlhbCA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmNhbmUgPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE1vYmlsaXphdGlvbkN0cmwucHJvdG90eXBlLmFqb3V0ZXJNb2JpbGl6YXRpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuTW9iaWxpemF0aW9uU2VydmljZS5hZGRNb2JpbGl6YXRpb24odGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuaGVscCx0aGlzLiRzY29wZS5tYXRlcmlhbCx0aGlzLiRzY29wZS5jYW5lKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblxyXG59OyIsInZhciBBZGRPYnNlcnZhdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE9ic2VydmF0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLk9ic2VydmF0aW9uU2VydmljZSA9IE9ic2VydmF0aW9uU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5jb21tZW50ID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE9ic2VydmF0aW9uQ3RybC5wcm90b3R5cGUuYWpvdXRlck9ic2VydmF0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLk9ic2VydmF0aW9uU2VydmljZS5hZGRPYnNlcnZhdGlvbih0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSwgdGhpcy4kc2NvcGUuY29tbWVudCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbn07IiwidmFyIEFkZFBhcmFtZXRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFBhcmFtZXRlclNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5QYXJhbWV0ZXJTZXJ2aWNlID0gUGFyYW1ldGVyU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUucHVsc2UgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnRlbnNpb24gPSBcIlwiO1xyXG4gICAgJHNjb3BlLnRlbXBlcmF0dXJlID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFBhcmFtZXRlckN0cmwucHJvdG90eXBlLmFqb3V0ZXJQYXJhbWV0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuUGFyYW1ldGVyU2VydmljZS5hZGRQYXJhbWV0ZXIodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUucHVsc2UsdGhpcy4kc2NvcGUudGVuc2lvbix0aGlzLiRzY29wZS50ZW1wZXJhdHVyZSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlU3RhcnQuZ2V0VGltZSgpLFxyXG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZUVuZC5nZXRUaW1lKClcclxuXHJcbn07IiwidmFyIEFkZFBhdGNoQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgUGF0Y2hTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuUGF0Y2hTZXJ2aWNlID0gUGF0Y2hTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVFbmQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLmRvY3RvciA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmFtZU1lZGljID0gXCJcIjtcclxuICAgICRzY29wZS51bml0ID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFBhdGNoQ3RybC5wcm90b3R5cGUuYWpvdXRlclBhdGNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLlBhdGNoU2VydmljZS5hZGRQYXRjaCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5kb2N0b3IsdGhpcy4kc2NvcGUubmFtZU1lZGljLHRoaXMuJHNjb3BlLmRvc2FnZSx0aGlzLiRzY29wZS51bml0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgQWRkU3dhZGRsZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFN3YWRkbGVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuU3dhZGRsZVNlcnZpY2UgPSBTd2FkZGxlU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFN3YWRkbGVDdHJsLnByb3RvdHlwZS5ham91dGVyU3dhZGRsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5Td2FkZGxlU2VydmljZS5hZGRTd2FkZGxlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTsiLCJ2YXIgQWRkVGhlcmFwZXV0aWNDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUaGVyYXBldXRpY1NlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5UaGVyYXBldXRpY1NlcnZpY2UgPSBUaGVyYXBldXRpY1NlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUucHJlcGFyYXRpb24gPSBmYWxzZTtcclxuICAgICRzY29wZS5hZE1vcm5pbmcgPSBmYWxzZTtcclxuICAgICRzY29wZS5hZE1pZGRheSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmFkRXZlbmluZyA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmFkTmlnaHQgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRUaGVyYXBldXRpY0N0cmwucHJvdG90eXBlLmFqb3V0ZXJUaGVyYXBldXRpYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5UaGVyYXBldXRpY1NlcnZpY2UuYWRkVGhlcmFwZXV0aWModGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUucHJlcGFyYXRpb24sXHJcbiAgICB0aGlzLiRzY29wZS5hZE1vcm5pbmcsdGhpcy4kc2NvcGUuYWRNaWRkYXksdGhpcy4kc2NvcGUuYWRFdmVuaW5nLHRoaXMuJHNjb3BlLmFkTmlnaHQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxufTsiLCJ2YXIgQWRkVG9pbGV0SGVscGluZ0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFRvaWxldEhlbHBpbmdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuVG9pbGV0SGVscGluZ1NlcnZpY2UgPSBUb2lsZXRIZWxwaW5nU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5tb3ZlID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFRvaWxldEhlbHBpbmdDdHJsLnByb3RvdHlwZS5ham91dGVyVG9pbGV0SGVscGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5Ub2lsZXRIZWxwaW5nU2VydmljZS5hZGRUb2lsZXRIZWxwaW5nKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLm1vdmUpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxufTsiLCJ2YXIgQWRkV291bmRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBXb3VuZFNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5Xb3VuZFNlcnZpY2UgPSBXb3VuZFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUubG9jYWxpc2F0aW9uID0gXCJcIjtcclxuICAgICRzY29wZS50eXBlID0gXCJcIjtcclxuICAgICRzY29wZS5kZXNjcmlwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRXb3VuZEN0cmwucHJvdG90eXBlLmFqb3V0ZXJXb3VuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5Xb3VuZFNlcnZpY2UuYWRkV291bmQodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUubG9jYWxpc2F0aW9uLHRoaXMuJHNjb3BlLnR5cGUsdGhpcy4kc2NvcGUuZGVzY3JpcHRpb24pLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxufTsiLCJ2YXIgQWRkQWVyb3NvbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgQWVyb3NvbFNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLkFlcm9zb2xTZXJ2aWNlID0gQWVyb3NvbFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlU3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZUVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUuZG9jdG9yID0gXCJcIjtcclxuICAgICRzY29wZS5uYW1lTWVkaWMgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnVuaXQgPSBcIlwiO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkQWVyb3NvbEN0cmwucHJvdG90eXBlLmFqb3V0ZXJBZXJvc29sID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICB0aGlzLkFlcm9zb2xTZXJ2aWNlLmFkZEFlcm9zb2wodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3RoaXMuJHN0YXRlLmdvKCdhZXJvc29sJyk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgQWVyb3NvbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEFlcm9zb2xTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRBZXJvc29scyA9IFtdO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQWVyb3NvbHMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIEFlcm9zb2xTZXJ2aWNlLmdldEFlcm9zb2xzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oYWVyb3NvbCkge1xyXG4gICAgICAgICAgICBhZXJvc29sLmRhdGUgPSBuZXcgRGF0ZShhZXJvc29sLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWVyb3NvbDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBVcGRhdGVBZXJvc29sQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQWVyb3NvbFNlcnZpY2UsICRzdGF0ZVBhcmFtcywgJHN0YXRlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuQWVyb3NvbFNlcnZpY2UgPSBBZXJvc29sU2VydmljZTtcclxuICAgIHRoaXMuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUuZG9jdG9yID0gXCJcIjtcclxuICAgICRzY29wZS5uYW1lTWVkaWMgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnVuaXQgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnVwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQWVyb3NvbFNlcnZpY2UuZ2V0QWVyb3NvbCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVyID0gZGF0YS5ib2FyZGVyO1xyXG4gICAgICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoZGF0YS5kYXRlKTtcclxuICAgICAgICAkc2NvcGUuZGF0ZVN0YXJ0ID0gZGF0YS5kYXRlU3RhcnQ7XHJcbiAgICAgICAgJHNjb3BlLmRhdGVFbmQgPSBkYXRhLmRhdGVFbmQ7XHJcbiAgICAgICAgJHNjb3BlLmRvY3RvciA9IGRhdGEuZG9jdG9yO1xyXG4gICAgICAgICRzY29wZS5uYW1lTWVkaWMgPSBkYXRhLm5hbWVNZWRpYztcclxuICAgICAgICAkc2NvcGUuZG9zYWdlID0gZGF0YS5kb3NhZ2U7XHJcbiAgICAgICAgJHNjb3BlLnVuaXQgPSBkYXRhLnVuaXQ7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblVwZGF0ZUFlcm9zb2xDdHJsLnByb3RvdHlwZS51cGRhdGVBZXJvc29sID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICB0aGlzLkFlcm9zb2xTZXJ2aWNlLnVwZGF0ZUFlcm9zb2wodGhpcy4kc3RhdGVQYXJhbXMuaWQsIHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlci5pZCwgdGhpcy4kc2NvcGUuZGF0ZSwgdGhpcy4kc2NvcGUuZG9jdG9yLCB0aGlzLiRzY29wZS5uYW1lTWVkaWMsIHRoaXMuJHNjb3BlLmRvc2FnZSwgdGhpcy4kc2NvcGUudW5pdCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3RoaXMuJHN0YXRlLmdvKCdhZXJvc29sJyk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgQm9hcmRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJvYXJkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdOb20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3N1cm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUHLDqW5vbSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAncm9vbScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdDaGFtYnJlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgQm9hcmRlclNlcnZpY2UuZ2V0Qm9hcmRlcnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsInZhciBBZGRDbG90aGluZ0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIENsb3RoaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkNsb3RoaW5nU2VydmljZSA9IENsb3RoaW5nU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuY2xvdGhpbmdDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmNsb3RoaW5nU3RpbXVsYXRlZCA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkQ2xvdGhpbmdDdHJsLnByb3RvdHlwZS5ham91dGVyQ2xvdGhpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuQ2xvdGhpbmdTZXJ2aWNlLmFkZENsb3RoaW5nKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmNsb3RoaW5nQ29tcGxldGUsdGhpcy4kc2NvcGUuY2xvdGhpbmdTdGltdWxhdGVkKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblxyXG59OyIsInZhciBDbG90aGluZ0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIENsb3RoaW5nU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIENsb3RoaW5nU2VydmljZS5nZXRDbG90aGluZ3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihjbG90aGluZykge1xyXG4gICAgICAgICAgICBjbG90aGluZy5kYXRlID0gbmV3IERhdGUoY2xvdGhpbmcuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjbG90aGluZztcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBBZGREaXNvcmRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIERpc29yZGVyU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkRpc29yZGVyU2VydmljZSA9IERpc29yZGVyU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUudGltZURpc29yaWVudGF0aW9uID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuc3BhY2VEaXNvcmllbnRhdGlvbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRlcm1EaWZmaWN1bHR5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudmVyYmFsRGlmZmljdWx0eSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmxvc3NDb25jZXB0ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuYWdpdGF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZERpc29yZGVyQ3RybC5wcm90b3R5cGUuYWpvdXRlckRpc29yZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkRpc29yZGVyU2VydmljZS5hZGREaXNvcmRlcih0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS50aW1lRGlzb3JpZW50YXRpb24sdGhpcy4kc2NvcGUuc3BhY2VEaXNvcmllbnRhdGlvbix0aGlzLiRzY29wZS50ZXJtRGlmZmljdWx0eSxcclxuICAgICAgICB0aGlzLiRzY29wZS52ZXJiYWxEaWZmaWN1bHR5LHRoaXMuJHNjb3BlLmxvc3NDb25jZXB0LHRoaXMuJHNjb3BlLmFnaXRhdGVkKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblxyXG59OyIsInZhciBEaXNvcmRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIERpc29yZGVyU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIERpc29yZGVyU2VydmljZS5nZXREaXNvcmRlcnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihkaXNvcmRlcikge1xyXG4gICAgICAgICAgICBkaXNvcmRlci5kYXRlID0gbmV3IERhdGUoZGlzb3JkZXIuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNvcmRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBBZGREcnVnVHJlYXRtZW50Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRHJ1Z1RyZWF0bWVudFNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5EcnVnVHJlYXRtZW50U2VydmljZSA9IERydWdUcmVhdG1lbnRTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVFbmQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLmRvY3RvciA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmFtZU1lZGljID0gXCJcIjtcclxuICAgICRzY29wZS51bml0ID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZERydWdUcmVhdG1lbnRDdHJsLnByb3RvdHlwZS5ham91dGVyRHJ1Z1RyZWF0bWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5EcnVnVHJlYXRtZW50U2VydmljZS5hZGREcnVnVHJlYXRtZW50KHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmRvY3Rvcix0aGlzLiRzY29wZS5uYW1lTWVkaWMsdGhpcy4kc2NvcGUuZG9zYWdlLHRoaXMuJHNjb3BlLnVuaXQsXHJcbiAgICAgICAgdGhpcy4kc2NvcGUubW9ybmluZywgdGhpcy4kc2NvcGUubWlkZGF5LCB0aGlzLiRzY29wZS5ldmVuaW5nLCB0aGlzLiRzY29wZS5uaWdodCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlU3RhcnQuZ2V0VGltZSgpLFxyXG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZUVuZC5nZXRUaW1lKClcclxuXHJcbn07IiwidmFyIERydWdUcmVhdG1lbnRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBEcnVnVHJlYXRtZW50U2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdtb3JuaW5nJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ01hdGluJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIERydWdUcmVhdG1lbnRTZXJ2aWNlLmdldERydWdUcmVhdG1lbnRzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oZHJ1Z1RyZWF0bWVudCkge1xyXG4gICAgICAgICAgICBkcnVnVHJlYXRtZW50LmRhdGUgPSBuZXcgRGF0ZShkcnVnVHJlYXRtZW50LmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZHJ1Z1RyZWF0bWVudDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBBZGRFYXRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBFYXRTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuRWF0U2VydmljZSA9IEVhdFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLnByaW9yQWlkID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZnVsbEFpZCA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVhdFN0aW11bGF0ZWQgPSBmYWxzZTtcclxuICAgICRzY29wZS5oeWRyYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZEVhdEN0cmwucHJvdG90eXBlLmFqb3V0ZXJFYXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuRWF0U2VydmljZS5hZGRFYXQodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUucHJpb3JBaWQsdGhpcy4kc2NvcGUuZnVsbEFpZCx0aGlzLiRzY29wZS5lYXRTdGltdWxhdGVkLHRoaXMuJHNjb3BlLmh5ZHJhdGlvbikudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcblxyXG5cclxufTsiLCJ2YXIgRWF0Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRWF0U2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIEVhdFNlcnZpY2UuZ2V0RWF0cygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGVhdCkge1xyXG4gICAgICAgICAgICBlYXQuZGF0ZSA9IG5ldyBEYXRlKGVhdC5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVhdDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBIZWFkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTG9naW5TZXJ2aWNlLCAkc3RhdGUpIHtcclxuICAgIHRoaXMuTG9naW5TZXJ2aWNlID0gTG9naW5TZXJ2aWNlO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbn07XHJcblxyXG5IZWFkZXJDdHJsLnByb3RvdHlwZS5kaXNjb25uZWN0ICA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuTG9naW5TZXJ2aWNlLmRvTG9nb3V0KCk7XHJcbiAgICB0aGlzLiRzdGF0ZS5nbyhcImxvZ2luXCIpO1xyXG59OyIsInZhciBBZGRIeWdpZW5lQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSHlnaWVuZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5IeWdpZW5lU2VydmljZSA9IEh5Z2llbmVTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS50b2lsZXRQYXJ0aWVsID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9pbGV0Q29tcGxldGUgPSBmYWxzZTtcclxuICAgICRzY29wZS5oeWdpZW5lU3RpbXVsYXRlZCA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5iYXRoID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZEh5Z2llbmVDdHJsLnByb3RvdHlwZS5ham91dGVySHlnaWVuZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5IeWdpZW5lU2VydmljZS5hZGRIeWdpZW5lKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnRvaWxldFBhcnRpZWwsdGhpcy4kc2NvcGUudG9pbGV0Q29tcGxldGUsdGhpcy4kc2NvcGUuaHlnaWVuZVN0aW11bGF0ZWQsdGhpcy4kc2NvcGUuYmF0aCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcblxyXG5cclxufTsiLCJ2YXIgSHlnaWVuZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEh5Z2llbmVTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSHlnaWVuZVNlcnZpY2UuZ2V0SHlnaWVuZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihoeWdpZW5lKSB7XHJcbiAgICAgICAgICAgIGh5Z2llbmUuZGF0ZSA9IG5ldyBEYXRlKGh5Z2llbmUuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBoeWdpZW5lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEluY29udGluZW5jZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluY29udGluZW5jZVNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBJbmNvbnRpbmVuY2VTZXJ2aWNlLmdldEluY29udGluZW5jZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbmNvbnRpbmVuY2UpIHtcclxuICAgICAgICAgICAgaW5jb250aW5lbmNlLmRhdGUgPSBuZXcgRGF0ZShpbmNvbnRpbmVuY2UuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmNvbnRpbmVuY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSW5qZWN0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5qZWN0aW9uU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkb2N0b3InLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRG9jdGV1cidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBJbmplY3Rpb25TZXJ2aWNlLmdldEluamVjdGlvbnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbmplY3Rpb24pIHtcclxuICAgICAgICAgICAgaW5qZWN0aW9uLmRhdGUgPSBuZXcgRGF0ZShpbmplY3Rpb24uZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3Rpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSW5zdWxpbkRvc2FnZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2Rvc2FnZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEb3NhZ2UgKGVuIHVuaXTDqSknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSW5zdWxpbkRvc2FnZVNlcnZpY2UuZ2V0SW5zdWxpbkRvc2FnZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbnN1bGluRG9zYWdlKSB7XHJcbiAgICAgICAgICAgIGluc3VsaW5Eb3NhZ2UuZGF0ZSA9IG5ldyBEYXRlKGluc3VsaW5Eb3NhZ2UuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN1bGluRG9zYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEluc3VsaW5UYWtpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbnN1bGluVGFraW5nU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdnbHljZW1pYScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdHbHljw6ltaWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSW5zdWxpblRha2luZ1NlcnZpY2UuZ2V0SW5zdWxpblRha2luZ3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbnN1bGluVGFraW5nKSB7XHJcbiAgICAgICAgICAgIGluc3VsaW5UYWtpbmcuZGF0ZSA9IG5ldyBEYXRlKGluc3VsaW5UYWtpbmcuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN1bGluVGFraW5nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIExvZ2luQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHN0YXRlLCBMb2dpblNlcnZpY2UpIHtcclxuICAgICRzY29wZS5lbWFpbCA9IFwiXCI7XHJcbiAgICAkc2NvcGUucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnJlbWVtYmVyTWUgPSBmYWxzZTtcclxuICAgICRzY29wZS5lcnJvcm1zZyA9IFwiXCI7XHJcblxyXG4gICAgaWYoTG9naW5TZXJ2aWNlLmlzTG9nKCkpIHtcclxuICAgICAgICAkc3RhdGUuZ28oXCJtYWluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5jb25uZXhpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJHNjb3BlLmVtYWlsID09PSB1bmRlZmluZWQgfHwgJHNjb3BlLnBhc3N3b3JkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmVycm9ybXNnID0gJHRyYW5zbGF0ZSgnbG9naW4ubWVzc2FnZS5lcnJvcicpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgTG9naW5TZXJ2aWNlLmRvTG9naW4oJHNjb3BlLmVtYWlsLCAkc2NvcGUucGFzc3dvcmQsICRzY29wZS5yZW1lbWJlck1lKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oXCJtZW51XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5lcnJvcm1zZyA9ICR0cmFuc2xhdGUoJ2xvZ2luLm1lc3NhZ2UuZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIEFkZE1lYWxDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIE1lYWxTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuTWVhbFNlcnZpY2UgPSBNZWFsU2VydmljZTtcclxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTWVhbHMgPSBbXTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE1lYWxDdHJsLnByb3RvdHlwZS5ham91dGVyTWVhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGlmICh0aGlzLiRzY29wZS5zZWxlY3RlZE1lYWxzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMuTWVhbFNlcnZpY2UuYWRkTWVhbCh0aGlzLiRzY29wZS5zZWxlY3RlZE1lYWxzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRzdGF0ZS5nbygnbWVhbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59OyIsInZhciBNZWFsQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBNZWFsU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTWVhbHMgPSBbXTtcclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogdHJ1ZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRNZWFscyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgTWVhbFNlcnZpY2UuZ2V0TWVhbHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihtZWFsKSB7XHJcbiAgICAgICAgICAgIG1lYWwuZGF0ZSA9IG5ldyBEYXRlKG1lYWwuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnJlbW92ZVNlbGVjdGVkTWVhbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgTWVhbFNlcnZpY2UucmVtb3ZlTWVhbHMoJHNjb3BlLnNlbGVjdGVkTWVhbHMpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3JlbG9hZCcsIHtyZWxvYWQ6J21lYWwnfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07IiwidmFyIE1lbnVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24gPSB7fTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLm1lYWwgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uc3dhZGRsZSA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5pbnN1bGluRG9zYWdlID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLnBhdGNoID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLmFlcm9zb2wgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24ud291bmQgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24ub2JzZXJ2YXRpb24gPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uZHJ1Z1RyZWF0bWVudCA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5pbnN1bGluVGFraW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLnRoZXJhcGV1dGljID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLmluamVjdGlvbiA9IHRydWU7XHJcblxyXG59IiwidmFyIE1vYmlsaXphdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE1vYmlsaXphdGlvblNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBNb2JpbGl6YXRpb25TZXJ2aWNlLmdldE1vYmlsaXphdGlvbnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihtb2JpbGl6YXRpb24pIHtcclxuICAgICAgICAgICAgbW9iaWxpemF0aW9uLmRhdGUgPSBuZXcgRGF0ZShtb2JpbGl6YXRpb24uZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2JpbGl6YXRpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgT2JzZXJ2YXRpb25DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBPYnNlcnZhdGlvblNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnY29tbWVudCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdPYnNlcnZhdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBPYnNlcnZhdGlvblNlcnZpY2UuZ2V0T2JzZXJ2YXRpb25zKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24ob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgb2JzZXJ2YXRpb24uZGF0ZSA9IG5ldyBEYXRlKG9ic2VydmF0aW9uLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YXRpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgUGFyYW1ldGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgUGFyYW1ldGVyU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIFBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVycygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXIuZGF0ZSA9IG5ldyBEYXRlKHBhcmFtZXRlci5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBQYXRjaEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFBhdGNoU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkb2N0b3InLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRG9jdGV1cidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBQYXRjaFNlcnZpY2UuZ2V0UGF0Y2hzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24ocGF0Y2gpIHtcclxuICAgICAgICAgICAgcGF0Y2guZGF0ZSA9IG5ldyBEYXRlKHBhdGNoLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0Y2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgU3dhZGRsZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFN3YWRkbGVTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgU3dhZGRsZVNlcnZpY2UuZ2V0U3dhZGRsZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihzd2FkZGxlKSB7XHJcbiAgICAgICAgICAgIHN3YWRkbGUuZGF0ZSA9IG5ldyBEYXRlKHN3YWRkbGUuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzd2FkZGxlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFRoZXJhcGV1dGljQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgVGhlcmFwZXV0aWNTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3ByZXBhcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1Byw6lwYXJhdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBUaGVyYXBldXRpY1NlcnZpY2UuZ2V0VGhlcmFwZXV0aWNzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24odGhlcmFwZXV0aWMpIHtcclxuICAgICAgICAgICAgdGhlcmFwZXV0aWMuZGF0ZSA9IG5ldyBEYXRlKHRoZXJhcGV1dGljLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhlcmFwZXV0aWM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgVG9pbGV0SGVscGluZ0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFRvaWxldEhlbHBpbmdTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgVG9pbGV0SGVscGluZ1NlcnZpY2UuZ2V0VG9pbGV0SGVscGluZ3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbih0b2lsZXRIZWxwaW5nKSB7XHJcbiAgICAgICAgICAgIHRvaWxldEhlbHBpbmcuZGF0ZSA9IG5ldyBEYXRlKHRvaWxldEhlbHBpbmcuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2lsZXRIZWxwaW5nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFdvdW5kQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgV291bmRTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0Rlc2NyaXB0aW9uIGRlcyBzb2lucydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBXb3VuZFNlcnZpY2UuZ2V0V291bmRzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24od291bmQpIHtcclxuICAgICAgICAgICAgd291bmQuZGF0ZSA9IG5ldyBEYXRlKHdvdW5kLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gd291bmQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCIndXNlciBzdHJpY3QnO1xyXG5cclxudmFyIG1vZHVsZURpcmVjdGl2ZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFsnYXBwLnNlcnZpY2VzJ10pO1xyXG5cclxubW9kdWxlRGlyZWN0aXZlLmRpcmVjdGl2ZShcImJvYXJkZXJsaXN0XCIsIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvQm9hcmRlckxpc3REaXJlY3RpdmVcIikpO1xyXG4iLCJ2YXIgQm9hcmRlckxpc3REaXJlY3RpdmUgPSBtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbihCb2FyZGVyU2VydmljZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCb2FyZGVyczogXCI9XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IFwiQm9hcmRlckN0cmxcIixcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvYm9hcmRlcmxpc3QuaHRtbCcsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTsiLCIndXNlciBzdHJpY3QnO1xyXG52YXIgUm91dGVTZXJ2aWNlID0gcmVxdWlyZSgnUm91dGVTZXJ2aWNlJyk7XHJcblxyXG52YXIgbW9kdWxlU2VydmljZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XHJcblxyXG5tb2R1bGVTZXJ2aWNlLmNvbnN0YW50KCdTRVJWRVJfUk9PVCcsIFJvdXRlU2VydmljZSgpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiTG9naW5TZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvTG9naW5TZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJCb2FyZGVyU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0JvYXJkZXJTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJNZWFsU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL01lYWxTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJTd2FkZGxlU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1N3YWRkbGVTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbnN1bGluRG9zYWdlU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0luc3VsaW5Eb3NhZ2VTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJPYnNlcnZhdGlvblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9PYnNlcnZhdGlvblNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlBhdGNoU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1BhdGNoU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiQWVyb3NvbFNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9BZXJvc29sU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiV291bmRTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvV291bmRTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJEcnVnVHJlYXRtZW50U2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0RydWdUcmVhdG1lbnRTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbnN1bGluVGFraW5nU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0luc3VsaW5UYWtpbmdTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJUaGVyYXBldXRpY1NlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9UaGVyYXBldXRpY1NlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkluamVjdGlvblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9JbmplY3Rpb25TZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJIeWdpZW5lU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0h5Z2llbmVTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJDbG90aGluZ1NlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9DbG90aGluZ1NlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIk1vYmlsaXphdGlvblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Nb2JpbGl6YXRpb25TZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJUb2lsZXRIZWxwaW5nU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1RvaWxldEhlbHBpbmdTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbmNvbnRpbmVuY2VTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSW5jb250aW5lbmNlU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiRWF0U2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0VhdFNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlBhcmFtZXRlclNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9QYXJhbWV0ZXJTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJEaXNvcmRlclNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9EaXNvcmRlclNlcnZpY2UnKSk7XHJcblxyXG5cclxuIiwidmFyIEFlcm9zb2xTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuQWVyb3NvbFNlcnZpY2UucHJvdG90eXBlLmFkZEFlcm9zb2wgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICAvLyBcIiZkYXRlU3RhcnQ9XCIgKyBkYXRlU3RhcnQgK1xyXG4gICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcclxuICAgICAgICBcIiZkb2N0b3I9XCIgKyBkb2N0b3IgK1xyXG4gICAgICAgIFwiJm5hbWVNZWRpYz1cIiArIG5hbWVNZWRpYyArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcclxuICAgICAgICBcIiZ1bml0PVwiICsgdW5pdCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYWVyb3NvbCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuQWVyb3NvbFNlcnZpY2UucHJvdG90eXBlLmdldEFlcm9zb2xzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2Flcm9zb2wvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5BZXJvc29sU2VydmljZS5wcm90b3R5cGUuZ2V0QWVyb3NvbCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2Flcm9zb2w/aWQ9JyArIGlkLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5BZXJvc29sU2VydmljZS5wcm90b3R5cGUudXBkYXRlQWVyb3NvbCA9IGZ1bmN0aW9uIChpZCwgaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSAnaWQ9JyArIGlkICsgJyZib2FyZGVyPScgKyBpZEJvYXJkZXIgKyAnJmRhdGU9JyArIGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgZGF0YSArPSAnJmRvY3Rvcj0nICsgZG9jdG9yICsgJyZuYW1lTWVkaWM9JyArIG5hbWVNZWRpYyArICcmZG9zYWdlPScgKyBkb3NhZ2UgKyAnJnVuaXQ9JyArIHVuaXQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQodGhpcy5TRVJWRVJfUk9PVCArICdhZXJvc29sPycgKyBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgQm9hcmRlclNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Cb2FyZGVyU2VydmljZS5wcm90b3R5cGUuZ2V0Qm9hcmRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYm9hcmRlci9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkJvYXJkZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRCb2FyZGVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYm9hcmRlcj9pZD0nICsgaWQsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBDbG90aGluZ1NlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5DbG90aGluZ1NlcnZpY2UucHJvdG90eXBlLmFkZENsb3RoaW5nID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgY2xvdGhpbmdDb21wbGV0ZSwgY2xvdGhpbmdTdGltdWxhdGVkKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZjbG90aGluZ0NvbXBsZXRlPVwiICsgY2xvdGhpbmdDb21wbGV0ZSArXHJcbiAgICAgICAgXCImY2xvdGhpbmdTdGltdWxhdGVkPVwiICsgY2xvdGhpbmdTdGltdWxhdGVkO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2Nsb3RoaW5nJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5DbG90aGluZ1NlcnZpY2UucHJvdG90eXBlLmdldENsb3RoaW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdjbG90aGluZy9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRGlzb3JkZXJTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuRGlzb3JkZXJTZXJ2aWNlLnByb3RvdHlwZS5hZGREaXNvcmRlciA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHRpbWVEaXNvcmllbnRhdGlvbiwgc3BhY2VEaXNvcmllbnRhdGlvbiwgdGVybURpZmZpY3VsdHksIHZlcmJhbERpZmZpY3VsdHksIGxvc3NDb25jZXB0LCBhZ2l0YXRlZCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImdGltZURpc29yaWVudGF0aW9uPVwiICsgdGltZURpc29yaWVudGF0aW9uICtcclxuICAgICAgICBcIiZzcGFjZURpc29yaWVudGF0aW9uPVwiICsgc3BhY2VEaXNvcmllbnRhdGlvbiArXHJcbiAgICAgICAgXCImdGVybURpZmZpY3VsdHk9XCIgKyB0ZXJtRGlmZmljdWx0eSArXHJcbiAgICAgICAgXCImdmVyYmFsRGlmZmljdWx0eT1cIiArIHZlcmJhbERpZmZpY3VsdHkgK1xyXG4gICAgICAgIFwiJmxvc3NDb25jZXB0PVwiICsgbG9zc0NvbmNlcHQgK1xyXG4gICAgICAgIFwiJmFnaXRhdGVkPVwiICsgYWdpdGF0ZWQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnZGlzb3JkZXInLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkRpc29yZGVyU2VydmljZS5wcm90b3R5cGUuZ2V0RGlzb3JkZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2Rpc29yZGVyL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBEcnVnVHJlYXRtZW50U2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkRydWdUcmVhdG1lbnRTZXJ2aWNlLnByb3RvdHlwZS5hZGREcnVnVHJlYXRtZW50ID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZG9jdG9yLCBuYW1lTWVkaWMsIGRvc2FnZSwgdW5pdCwgbW9ybmluZywgbWlkZGF5LCBldmVuaW5nLCBuaWdodCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgLy8gXCImZGF0ZVN0YXJ0PVwiICsgZGF0ZVN0YXJ0ICtcclxuICAgICAgICAvLyBcIiZkYXRlRW5kPVwiICsgZGF0ZUVuZCArXHJcbiAgICAgICAgXCImZG9jdG9yPVwiICsgZG9jdG9yICtcclxuICAgICAgICBcIiZuYW1lTWVkaWM9XCIgKyBuYW1lTWVkaWMgK1xyXG4gICAgICAgIFwiJmRvc2FnZT1cIiArIGRvc2FnZSArXHJcbiAgICAgICAgXCImdW5pdD1cIiArIHVuaXQgK1xyXG4gICAgICAgIFwiJm1vcm5pbmc9XCIgKyBtb3JuaW5nICtcclxuICAgICAgICBcIiZtaWRkYXk9XCIgKyBtaWRkYXkgK1xyXG4gICAgICAgIFwiJmV2ZW5pbmc9XCIgKyBldmVuaW5nICtcclxuICAgICAgICBcIiZuaWdodD1cIiArIG5pZ2h0IDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdkcnVnVHJlYXRtZW50JywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5EcnVnVHJlYXRtZW50U2VydmljZS5wcm90b3R5cGUuZ2V0RHJ1Z1RyZWF0bWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnZHJ1Z1RyZWF0bWVudC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRWF0U2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkVhdFNlcnZpY2UucHJvdG90eXBlLmFkZEVhdCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHByaW9yQWlkLCBmdWxsQWlkLCBlYXRTdGltdWxhdGVkLCBoeWRyYXRpb24pIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJnByaW9yQWlkPVwiICsgcHJpb3JBaWQgK1xyXG4gICAgICAgIFwiJmZ1bGxBaWQ9XCIgKyBmdWxsQWlkICtcclxuICAgICAgICBcIiZlYXRTdGltdWxhdGVkPVwiICsgZWF0U3RpbXVsYXRlZCArXHJcbiAgICAgICAgXCImaHlkcmF0aW9uPVwiICsgaHlkcmF0aW9uIDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdlYXQnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkVhdFNlcnZpY2UucHJvdG90eXBlLmdldEVhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnZWF0L2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBIeWdpZW5lU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkh5Z2llbmVTZXJ2aWNlLnByb3RvdHlwZS5hZGRIeWdpZW5lID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgdG9pbGV0UGFydGllbCwgdG9pbGV0Q29tcGxldGUsIGh5Z2llbmVTdGltdWxhdGVkLCBiYXRoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZ0b2lsZXRQYXJ0aWVsPVwiICsgdG9pbGV0UGFydGllbCArXHJcbiAgICAgICAgXCImdG9pbGV0Q29tcGxldGU9XCIgKyB0b2lsZXRDb21wbGV0ZSArXHJcbiAgICAgICAgXCImaHlnaWVuZVN0aW11bGF0ZWQ9XCIgKyBoeWdpZW5lU3RpbXVsYXRlZCArXHJcbiAgICAgICAgXCImYmF0aD1cIiArIGJhdGggO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2h5Z2llbmUnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkh5Z2llbmVTZXJ2aWNlLnByb3RvdHlwZS5nZXRIeWdpZW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdoeWdpZW5lL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBJbmNvbnRpbmVuY2VTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuSW5jb250aW5lbmNlU2VydmljZS5wcm90b3R5cGUuYWRkSW5jb250aW5lbmNlID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZGl1cm5hbCwgbm9jdHVybmFsLCBib3RoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZkaXVybmFsPVwiICsgZGl1cm5hbCArXHJcbiAgICAgICAgXCImbm9jdHVybmFsPVwiICsgbm9jdHVybmFsICtcclxuICAgICAgICBcIiZib3RoPVwiICsgYm90aCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5jb250aW5lbmNlJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5JbmNvbnRpbmVuY2VTZXJ2aWNlLnByb3RvdHlwZS5nZXRJbmNvbnRpbmVuY2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2luY29udGluZW5jZS9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSW5qZWN0aW9uU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkluamVjdGlvblNlcnZpY2UucHJvdG90eXBlLmFkZEluamVjdGlvbiA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGRvY3RvciwgZXN0YWJsaXNobWVudCwgbmFtZU1lZGljLCBkb3NhZ2UsIHVuaXQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIC8vIFwiJmRhdGVTdGFydD1cIiArIGRhdGVTdGFydCArXHJcbiAgICAgICAgLy8gXCImZGF0ZUVuZD1cIiArIGRhdGVFbmQgK1xyXG4gICAgICAgIFwiJmRvY3Rvcj1cIiArIGRvY3RvciArXHJcbiAgICAgICAgXCImZXN0YWJsaXNobWVudD1cIiArIGVzdGFibGlzaG1lbnQgK1xyXG4gICAgICAgIFwiJm5hbWVNZWRpYz1cIiArIG5hbWVNZWRpYyArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcclxuICAgICAgICBcIiZ1bml0PVwiICsgdW5pdCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5qZWN0aW9uJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5JbmplY3Rpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRJbmplY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2luamVjdGlvbi9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSW5zdWxpbkRvc2FnZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5JbnN1bGluRG9zYWdlU2VydmljZS5wcm90b3R5cGUuYWRkSW5zdWxpbkRvc2FnZSA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGRvc2FnZSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluRG9zYWdlJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5JbnN1bGluRG9zYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdWxpbkRvc2FnZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5zdWxpbkRvc2FnZS9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuIiwidmFyIEluc3VsaW5UYWtpbmdTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuSW5zdWxpblRha2luZ1NlcnZpY2UucHJvdG90eXBlLmFkZEluc3VsaW5UYWtpbmcgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBnbHljZW1pYSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImZ2x5Y2VtaWE9XCIgKyBnbHljZW1pYTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5zdWxpblRha2luZycsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuSW5zdWxpblRha2luZ1NlcnZpY2UucHJvdG90eXBlLmdldEluc3VsaW5UYWtpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5UYWtpbmcvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcbiIsInZhciBMb2dpblNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLl91c2VyID0gbnVsbDtcclxuICAgIHRoaXMuX3VzZXJSaWdodHMgPSBudWxsO1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgdGhpcy51c2VybmFtZSA9IG51bGw7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcclxufTtcclxuXHJcbkxvZ2luU2VydmljZS5wcm90b3R5cGUuaXNMb2cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZih0aGlzLnVzZXJuYW1lICE9IG51bGwgJiYgdGhpcy5wYXNzd29yZCAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4vL1RPRE8gOiBQcm9taXNlIHZyYWltZW50IG7DqWNlc3NhaXJlID9cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5kb0xvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCwgcmVtZW1iZXJNZSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJ1c2VybmFtZT1cIiArIHVzZXJuYW1lICtcclxuICAgICAgICBcIiZwYXNzd29yZD1cIiArIHBhc3N3b3JkO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2xvZ2luJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEuc3RhdHVzID09IDIwMikge1xyXG4gICAgICAgICAgICBfdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgICAgICBfdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSBfdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgICAgICBkZWZlci5yZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciBkZWZlcjIgPSBfdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgIGRlZmVyMi5yZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gZGVmZXIyLnByb21pc2U7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxvZ2luU2VydmljZS5wcm90b3R5cGUuZG9Mb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gbnVsbDtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xyXG59OyIsInZhciBNZWFsU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbk1lYWxTZXJ2aWNlLnByb3RvdHlwZS5hZGRNZWFsID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZTtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdtZWFsJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5NZWFsU2VydmljZS5wcm90b3R5cGUuZ2V0TWVhbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbWVhbC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbk1lYWxTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVNZWFsID0gZnVuY3Rpb24gKGlkTWVhbCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZSh0aGlzLlNFUlZFUl9ST09UICsgJ21lYWw/aWQ9JyArIGlkTWVhbCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5NZWFsU2VydmljZS5wcm90b3R5cGUucmVtb3ZlTWVhbHMgPSBmdW5jdGlvbiAobWVhbHMpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGVmZXJHbG9iYWwgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgIG1lYWxzLmZvckVhY2goZnVuY3Rpb24gKG1lYWwpIHtcclxuICAgICAgICB2YXIgZGVmZXIgPSBfdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgIF90aGlzLnJlbW92ZU1lYWwobWVhbC5pZCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKGRlZmVyLnByb21pc2UpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLiRxLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGVmZXJHbG9iYWwucmVzb2x2ZSgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGVmZXJHbG9iYWwucHJvbWlzZTtcclxufSIsInZhciBNb2JpbGl6YXRpb25TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuTW9iaWxpemF0aW9uU2VydmljZS5wcm90b3R5cGUuYWRkTW9iaWxpemF0aW9uID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgaGVscCwgbWF0ZXJpYWwsIGNhbmUpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmhlbHA9XCIgKyBoZWxwICtcclxuICAgICAgICBcIiZtYXRlcmlhbD1cIiArIG1hdGVyaWFsICtcclxuICAgICAgICBcIiZjYW5lPVwiICsgY2FuZSA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbW9iaWxpemF0aW9uJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Nb2JpbGl6YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRNb2JpbGl6YXRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ21vYmlsaXphdGlvbi9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgT2JzZXJ2YXRpb25TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuT2JzZXJ2YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5hZGRPYnNlcnZhdGlvbiA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGNvbW1lbnQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmNvbW1lbnQ9XCIgKyBjb21tZW50O1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ29ic2VydmF0aW9uJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5PYnNlcnZhdGlvblNlcnZpY2UucHJvdG90eXBlLmdldE9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdvYnNlcnZhdGlvbi9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgUGFyYW1ldGVyU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblBhcmFtZXRlclNlcnZpY2UucHJvdG90eXBlLmFkZFBhcmFtZXRlcj0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgcHVsc2UsIHRlbnNpb24sIHRlbXBlcmF0dXJlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZwdWxzZT1cIiArIHB1bHNlICtcclxuICAgICAgICBcIiZ0ZW5zaW9uPVwiICsgdGVuc2lvbiArXHJcbiAgICAgICAgXCImdGVtcGVyYXR1cmU9XCIgKyB0ZW1wZXJhdHVyZSA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAncGFyYW1ldGVyJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5QYXJhbWV0ZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3BhcmFtZXRlci9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgUGF0Y2hTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuUGF0Y2hTZXJ2aWNlLnByb3RvdHlwZS5hZGRQYXRjaCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGRvY3RvciwgbmFtZU1lZGljLCBkb3NhZ2UsIHVuaXQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgLy8gXCImZGF0ZVN0YXJ0PVwiICsgZGF0ZVN0YXJ0ICtcclxuICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcclxuICAgICAgICBcIiZkb2N0b3I9XCIgKyBkb2N0b3IgK1xyXG4gICAgICAgIFwiJm5hbWVNZWRpYz1cIiArIG5hbWVNZWRpYyArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcclxuICAgICAgICBcIiZ1bml0PVwiICsgdW5pdCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAncGF0Y2gnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcblBhdGNoU2VydmljZS5wcm90b3R5cGUuZ2V0UGF0Y2hzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3BhdGNoL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBTd2FkZGxlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblN3YWRkbGVTZXJ2aWNlLnByb3RvdHlwZS5hZGRTd2FkZGxlID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZTtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdzd2FkZGxlJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Td2FkZGxlU2VydmljZS5wcm90b3R5cGUuZ2V0U3dhZGRsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnc3dhZGRsZS9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgVGhlcmFwZXV0aWNTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuVGhlcmFwZXV0aWNTZXJ2aWNlLnByb3RvdHlwZS5hZGRUaGVyYXBldXRpYyA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHByZXBhcmF0aW9uLCBhZE1vcm5pbmcsIGFkTWlkZGF5LCBhZEV2ZW5pbmcsIGFkTmlnaHQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJnByZXBhcmF0aW9uPVwiICsgcHJlcGFyYXRpb24gK1xyXG4gICAgICAgIFwiJmFkTW9ybmluZz1cIiArIGFkTW9ybmluZyArXHJcbiAgICAgICAgXCImYWRNaWRkYXk9XCIgKyBhZE1pZGRheSArXHJcbiAgICAgICAgXCImYWRFdmVuaW5nPVwiICsgYWRFdmVuaW5nICtcclxuICAgICAgICBcIiZhZE5pZ2h0PVwiICsgYWROaWdodDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICd0aGVyYXBldXRpYycsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuVGhlcmFwZXV0aWNTZXJ2aWNlLnByb3RvdHlwZS5nZXRUaGVyYXBldXRpY3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAndGhlcmFwZXV0aWMvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIFRvaWxldEhlbHBpbmdTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuVG9pbGV0SGVscGluZ1NlcnZpY2UucHJvdG90eXBlLmFkZFRvaWxldEhlbHBpbmcgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBtb3ZlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZtb3ZlPVwiICsgbW92ZSA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3RvaWxldEhlbHBpbmcnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcblRvaWxldEhlbHBpbmdTZXJ2aWNlLnByb3RvdHlwZS5nZXRUb2lsZXRIZWxwaW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICd0b2lsZXRIZWxwaW5nL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBXb3VuZFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Xb3VuZFNlcnZpY2UucHJvdG90eXBlLmFkZFdvdW5kID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgbG9jYWxpc2F0aW9uLCB0eXBlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImbG9jYWxpc2F0aW9uPVwiICsgbG9jYWxpc2F0aW9uICtcclxuICAgICAgICBcIiZ0eXBlPVwiICsgdHlwZSArXHJcbiAgICAgICAgXCImZGVzY3JpcHRpb249XCIgKyBkZXNjcmlwdGlvbiA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3dvdW5kJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Xb3VuZFNlcnZpY2UucHJvdG90eXBlLmdldFdvdW5kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICd3b3VuZC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiXX0=
