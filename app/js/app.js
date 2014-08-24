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
        }).state('aspect', {
            url: "/aspect",
            parent: "main-content",
            templateUrl: '../../views/aspect.html',
            controller: 'AspectCtrl as ctrl'
        }).state('addaspect', {
            url: "/aspect/add",
            parent: "main-content",
            templateUrl: '../../views/add-aspect.html',
            controller: 'AddAspectCtrl as ctrl'
        }).state('measure', {
            url: "/measure",
            parent: "main-content",
            templateUrl: '../../views/measure.html',
            controller: 'MeasureCtrl as ctrl'
        }).state('addmeasure', {
            url: "/measure/add",
            parent: "main-content",
            templateUrl: '../../views/add-measure.html',
            controller: 'AddMeasureCtrl as ctrl'
        }).state('embankment', {
            url: "/embankment",
            parent: "main-content",
            templateUrl: '../../views/embankment.html',
            controller: 'EmbankmentCtrl as ctrl'
        }).state('addembankment', {
            url: "/embankment/add",
            parent: "main-content",
            templateUrl: '../../views/add-embankment.html',
            controller: 'AddEmbankmentCtrl as ctrl'
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
moduleController.controller("AspectCtrl", require('./controllers/AspectCtrl'));
moduleController.controller("AddAspectCtrl", require('./controllers/AddAspectCtrl'));
moduleController.controller("MeasureCtrl", require('./controllers/MeasureCtrl'));
moduleController.controller("AddMeasureCtrl", require('./controllers/AddMeasureCtrl'));
moduleController.controller("EmbankmentCtrl", require('./controllers/EmbankmentCtrl'));
moduleController.controller("AddEmbankmentCtrl", require('./controllers/AddEmbankmentCtrl'));

},{"./controllers/AddAerosolCtrl":5,"./controllers/AddAspectCtrl":6,"./controllers/AddClothingCtrl":7,"./controllers/AddDisorderCtrl":8,"./controllers/AddDrugTreatmentCtrl":9,"./controllers/AddEatCtrl":10,"./controllers/AddEmbankmentCtrl":11,"./controllers/AddHygieneCtrl":12,"./controllers/AddIncontinenceCtrl":13,"./controllers/AddInjectionCtrl":14,"./controllers/AddInsulinDosageCtrl":15,"./controllers/AddInsulinTakingCtrl":16,"./controllers/AddMealCtrl":17,"./controllers/AddMeasureCtrl":18,"./controllers/AddMobilizationCtrl":19,"./controllers/AddObservationCtrl":20,"./controllers/AddParameterCtrl":21,"./controllers/AddPatchCtrl":22,"./controllers/AddSwaddleCtrl":23,"./controllers/AddTherapeuticCtrl":24,"./controllers/AddToiletHelpingCtrl":25,"./controllers/AddWoundCtrl":26,"./controllers/AerosolCtrl":27,"./controllers/AspectCtrl":28,"./controllers/BoarderCtrl":29,"./controllers/ClothingCtrl":30,"./controllers/DisorderCtrl":31,"./controllers/DrugTreatmentCtrl":32,"./controllers/EatCtrl":33,"./controllers/EmbankmentCtrl":34,"./controllers/HeaderCtrl":35,"./controllers/HygieneCtrl":36,"./controllers/IncontinenceCtrl":37,"./controllers/InjectionCtrl":38,"./controllers/InsulinDosageCtrl":39,"./controllers/InsulinTakingCtrl":40,"./controllers/LoginCtrl":41,"./controllers/MealCtrl":42,"./controllers/MeasureCtrl":43,"./controllers/MenuCtrl":44,"./controllers/MobilizationCtrl":45,"./controllers/ObservationCtrl":46,"./controllers/ParameterCtrl":47,"./controllers/PatchCtrl":48,"./controllers/SwaddleCtrl":49,"./controllers/TherapeuticCtrl":50,"./controllers/ToiletHelpingCtrl":51,"./controllers/WoundCtrl":52}],5:[function(require,module,exports){
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
var AddAspectCtrl = module.exports = function ($scope, AspectService) {
    this.$scope = $scope;
    this.AspectService = AspectService;
    $scope.date = new Date();

    $scope.redness = false;
    $scope.fibrin = false;
    $scope.necrosis = false;
    $scope.pink = false;
    $scope.aspectOther = "";

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

AddAspectCtrl.prototype.ajouterAspect = function() {
    this.AspectService.addAspect(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.redness,
        this.$scope.fibrin, this.$scope.necrosis, this.$scope.pink,
         this.$scope.aspectOther).then(function () {});


};
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
var AddEmbankmentCtrl = module.exports = function ($scope, EmbankmentService) {
    this.$scope = $scope;
    this.EmbankmentService = EmbankmentService;
    $scope.date = new Date();

    $scope.regular = false;
    $scope.irregular = false;
    $scope.furrow = false;
    $scope.detachment = false;
    $scope.budding = false;

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

AddEmbankmentCtrl.prototype.ajouterEmbankment = function() {
    this.EmbankmentService.addEmbankment(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.regular,this.$scope.irregular,this.$scope.furrow,
        this.$scope.detachment,this.$scope.budding).then(function () {});


};
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
var AddMeasureCtrl = module.exports = function ($scope, MeasureService) {
    this.$scope = $scope;
    this.MeasureService = MeasureService;
    $scope.date = new Date();

    $scope.size = 0;
    $scope.depth = 0;
    $scope.quantity = "";
    $scope.nature = "";
    $scope.odor = false;

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

AddMeasureCtrl.prototype.ajouterMeasure = function() {
    this.MeasureService.addMeasure(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.size,this.$scope.depth,
    this.$scope.quantity,
    this.$scope.nature,
    this.$scope.odor).then(function () {});


};
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
var AspectCtrl = module.exports = function ($scope, AspectService) {
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

    AspectService.getAspects().then(function (data) {
        $scope.data = data.map(function(aspect) {
            aspect.date = new Date(aspect.date);
            return aspect;
        });
    });
};
},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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
},{}],31:[function(require,module,exports){
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
},{}],32:[function(require,module,exports){
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
},{}],33:[function(require,module,exports){
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
},{}],34:[function(require,module,exports){
var EmbankmentCtrl = module.exports = function ($scope, EmbankmentService) {
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

    EmbankmentService.getEmbankments().then(function (data) {
        $scope.data = data.map(function(embankment) {
            embankment.date = new Date(embankment.date);
            return embankment;
        });
    });
};
},{}],35:[function(require,module,exports){
var HeaderCtrl = module.exports = function (LoginService, $state) {
    this.LoginService = LoginService;
    this.$state = $state;
};

HeaderCtrl.prototype.disconnect  = function () {
    this.LoginService.doLogout();
    this.$state.go("login");
};
},{}],36:[function(require,module,exports){
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
},{}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
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
},{}],39:[function(require,module,exports){
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
},{}],40:[function(require,module,exports){
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
},{}],41:[function(require,module,exports){
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
},{}],42:[function(require,module,exports){
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
},{}],43:[function(require,module,exports){
var MeasureCtrl = module.exports = function ($scope, MeasureService) {
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

    MeasureService.getMeasures().then(function (data) {
        $scope.data = data.map(function(measure) {
            measure.date = new Date(measure.date);
            return measure;
        });
    });
};
},{}],44:[function(require,module,exports){
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
},{}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
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
},{}],47:[function(require,module,exports){
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
},{}],48:[function(require,module,exports){
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
},{}],49:[function(require,module,exports){
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
},{}],50:[function(require,module,exports){
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
},{}],51:[function(require,module,exports){
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
},{}],52:[function(require,module,exports){
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
},{}],53:[function(require,module,exports){
'user strict';

var moduleDirective = angular.module('app.directives', ['app.services']);

moduleDirective.directive("boarderlist", require("./directives/BoarderListDirective"));

},{"./directives/BoarderListDirective":54}],54:[function(require,module,exports){
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
},{}],55:[function(require,module,exports){
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
moduleService.service("AspectService", require('./services/AspectService'));
moduleService.service("MeasureService", require('./services/MeasureService'));
moduleService.service("EmbankmentService", require('./services/EmbankmentService'));



},{"./services/AerosolService":56,"./services/AspectService":57,"./services/BoarderService":58,"./services/ClothingService":59,"./services/DisorderService":60,"./services/DrugTreatmentService":61,"./services/EatService":62,"./services/EmbankmentService":63,"./services/HygieneService":64,"./services/IncontinenceService":65,"./services/InjectionService":66,"./services/InsulinDosageService":67,"./services/InsulinTakingService":68,"./services/LoginService":69,"./services/MealService":70,"./services/MeasureService":71,"./services/MobilizationService":72,"./services/ObservationService":73,"./services/ParameterService":74,"./services/PatchService":75,"./services/SwaddleService":76,"./services/TherapeuticService":77,"./services/ToiletHelpingService":78,"./services/WoundService":79,"RouteService":"6YVD1J"}],56:[function(require,module,exports){
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
},{}],57:[function(require,module,exports){
var AspectService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

AspectService.prototype.addAspect = function (idBoarder, date, redness, fibrin, necrosis, pink, aspectOther) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&redness=" + redness +
        "&fibrin=" + fibrin +
        "&necrosis=" + necrosis +
        "&pink=" + pink +
        "&aspectOther=" + aspectOther;
    return this.$http.post(this.SERVER_ROOT + 'aspect', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

AspectService.prototype.getAspects = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'aspect/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],58:[function(require,module,exports){
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
},{}],59:[function(require,module,exports){
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
},{}],60:[function(require,module,exports){
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
},{}],61:[function(require,module,exports){
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
},{}],62:[function(require,module,exports){
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
},{}],63:[function(require,module,exports){
var EmbankmentService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

EmbankmentService.prototype.addEmbankment = function (idBoarder, date, regular, irregular, furrow, detachment, budding) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&regular=" + regular +
        "&irregular=" + irregular +
        "&furrow=" + furrow +
        "&detachment=" + detachment +
        "&budding=" + budding ;
    return this.$http.post(this.SERVER_ROOT + 'embankment', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

EmbankmentService.prototype.getEmbankments = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'embankment/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],64:[function(require,module,exports){
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
},{}],65:[function(require,module,exports){
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
},{}],66:[function(require,module,exports){
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
},{}],67:[function(require,module,exports){
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

},{}],68:[function(require,module,exports){
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

},{}],69:[function(require,module,exports){
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
},{}],70:[function(require,module,exports){
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
},{}],71:[function(require,module,exports){
var MeasureService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

MeasureService.prototype.addMeasure = function (idBoarder, date, size, depth, quantity, nature, odor) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&size=" + size +
        "&depth=" + depth +
        "&quantity=" + quantity +
        "&nature=" + nature +
        "&odor=" + odor;

    return this.$http.post(this.SERVER_ROOT + 'measure', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c2FtOnNhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MeasureService.prototype.getMeasures = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'measure/all', {
        headers: {
            'Authorization': 'Basic c2FtOnNhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],72:[function(require,module,exports){
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
},{}],73:[function(require,module,exports){
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
},{}],74:[function(require,module,exports){
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
},{}],75:[function(require,module,exports){
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
},{}],76:[function(require,module,exports){
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
},{}],77:[function(require,module,exports){
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
},{}],78:[function(require,module,exports){
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
},{}],79:[function(require,module,exports){
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
},{}]},{},[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFtc1xcV2ViU3Rvcm1Qcm9qZWN0XFxURkVDbGllbnRcXG5vZGVfbW9kdWxlc1xcZ3J1bnQtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL2NvbmZpZy9kZXYvUm91dGVTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvYXBwbGljYXRpb24uanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEFlcm9zb2xDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkQXNwZWN0Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZENsb3RoaW5nQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZERpc29yZGVyQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZERydWdUcmVhdG1lbnRDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkRWF0Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEVtYmFua21lbnRDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkSHlnaWVuZUN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRJbmNvbnRpbmVuY2VDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkSW5qZWN0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZEluc3VsaW5Eb3NhZ2VDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkSW5zdWxpblRha2luZ0N0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRNZWFsQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZE1lYXN1cmVDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkTW9iaWxpemF0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZE9ic2VydmF0aW9uQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFBhcmFtZXRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRQYXRjaEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRTd2FkZGxlQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFRoZXJhcGV1dGljQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFRvaWxldEhlbHBpbmdDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkV291bmRDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWVyb3NvbEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Bc3BlY3RDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQm9hcmRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9DbG90aGluZ0N0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EaXNvcmRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EcnVnVHJlYXRtZW50Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0VhdEN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9FbWJhbmttZW50Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0hlYWRlckN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9IeWdpZW5lQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0luY29udGluZW5jZUN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbmplY3Rpb25DdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSW5zdWxpbkRvc2FnZUN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbnN1bGluVGFraW5nQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL01lYWxDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTWVhc3VyZUN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9NZW51Q3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL01vYmlsaXphdGlvbkN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9PYnNlcnZhdGlvbkN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9QYXJhbWV0ZXJDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvUGF0Y2hDdHJsLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvU3dhZGRsZUN0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9UaGVyYXBldXRpY0N0cmwuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Ub2lsZXRIZWxwaW5nQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1dvdW5kQ3RybC5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL2RpcmVjdGl2ZXMuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9kaXJlY3RpdmVzL0JvYXJkZXJMaXN0RGlyZWN0aXZlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9BZXJvc29sU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0FzcGVjdFNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Cb2FyZGVyU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0Nsb3RoaW5nU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0Rpc29yZGVyU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0RydWdUcmVhdG1lbnRTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvRWF0U2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0VtYmFua21lbnRTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSHlnaWVuZVNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9JbmNvbnRpbmVuY2VTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSW5qZWN0aW9uU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0luc3VsaW5Eb3NhZ2VTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSW5zdWxpblRha2luZ1NlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9NZWFsU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL01lYXN1cmVTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvTW9iaWxpemF0aW9uU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL09ic2VydmF0aW9uU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1BhcmFtZXRlclNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9QYXRjaFNlcnZpY2UuanMiLCJDOi9Vc2Vycy9EYW1zL1dlYlN0b3JtUHJvamVjdC9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Td2FkZGxlU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1RoZXJhcGV1dGljU2VydmljZS5qcyIsIkM6L1VzZXJzL0RhbXMvV2ViU3Rvcm1Qcm9qZWN0L1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1RvaWxldEhlbHBpbmdTZXJ2aWNlLmpzIiwiQzovVXNlcnMvRGFtcy9XZWJTdG9ybVByb2plY3QvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvV291bmRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUm91dGVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xyXG59OyIsInZhciBhcHAgPSAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICduZ0dyaWQnLCAncGFzY2FscHJlY2h0LnRyYW5zbGF0ZScsICdhcHAuY29udHJvbGxlcnMnLCAnYXBwLnNlcnZpY2VzJywgJ2FwcC5kaXJlY3RpdmVzJ10pO1xyXG5cclxuYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAvLyBGb3IgYW55IHVubWF0Y2hlZCB1cmwsIHJlZGlyZWN0IHRvIC9zdGF0ZTFcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvbG9naW5cIik7XHJcbiAgICAvL1xyXG4gICAgLy8gTm93IHNldCB1cCB0aGUgc3RhdGVzXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbG9naW5cIixcclxuICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9sb2dpbi5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhdGUoJ21haW4tY29udGVudCcsIHtcclxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAnZm9vdGVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9vdGVyLmh0bWwnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2hlYWRlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hlYWRlci5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdjb250ZW50Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbi1jb250ZW50Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdGF0ZSgnbWVudScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tZW51XCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tZW51Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVudUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnbWVhbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tZWFsXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9tZWFsLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVhbEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkbWVhbCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tZWFsL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLW1lYWwuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRNZWFsQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdzd2FkZGxlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3N3YWRkbGVcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3N3YWRkbGUuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTd2FkZGxlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRzd2FkZGxlJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3N3YWRkbGUvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9hZGQtc3dhZGRsZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFN3YWRkbGVDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2luc3VsaW5Eb3NhZ2UnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5zdWxpbkRvc2FnZVwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvaW5zdWxpbkRvc2FnZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luc3VsaW5Eb3NhZ2VDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGluc3VsaW5Eb3NhZ2UnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5zdWxpbkRvc2FnZS9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1pbnN1bGluRG9zYWdlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkSW5zdWxpbkRvc2FnZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnb2JzZXJ2YXRpb24nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvb2JzZXJ2YXRpb25cIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL29ic2VydmF0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnT2JzZXJ2YXRpb25DdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZG9ic2VydmF0aW9uJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL29ic2VydmF0aW9uL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLW9ic2VydmF0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkT2JzZXJ2YXRpb25DdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ3BhdGNoJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3BhdGNoXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9wYXRjaC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BhdGNoQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRwYXRjaCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9wYXRjaC9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1wYXRjaC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFBhdGNoQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZXJvc29sJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Flcm9zb2xcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2Flcm9zb2wuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZXJvc29sQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRhZXJvc29sJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Flcm9zb2wvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtYWVyb3NvbC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEFlcm9zb2xDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ3dvdW5kJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3dvdW5kXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy93b3VuZC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1dvdW5kQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGR3b3VuZCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi93b3VuZC9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC13b3VuZC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFdvdW5kQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdkcnVnVHJlYXRtZW50Jywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2RydWdUcmVhdG1lbnRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2RydWdUcmVhdG1lbnQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEcnVnVHJlYXRtZW50Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRkcnVnVHJlYXRtZW50Jywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2RydWdUcmVhdG1lbnQvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtZHJ1Z1RyZWF0bWVudC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZERydWdUcmVhdG1lbnRDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2luc3VsaW5UYWtpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5zdWxpblRha2luZ1wiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvaW5zdWxpblRha2luZy5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luc3VsaW5UYWtpbmdDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGluc3VsaW5UYWtpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5zdWxpblRha2luZy9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1pbnN1bGluVGFraW5nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkSW5zdWxpblRha2luZ0N0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgndGhlcmFwZXV0aWMnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvdGhlcmFwZXV0aWNcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL3RoZXJhcGV1dGljLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVGhlcmFwZXV0aWNDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZHRoZXJhcGV1dGljJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL3RoZXJhcGV1dGljL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLXRoZXJhcGV1dGljLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkVGhlcmFwZXV0aWNDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2luamVjdGlvbicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9pbmplY3Rpb25cIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luamVjdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luamVjdGlvbkN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkaW5qZWN0aW9uJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2luamVjdGlvbi9hZGRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1pbmplY3Rpb24uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRJbmplY3Rpb25DdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2h5Z2llbmUnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2h5Z2llbmVcIixcclxuICAgICAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvaHlnaWVuZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIeWdpZW5lQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRoeWdpZW5lJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9oeWdpZW5lL2FkZFwiLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaHlnaWVuZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRIeWdpZW5lQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdjbG90aGluZycsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9jbG90aGluZ1wiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvY2xvdGhpbmcuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDbG90aGluZ0N0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkY2xvdGhpbmcnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvY2xvdGhpbmcvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtY2xvdGhpbmcuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRDbG90aGluZ0N0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnbW9iaWxpemF0aW9uJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL21vYmlsaXphdGlvblwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvbW9iaWxpemF0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTW9iaWxpemF0aW9uQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRtb2JpbGl6YXRpb24nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbW9iaWxpemF0aW9uL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLW1vYmlsaXphdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZE1vYmlsaXphdGlvbkN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgndG9pbGV0SGVscGluZycsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi90b2lsZXRIZWxwaW5nXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy90b2lsZXRIZWxwaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVG9pbGV0SGVscGluZ0N0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkdG9pbGV0SGVscGluZycsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi90b2lsZXRIZWxwaW5nL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLXRvaWxldEhlbHBpbmcuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRUb2lsZXRIZWxwaW5nQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdpbmNvbnRpbmVuY2UnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvaW5jb250aW5lbmNlXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9pbmNvbnRpbmVuY2UuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmNvbnRpbmVuY2VDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGluY29udGluZW5jZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9pbmNvbnRpbmVuY2UvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5jb250aW5lbmNlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkSW5jb250aW5lbmNlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdlYXQnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvZWF0XCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9lYXQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFYXRDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGVhdCcsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9lYXQvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtZWF0Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkRWF0Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdwYXJhbWV0ZXInLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvcGFyYW1ldGVyXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9wYXJhbWV0ZXIuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQYXJhbWV0ZXJDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ2FkZHBhcmFtZXRlcicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9wYXJhbWV0ZXIvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtcGFyYW1ldGVyLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkUGFyYW1ldGVyQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdkaXNvcmRlcicsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9kaXNvcmRlclwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvZGlzb3JkZXIuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEaXNvcmRlckN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkZGlzb3JkZXInLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvZGlzb3JkZXIvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtZGlzb3JkZXIuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGREaXNvcmRlckN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYXNwZWN0Jywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2FzcGVjdFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYXNwZWN0Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQXNwZWN0Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRhc3BlY3QnLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvYXNwZWN0L2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWFzcGVjdC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEFzcGVjdEN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnbWVhc3VyZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tZWFzdXJlXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9tZWFzdXJlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVhc3VyZUN0cmwgYXMgY3RybCdcclxuICAgICAgICB9KS5zdGF0ZSgnYWRkbWVhc3VyZScsIHtcclxuICAgICAgICAgICAgdXJsOiBcIi9tZWFzdXJlL2FkZFwiLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLW1lYXN1cmUuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRNZWFzdXJlQ3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdlbWJhbmttZW50Jywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2VtYmFua21lbnRcIixcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2VtYmFua21lbnQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFbWJhbmttZW50Q3RybCBhcyBjdHJsJ1xyXG4gICAgICAgIH0pLnN0YXRlKCdhZGRlbWJhbmttZW50Jywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL2VtYmFua21lbnQvYWRkXCIsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtZW1iYW5rbWVudC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEVtYmFua21lbnRDdHJsIGFzIGN0cmwnXHJcbiAgICAgICAgfSlcclxufSkuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsIGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XHJcbiAgICAvLyBBdXRvcmlzYXRpb24gZGVzIGNvb2tpZXMgcG91ciBsZXMgcmVxdcOpdGVzIENPUlNcclxuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxufV0pLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCR0cmFuc2xhdGVQcm92aWRlcikge1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdmcicpO1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcclxuICAgICAgICBwcmVmaXg6ICdsYW5ndWFnZXMvJyxcclxuICAgICAgICBzdWZmaXg6ICcuanNvbidcclxuICAgIH0pO1xyXG59XSk7IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcclxuXHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0xvZ2luQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiSGVhZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0hlYWRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkJvYXJkZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQm9hcmRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lbnVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVudUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lYWxDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVhbEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZE1lYWxDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkTWVhbEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlN3YWRkbGVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvU3dhZGRsZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFN3YWRkbGVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkU3dhZGRsZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluc3VsaW5Eb3NhZ2VDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5zdWxpbkRvc2FnZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluc3VsaW5Eb3NhZ2VDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSW5zdWxpbkRvc2FnZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk9ic2VydmF0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL09ic2VydmF0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkT2JzZXJ2YXRpb25DdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkT2JzZXJ2YXRpb25DdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJQYXRjaEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9QYXRjaEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFBhdGNoQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZFBhdGNoQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWVyb3NvbEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZXJvc29sQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkQWVyb3NvbEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRBZXJvc29sQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiV291bmRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvV291bmRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRXb3VuZEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRXb3VuZEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkRydWdUcmVhdG1lbnRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvRHJ1Z1RyZWF0bWVudEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZERydWdUcmVhdG1lbnRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkRHJ1Z1RyZWF0bWVudEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluc3VsaW5UYWtpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5zdWxpblRha2luZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluc3VsaW5UYWtpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSW5zdWxpblRha2luZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlRoZXJhcGV1dGljQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1RoZXJhcGV1dGljQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkVGhlcmFwZXV0aWNDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkVGhlcmFwZXV0aWNDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbmplY3Rpb25DdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5qZWN0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkSW5qZWN0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluamVjdGlvbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkh5Z2llbmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSHlnaWVuZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEh5Z2llbmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSHlnaWVuZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkNsb3RoaW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Nsb3RoaW5nQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkQ2xvdGhpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkQ2xvdGhpbmdDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJNb2JpbGl6YXRpb25DdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTW9iaWxpemF0aW9uQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkTW9iaWxpemF0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZE1vYmlsaXphdGlvbkN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlRvaWxldEhlbHBpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvVG9pbGV0SGVscGluZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFRvaWxldEhlbHBpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkVG9pbGV0SGVscGluZ0N0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluY29udGluZW5jZUN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9JbmNvbnRpbmVuY2VDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbmNvbnRpbmVuY2VDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkSW5jb250aW5lbmNlQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiRWF0Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0VhdEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEVhdEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRFYXRDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJQYXJhbWV0ZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvUGFyYW1ldGVyQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkUGFyYW1ldGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZFBhcmFtZXRlckN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkRpc29yZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Rpc29yZGVyQ3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkRGlzb3JkZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkRGlzb3JkZXJDdHJsJykpO1xyXG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBc3BlY3RDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQXNwZWN0Q3RybCcpKTtcclxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkQXNwZWN0Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEFzcGVjdEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1lYXN1cmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWVhc3VyZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZE1lYXN1cmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkTWVhc3VyZUN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkVtYmFua21lbnRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvRW1iYW5rbWVudEN0cmwnKSk7XHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEVtYmFua21lbnRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkRW1iYW5rbWVudEN0cmwnKSk7XHJcbiIsInZhciBBZGRBZXJvc29sQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQWVyb3NvbFNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5BZXJvc29sU2VydmljZSA9IEFlcm9zb2xTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVFbmQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLmRvY3RvciA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmFtZU1lZGljID0gXCJcIjtcclxuICAgICRzY29wZS51bml0ID0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZEFlcm9zb2xDdHJsLnByb3RvdHlwZS5ham91dGVyQWVyb3NvbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5BZXJvc29sU2VydmljZS5hZGRBZXJvc29sKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmRvY3Rvcix0aGlzLiRzY29wZS5uYW1lTWVkaWMsdGhpcy4kc2NvcGUuZG9zYWdlLHRoaXMuJHNjb3BlLnVuaXQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZVN0YXJ0LmdldFRpbWUoKSxcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVFbmQuZ2V0VGltZSgpXHJcblxyXG59OyIsInZhciBBZGRBc3BlY3RDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBBc3BlY3RTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuQXNwZWN0U2VydmljZSA9IEFzcGVjdFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLnJlZG5lc3MgPSBmYWxzZTtcclxuICAgICRzY29wZS5maWJyaW4gPSBmYWxzZTtcclxuICAgICRzY29wZS5uZWNyb3NpcyA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnBpbmsgPSBmYWxzZTtcclxuICAgICRzY29wZS5hc3BlY3RPdGhlciA9IFwiXCI7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRBc3BlY3RDdHJsLnByb3RvdHlwZS5ham91dGVyQXNwZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkFzcGVjdFNlcnZpY2UuYWRkQXNwZWN0KHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnJlZG5lc3MsXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmlicmluLCB0aGlzLiRzY29wZS5uZWNyb3NpcywgdGhpcy4kc2NvcGUucGluayxcclxuICAgICAgICAgdGhpcy4kc2NvcGUuYXNwZWN0T3RoZXIpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZENsb3RoaW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQ2xvdGhpbmdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuQ2xvdGhpbmdTZXJ2aWNlID0gQ2xvdGhpbmdTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5jbG90aGluZ0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuY2xvdGhpbmdTdGltdWxhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRDbG90aGluZ0N0cmwucHJvdG90eXBlLmFqb3V0ZXJDbG90aGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5DbG90aGluZ1NlcnZpY2UuYWRkQ2xvdGhpbmcodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuY2xvdGhpbmdDb21wbGV0ZSx0aGlzLiRzY29wZS5jbG90aGluZ1N0aW11bGF0ZWQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZERpc29yZGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRGlzb3JkZXJTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuRGlzb3JkZXJTZXJ2aWNlID0gRGlzb3JkZXJTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS50aW1lRGlzb3JpZW50YXRpb24gPSBmYWxzZTtcclxuICAgICRzY29wZS5zcGFjZURpc29yaWVudGF0aW9uID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudGVybURpZmZpY3VsdHkgPSBmYWxzZTtcclxuICAgICRzY29wZS52ZXJiYWxEaWZmaWN1bHR5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUubG9zc0NvbmNlcHQgPSBmYWxzZTtcclxuICAgICRzY29wZS5hZ2l0YXRlZCA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkRGlzb3JkZXJDdHJsLnByb3RvdHlwZS5ham91dGVyRGlzb3JkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuRGlzb3JkZXJTZXJ2aWNlLmFkZERpc29yZGVyKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnRpbWVEaXNvcmllbnRhdGlvbix0aGlzLiRzY29wZS5zcGFjZURpc29yaWVudGF0aW9uLHRoaXMuJHNjb3BlLnRlcm1EaWZmaWN1bHR5LFxyXG4gICAgICAgIHRoaXMuJHNjb3BlLnZlcmJhbERpZmZpY3VsdHksdGhpcy4kc2NvcGUubG9zc0NvbmNlcHQsdGhpcy4kc2NvcGUuYWdpdGF0ZWQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZERydWdUcmVhdG1lbnRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBEcnVnVHJlYXRtZW50U2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkRydWdUcmVhdG1lbnRTZXJ2aWNlID0gRHJ1Z1RyZWF0bWVudFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlU3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8kc2NvcGUuZGF0ZUVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUuZG9jdG9yID0gXCJcIjtcclxuICAgICRzY29wZS5uYW1lTWVkaWMgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnVuaXQgPSBcIlwiO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkRHJ1Z1RyZWF0bWVudEN0cmwucHJvdG90eXBlLmFqb3V0ZXJEcnVnVHJlYXRtZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkRydWdUcmVhdG1lbnRTZXJ2aWNlLmFkZERydWdUcmVhdG1lbnQodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCxcclxuICAgICAgICB0aGlzLiRzY29wZS5tb3JuaW5nLCB0aGlzLiRzY29wZS5taWRkYXksIHRoaXMuJHNjb3BlLmV2ZW5pbmcsIHRoaXMuJHNjb3BlLm5pZ2h0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgQWRkRWF0Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRWF0U2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkVhdFNlcnZpY2UgPSBFYXRTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5wcmlvckFpZCA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmZ1bGxBaWQgPSBmYWxzZTtcclxuICAgICRzY29wZS5lYXRTdGltdWxhdGVkID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuaHlkcmF0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRFYXRDdHJsLnByb3RvdHlwZS5ham91dGVyRWF0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkVhdFNlcnZpY2UuYWRkRWF0KHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnByaW9yQWlkLHRoaXMuJHNjb3BlLmZ1bGxBaWQsdGhpcy4kc2NvcGUuZWF0U3RpbXVsYXRlZCx0aGlzLiRzY29wZS5oeWRyYXRpb24pLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZEVtYmFua21lbnRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBFbWJhbmttZW50U2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkVtYmFua21lbnRTZXJ2aWNlID0gRW1iYW5rbWVudFNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLnJlZ3VsYXIgPSBmYWxzZTtcclxuICAgICRzY29wZS5pcnJlZ3VsYXIgPSBmYWxzZTtcclxuICAgICRzY29wZS5mdXJyb3cgPSBmYWxzZTtcclxuICAgICRzY29wZS5kZXRhY2htZW50ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuYnVkZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5iYXRoID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZEVtYmFua21lbnRDdHJsLnByb3RvdHlwZS5ham91dGVyRW1iYW5rbWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5FbWJhbmttZW50U2VydmljZS5hZGRFbWJhbmttZW50KHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnJlZ3VsYXIsdGhpcy4kc2NvcGUuaXJyZWd1bGFyLHRoaXMuJHNjb3BlLmZ1cnJvdyxcclxuICAgICAgICB0aGlzLiRzY29wZS5kZXRhY2htZW50LHRoaXMuJHNjb3BlLmJ1ZGRpbmcpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZEh5Z2llbmVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBIeWdpZW5lU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLkh5Z2llbmVTZXJ2aWNlID0gSHlnaWVuZVNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLnRvaWxldFBhcnRpZWwgPSBmYWxzZTtcclxuICAgICRzY29wZS50b2lsZXRDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmh5Z2llbmVTdGltdWxhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmJhdGggPSBmYWxzZTtcclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkSHlnaWVuZUN0cmwucHJvdG90eXBlLmFqb3V0ZXJIeWdpZW5lID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkh5Z2llbmVTZXJ2aWNlLmFkZEh5Z2llbmUodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUudG9pbGV0UGFydGllbCx0aGlzLiRzY29wZS50b2lsZXRDb21wbGV0ZSx0aGlzLiRzY29wZS5oeWdpZW5lU3RpbXVsYXRlZCx0aGlzLiRzY29wZS5iYXRoKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblxyXG59OyIsInZhciBBZGRJbmNvbnRpbmVuY2VDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbmNvbnRpbmVuY2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuSW5jb250aW5lbmNlU2VydmljZSA9IEluY29udGluZW5jZVNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLmRpdXJuYWwgPSBmYWxzZTtcclxuICAgICRzY29wZS5ub2N0dXJuYWwgPSBmYWxzZTtcclxuICAgICRzY29wZS5ib3RoID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRJbmNvbnRpbmVuY2VDdHJsLnByb3RvdHlwZS5ham91dGVySW5jb250aW5lbmNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLkluY29udGluZW5jZVNlcnZpY2UuYWRkSW5jb250aW5lbmNlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmRpdXJuYWwsdGhpcy4kc2NvcGUubm9jdHVybmFsLHRoaXMuJHNjb3BlLmJvdGgpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZEluamVjdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluamVjdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5JbmplY3Rpb25TZXJ2aWNlID0gSW5qZWN0aW9uU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlRW5kID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5kb2N0b3IgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XHJcbiAgICAkc2NvcGUudW5pdCA9IFwiXCI7XHJcbiAgICAkc2NvcGUuZXN0YWJsaXNobWVudD0gXCJcIjtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZEluamVjdGlvbkN0cmwucHJvdG90eXBlLmFqb3V0ZXJJbmplY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuSW5qZWN0aW9uU2VydmljZS5hZGRJbmplY3Rpb24odGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCx0aGlzLiRzY29wZS5lc3RhYmxpc2htZW50KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXHJcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxyXG5cclxufTsiLCJ2YXIgSW5zdWxpbkRvc2FnZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UgPSBJbnN1bGluRG9zYWdlU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5JbnN1bGluRG9zYWdlQ3RybC5wcm90b3R5cGUuYWpvdXRlckluc3VsaW5Eb3NhZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UuYWRkSW5zdWxpbkRvc2FnZSh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldE1pbGxpc2Vjb25kcygpLCB0aGlzLiRzY29wZS5kb3NhZ2UpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG59O1xyXG5cclxuLy9JbnN1bGluRG9zYWdlQ3RybC5wcm90b3R5cGUuZ2V0SW5zdWxpbkRvc2FnZXMgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZS5nZXRJbnN1bGluRG9zYWdlcygpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG4vL307XHJcbiIsInZhciBJbnN1bGluVGFraW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5zdWxpblRha2luZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5JbnN1bGluVGFraW5nU2VydmljZSA9IEluc3VsaW5UYWtpbmdTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbkluc3VsaW5UYWtpbmdDdHJsLnByb3RvdHlwZS5ham91dGVySW5zdWxpblRha2luZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5JbnN1bGluVGFraW5nU2VydmljZS5hZGRJbnN1bGluVGFraW5nKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRoaXMuJHNjb3BlLmdseWNlbWlhKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTtcclxuXHJcbi8vSW5zdWxpbkRvc2FnZUN0cmwucHJvdG90eXBlLmdldEluc3VsaW5Eb3NhZ2VzID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UuZ2V0SW5zdWxpbkRvc2FnZXMoKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuLy99O1xyXG4iLCJ2YXIgQWRkTWVhbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE1lYWxTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuTWVhbFNlcnZpY2UgPSBNZWFsU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE1lYWxDdHJsLnByb3RvdHlwZS5ham91dGVyTWVhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5NZWFsU2VydmljZS5hZGRNZWFsKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxufTsiLCJ2YXIgQWRkTWVhc3VyZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE1lYXN1cmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuTWVhc3VyZVNlcnZpY2UgPSBNZWFzdXJlU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAkc2NvcGUuc2l6ZSA9IDA7XHJcbiAgICAkc2NvcGUuZGVwdGggPSAwO1xyXG4gICAgJHNjb3BlLnF1YW50aXR5ID0gXCJcIjtcclxuICAgICRzY29wZS5uYXR1cmUgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm9kb3IgPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xyXG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XHJcblxyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcclxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkFkZE1lYXN1cmVDdHJsLnByb3RvdHlwZS5ham91dGVyTWVhc3VyZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5NZWFzdXJlU2VydmljZS5hZGRNZWFzdXJlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnNpemUsdGhpcy4kc2NvcGUuZGVwdGgsXHJcbiAgICB0aGlzLiRzY29wZS5xdWFudGl0eSxcclxuICAgIHRoaXMuJHNjb3BlLm5hdHVyZSxcclxuICAgIHRoaXMuJHNjb3BlLm9kb3IpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG5cclxuXHJcbn07IiwidmFyIEFkZE1vYmlsaXphdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE1vYmlsaXphdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5Nb2JpbGl6YXRpb25TZXJ2aWNlID0gTW9iaWxpemF0aW9uU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5oZWxwID0gZmFsc2U7XHJcbiAgICAkc2NvcGUubWF0ZXJpYWwgPSBmYWxzZTtcclxuICAgICRzY29wZS5jYW5lID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRNb2JpbGl6YXRpb25DdHJsLnByb3RvdHlwZS5ham91dGVyTW9iaWxpemF0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLk1vYmlsaXphdGlvblNlcnZpY2UuYWRkTW9iaWxpemF0aW9uKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmhlbHAsdGhpcy4kc2NvcGUubWF0ZXJpYWwsdGhpcy4kc2NvcGUuY2FuZSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcblxyXG5cclxufTsiLCJ2YXIgQWRkT2JzZXJ2YXRpb25DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBPYnNlcnZhdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5PYnNlcnZhdGlvblNlcnZpY2UgPSBPYnNlcnZhdGlvblNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUuY29tbWVudCA9IFwiXCI7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRPYnNlcnZhdGlvbkN0cmwucHJvdG90eXBlLmFqb3V0ZXJPYnNlcnZhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5PYnNlcnZhdGlvblNlcnZpY2UuYWRkT2JzZXJ2YXRpb24odGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksIHRoaXMuJHNjb3BlLmNvbW1lbnQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG59OyIsInZhciBBZGRQYXJhbWV0ZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBQYXJhbWV0ZXJTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuUGFyYW1ldGVyU2VydmljZSA9IFBhcmFtZXRlclNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLnB1bHNlID0gXCJcIjtcclxuICAgICRzY29wZS50ZW5zaW9uID0gXCJcIjtcclxuICAgICRzY29wZS50ZW1wZXJhdHVyZSA9IFwiXCI7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRQYXJhbWV0ZXJDdHJsLnByb3RvdHlwZS5ham91dGVyUGFyYW1ldGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLlBhcmFtZXRlclNlcnZpY2UuYWRkUGFyYW1ldGVyKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnB1bHNlLHRoaXMuJHNjb3BlLnRlbnNpb24sdGhpcy4kc2NvcGUudGVtcGVyYXR1cmUpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xyXG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZVN0YXJ0LmdldFRpbWUoKSxcclxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVFbmQuZ2V0VGltZSgpXHJcblxyXG59OyIsInZhciBBZGRQYXRjaEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFBhdGNoU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLlBhdGNoU2VydmljZSA9IFBhdGNoU2VydmljZTtcclxuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vJHNjb3BlLmRhdGVTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyRzY29wZS5kYXRlRW5kID0gbmV3IERhdGUoKTtcclxuICAgICRzY29wZS5kb2N0b3IgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XHJcbiAgICAkc2NvcGUudW5pdCA9IFwiXCI7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRQYXRjaEN0cmwucHJvdG90eXBlLmFqb3V0ZXJQYXRjaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5QYXRjaFNlcnZpY2UuYWRkUGF0Y2godGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbiAgICAgICAvLyB0aGlzLiRzY29wZS5kYXRlU3RhcnQuZ2V0VGltZSgpLFxyXG4gICAgICAgLy8gdGhpcy4kc2NvcGUuZGF0ZUVuZC5nZXRUaW1lKClcclxuXHJcbn07IiwidmFyIEFkZFN3YWRkbGVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBTd2FkZGxlU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLlN3YWRkbGVTZXJ2aWNlID0gU3dhZGRsZVNlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRTd2FkZGxlQ3RybC5wcm90b3R5cGUuYWpvdXRlclN3YWRkbGUgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuU3dhZGRsZVNlcnZpY2UuYWRkU3dhZGRsZSh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XHJcbn07IiwidmFyIEFkZFRoZXJhcGV1dGljQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgVGhlcmFwZXV0aWNTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuVGhlcmFwZXV0aWNTZXJ2aWNlID0gVGhlcmFwZXV0aWNTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLnByZXBhcmF0aW9uID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuYWRNb3JuaW5nID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuYWRNaWRkYXkgPSBmYWxzZTtcclxuICAgICRzY29wZS5hZEV2ZW5pbmcgPSBmYWxzZTtcclxuICAgICRzY29wZS5hZE5pZ2h0ID0gZmFsc2U7XHJcblxyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkVGhlcmFwZXV0aWNDdHJsLnByb3RvdHlwZS5ham91dGVyVGhlcmFwZXV0aWMgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuVGhlcmFwZXV0aWNTZXJ2aWNlLmFkZFRoZXJhcGV1dGljKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnByZXBhcmF0aW9uLFxyXG4gICAgdGhpcy4kc2NvcGUuYWRNb3JuaW5nLHRoaXMuJHNjb3BlLmFkTWlkZGF5LHRoaXMuJHNjb3BlLmFkRXZlbmluZyx0aGlzLiRzY29wZS5hZE5pZ2h0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcbn07IiwidmFyIEFkZFRvaWxldEhlbHBpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUb2lsZXRIZWxwaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLlRvaWxldEhlbHBpbmdTZXJ2aWNlID0gVG9pbGV0SGVscGluZ1NlcnZpY2U7XHJcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUubW92ZSA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcclxuICAgICRzY29wZS5tc3RlcCA9IDE1O1xyXG5cclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcclxuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcclxuICAgIH07XHJcbn07XHJcblxyXG5BZGRUb2lsZXRIZWxwaW5nQ3RybC5wcm90b3R5cGUuYWpvdXRlclRvaWxldEhlbHBpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuVG9pbGV0SGVscGluZ1NlcnZpY2UuYWRkVG9pbGV0SGVscGluZyh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5tb3ZlKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcbn07IiwidmFyIEFkZFdvdW5kQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgV291bmRTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuV291bmRTZXJ2aWNlID0gV291bmRTZXJ2aWNlO1xyXG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgJHNjb3BlLmxvY2FsaXNhdGlvbiA9IFwiXCI7XHJcbiAgICAkc2NvcGUudHlwZSA9IFwiXCI7XHJcbiAgICAkc2NvcGUuZGVzY3JpcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICRzY29wZS5oc3RlcCA9IDE7XHJcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcclxuXHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XHJcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQWRkV291bmRDdHJsLnByb3RvdHlwZS5ham91dGVyV291bmQgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuV291bmRTZXJ2aWNlLmFkZFdvdW5kKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmxvY2FsaXNhdGlvbix0aGlzLiRzY29wZS50eXBlLHRoaXMuJHNjb3BlLmRlc2NyaXB0aW9uKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcbn07IiwidmFyIEFlcm9zb2xDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBBZXJvc29sU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIEFlcm9zb2xTZXJ2aWNlLmdldEFlcm9zb2xzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oYWVyb3NvbCkge1xyXG4gICAgICAgICAgICBhZXJvc29sLmRhdGUgPSBuZXcgRGF0ZShhZXJvc29sLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWVyb3NvbDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBBc3BlY3RDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBBc3BlY3RTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgQXNwZWN0U2VydmljZS5nZXRBc3BlY3RzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oYXNwZWN0KSB7XHJcbiAgICAgICAgICAgIGFzcGVjdC5kYXRlID0gbmV3IERhdGUoYXNwZWN0LmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYXNwZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEJvYXJkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBCb2FyZGVyU2VydmljZSkge1xyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnTm9tJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdzdXJuYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1Byw6lub20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3Jvb20nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnQ2hhbWJyZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIEJvYXJkZXJTZXJ2aWNlLmdldEJvYXJkZXJzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJ2YXIgQ2xvdGhpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBDbG90aGluZ1NlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBDbG90aGluZ1NlcnZpY2UuZ2V0Q2xvdGhpbmdzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oY2xvdGhpbmcpIHtcclxuICAgICAgICAgICAgY2xvdGhpbmcuZGF0ZSA9IG5ldyBEYXRlKGNsb3RoaW5nLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2xvdGhpbmc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRGlzb3JkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBEaXNvcmRlclNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBEaXNvcmRlclNlcnZpY2UuZ2V0RGlzb3JkZXJzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oZGlzb3JkZXIpIHtcclxuICAgICAgICAgICAgZGlzb3JkZXIuZGF0ZSA9IG5ldyBEYXRlKGRpc29yZGVyLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzb3JkZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRHJ1Z1RyZWF0bWVudEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIERydWdUcmVhdG1lbnRTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ21vcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnTWF0aW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgRHJ1Z1RyZWF0bWVudFNlcnZpY2UuZ2V0RHJ1Z1RyZWF0bWVudHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihkcnVnVHJlYXRtZW50KSB7XHJcbiAgICAgICAgICAgIGRydWdUcmVhdG1lbnQuZGF0ZSA9IG5ldyBEYXRlKGRydWdUcmVhdG1lbnQuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkcnVnVHJlYXRtZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEVhdEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEVhdFNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBFYXRTZXJ2aWNlLmdldEVhdHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihlYXQpIHtcclxuICAgICAgICAgICAgZWF0LmRhdGUgPSBuZXcgRGF0ZShlYXQuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlYXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRW1iYW5rbWVudEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEVtYmFua21lbnRTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgRW1iYW5rbWVudFNlcnZpY2UuZ2V0RW1iYW5rbWVudHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihlbWJhbmttZW50KSB7XHJcbiAgICAgICAgICAgIGVtYmFua21lbnQuZGF0ZSA9IG5ldyBEYXRlKGVtYmFua21lbnQuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbWJhbmttZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEhlYWRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChMb2dpblNlcnZpY2UsICRzdGF0ZSkge1xyXG4gICAgdGhpcy5Mb2dpblNlcnZpY2UgPSBMb2dpblNlcnZpY2U7XHJcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxufTtcclxuXHJcbkhlYWRlckN0cmwucHJvdG90eXBlLmRpc2Nvbm5lY3QgID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5Mb2dpblNlcnZpY2UuZG9Mb2dvdXQoKTtcclxuICAgIHRoaXMuJHN0YXRlLmdvKFwibG9naW5cIik7XHJcbn07IiwidmFyIEh5Z2llbmVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBIeWdpZW5lU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIEh5Z2llbmVTZXJ2aWNlLmdldEh5Z2llbmVzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oaHlnaWVuZSkge1xyXG4gICAgICAgICAgICBoeWdpZW5lLmRhdGUgPSBuZXcgRGF0ZShoeWdpZW5lLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaHlnaWVuZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBJbmNvbnRpbmVuY2VDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbmNvbnRpbmVuY2VTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSW5jb250aW5lbmNlU2VydmljZS5nZXRJbmNvbnRpbmVuY2VzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oaW5jb250aW5lbmNlKSB7XHJcbiAgICAgICAgICAgIGluY29udGluZW5jZS5kYXRlID0gbmV3IERhdGUoaW5jb250aW5lbmNlLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5jb250aW5lbmNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEluamVjdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluamVjdGlvblNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZG9jdG9yJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RvY3RldXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgSW5qZWN0aW9uU2VydmljZS5nZXRJbmplY3Rpb25zKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oaW5qZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGluamVjdGlvbi5kYXRlID0gbmV3IERhdGUoaW5qZWN0aW9uLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIEluc3VsaW5Eb3NhZ2VDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBJbnN1bGluRG9zYWdlU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkb3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRG9zYWdlIChlbiB1bml0w6kpJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlLmdldEluc3VsaW5Eb3NhZ2VzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oaW5zdWxpbkRvc2FnZSkge1xyXG4gICAgICAgICAgICBpbnN1bGluRG9zYWdlLmRhdGUgPSBuZXcgRGF0ZShpbnN1bGluRG9zYWdlLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdWxpbkRvc2FnZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBJbnN1bGluVGFraW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5zdWxpblRha2luZ1NlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZ2x5Y2VtaWEnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnR2x5Y8OpbWllJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIEluc3VsaW5UYWtpbmdTZXJ2aWNlLmdldEluc3VsaW5UYWtpbmdzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oaW5zdWxpblRha2luZykge1xyXG4gICAgICAgICAgICBpbnN1bGluVGFraW5nLmRhdGUgPSBuZXcgRGF0ZShpbnN1bGluVGFraW5nLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdWxpblRha2luZztcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBMb2dpbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICR0cmFuc2xhdGUsICRzdGF0ZSwgTG9naW5TZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUuZW1haWwgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICRzY29wZS5yZW1lbWJlck1lID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZXJyb3Jtc2cgPSBcIlwiO1xyXG5cclxuICAgIGlmKExvZ2luU2VydmljZS5pc0xvZygpKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKFwibWFpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuY29ubmV4aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCRzY29wZS5lbWFpbCA9PT0gdW5kZWZpbmVkIHx8ICRzY29wZS5wYXNzd29yZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5lcnJvcm1zZyA9ICR0cmFuc2xhdGUoJ2xvZ2luLm1lc3NhZ2UuZXJyb3InKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIExvZ2luU2VydmljZS5kb0xvZ2luKCRzY29wZS5lbWFpbCwgJHNjb3BlLnBhc3N3b3JkLCAkc2NvcGUucmVtZW1iZXJNZSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKFwibWVudVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXJyb3Jtc2cgPSAkdHJhbnNsYXRlKCdsb2dpbi5tZXNzYWdlLmVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInZhciBNZWFsQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgTWVhbFNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBNZWFsU2VydmljZS5nZXRNZWFscygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKG1lYWwpIHtcclxuICAgICAgICAgICAgbWVhbC5kYXRlID0gbmV3IERhdGUobWVhbC5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1lYWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgTWVhc3VyZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE1lYXN1cmVTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgTWVhc3VyZVNlcnZpY2UuZ2V0TWVhc3VyZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihtZWFzdXJlKSB7XHJcbiAgICAgICAgICAgIG1lYXN1cmUuZGF0ZSA9IG5ldyBEYXRlKG1lYXN1cmUuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWFzdXJlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIE1lbnVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24gPSB7fTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLm1lYWwgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uc3dhZGRsZSA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5pbnN1bGluRG9zYWdlID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLnBhdGNoID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLmFlcm9zb2wgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24ud291bmQgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24ub2JzZXJ2YXRpb24gPSB0cnVlO1xyXG4gICAgJHNjb3BlLnBlcm1pc3Npb24uZHJ1Z1RyZWF0bWVudCA9IHRydWU7XHJcbiAgICAkc2NvcGUucGVybWlzc2lvbi5pbnN1bGluVGFraW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLnRoZXJhcGV1dGljID0gdHJ1ZTtcclxuICAgICRzY29wZS5wZXJtaXNzaW9uLmluamVjdGlvbiA9IHRydWU7XHJcblxyXG59IiwidmFyIE1vYmlsaXphdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE1vYmlsaXphdGlvblNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBNb2JpbGl6YXRpb25TZXJ2aWNlLmdldE1vYmlsaXphdGlvbnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihtb2JpbGl6YXRpb24pIHtcclxuICAgICAgICAgICAgbW9iaWxpemF0aW9uLmRhdGUgPSBuZXcgRGF0ZShtb2JpbGl6YXRpb24uZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2JpbGl6YXRpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgT2JzZXJ2YXRpb25DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBPYnNlcnZhdGlvblNlcnZpY2UpIHtcclxuICAgICRzY29wZSA9ICRzY29wZTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xyXG4gICAgICAgIGkxOG46ICdmcicsXHJcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnY29tbWVudCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdPYnNlcnZhdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBPYnNlcnZhdGlvblNlcnZpY2UuZ2V0T2JzZXJ2YXRpb25zKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24ob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgb2JzZXJ2YXRpb24uZGF0ZSA9IG5ldyBEYXRlKG9ic2VydmF0aW9uLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YXRpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgUGFyYW1ldGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgUGFyYW1ldGVyU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcclxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIFBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVycygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXIuZGF0ZSA9IG5ldyBEYXRlKHBhcmFtZXRlci5kYXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsInZhciBQYXRjaEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFBhdGNoU2VydmljZSkge1xyXG4gICAgJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuXHJcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaTE4bjogJ2ZyJyxcclxuICAgICAgICBkYXRhOiAnZGF0YScsXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkb2N0b3InLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRG9jdGV1cidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBQYXRjaFNlcnZpY2UuZ2V0UGF0Y2hzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24ocGF0Y2gpIHtcclxuICAgICAgICAgICAgcGF0Y2guZGF0ZSA9IG5ldyBEYXRlKHBhdGNoLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0Y2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgU3dhZGRsZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFN3YWRkbGVTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgU3dhZGRsZVNlcnZpY2UuZ2V0U3dhZGRsZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihzd2FkZGxlKSB7XHJcbiAgICAgICAgICAgIHN3YWRkbGUuZGF0ZSA9IG5ldyBEYXRlKHN3YWRkbGUuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzd2FkZGxlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFRoZXJhcGV1dGljQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgVGhlcmFwZXV0aWNTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3ByZXBhcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1Byw6lwYXJhdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBUaGVyYXBldXRpY1NlcnZpY2UuZ2V0VGhlcmFwZXV0aWNzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24odGhlcmFwZXV0aWMpIHtcclxuICAgICAgICAgICAgdGhlcmFwZXV0aWMuZGF0ZSA9IG5ldyBEYXRlKHRoZXJhcGV1dGljLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhlcmFwZXV0aWM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCJ2YXIgVG9pbGV0SGVscGluZ0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFRvaWxldEhlbHBpbmdTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXHJcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxyXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgVG9pbGV0SGVscGluZ1NlcnZpY2UuZ2V0VG9pbGV0SGVscGluZ3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbih0b2lsZXRIZWxwaW5nKSB7XHJcbiAgICAgICAgICAgIHRvaWxldEhlbHBpbmcuZGF0ZSA9IG5ldyBEYXRlKHRvaWxldEhlbHBpbmcuZGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2lsZXRIZWxwaW5nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwidmFyIFdvdW5kQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgV291bmRTZXJ2aWNlKSB7XHJcbiAgICAkc2NvcGUgPSAkc2NvcGU7XHJcblxyXG5cclxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICBpMThuOiAnZnInLFxyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0Rlc2NyaXB0aW9uIGRlcyBzb2lucydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcclxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXHJcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBXb3VuZFNlcnZpY2UuZ2V0V291bmRzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24od291bmQpIHtcclxuICAgICAgICAgICAgd291bmQuZGF0ZSA9IG5ldyBEYXRlKHdvdW5kLmRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gd291bmQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiLCIndXNlciBzdHJpY3QnO1xyXG5cclxudmFyIG1vZHVsZURpcmVjdGl2ZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFsnYXBwLnNlcnZpY2VzJ10pO1xyXG5cclxubW9kdWxlRGlyZWN0aXZlLmRpcmVjdGl2ZShcImJvYXJkZXJsaXN0XCIsIHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvQm9hcmRlckxpc3REaXJlY3RpdmVcIikpO1xyXG4iLCJ2YXIgQm9hcmRlckxpc3REaXJlY3RpdmUgPSBtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbihCb2FyZGVyU2VydmljZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCb2FyZGVyczogXCI9XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IFwiQm9hcmRlckN0cmxcIixcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvYm9hcmRlcmxpc3QuaHRtbCcsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3BlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59OyIsIid1c2VyIHN0cmljdCc7XHJcbnZhciBSb3V0ZVNlcnZpY2UgPSByZXF1aXJlKCdSb3V0ZVNlcnZpY2UnKTtcclxuXHJcbnZhciBtb2R1bGVTZXJ2aWNlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcclxuXHJcbm1vZHVsZVNlcnZpY2UuY29uc3RhbnQoJ1NFUlZFUl9ST09UJywgUm91dGVTZXJ2aWNlKCkpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJMb2dpblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkJvYXJkZXJTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvQm9hcmRlclNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIk1lYWxTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvTWVhbFNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlN3YWRkbGVTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvU3dhZGRsZVNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkluc3VsaW5Eb3NhZ2VTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSW5zdWxpbkRvc2FnZVNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIk9ic2VydmF0aW9uU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL09ic2VydmF0aW9uU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiUGF0Y2hTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvUGF0Y2hTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJBZXJvc29sU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0Flcm9zb2xTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJXb3VuZFNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Xb3VuZFNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkRydWdUcmVhdG1lbnRTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvRHJ1Z1RyZWF0bWVudFNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkluc3VsaW5UYWtpbmdTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSW5zdWxpblRha2luZ1NlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlRoZXJhcGV1dGljU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1RoZXJhcGV1dGljU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiSW5qZWN0aW9uU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0luamVjdGlvblNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkh5Z2llbmVTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSHlnaWVuZVNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkNsb3RoaW5nU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0Nsb3RoaW5nU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiTW9iaWxpemF0aW9uU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL01vYmlsaXphdGlvblNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlRvaWxldEhlbHBpbmdTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvVG9pbGV0SGVscGluZ1NlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkluY29udGluZW5jZVNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9JbmNvbnRpbmVuY2VTZXJ2aWNlJykpO1xyXG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJFYXRTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvRWF0U2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiUGFyYW1ldGVyU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1BhcmFtZXRlclNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkRpc29yZGVyU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0Rpc29yZGVyU2VydmljZScpKTtcclxubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiQXNwZWN0U2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0FzcGVjdFNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIk1lYXN1cmVTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvTWVhc3VyZVNlcnZpY2UnKSk7XHJcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkVtYmFua21lbnRTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvRW1iYW5rbWVudFNlcnZpY2UnKSk7XHJcblxyXG5cclxuIiwidmFyIEFlcm9zb2xTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuQWVyb3NvbFNlcnZpY2UucHJvdG90eXBlLmFkZEFlcm9zb2wgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICAvLyBcIiZkYXRlU3RhcnQ9XCIgKyBkYXRlU3RhcnQgK1xyXG4gICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcclxuICAgICAgICBcIiZkb2N0b3I9XCIgKyBkb2N0b3IgK1xyXG4gICAgICAgIFwiJm5hbWVNZWRpYz1cIiArIG5hbWVNZWRpYyArXHJcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcclxuICAgICAgICBcIiZ1bml0PVwiICsgdW5pdCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYWVyb3NvbCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuQWVyb3NvbFNlcnZpY2UucHJvdG90eXBlLmdldEFlcm9zb2xzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2Flcm9zb2wvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIEFzcGVjdFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Bc3BlY3RTZXJ2aWNlLnByb3RvdHlwZS5hZGRBc3BlY3QgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCByZWRuZXNzLCBmaWJyaW4sIG5lY3Jvc2lzLCBwaW5rLCBhc3BlY3RPdGhlcikge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImcmVkbmVzcz1cIiArIHJlZG5lc3MgK1xyXG4gICAgICAgIFwiJmZpYnJpbj1cIiArIGZpYnJpbiArXHJcbiAgICAgICAgXCImbmVjcm9zaXM9XCIgKyBuZWNyb3NpcyArXHJcbiAgICAgICAgXCImcGluaz1cIiArIHBpbmsgK1xyXG4gICAgICAgIFwiJmFzcGVjdE90aGVyPVwiICsgYXNwZWN0T3RoZXI7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYXNwZWN0JywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Bc3BlY3RTZXJ2aWNlLnByb3RvdHlwZS5nZXRBc3BlY3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2FzcGVjdC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgQm9hcmRlclNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Cb2FyZGVyU2VydmljZS5wcm90b3R5cGUuZ2V0Qm9hcmRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYm9hcmRlci9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgQ2xvdGhpbmdTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuQ2xvdGhpbmdTZXJ2aWNlLnByb3RvdHlwZS5hZGRDbG90aGluZyA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGNsb3RoaW5nQ29tcGxldGUsIGNsb3RoaW5nU3RpbXVsYXRlZCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImY2xvdGhpbmdDb21wbGV0ZT1cIiArIGNsb3RoaW5nQ29tcGxldGUgK1xyXG4gICAgICAgIFwiJmNsb3RoaW5nU3RpbXVsYXRlZD1cIiArIGNsb3RoaW5nU3RpbXVsYXRlZDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdjbG90aGluZycsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ2xvdGhpbmdTZXJ2aWNlLnByb3RvdHlwZS5nZXRDbG90aGluZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnY2xvdGhpbmcvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIERpc29yZGVyU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkRpc29yZGVyU2VydmljZS5wcm90b3R5cGUuYWRkRGlzb3JkZXIgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCB0aW1lRGlzb3JpZW50YXRpb24sIHNwYWNlRGlzb3JpZW50YXRpb24sIHRlcm1EaWZmaWN1bHR5LCB2ZXJiYWxEaWZmaWN1bHR5LCBsb3NzQ29uY2VwdCwgYWdpdGF0ZWQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJnRpbWVEaXNvcmllbnRhdGlvbj1cIiArIHRpbWVEaXNvcmllbnRhdGlvbiArXHJcbiAgICAgICAgXCImc3BhY2VEaXNvcmllbnRhdGlvbj1cIiArIHNwYWNlRGlzb3JpZW50YXRpb24gK1xyXG4gICAgICAgIFwiJnRlcm1EaWZmaWN1bHR5PVwiICsgdGVybURpZmZpY3VsdHkgK1xyXG4gICAgICAgIFwiJnZlcmJhbERpZmZpY3VsdHk9XCIgKyB2ZXJiYWxEaWZmaWN1bHR5ICtcclxuICAgICAgICBcIiZsb3NzQ29uY2VwdD1cIiArIGxvc3NDb25jZXB0ICtcclxuICAgICAgICBcIiZhZ2l0YXRlZD1cIiArIGFnaXRhdGVkO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2Rpc29yZGVyJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5EaXNvcmRlclNlcnZpY2UucHJvdG90eXBlLmdldERpc29yZGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdkaXNvcmRlci9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRHJ1Z1RyZWF0bWVudFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5EcnVnVHJlYXRtZW50U2VydmljZS5wcm90b3R5cGUuYWRkRHJ1Z1RyZWF0bWVudCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGRvY3RvciwgbmFtZU1lZGljLCBkb3NhZ2UsIHVuaXQsIG1vcm5pbmcsIG1pZGRheSwgZXZlbmluZywgbmlnaHQpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIC8vIFwiJmRhdGVTdGFydD1cIiArIGRhdGVTdGFydCArXHJcbiAgICAgICAgLy8gXCImZGF0ZUVuZD1cIiArIGRhdGVFbmQgK1xyXG4gICAgICAgIFwiJmRvY3Rvcj1cIiArIGRvY3RvciArXHJcbiAgICAgICAgXCImbmFtZU1lZGljPVwiICsgbmFtZU1lZGljICtcclxuICAgICAgICBcIiZkb3NhZ2U9XCIgKyBkb3NhZ2UgK1xyXG4gICAgICAgIFwiJnVuaXQ9XCIgKyB1bml0ICtcclxuICAgICAgICBcIiZtb3JuaW5nPVwiICsgbW9ybmluZyArXHJcbiAgICAgICAgXCImbWlkZGF5PVwiICsgbWlkZGF5ICtcclxuICAgICAgICBcIiZldmVuaW5nPVwiICsgZXZlbmluZyArXHJcbiAgICAgICAgXCImbmlnaHQ9XCIgKyBuaWdodCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnZHJ1Z1RyZWF0bWVudCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuRHJ1Z1RyZWF0bWVudFNlcnZpY2UucHJvdG90eXBlLmdldERydWdUcmVhdG1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2RydWdUcmVhdG1lbnQvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIEVhdFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5FYXRTZXJ2aWNlLnByb3RvdHlwZS5hZGRFYXQgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBwcmlvckFpZCwgZnVsbEFpZCwgZWF0U3RpbXVsYXRlZCwgaHlkcmF0aW9uKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZwcmlvckFpZD1cIiArIHByaW9yQWlkICtcclxuICAgICAgICBcIiZmdWxsQWlkPVwiICsgZnVsbEFpZCArXHJcbiAgICAgICAgXCImZWF0U3RpbXVsYXRlZD1cIiArIGVhdFN0aW11bGF0ZWQgK1xyXG4gICAgICAgIFwiJmh5ZHJhdGlvbj1cIiArIGh5ZHJhdGlvbiA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnZWF0JywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5FYXRTZXJ2aWNlLnByb3RvdHlwZS5nZXRFYXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2VhdC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgRW1iYW5rbWVudFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5FbWJhbmttZW50U2VydmljZS5wcm90b3R5cGUuYWRkRW1iYW5rbWVudCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHJlZ3VsYXIsIGlycmVndWxhciwgZnVycm93LCBkZXRhY2htZW50LCBidWRkaW5nKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZyZWd1bGFyPVwiICsgcmVndWxhciArXHJcbiAgICAgICAgXCImaXJyZWd1bGFyPVwiICsgaXJyZWd1bGFyICtcclxuICAgICAgICBcIiZmdXJyb3c9XCIgKyBmdXJyb3cgK1xyXG4gICAgICAgIFwiJmRldGFjaG1lbnQ9XCIgKyBkZXRhY2htZW50ICtcclxuICAgICAgICBcIiZidWRkaW5nPVwiICsgYnVkZGluZyA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnZW1iYW5rbWVudCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuRW1iYW5rbWVudFNlcnZpY2UucHJvdG90eXBlLmdldEVtYmFua21lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2VtYmFua21lbnQvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIEh5Z2llbmVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuSHlnaWVuZVNlcnZpY2UucHJvdG90eXBlLmFkZEh5Z2llbmUgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCB0b2lsZXRQYXJ0aWVsLCB0b2lsZXRDb21wbGV0ZSwgaHlnaWVuZVN0aW11bGF0ZWQsIGJhdGgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJnRvaWxldFBhcnRpZWw9XCIgKyB0b2lsZXRQYXJ0aWVsICtcclxuICAgICAgICBcIiZ0b2lsZXRDb21wbGV0ZT1cIiArIHRvaWxldENvbXBsZXRlICtcclxuICAgICAgICBcIiZoeWdpZW5lU3RpbXVsYXRlZD1cIiArIGh5Z2llbmVTdGltdWxhdGVkICtcclxuICAgICAgICBcIiZiYXRoPVwiICsgYmF0aCA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaHlnaWVuZScsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuSHlnaWVuZVNlcnZpY2UucHJvdG90eXBlLmdldEh5Z2llbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2h5Z2llbmUvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIEluY29udGluZW5jZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5JbmNvbnRpbmVuY2VTZXJ2aWNlLnByb3RvdHlwZS5hZGRJbmNvbnRpbmVuY2UgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkaXVybmFsLCBub2N0dXJuYWwsIGJvdGgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmRpdXJuYWw9XCIgKyBkaXVybmFsICtcclxuICAgICAgICBcIiZub2N0dXJuYWw9XCIgKyBub2N0dXJuYWwgK1xyXG4gICAgICAgIFwiJmJvdGg9XCIgKyBib3RoIDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbmNvbnRpbmVuY2UnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkluY29udGluZW5jZVNlcnZpY2UucHJvdG90eXBlLmdldEluY29udGluZW5jZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5jb250aW5lbmNlL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBJbmplY3Rpb25TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuSW5qZWN0aW9uU2VydmljZS5wcm90b3R5cGUuYWRkSW5qZWN0aW9uID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZG9jdG9yLCBlc3RhYmxpc2htZW50LCBuYW1lTWVkaWMsIGRvc2FnZSwgdW5pdCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgLy8gXCImZGF0ZVN0YXJ0PVwiICsgZGF0ZVN0YXJ0ICtcclxuICAgICAgICAvLyBcIiZkYXRlRW5kPVwiICsgZGF0ZUVuZCArXHJcbiAgICAgICAgXCImZG9jdG9yPVwiICsgZG9jdG9yICtcclxuICAgICAgICBcIiZlc3RhYmxpc2htZW50PVwiICsgZXN0YWJsaXNobWVudCArXHJcbiAgICAgICAgXCImbmFtZU1lZGljPVwiICsgbmFtZU1lZGljICtcclxuICAgICAgICBcIiZkb3NhZ2U9XCIgKyBkb3NhZ2UgK1xyXG4gICAgICAgIFwiJnVuaXQ9XCIgKyB1bml0IDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbmplY3Rpb24nLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkluamVjdGlvblNlcnZpY2UucHJvdG90eXBlLmdldEluamVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5qZWN0aW9uL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBJbnN1bGluRG9zYWdlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLnByb3RvdHlwZS5hZGRJbnN1bGluRG9zYWdlID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZG9zYWdlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZkb3NhZ2U9XCIgKyBkb3NhZ2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5Eb3NhZ2UnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLnByb3RvdHlwZS5nZXRJbnN1bGluRG9zYWdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluRG9zYWdlL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG4iLCJ2YXIgSW5zdWxpblRha2luZ1NlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUuYWRkSW5zdWxpblRha2luZyA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGdseWNlbWlhKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZnbHljZW1pYT1cIiArIGdseWNlbWlhO1xyXG5cclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluVGFraW5nJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdWxpblRha2luZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5zdWxpblRha2luZy9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuIiwidmFyIExvZ2luU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuX3VzZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fdXNlclJpZ2h0cyA9IG51bGw7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gbnVsbDtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xyXG59O1xyXG5cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5pc0xvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKHRoaXMudXNlcm5hbWUgIT0gbnVsbCAmJiB0aGlzLnBhc3N3b3JkICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8vVE9ETyA6IFByb21pc2UgdnJhaW1lbnQgbsOpY2Vzc2FpcmUgP1xyXG5Mb2dpblNlcnZpY2UucHJvdG90eXBlLmRvTG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlck1lKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcInVzZXJuYW1lPVwiICsgdXNlcm5hbWUgK1xyXG4gICAgICAgIFwiJnBhc3N3b3JkPVwiICsgcGFzc3dvcmQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbG9naW4nLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gMjAyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgICAgIF90aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIHZhciBkZWZlciA9IF90aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIGRlZmVyMiA9IF90aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXIyLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcjIucHJvbWlzZTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5kb0xvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudXNlcm5hbWUgPSBudWxsO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XHJcbn07IiwidmFyIE1lYWxTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuTWVhbFNlcnZpY2UucHJvdG90eXBlLmFkZE1lYWwgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ21lYWwnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbk1lYWxTZXJ2aWNlLnByb3RvdHlwZS5nZXRNZWFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdtZWFsL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBNZWFzdXJlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbk1lYXN1cmVTZXJ2aWNlLnByb3RvdHlwZS5hZGRNZWFzdXJlID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgc2l6ZSwgZGVwdGgsIHF1YW50aXR5LCBuYXR1cmUsIG9kb3IpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJnNpemU9XCIgKyBzaXplICtcclxuICAgICAgICBcIiZkZXB0aD1cIiArIGRlcHRoICtcclxuICAgICAgICBcIiZxdWFudGl0eT1cIiArIHF1YW50aXR5ICtcclxuICAgICAgICBcIiZuYXR1cmU9XCIgKyBuYXR1cmUgK1xyXG4gICAgICAgIFwiJm9kb3I9XCIgKyBvZG9yO1xyXG5cclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdtZWFzdXJlJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5NZWFzdXJlU2VydmljZS5wcm90b3R5cGUuZ2V0TWVhc3VyZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbWVhc3VyZS9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgTW9iaWxpemF0aW9uU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbk1vYmlsaXphdGlvblNlcnZpY2UucHJvdG90eXBlLmFkZE1vYmlsaXphdGlvbiA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGhlbHAsIG1hdGVyaWFsLCBjYW5lKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZoZWxwPVwiICsgaGVscCArXHJcbiAgICAgICAgXCImbWF0ZXJpYWw9XCIgKyBtYXRlcmlhbCArXHJcbiAgICAgICAgXCImY2FuZT1cIiArIGNhbmUgO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ21vYmlsaXphdGlvbicsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuTW9iaWxpemF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0TW9iaWxpemF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdtb2JpbGl6YXRpb24vYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIE9ic2VydmF0aW9uU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcbk9ic2VydmF0aW9uU2VydmljZS5wcm90b3R5cGUuYWRkT2JzZXJ2YXRpb24gPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBjb21tZW50KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZjb21tZW50PVwiICsgY29tbWVudDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdvYnNlcnZhdGlvbicsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuT2JzZXJ2YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnb2JzZXJ2YXRpb24vYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIFBhcmFtZXRlclNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5QYXJhbWV0ZXJTZXJ2aWNlLnByb3RvdHlwZS5hZGRQYXJhbWV0ZXI9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHB1bHNlLCB0ZW5zaW9uLCB0ZW1wZXJhdHVyZSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImcHVsc2U9XCIgKyBwdWxzZSArXHJcbiAgICAgICAgXCImdGVuc2lvbj1cIiArIHRlbnNpb24gK1xyXG4gICAgICAgIFwiJnRlbXBlcmF0dXJlPVwiICsgdGVtcGVyYXR1cmUgO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3BhcmFtZXRlcicsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuUGFyYW1ldGVyU2VydmljZS5wcm90b3R5cGUuZ2V0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdwYXJhbWV0ZXIvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIFBhdGNoU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblBhdGNoU2VydmljZS5wcm90b3R5cGUuYWRkUGF0Y2ggPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgIC8vIFwiJmRhdGVTdGFydD1cIiArIGRhdGVTdGFydCArXHJcbiAgICAgICAvLyBcIiZkYXRlRW5kPVwiICsgZGF0ZUVuZCArXHJcbiAgICAgICAgXCImZG9jdG9yPVwiICsgZG9jdG9yICtcclxuICAgICAgICBcIiZuYW1lTWVkaWM9XCIgKyBuYW1lTWVkaWMgK1xyXG4gICAgICAgIFwiJmRvc2FnZT1cIiArIGRvc2FnZSArXHJcbiAgICAgICAgXCImdW5pdD1cIiArIHVuaXQgO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3BhdGNoJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5QYXRjaFNlcnZpY2UucHJvdG90eXBlLmdldFBhdGNocyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdwYXRjaC9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgU3dhZGRsZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbn07XHJcblxyXG5Td2FkZGxlU2VydmljZS5wcm90b3R5cGUuYWRkU3dhZGRsZSA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGU7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnc3dhZGRsZScsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuU3dhZGRsZVNlcnZpY2UucHJvdG90eXBlLmdldFN3YWRkbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3N3YWRkbGUvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07IiwidmFyIFRoZXJhcGV1dGljU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblRoZXJhcGV1dGljU2VydmljZS5wcm90b3R5cGUuYWRkVGhlcmFwZXV0aWMgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBwcmVwYXJhdGlvbiwgYWRNb3JuaW5nLCBhZE1pZGRheSwgYWRFdmVuaW5nLCBhZE5pZ2h0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xyXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcclxuICAgICAgICBcIiZwcmVwYXJhdGlvbj1cIiArIHByZXBhcmF0aW9uICtcclxuICAgICAgICBcIiZhZE1vcm5pbmc9XCIgKyBhZE1vcm5pbmcgK1xyXG4gICAgICAgIFwiJmFkTWlkZGF5PVwiICsgYWRNaWRkYXkgK1xyXG4gICAgICAgIFwiJmFkRXZlbmluZz1cIiArIGFkRXZlbmluZyArXHJcbiAgICAgICAgXCImYWROaWdodD1cIiArIGFkTmlnaHQ7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAndGhlcmFwZXV0aWMnLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcblRoZXJhcGV1dGljU2VydmljZS5wcm90b3R5cGUuZ2V0VGhlcmFwZXV0aWNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3RoZXJhcGV1dGljL2FsbCcsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRnRPbk5oYlE9PSdcclxuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIH0pO1xyXG59OyIsInZhciBUb2lsZXRIZWxwaW5nU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcclxuICAgIHRoaXMuJHEgPSAkcTtcclxufTtcclxuXHJcblRvaWxldEhlbHBpbmdTZXJ2aWNlLnByb3RvdHlwZS5hZGRUb2lsZXRIZWxwaW5nID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgbW92ZSkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcclxuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXHJcbiAgICAgICAgXCImbW92ZT1cIiArIG1vdmUgO1xyXG5cclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICd0b2lsZXRIZWxwaW5nJywgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Ub2lsZXRIZWxwaW5nU2VydmljZS5wcm90b3R5cGUuZ2V0VG9pbGV0SGVscGluZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAndG9pbGV0SGVscGluZy9hbGwnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBjMkZ0T25OaGJRPT0nXHJcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICB9KTtcclxufTsiLCJ2YXIgV291bmRTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59O1xyXG5cclxuV291bmRTZXJ2aWNlLnByb3RvdHlwZS5hZGRXb3VuZCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGxvY2FsaXNhdGlvbiwgdHlwZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXHJcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xyXG4gICAgICAgIFwiJmxvY2FsaXNhdGlvbj1cIiArIGxvY2FsaXNhdGlvbiArXHJcbiAgICAgICAgXCImdHlwZT1cIiArIHR5cGUgK1xyXG4gICAgICAgIFwiJmRlc2NyaXB0aW9uPVwiICsgZGVzY3JpcHRpb24gO1xyXG5cclxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICd3b3VuZCcsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuV291bmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRXb3VuZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnd291bmQvYWxsJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGdE9uTmhiUT09J1xyXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgfSk7XHJcbn07Il19
