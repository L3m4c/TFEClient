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
moduleController.controller("InjectionCtrl", require('./controllers/InjectionCtrl'));
moduleController.controller("AddInjectionCtrl", require('./controllers/AddInjectionCtrl'));
moduleController.controller("HygieneCtrl", require('./controllers/HygieneCtrl'));
moduleController.controller("AddHygieneCtrl", require('./controllers/AddHygieneCtrl'));
moduleController.controller("ClothingCtrl", require('./controllers/ClothingCtrl'));
moduleController.controller("AddClothingCtrl", require('./controllers/AddClothingCtrl'));
moduleController.controller("MobilizationCtrl", require('./controllers/MobilizationCtrl'));
moduleController.controller("AddMobilizationCtrl", require('./controllers/AddMobilizationCtrl'));
moduleController.controller("ToiletHelpingCtrl", require('./controllers/ToiletHelpingCtrl'));
moduleController.controller("AddToiletHelpingCtrl", require('./controllers/AddToiletHelpingCtrl'));
moduleController.controller("IncontinenceCtrl", require('./controllers/IncontinenceCtrl'));
moduleController.controller("AddIncontinenceCtrl", require('./controllers/AddIncontinenceCtrl'));
moduleController.controller("EatCtrl", require('./controllers/EatCtrl'));
moduleController.controller("AddEatCtrl", require('./controllers/AddEatCtrl'));
moduleController.controller("ParameterCtrl", require('./controllers/ParameterCtrl'));
moduleController.controller("AddParameterCtrl", require('./controllers/AddParameterCtrl'));
moduleController.controller("DisorderCtrl", require('./controllers/DisorderCtrl'));
moduleController.controller("AddDisorderCtrl", require('./controllers/AddDisorderCtrl'));


},{"./controllers/AddAerosolCtrl":5,"./controllers/AddClothingCtrl":6,"./controllers/AddDisorderCtrl":7,"./controllers/AddDrugTreatmentCtrl":8,"./controllers/AddEatCtrl":9,"./controllers/AddHygieneCtrl":10,"./controllers/AddIncontinenceCtrl":11,"./controllers/AddInjectionCtrl":12,"./controllers/AddInsulinDosageCtrl":13,"./controllers/AddInsulinTakingCtrl":14,"./controllers/AddMealCtrl":15,"./controllers/AddMobilizationCtrl":16,"./controllers/AddObservationCtrl":17,"./controllers/AddParameterCtrl":18,"./controllers/AddPatchCtrl":19,"./controllers/AddSwaddleCtrl":20,"./controllers/AddTherapeuticCtrl":21,"./controllers/AddToiletHelpingCtrl":22,"./controllers/AddWoundCtrl":23,"./controllers/AerosolCtrl":24,"./controllers/BoarderCtrl":25,"./controllers/ClothingCtrl":26,"./controllers/DisorderCtrl":27,"./controllers/DrugTreatmentCtrl":28,"./controllers/EatCtrl":29,"./controllers/HeaderCtrl":30,"./controllers/HygieneCtrl":31,"./controllers/IncontinenceCtrl":32,"./controllers/InjectionCtrl":33,"./controllers/InsulinDosageCtrl":34,"./controllers/InsulinTakingCtrl":35,"./controllers/LoginCtrl":36,"./controllers/MealCtrl":37,"./controllers/MenuCtrl":38,"./controllers/MobilizationCtrl":39,"./controllers/ObservationCtrl":40,"./controllers/ParameterCtrl":41,"./controllers/PatchCtrl":42,"./controllers/SwaddleCtrl":43,"./controllers/TherapeuticCtrl":44,"./controllers/ToiletHelpingCtrl":45,"./controllers/WoundCtrl":46}],5:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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
},{}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
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
},{}],30:[function(require,module,exports){
var HeaderCtrl = module.exports = function (LoginService, $state) {
    this.LoginService = LoginService;
    this.$state = $state;
};

HeaderCtrl.prototype.disconnect  = function () {
    this.LoginService.doLogout();
    this.$state.go("login");
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
},{}],38:[function(require,module,exports){
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
},{}],39:[function(require,module,exports){
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
},{}],40:[function(require,module,exports){
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
},{}],41:[function(require,module,exports){
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
},{}],42:[function(require,module,exports){
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
},{}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
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
},{}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
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
},{}],47:[function(require,module,exports){
'user strict';

var moduleDirective = angular.module('app.directives', ['app.services']);

moduleDirective.directive("boarderlist", require("./directives/BoarderListDirective"));

},{"./directives/BoarderListDirective":48}],48:[function(require,module,exports){
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
},{}],49:[function(require,module,exports){
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



},{"./services/AerosolService":50,"./services/BoarderService":51,"./services/ClothingService":52,"./services/DisorderService":53,"./services/DrugTreatmentService":54,"./services/EatService":55,"./services/HygieneService":56,"./services/IncontinenceService":57,"./services/InjectionService":58,"./services/InsulinDosageService":59,"./services/InsulinTakingService":60,"./services/LoginService":61,"./services/MealService":62,"./services/MobilizationService":63,"./services/ObservationService":64,"./services/ParameterService":65,"./services/PatchService":66,"./services/SwaddleService":67,"./services/TherapeuticService":68,"./services/ToiletHelpingService":69,"./services/WoundService":70,"RouteService":"6YVD1J"}],50:[function(require,module,exports){
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
},{}],51:[function(require,module,exports){
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
},{}],52:[function(require,module,exports){
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
},{}],53:[function(require,module,exports){
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
},{}],54:[function(require,module,exports){
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
},{}],55:[function(require,module,exports){
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
},{}],56:[function(require,module,exports){
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
},{}],57:[function(require,module,exports){
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
},{}],58:[function(require,module,exports){
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
},{}],59:[function(require,module,exports){
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

},{}],60:[function(require,module,exports){
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

},{}],61:[function(require,module,exports){
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
},{}],62:[function(require,module,exports){
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
},{}],63:[function(require,module,exports){
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
},{}],64:[function(require,module,exports){
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
},{}],65:[function(require,module,exports){
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
},{}],66:[function(require,module,exports){
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
},{}],67:[function(require,module,exports){
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
},{}],68:[function(require,module,exports){
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
},{}],69:[function(require,module,exports){
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
},{}],70:[function(require,module,exports){
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
},{}]},{},[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFtc1xcV2ViU3Rvcm1Qcm9qZWN0XFxURkVDbGllbnRcXG5vZGVfbW9kdWxlc1xcZ3J1bnQtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL2NvbmZpZy9kZXYvUm91dGVTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvYXBwbGljYXRpb24uanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEFlcm9zb2xDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkQ2xvdGhpbmdDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkRGlzb3JkZXJDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkRHJ1Z1RyZWF0bWVudEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRFYXRDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkSHlnaWVuZUN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRJbmNvbnRpbmVuY2VDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkSW5qZWN0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5Eb3NhZ2VDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkSW5zdWxpblRha2luZ0N0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRNZWFsQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZE1vYmlsaXphdGlvbkN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRPYnNlcnZhdGlvbkN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRQYXJhbWV0ZXJDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkUGF0Y2hDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkU3dhZGRsZUN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRUaGVyYXBldXRpY0N0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRUb2lsZXRIZWxwaW5nQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFdvdW5kQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0Flcm9zb2xDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQm9hcmRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9DbG90aGluZ0N0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EaXNvcmRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EcnVnVHJlYXRtZW50Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0VhdEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9IZWFkZXJDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSHlnaWVuZUN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbmNvbnRpbmVuY2VDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSW5qZWN0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2VDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSW5zdWxpblRha2luZ0N0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Mb2dpbkN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9NZWFsQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL01lbnVDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTW9iaWxpemF0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL09ic2VydmF0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1BhcmFtZXRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9QYXRjaEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Td2FkZGxlQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1RoZXJhcGV1dGljQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1RvaWxldEhlbHBpbmdDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvV291bmRDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvZGlyZWN0aXZlcy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2RpcmVjdGl2ZXMvQm9hcmRlckxpc3REaXJlY3RpdmUuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0Flcm9zb2xTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvQm9hcmRlclNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9DbG90aGluZ1NlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9EaXNvcmRlclNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9EcnVnVHJlYXRtZW50U2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0VhdFNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9IeWdpZW5lU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0luY29udGluZW5jZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9JbmplY3Rpb25TZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSW5zdWxpbkRvc2FnZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9JbnN1bGluVGFraW5nU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0xvZ2luU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL01lYWxTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvTW9iaWxpemF0aW9uU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL09ic2VydmF0aW9uU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1BhcmFtZXRlclNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9QYXRjaFNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Td2FkZGxlU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1RoZXJhcGV1dGljU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1RvaWxldEhlbHBpbmdTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvV291bmRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJvdXRlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0OjgwODAvJztcclxufTsiLCJ2YXIgYXBwID0gIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAnbmdHcmlkJywgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnLCAnYXBwLmNvbnRyb2xsZXJzJywgJ2FwcC5zZXJ2aWNlcycsICdhcHAuZGlyZWN0aXZlcyddKTtcclxuXHJcbmFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgLy8gRm9yIGFueSB1bm1hdGNoZWQgdXJsLCByZWRpcmVjdCB0byAvc3RhdGUxXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2xvZ2luXCIpO1xyXG4gICAgLy9cclxuICAgIC8vIE5vdyBzZXQgdXAgdGhlIHN0YXRlc1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbG9naW4uaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgY3RybCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXRlKCdtYWluLWNvbnRlbnQnLCB7XHJcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgJ2Zvb3Rlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zvb3Rlci5odG1sJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdoZWFkZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oZWFkZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckN0cmwgYXMgY3RybCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21haW4tY29udGVudC5odG1sJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhdGUoJ21lbnUnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVudVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWVudS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lbnVDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ21lYWwnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVhbFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvbWVhbC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lYWxDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZG1lYWwnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWVhbC9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1tZWFsLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkTWVhbEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnc3dhZGRsZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9zd2FkZGxlXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9zd2FkZGxlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU3dhZGRsZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkc3dhZGRsZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9zd2FkZGxlL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvYWRkLXN3YWRkbGUuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRTd2FkZGxlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbnN1bGluRG9zYWdlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5Eb3NhZ2VcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luc3VsaW5Eb3NhZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbnN1bGluRG9zYWdlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbnN1bGluRG9zYWdlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5Eb3NhZ2UvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5zdWxpbkRvc2FnZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluc3VsaW5Eb3NhZ2VDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ29ic2VydmF0aW9uJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL29ic2VydmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9vYnNlcnZhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ09ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRvYnNlcnZhdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9vYnNlcnZhdGlvbi9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1vYnNlcnZhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZE9ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdwYXRjaCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9wYXRjaFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvcGF0Y2guaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQYXRjaEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkcGF0Y2gnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvcGF0Y2gvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtcGF0Y2guaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRQYXRjaEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWVyb3NvbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hZXJvc29sXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZXJvc29sLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWVyb3NvbEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkYWVyb3NvbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hZXJvc29sL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWFlcm9zb2wuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRBZXJvc29sQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCd3b3VuZCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi93b3VuZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3Mvd291bmQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdXb3VuZEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkd291bmQnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvd291bmQvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtd291bmQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRXb3VuZEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnZHJ1Z1RyZWF0bWVudCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9kcnVnVHJlYXRtZW50XCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9kcnVnVHJlYXRtZW50Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRHJ1Z1RyZWF0bWVudEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkZHJ1Z1RyZWF0bWVudCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9kcnVnVHJlYXRtZW50L2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWRydWdUcmVhdG1lbnQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGREcnVnVHJlYXRtZW50Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbnN1bGluVGFraW5nJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5UYWtpbmdcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luc3VsaW5UYWtpbmcuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbnN1bGluVGFraW5nQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbnN1bGluVGFraW5nJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5UYWtpbmcvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5zdWxpblRha2luZy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluc3VsaW5UYWtpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ3RoZXJhcGV1dGljJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3RoZXJhcGV1dGljXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy90aGVyYXBldXRpYy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RoZXJhcGV1dGljQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGR0aGVyYXBldXRpYycsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi90aGVyYXBldXRpYy9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC10aGVyYXBldXRpYy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFRoZXJhcGV1dGljQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbmplY3Rpb24nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5qZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9pbmplY3Rpb24uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmplY3Rpb25DdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGluamVjdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9pbmplY3Rpb24vYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5qZWN0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkSW5qZWN0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdoeWdpZW5lJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9oeWdpZW5lXCIsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2h5Z2llbmUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSHlnaWVuZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkaHlnaWVuZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvaHlnaWVuZS9hZGRcIixcclxuICAgICAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWh5Z2llbmUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkSHlnaWVuZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnY2xvdGhpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvY2xvdGhpbmdcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2Nsb3RoaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQ2xvdGhpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGNsb3RoaW5nJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Nsb3RoaW5nL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWNsb3RoaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkQ2xvdGhpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ21vYmlsaXphdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tb2JpbGl6YXRpb25cIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL21vYmlsaXphdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01vYmlsaXphdGlvbkN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkbW9iaWxpemF0aW9uJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL21vYmlsaXphdGlvbi9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1tb2JpbGl6YXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRNb2JpbGl6YXRpb25DdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ3RvaWxldEhlbHBpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvdG9pbGV0SGVscGluZ1wiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvdG9pbGV0SGVscGluZy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RvaWxldEhlbHBpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZHRvaWxldEhlbHBpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvdG9pbGV0SGVscGluZy9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC10b2lsZXRIZWxwaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkVG9pbGV0SGVscGluZ0N0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnaW5jb250aW5lbmNlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luY29udGluZW5jZVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvaW5jb250aW5lbmNlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSW5jb250aW5lbmNlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbmNvbnRpbmVuY2UnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5jb250aW5lbmNlL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWluY29udGluZW5jZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluY29udGluZW5jZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnZWF0Jywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2VhdFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvZWF0Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRWF0Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRlYXQnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvZWF0L2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWVhdC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEVhdEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgncGFyYW1ldGVyJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3BhcmFtZXRlclwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvcGFyYW1ldGVyLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGFyYW1ldGVyQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRwYXJhbWV0ZXInLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvcGFyYW1ldGVyL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLXBhcmFtZXRlci5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFBhcmFtZXRlckN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnZGlzb3JkZXInLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvZGlzb3JkZXJcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2Rpc29yZGVyLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRGlzb3JkZXJDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGRpc29yZGVyJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Rpc29yZGVyL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWRpc29yZGVyLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkRGlzb3JkZXJDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSlcclxufSkuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsIGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XHJcbiAgICAvLyBBdXRvcmlzYXRpb24gZGVzIGNvb2tpZXMgcG91ciBsZXMgcmVxdcOpdGVzIENPUlNcclxuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxufV0pLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCR0cmFuc2xhdGVQcm92aWRlcikge1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdmcicpO1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcclxuICAgICAgICBwcmVmaXg6ICdsYW5ndWFnZXMvJyxcclxuICAgICAgICBzdWZmaXg6ICcuanNvbidcclxuICAgIH0pO1xyXG59XSk7IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcclxuXHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0xvZ2luQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiSGVhZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0hlYWRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkJvYXJkZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQm9hcmRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lbnVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVudUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lYWxDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVhbEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZE1lYWxDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkTWVhbEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlN3YWRkbGVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvU3dhZGRsZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFN3YWRkbGVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkU3dhZGRsZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluc3VsaW5Eb3NhZ2VDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5zdWxpbkRvc2FnZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluc3VsaW5Eb3NhZ2VDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSW5zdWxpbkRvc2FnZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk9ic2VydmF0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL09ic2VydmF0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkT2JzZXJ2YXRpb25DdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkT2JzZXJ2YXRpb25DdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJQYXRjaEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9QYXRjaEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFBhdGNoQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZFBhdGNoQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWVyb3NvbEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZXJvc29sQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkQWVyb3NvbEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRBZXJvc29sQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiV291bmRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvV291bmRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRXb3VuZEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRXb3VuZEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkRydWdUcmVhdG1lbnRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvRHJ1Z1RyZWF0bWVudEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZERydWdUcmVhdG1lbnRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkRHJ1Z1RyZWF0bWVudEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluc3VsaW5UYWtpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5zdWxpblRha2luZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluc3VsaW5UYWtpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSW5zdWxpblRha2luZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlRoZXJhcGV1dGljQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1RoZXJhcGV1dGljQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkVGhlcmFwZXV0aWNDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkVGhlcmFwZXV0aWNDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbmplY3Rpb25DdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5qZWN0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkSW5qZWN0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluamVjdGlvbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkh5Z2llbmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSHlnaWVuZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEh5Z2llbmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSHlnaWVuZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkNsb3RoaW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Nsb3RoaW5nQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkQ2xvdGhpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkQ2xvdGhpbmdDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJNb2JpbGl6YXRpb25DdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTW9iaWxpemF0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkTW9iaWxpemF0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZE1vYmlsaXphdGlvbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlRvaWxldEhlbHBpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvVG9pbGV0SGVscGluZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFRvaWxldEhlbHBpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkVG9pbGV0SGVscGluZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluY29udGluZW5jZUN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9JbmNvbnRpbmVuY2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbmNvbnRpbmVuY2VDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSW5jb250aW5lbmNlQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiRWF0Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0VhdEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEVhdEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRFYXRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJQYXJhbWV0ZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvUGFyYW1ldGVyQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkUGFyYW1ldGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZFBhcmFtZXRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkRpc29yZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Rpc29yZGVyQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkRGlzb3JkZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkRGlzb3JkZXJDdHJsJykpO1xyXG5cclxuIiwidmFyIEFkZEFlcm9zb2xDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBBZXJvc29sU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkFlcm9zb2xTZXJ2aWNlID0gQWVyb3NvbFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlU3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZUVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUuZG9jdG9yID0gXCJcIjtcclxuICAgICRzY29wZS5uYW1lTWVkaWMgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnVuaXQgPSBcIlwiO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkQWVyb3NvbEN0cmwucHJvdG90eXBlLmFqb3V0ZXJBZXJvc29sID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkFlcm9zb2xTZXJ2aWNlLmFkZEFlcm9zb2wodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlU3RhcnQuZ2V0VGltZSgpLFxyXG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZUVuZC5nZXRUaW1lKClcclxuXHJcbn07IiwidmFyIEFkZENsb3RoaW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQ2xvdGhpbmdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuQ2xvdGhpbmdTZXJ2aWNlID0gQ2xvdGhpbmdTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5jbG90aGluZ0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuY2xvdGhpbmdTdGltdWxhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRDbG90aGluZ0N0cmwucHJvdG90eXBlLmFqb3V0ZXJDbG90aGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5DbG90aGluZ1NlcnZpY2UuYWRkQ2xvdGhpbmcodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuY2xvdGhpbmdDb21wbGV0ZSx0aGlzLiRzY29wZS5jbG90aGluZ1N0aW11bGF0ZWQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZERpc29yZGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRGlzb3JkZXJTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuRGlzb3JkZXJTZXJ2aWNlID0gRGlzb3JkZXJTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS50aW1lRGlzb3JpZW50YXRpb24gPSBmYWxzZTtcclxuICAgICRzY29wZS5zcGFjZURpc29yaWVudGF0aW9uID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudGVybURpZmZpY3VsdHkgPSBmYWxzZTtcclxuICAgICRzY29wZS52ZXJiYWxEaWZmaWN1bHR5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUubG9zc0NvbmNlcHQgPSBmYWxzZTtcclxuICAgICRzY29wZS5hZ2l0YXRlZCA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkRGlzb3JkZXJDdHJsLnByb3RvdHlwZS5ham91dGVyRGlzb3JkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuRGlzb3JkZXJTZXJ2aWNlLmFkZERpc29yZGVyKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnRpbWVEaXNvcmllbnRhdGlvbix0aGlzLiRzY29wZS5zcGFjZURpc29yaWVudGF0aW9uLHRoaXMuJHNjb3BlLnRlcm1EaWZmaWN1bHR5LFxyXG4gICAgICAgIHRoaXMuJHNjb3BlLnZlcmJhbERpZmZpY3VsdHksdGhpcy4kc2NvcGUubG9zc0NvbmNlcHQsdGhpcy4kc2NvcGUuYWdpdGF0ZWQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZERydWdUcmVhdG1lbnRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBEcnVnVHJlYXRtZW50U2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkRydWdUcmVhdG1lbnRTZXJ2aWNlID0gRHJ1Z1RyZWF0bWVudFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlU3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZUVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUuZG9jdG9yID0gXCJcIjtcclxuICAgICRzY29wZS5uYW1lTWVkaWMgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnVuaXQgPSBcIlwiO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkRHJ1Z1RyZWF0bWVudEN0cmwucHJvdG90eXBlLmFqb3V0ZXJEcnVnVHJlYXRtZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkRydWdUcmVhdG1lbnRTZXJ2aWNlLmFkZERydWdUcmVhdG1lbnQodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCxcclxuICAgICAgICB0aGlzLiRzY29wZS5tb3JuaW5nLCB0aGlzLiRzY29wZS5taWRkYXksIHRoaXMuJHNjb3BlLmV2ZW5pbmcsIHRoaXMuJHNjb3BlLm5pZ2h0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgQWRkRWF0Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRWF0U2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkVhdFNlcnZpY2UgPSBFYXRTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5wcmlvckFpZCA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmZ1bGxBaWQgPSBmYWxzZTtcclxuICAgICRzY29wZS5lYXRTdGltdWxhdGVkID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuaHlkcmF0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRFYXRDdHJsLnByb3RvdHlwZS5ham91dGVyRWF0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkVhdFNlcnZpY2UuYWRkRWF0KHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnByaW9yQWlkLHRoaXMuJHNjb3BlLmZ1bGxBaWQsdGhpcy4kc2NvcGUuZWF0U3RpbXVsYXRlZCx0aGlzLiRzY29wZS5oeWRyYXRpb24pLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZEh5Z2llbmVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBIeWdpZW5lU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkh5Z2llbmVTZXJ2aWNlID0gSHlnaWVuZVNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLnRvaWxldFBhcnRpZWwgPSBmYWxzZTtcclxuICAgICRzY29wZS50b2lsZXRDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmh5Z2llbmVTdGltdWxhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmJhdGggPSBmYWxzZTtcclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkSHlnaWVuZUN0cmwucHJvdG90eXBlLmFqb3V0ZXJIeWdpZW5lID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkh5Z2llbmVTZXJ2aWNlLmFkZEh5Z2llbmUodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUudG9pbGV0UGFydGllbCx0aGlzLiRzY29wZS50b2lsZXRDb21wbGV0ZSx0aGlzLiRzY29wZS5oeWdpZW5lU3RpbXVsYXRlZCx0aGlzLiRzY29wZS5iYXRoKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblxyXG59OyIsInZhciBBZGRJbmNvbnRpbmVuY2VDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbmNvbnRpbmVuY2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuSW5jb250aW5lbmNlU2VydmljZSA9IEluY29udGluZW5jZVNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLmRpdXJuYWwgPSBmYWxzZTtcclxuICAgICRzY29wZS5ub2N0dXJuYWwgPSBmYWxzZTtcclxuICAgICRzY29wZS5ib3RoID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRJbmNvbnRpbmVuY2VDdHJsLnByb3RvdHlwZS5ham91dGVySW5jb250aW5lbmNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkluY29udGluZW5jZVNlcnZpY2UuYWRkSW5jb250aW5lbmNlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmRpdXJuYWwsdGhpcy4kc2NvcGUubm9jdHVybmFsLHRoaXMuJHNjb3BlLmJvdGgpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZEluamVjdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluamVjdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5JbmplY3Rpb25TZXJ2aWNlID0gSW5qZWN0aW9uU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlRW5kID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5kb2N0b3IgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XHJcbiAgICAkc2NvcGUudW5pdCA9IFwiXCI7XHJcbiAgICAkc2NvcGUuZXN0YWJsaXNobWVudD0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZEluamVjdGlvbkN0cmwucHJvdG90eXBlLmFqb3V0ZXJJbmplY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuSW5qZWN0aW9uU2VydmljZS5hZGRJbmplY3Rpb24odGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCx0aGlzLiRzY29wZS5lc3RhYmxpc2htZW50KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgSW5zdWxpbkRvc2FnZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UgPSBJbnN1bGluRG9zYWdlU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5JbnN1bGluRG9zYWdlQ3RybC5wcm90b3R5cGUuYWpvdXRlckluc3VsaW5Eb3NhZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UuYWRkSW5zdWxpbkRvc2FnZSh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldE1pbGxpc2Vjb25kcygpLCB0aGlzLiRzY29wZS5kb3NhZ2UpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG59O1xyXG5cclxuLy9JbnN1bGluRG9zYWdlQ3RybC5wcm90b3R5cGUuZ2V0SW5zdWxpbkRvc2FnZXMgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZS5nZXRJbnN1bGluRG9zYWdlcygpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG4vL307XHJcbiIsInZhciBJbnN1bGluVGFraW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5zdWxpblRha2luZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5JbnN1bGluVGFraW5nU2VydmljZSA9IEluc3VsaW5UYWtpbmdTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbkluc3VsaW5UYWtpbmdDdHJsLnByb3RvdHlwZS5ham91dGVySW5zdWxpblRha2luZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5JbnN1bGluVGFraW5nU2VydmljZS5hZGRJbnN1bGluVGFraW5nKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRoaXMuJHNjb3BlLmdseWNlbWlhKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTtcclxuXHJcbi8vSW5zdWxpbkRvc2FnZUN0cmwucHJvdG90eXBlLmdldEluc3VsaW5Eb3NhZ2VzID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UuZ2V0SW5zdWxpbkRvc2FnZXMoKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuLy99O1xyXG4iLCJ2YXIgQWRkTWVhbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE1lYWxTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuTWVhbFNlcnZpY2UgPSBNZWFsU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE1lYWxDdHJsLnByb3RvdHlwZS5ham91dGVyTWVhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5NZWFsU2VydmljZS5hZGRNZWFsKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTsiLCJ2YXIgQWRkTW9iaWxpemF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgTW9iaWxpemF0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLk1vYmlsaXphdGlvblNlcnZpY2UgPSBNb2JpbGl6YXRpb25TZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLmhlbHAgPSBmYWxzZTtcclxuICAgICRzY29wZS5tYXRlcmlhbCA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmNhbmUgPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE1vYmlsaXphdGlvbkN0cmwucHJvdG90eXBlLmFqb3V0ZXJNb2JpbGl6YXRpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuTW9iaWxpemF0aW9uU2VydmljZS5hZGRNb2JpbGl6YXRpb24odGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuaGVscCx0aGlzLiRzY29wZS5tYXRlcmlhbCx0aGlzLiRzY29wZS5jYW5lKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblxyXG59OyIsInZhciBBZGRPYnNlcnZhdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE9ic2VydmF0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLk9ic2VydmF0aW9uU2VydmljZSA9IE9ic2VydmF0aW9uU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5jb21tZW50ID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE9ic2VydmF0aW9uQ3RybC5wcm90b3R5cGUuYWpvdXRlck9ic2VydmF0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLk9ic2VydmF0aW9uU2VydmljZS5hZGRPYnNlcnZhdGlvbih0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSwgdGhpcy4kc2NvcGUuY29tbWVudCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbn07IiwidmFyIEFkZFBhcmFtZXRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFBhcmFtZXRlclNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5QYXJhbWV0ZXJTZXJ2aWNlID0gUGFyYW1ldGVyU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUucHVsc2UgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnRlbnNpb24gPSBcIlwiO1xyXG4gICAgJHNjb3BlLnRlbXBlcmF0dXJlID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFBhcmFtZXRlckN0cmwucHJvdG90eXBlLmFqb3V0ZXJQYXJhbWV0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuUGFyYW1ldGVyU2VydmljZS5hZGRQYXJhbWV0ZXIodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUucHVsc2UsdGhpcy4kc2NvcGUudGVuc2lvbix0aGlzLiRzY29wZS50ZW1wZXJhdHVyZSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlU3RhcnQuZ2V0VGltZSgpLFxyXG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZUVuZC5nZXRUaW1lKClcclxuXHJcbn07IiwidmFyIEFkZFBhdGNoQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgUGF0Y2hTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuUGF0Y2hTZXJ2aWNlID0gUGF0Y2hTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVFbmQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLmRvY3RvciA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmFtZU1lZGljID0gXCJcIjtcclxuICAgICRzY29wZS51bml0ID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFBhdGNoQ3RybC5wcm90b3R5cGUuYWpvdXRlclBhdGNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLlBhdGNoU2VydmljZS5hZGRQYXRjaCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5kb2N0b3IsdGhpcy4kc2NvcGUubmFtZU1lZGljLHRoaXMuJHNjb3BlLmRvc2FnZSx0aGlzLiRzY29wZS51bml0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgQWRkU3dhZGRsZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFN3YWRkbGVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuU3dhZGRsZVNlcnZpY2UgPSBTd2FkZGxlU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFN3YWRkbGVDdHJsLnByb3RvdHlwZS5ham91dGVyU3dhZGRsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5Td2FkZGxlU2VydmljZS5hZGRTd2FkZGxlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTsiLCJ2YXIgQWRkVGhlcmFwZXV0aWNDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUaGVyYXBldXRpY1NlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5UaGVyYXBldXRpY1NlcnZpY2UgPSBUaGVyYXBldXRpY1NlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUucHJlcGFyYXRpb24gPSBmYWxzZTtcclxuICAgICRzY29wZS5hZE1vcm5pbmcgPSBmYWxzZTtcclxuICAgICRzY29wZS5hZE1pZGRheSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmFkRXZlbmluZyA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmFkTmlnaHQgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRUaGVyYXBldXRpY0N0cmwucHJvdG90eXBlLmFqb3V0ZXJUaGVyYXBldXRpYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5UaGVyYXBldXRpY1NlcnZpY2UuYWRkVGhlcmFwZXV0aWModGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUucHJlcGFyYXRpb24sXHJcbiAgICB0aGlzLiRzY29wZS5hZE1vcm5pbmcsdGhpcy4kc2NvcGUuYWRNaWRkYXksdGhpcy4kc2NvcGUuYWRFdmVuaW5nLHRoaXMuJHNjb3BlLmFkTmlnaHQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxufTsiLCJ2YXIgQWRkVG9pbGV0SGVscGluZ0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFRvaWxldEhlbHBpbmdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuVG9pbGV0SGVscGluZ1NlcnZpY2UgPSBUb2lsZXRIZWxwaW5nU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5tb3ZlID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZFRvaWxldEhlbHBpbmdDdHJsLnByb3RvdHlwZS5ham91dGVyVG9pbGV0SGVscGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5Ub2lsZXRIZWxwaW5nU2VydmljZS5hZGRUb2lsZXRIZWxwaW5nKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLm1vdmUpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxufTsiLCJ2YXIgQWRkV291bmRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBXb3VuZFNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5Xb3VuZFNlcnZpY2UgPSBXb3VuZFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUubG9jYWxpc2F0aW9uID0gXCJcIjtcclxuICAgICRzY29wZS50eXBlID0gXCJcIjtcclxuICAgICRzY29wZS5kZXNjcmlwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRXb3VuZEN0cmwucHJvdG90eXBlLmFqb3V0ZXJXb3VuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5Xb3VuZFNlcnZpY2UuYWRkV291bmQodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUubG9jYWxpc2F0aW9uLHRoaXMuJHNjb3BlLnR5cGUsdGhpcy4kc2NvcGUuZGVzY3JpcHRpb24pLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxufTsiLCJ2YXIgQWVyb3NvbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEFlcm9zb2xTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgQWVyb3NvbFNlcnZpY2UuZ2V0QWVyb3NvbHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihhZXJvc29sKSB7XHJcbiAgICAgICAgICAgIGFlcm9zb2wuZGF0ZSA9IG5ldyBEYXRlKGFlcm9zb2wuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhZXJvc29sO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEJvYXJkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBCb2FyZGVyU2VydmljZSkge1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnTm9tJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdzdXJuYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1Byw6lub20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3Jvb20nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnQ2hhbWJyZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIEJvYXJkZXJTZXJ2aWNlLmdldEJvYXJkZXJzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJ2YXIgQ2xvdGhpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBDbG90aGluZ1NlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBDbG90aGluZ1NlcnZpY2UuZ2V0Q2xvdGhpbmdzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oY2xvdGhpbmcpIHtcclxuICAgICAgICAgICAgY2xvdGhpbmcuZGF0ZSA9IG5ldyBEYXRlKGNsb3RoaW5nLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2xvdGhpbmc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRGlzb3JkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBEaXNvcmRlclNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBEaXNvcmRlclNlcnZpY2UuZ2V0RGlzb3JkZXJzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oZGlzb3JkZXIpIHtcclxuICAgICAgICAgICAgZGlzb3JkZXIuZGF0ZSA9IG5ldyBEYXRlKGRpc29yZGVyLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzb3JkZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRHJ1Z1RyZWF0bWVudEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIERydWdUcmVhdG1lbnRTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ21vcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnTWF0aW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgRHJ1Z1RyZWF0bWVudFNlcnZpY2UuZ2V0RHJ1Z1RyZWF0bWVudHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihkcnVnVHJlYXRtZW50KSB7XHJcbiAgICAgICAgICAgIGRydWdUcmVhdG1lbnQuZGF0ZSA9IG5ldyBEYXRlKGRydWdUcmVhdG1lbnQuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkcnVnVHJlYXRtZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEVhdEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEVhdFNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBFYXRTZXJ2aWNlLmdldEVhdHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihlYXQpIHtcclxuICAgICAgICAgICAgZWF0LmRhdGUgPSBuZXcgRGF0ZShlYXQuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlYXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSGVhZGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKExvZ2luU2VydmljZSwgJHN0YXRlKSB7XHJcbiAgICB0aGlzLkxvZ2luU2VydmljZSA9IExvZ2luU2VydmljZTtcclxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG59O1xyXG5cclxuSGVhZGVyQ3RybC5wcm90b3R5cGUuZGlzY29ubmVjdCAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLkxvZ2luU2VydmljZS5kb0xvZ291dCgpO1xyXG4gICAgdGhpcy4kc3RhdGUuZ28oXCJsb2dpblwiKTtcclxufTsiLCJ2YXIgSHlnaWVuZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEh5Z2llbmVTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSHlnaWVuZVNlcnZpY2UuZ2V0SHlnaWVuZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihoeWdpZW5lKSB7XHJcbiAgICAgICAgICAgIGh5Z2llbmUuZGF0ZSA9IG5ldyBEYXRlKGh5Z2llbmUuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBoeWdpZW5lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEluY29udGluZW5jZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluY29udGluZW5jZVNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBJbmNvbnRpbmVuY2VTZXJ2aWNlLmdldEluY29udGluZW5jZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbmNvbnRpbmVuY2UpIHtcclxuICAgICAgICAgICAgaW5jb250aW5lbmNlLmRhdGUgPSBuZXcgRGF0ZShpbmNvbnRpbmVuY2UuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmNvbnRpbmVuY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSW5qZWN0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5qZWN0aW9uU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkb2N0b3InLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRG9jdGV1cidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBJbmplY3Rpb25TZXJ2aWNlLmdldEluamVjdGlvbnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbmplY3Rpb24pIHtcclxuICAgICAgICAgICAgaW5qZWN0aW9uLmRhdGUgPSBuZXcgRGF0ZShpbmplY3Rpb24uZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3Rpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgSW5zdWxpbkRvc2FnZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2Rvc2FnZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEb3NhZ2UgKGVuIHVuaXTDqSknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSW5zdWxpbkRvc2FnZVNlcnZpY2UuZ2V0SW5zdWxpbkRvc2FnZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbnN1bGluRG9zYWdlKSB7XHJcbiAgICAgICAgICAgIGluc3VsaW5Eb3NhZ2UuZGF0ZSA9IG5ldyBEYXRlKGluc3VsaW5Eb3NhZ2UuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN1bGluRG9zYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEluc3VsaW5UYWtpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbnN1bGluVGFraW5nU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdnbHljZW1pYScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdHbHljw6ltaWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSW5zdWxpblRha2luZ1NlcnZpY2UuZ2V0SW5zdWxpblRha2luZ3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbnN1bGluVGFraW5nKSB7XHJcbiAgICAgICAgICAgIGluc3VsaW5UYWtpbmcuZGF0ZSA9IG5ldyBEYXRlKGluc3VsaW5UYWtpbmcuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN1bGluVGFraW5nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIExvZ2luQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHN0YXRlLCBMb2dpblNlcnZpY2UpIHtcclxuICAgICRzY29wZS5lbWFpbCA9IFwiXCI7XHJcbiAgICAkc2NvcGUucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnJlbWVtYmVyTWUgPSBmYWxzZTtcclxuICAgICRzY29wZS5lcnJvcm1zZyA9IFwiXCI7XHJcblxyXG4gICAgaWYoTG9naW5TZXJ2aWNlLmlzTG9nKCkpIHtcclxuICAgICAgICAkc3RhdGUuZ28oXCJtYWluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5jb25uZXhpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJHNjb3BlLmVtYWlsID09PSB1bmRlZmluZWQgfHwgJHNjb3BlLnBhc3N3b3JkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmVycm9ybXNnID0gJHRyYW5zbGF0ZSgnbG9naW4ubWVzc2FnZS5lcnJvcicpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgTG9naW5TZXJ2aWNlLmRvTG9naW4oJHNjb3BlLmVtYWlsLCAkc2NvcGUucGFzc3dvcmQsICRzY29wZS5yZW1lbWJlck1lKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oXCJtZW51XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5lcnJvcm1zZyA9ICR0cmFuc2xhdGUoJ2xvZ2luLm1lc3NhZ2UuZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIE1lYWxDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBNZWFsU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIE1lYWxTZXJ2aWNlLmdldE1lYWxzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24obWVhbCkge1xyXG4gICAgICAgICAgICBtZWFsLmRhdGUgPSBuZXcgRGF0ZShtZWFsLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVhbDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBNZW51Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAgICRzY29wZS5wZXJtaXNzaW9uID0ge307XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5tZWFsID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLnN3YWRkbGUgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uaW5zdWxpbkRvc2FnZSA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5wYXRjaCA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5hZXJvc29sID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLndvdW5kID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLm9ic2VydmF0aW9uID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLmRydWdUcmVhdG1lbnQgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uaW5zdWxpblRha2luZyA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi50aGVyYXBldXRpYyA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5pbmplY3Rpb24gPSB0cnVlO1xyXG5cclxufSIsInZhciBNb2JpbGl6YXRpb25DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBNb2JpbGl6YXRpb25TZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgTW9iaWxpemF0aW9uU2VydmljZS5nZXRNb2JpbGl6YXRpb25zKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24obW9iaWxpemF0aW9uKSB7XHJcbiAgICAgICAgICAgIG1vYmlsaXphdGlvbi5kYXRlID0gbmV3IERhdGUobW9iaWxpemF0aW9uLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9iaWxpemF0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIE9ic2VydmF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgT2JzZXJ2YXRpb25TZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnT2JzZXJ2YXRpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgT2JzZXJ2YXRpb25TZXJ2aWNlLmdldE9ic2VydmF0aW9ucygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uLmRhdGUgPSBuZXcgRGF0ZShvYnNlcnZhdGlvbi5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmF0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFBhcmFtZXRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFBhcmFtZXRlclNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBQYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlcnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihwYXJhbWV0ZXIpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyLmRhdGUgPSBuZXcgRGF0ZShwYXJhbWV0ZXIuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgUGF0Y2hDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBQYXRjaFNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZG9jdG9yJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RvY3RldXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgUGF0Y2hTZXJ2aWNlLmdldFBhdGNocygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHBhdGNoKSB7XHJcbiAgICAgICAgICAgIHBhdGNoLmRhdGUgPSBuZXcgRGF0ZShwYXRjaC5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGNoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFN3YWRkbGVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBTd2FkZGxlU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIFN3YWRkbGVTZXJ2aWNlLmdldFN3YWRkbGVzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oc3dhZGRsZSkge1xyXG4gICAgICAgICAgICBzd2FkZGxlLmRhdGUgPSBuZXcgRGF0ZShzd2FkZGxlLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3dhZGRsZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBUaGVyYXBldXRpY0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFRoZXJhcGV1dGljU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdwcmVwYXJhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQcsOpcGFyYXRpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgVGhlcmFwZXV0aWNTZXJ2aWNlLmdldFRoZXJhcGV1dGljcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHRoZXJhcGV1dGljKSB7XHJcbiAgICAgICAgICAgIHRoZXJhcGV1dGljLmRhdGUgPSBuZXcgRGF0ZSh0aGVyYXBldXRpYy5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoZXJhcGV1dGljO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFRvaWxldEhlbHBpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUb2lsZXRIZWxwaW5nU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIFRvaWxldEhlbHBpbmdTZXJ2aWNlLmdldFRvaWxldEhlbHBpbmdzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24odG9pbGV0SGVscGluZykge1xyXG4gICAgICAgICAgICB0b2lsZXRIZWxwaW5nLmRhdGUgPSBuZXcgRGF0ZSh0b2lsZXRIZWxwaW5nLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9pbGV0SGVscGluZztcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBXb3VuZEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFdvdW5kU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEZXNjcmlwdGlvbiBkZXMgc29pbnMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgV291bmRTZXJ2aWNlLmdldFdvdW5kcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHdvdW5kKSB7XHJcbiAgICAgICAgICAgIHdvdW5kLmRhdGUgPSBuZXcgRGF0ZSh3b3VuZC5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdvdW5kO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVEaXJlY3RpdmUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbJ2FwcC5zZXJ2aWNlcyddKTtcclxuXHJcbm1vZHVsZURpcmVjdGl2ZS5kaXJlY3RpdmUoXCJib2FyZGVybGlzdFwiLCByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL0JvYXJkZXJMaXN0RGlyZWN0aXZlXCIpKTtcclxuIiwidmFyIEJvYXJkZXJMaXN0RGlyZWN0aXZlID0gbW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24oQm9hcmRlclNlcnZpY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQm9hcmRlcnM6IFwiPVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cm9sbGVyOiBcIkJvYXJkZXJDdHJsXCIsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2JvYXJkZXJsaXN0Lmh0bWwnLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTsiLCIndXNlciBzdHJpY3QnO1xyXG52YXIgUm91dGVTZXJ2aWNlID0gcmVxdWlyZSgnUm91dGVTZXJ2aWNlJyk7XHJcblxyXG52YXIgbW9kdWxlU2VydmljZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XHJcblxyXG5tb2R1bGVTZXJ2aWNlLmNvbnN0YW50KCdTRVJWRVJfUk9PVCcsIFJvdXRlU2VydmljZSgpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiTG9naW5TZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvTG9naW5TZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJCb2FyZGVyU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0JvYXJkZXJTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJNZWFsU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL01lYWxTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJTd2FkZGxlU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1N3YWRkbGVTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbnN1bGluRG9zYWdlU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0luc3VsaW5Eb3NhZ2VTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJPYnNlcnZhdGlvblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9PYnNlcnZhdGlvblNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlBhdGNoU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1BhdGNoU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiQWVyb3NvbFNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9BZXJvc29sU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiV291bmRTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvV291bmRTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJEcnVnVHJlYXRtZW50U2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0RydWdUcmVhdG1lbnRTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbnN1bGluVGFraW5nU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0luc3VsaW5UYWtpbmdTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJUaGVyYXBldXRpY1NlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9UaGVyYXBldXRpY1NlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkluamVjdGlvblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9JbmplY3Rpb25TZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJIeWdpZW5lU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0h5Z2llbmVTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJDbG90aGluZ1NlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9DbG90aGluZ1NlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIk1vYmlsaXphdGlvblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Nb2JpbGl6YXRpb25TZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJUb2lsZXRIZWxwaW5nU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1RvaWxldEhlbHBpbmdTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbmNvbnRpbmVuY2VTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSW5jb250aW5lbmNlU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiRWF0U2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0VhdFNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlBhcmFtZXRlclNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9QYXJhbWV0ZXJTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJEaXNvcmRlclNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9EaXNvcmRlclNlcnZpY2UnKSk7XHJcblxyXG5cclxuIiwidmFyIEFlcm9zb2xTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuQWVyb3NvbFNlcnZpY2UucHJvdG90eXBlLmFkZEFlcm9zb2wgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICAvLyBcIiZkYXRlU3RhcnQ9XCIgKyBkYXRlU3RhcnQgK1xyXG4gICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcclxuICAgICAgICBcIiZkb2N0b3I9XCIgKyBkb2N0b3IgK1xyXG4gICAgICAgIFwiJm5hbWVNZWRpYz1cIiArIG5hbWVNZWRpYyArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcclxuICAgICAgICBcIiZ1bml0PVwiICsgdW5pdCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYWVyb3NvbCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuQWVyb3NvbFNlcnZpY2UucHJvdG90eXBlLmdldEFlcm9zb2xzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2Flcm9zb2wvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIEJvYXJkZXJTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuQm9hcmRlclNlcnZpY2UucHJvdG90eXBlLmdldEJvYXJkZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2JvYXJkZXIvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIENsb3RoaW5nU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkNsb3RoaW5nU2VydmljZS5wcm90b3R5cGUuYWRkQ2xvdGhpbmcgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBjbG90aGluZ0NvbXBsZXRlLCBjbG90aGluZ1N0aW11bGF0ZWQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmNsb3RoaW5nQ29tcGxldGU9XCIgKyBjbG90aGluZ0NvbXBsZXRlICtcclxuICAgICAgICBcIiZjbG90aGluZ1N0aW11bGF0ZWQ9XCIgKyBjbG90aGluZ1N0aW11bGF0ZWQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnY2xvdGhpbmcnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkNsb3RoaW5nU2VydmljZS5wcm90b3R5cGUuZ2V0Q2xvdGhpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2Nsb3RoaW5nL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBEaXNvcmRlclNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5EaXNvcmRlclNlcnZpY2UucHJvdG90eXBlLmFkZERpc29yZGVyID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgdGltZURpc29yaWVudGF0aW9uLCBzcGFjZURpc29yaWVudGF0aW9uLCB0ZXJtRGlmZmljdWx0eSwgdmVyYmFsRGlmZmljdWx0eSwgbG9zc0NvbmNlcHQsIGFnaXRhdGVkKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZ0aW1lRGlzb3JpZW50YXRpb249XCIgKyB0aW1lRGlzb3JpZW50YXRpb24gK1xyXG4gICAgICAgIFwiJnNwYWNlRGlzb3JpZW50YXRpb249XCIgKyBzcGFjZURpc29yaWVudGF0aW9uICtcclxuICAgICAgICBcIiZ0ZXJtRGlmZmljdWx0eT1cIiArIHRlcm1EaWZmaWN1bHR5ICtcclxuICAgICAgICBcIiZ2ZXJiYWxEaWZmaWN1bHR5PVwiICsgdmVyYmFsRGlmZmljdWx0eSArXHJcbiAgICAgICAgXCImbG9zc0NvbmNlcHQ9XCIgKyBsb3NzQ29uY2VwdCArXHJcbiAgICAgICAgXCImYWdpdGF0ZWQ9XCIgKyBhZ2l0YXRlZDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdkaXNvcmRlcicsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuRGlzb3JkZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXREaXNvcmRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnZGlzb3JkZXIvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIERydWdUcmVhdG1lbnRTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuRHJ1Z1RyZWF0bWVudFNlcnZpY2UucHJvdG90eXBlLmFkZERydWdUcmVhdG1lbnQgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0LCBtb3JuaW5nLCBtaWRkYXksIGV2ZW5pbmcsIG5pZ2h0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICAvLyBcIiZkYXRlU3RhcnQ9XCIgKyBkYXRlU3RhcnQgK1xyXG4gICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcclxuICAgICAgICBcIiZkb2N0b3I9XCIgKyBkb2N0b3IgK1xyXG4gICAgICAgIFwiJm5hbWVNZWRpYz1cIiArIG5hbWVNZWRpYyArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcclxuICAgICAgICBcIiZ1bml0PVwiICsgdW5pdCArXHJcbiAgICAgICAgXCImbW9ybmluZz1cIiArIG1vcm5pbmcgK1xyXG4gICAgICAgIFwiJm1pZGRheT1cIiArIG1pZGRheSArXHJcbiAgICAgICAgXCImZXZlbmluZz1cIiArIGV2ZW5pbmcgK1xyXG4gICAgICAgIFwiJm5pZ2h0PVwiICsgbmlnaHQgO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2RydWdUcmVhdG1lbnQnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkRydWdUcmVhdG1lbnRTZXJ2aWNlLnByb3RvdHlwZS5nZXREcnVnVHJlYXRtZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdkcnVnVHJlYXRtZW50L2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBFYXRTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuRWF0U2VydmljZS5wcm90b3R5cGUuYWRkRWF0ID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgcHJpb3JBaWQsIGZ1bGxBaWQsIGVhdFN0aW11bGF0ZWQsIGh5ZHJhdGlvbikge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImcHJpb3JBaWQ9XCIgKyBwcmlvckFpZCArXHJcbiAgICAgICAgXCImZnVsbEFpZD1cIiArIGZ1bGxBaWQgK1xyXG4gICAgICAgIFwiJmVhdFN0aW11bGF0ZWQ9XCIgKyBlYXRTdGltdWxhdGVkICtcclxuICAgICAgICBcIiZoeWRyYXRpb249XCIgKyBoeWRyYXRpb24gO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2VhdCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuRWF0U2VydmljZS5wcm90b3R5cGUuZ2V0RWF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdlYXQvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIEh5Z2llbmVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuSHlnaWVuZVNlcnZpY2UucHJvdG90eXBlLmFkZEh5Z2llbmUgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCB0b2lsZXRQYXJ0aWVsLCB0b2lsZXRDb21wbGV0ZSwgaHlnaWVuZVN0aW11bGF0ZWQsIGJhdGgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJnRvaWxldFBhcnRpZWw9XCIgKyB0b2lsZXRQYXJ0aWVsICtcclxuICAgICAgICBcIiZ0b2lsZXRDb21wbGV0ZT1cIiArIHRvaWxldENvbXBsZXRlICtcclxuICAgICAgICBcIiZoeWdpZW5lU3RpbXVsYXRlZD1cIiArIGh5Z2llbmVTdGltdWxhdGVkICtcclxuICAgICAgICBcIiZiYXRoPVwiICsgYmF0aCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaHlnaWVuZScsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuSHlnaWVuZVNlcnZpY2UucHJvdG90eXBlLmdldEh5Z2llbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2h5Z2llbmUvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIEluY29udGluZW5jZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5JbmNvbnRpbmVuY2VTZXJ2aWNlLnByb3RvdHlwZS5hZGRJbmNvbnRpbmVuY2UgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkaXVybmFsLCBub2N0dXJuYWwsIGJvdGgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmRpdXJuYWw9XCIgKyBkaXVybmFsICtcclxuICAgICAgICBcIiZub2N0dXJuYWw9XCIgKyBub2N0dXJuYWwgK1xyXG4gICAgICAgIFwiJmJvdGg9XCIgKyBib3RoIDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbmNvbnRpbmVuY2UnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkluY29udGluZW5jZVNlcnZpY2UucHJvdG90eXBlLmdldEluY29udGluZW5jZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5jb250aW5lbmNlL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBJbmplY3Rpb25TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuSW5qZWN0aW9uU2VydmljZS5wcm90b3R5cGUuYWRkSW5qZWN0aW9uID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZG9jdG9yLCBlc3RhYmxpc2htZW50LCBuYW1lTWVkaWMsIGRvc2FnZSwgdW5pdCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgLy8gXCImZGF0ZVN0YXJ0PVwiICsgZGF0ZVN0YXJ0ICtcclxuICAgICAgICAvLyBcIiZkYXRlRW5kPVwiICsgZGF0ZUVuZCArXHJcbiAgICAgICAgXCImZG9jdG9yPVwiICsgZG9jdG9yICtcclxuICAgICAgICBcIiZlc3RhYmxpc2htZW50PVwiICsgZXN0YWJsaXNobWVudCArXHJcbiAgICAgICAgXCImbmFtZU1lZGljPVwiICsgbmFtZU1lZGljICtcclxuICAgICAgICBcIiZkb3NhZ2U9XCIgKyBkb3NhZ2UgK1xyXG4gICAgICAgIFwiJnVuaXQ9XCIgKyB1bml0IDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbmplY3Rpb24nLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkluamVjdGlvblNlcnZpY2UucHJvdG90eXBlLmdldEluamVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5qZWN0aW9uL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBJbnN1bGluRG9zYWdlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLnByb3RvdHlwZS5hZGRJbnN1bGluRG9zYWdlID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZG9zYWdlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZkb3NhZ2U9XCIgKyBkb3NhZ2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5Eb3NhZ2UnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLnByb3RvdHlwZS5nZXRJbnN1bGluRG9zYWdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluRG9zYWdlL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG4iLCJ2YXIgSW5zdWxpblRha2luZ1NlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUuYWRkSW5zdWxpblRha2luZyA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGdseWNlbWlhKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZnbHljZW1pYT1cIiArIGdseWNlbWlhO1xyXG5cclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluVGFraW5nJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdWxpblRha2luZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5zdWxpblRha2luZy9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuIiwidmFyIExvZ2luU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuX3VzZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fdXNlclJpZ2h0cyA9IG51bGw7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gbnVsbDtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xyXG59O1xyXG5cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5pc0xvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKHRoaXMudXNlcm5hbWUgIT0gbnVsbCAmJiB0aGlzLnBhc3N3b3JkICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8vVE9ETyA6IFByb21pc2UgdnJhaW1lbnQgbsOpY2Vzc2FpcmUgP1xyXG5Mb2dpblNlcnZpY2UucHJvdG90eXBlLmRvTG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlck1lKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcInVzZXJuYW1lPVwiICsgdXNlcm5hbWUgK1xyXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgcGFzc3dvcmQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbG9naW4nLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gMjAyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgICAgIF90aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIHZhciBkZWZlciA9IF90aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIGRlZmVyMiA9IF90aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXIyLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcjIucHJvbWlzZTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5kb0xvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudXNlcm5hbWUgPSBudWxsO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XHJcbn07IiwidmFyIE1lYWxTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuTWVhbFNlcnZpY2UucHJvdG90eXBlLmFkZE1lYWwgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ21lYWwnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbk1lYWxTZXJ2aWNlLnByb3RvdHlwZS5nZXRNZWFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdtZWFsL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBNb2JpbGl6YXRpb25TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuTW9iaWxpemF0aW9uU2VydmljZS5wcm90b3R5cGUuYWRkTW9iaWxpemF0aW9uID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgaGVscCwgbWF0ZXJpYWwsIGNhbmUpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmhlbHA9XCIgKyBoZWxwICtcclxuICAgICAgICBcIiZtYXRlcmlhbD1cIiArIG1hdGVyaWFsICtcclxuICAgICAgICBcIiZjYW5lPVwiICsgY2FuZSA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbW9iaWxpemF0aW9uJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Nb2JpbGl6YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRNb2JpbGl6YXRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ21vYmlsaXphdGlvbi9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgT2JzZXJ2YXRpb25TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuT2JzZXJ2YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5hZGRPYnNlcnZhdGlvbiA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGNvbW1lbnQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmNvbW1lbnQ9XCIgKyBjb21tZW50O1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ29ic2VydmF0aW9uJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5PYnNlcnZhdGlvblNlcnZpY2UucHJvdG90eXBlLmdldE9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdvYnNlcnZhdGlvbi9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgUGFyYW1ldGVyU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblBhcmFtZXRlclNlcnZpY2UucHJvdG90eXBlLmFkZFBhcmFtZXRlcj0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgcHVsc2UsIHRlbnNpb24sIHRlbXBlcmF0dXJlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZwdWxzZT1cIiArIHB1bHNlICtcclxuICAgICAgICBcIiZ0ZW5zaW9uPVwiICsgdGVuc2lvbiArXHJcbiAgICAgICAgXCImdGVtcGVyYXR1cmU9XCIgKyB0ZW1wZXJhdHVyZSA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAncGFyYW1ldGVyJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5QYXJhbWV0ZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3BhcmFtZXRlci9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgUGF0Y2hTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuUGF0Y2hTZXJ2aWNlLnByb3RvdHlwZS5hZGRQYXRjaCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGRvY3RvciwgbmFtZU1lZGljLCBkb3NhZ2UsIHVuaXQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgLy8gXCImZGF0ZVN0YXJ0PVwiICsgZGF0ZVN0YXJ0ICtcclxuICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcclxuICAgICAgICBcIiZkb2N0b3I9XCIgKyBkb2N0b3IgK1xyXG4gICAgICAgIFwiJm5hbWVNZWRpYz1cIiArIG5hbWVNZWRpYyArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcclxuICAgICAgICBcIiZ1bml0PVwiICsgdW5pdCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAncGF0Y2gnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcblBhdGNoU2VydmljZS5wcm90b3R5cGUuZ2V0UGF0Y2hzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3BhdGNoL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBTd2FkZGxlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblN3YWRkbGVTZXJ2aWNlLnByb3RvdHlwZS5hZGRTd2FkZGxlID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZTtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdzd2FkZGxlJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Td2FkZGxlU2VydmljZS5wcm90b3R5cGUuZ2V0U3dhZGRsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnc3dhZGRsZS9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgVGhlcmFwZXV0aWNTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuVGhlcmFwZXV0aWNTZXJ2aWNlLnByb3RvdHlwZS5hZGRUaGVyYXBldXRpYyA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHByZXBhcmF0aW9uLCBhZE1vcm5pbmcsIGFkTWlkZGF5LCBhZEV2ZW5pbmcsIGFkTmlnaHQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJnByZXBhcmF0aW9uPVwiICsgcHJlcGFyYXRpb24gK1xyXG4gICAgICAgIFwiJmFkTW9ybmluZz1cIiArIGFkTW9ybmluZyArXHJcbiAgICAgICAgXCImYWRNaWRkYXk9XCIgKyBhZE1pZGRheSArXHJcbiAgICAgICAgXCImYWRFdmVuaW5nPVwiICsgYWRFdmVuaW5nICtcclxuICAgICAgICBcIiZhZE5pZ2h0PVwiICsgYWROaWdodDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICd0aGVyYXBldXRpYycsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuVGhlcmFwZXV0aWNTZXJ2aWNlLnByb3RvdHlwZS5nZXRUaGVyYXBldXRpY3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAndGhlcmFwZXV0aWMvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIFRvaWxldEhlbHBpbmdTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuVG9pbGV0SGVscGluZ1NlcnZpY2UucHJvdG90eXBlLmFkZFRvaWxldEhlbHBpbmcgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBtb3ZlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZtb3ZlPVwiICsgbW92ZSA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3RvaWxldEhlbHBpbmcnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcblRvaWxldEhlbHBpbmdTZXJ2aWNlLnByb3RvdHlwZS5nZXRUb2lsZXRIZWxwaW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICd0b2lsZXRIZWxwaW5nL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBXb3VuZFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Xb3VuZFNlcnZpY2UucHJvdG90eXBlLmFkZFdvdW5kID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgbG9jYWxpc2F0aW9uLCB0eXBlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImbG9jYWxpc2F0aW9uPVwiICsgbG9jYWxpc2F0aW9uICtcclxuICAgICAgICBcIiZ0eXBlPVwiICsgdHlwZSArXHJcbiAgICAgICAgXCImZGVzY3JpcHRpb249XCIgKyBkZXNjcmlwdGlvbiA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3dvdW5kJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Xb3VuZFNlcnZpY2UucHJvdG90eXBlLmdldFdvdW5kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICd3b3VuZC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiXX0=
