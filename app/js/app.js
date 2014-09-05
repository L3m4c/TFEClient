require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"RouteService":[function(require,module,exports){
module.exports=require('mxJoi8');
},{}],"mxJoi8":[function(require,module,exports){
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
        }).state('boarder', {
            url: "/boarder",
            parent: "main-content",
            templateUrl: 'views/boarder.html',
            controller: 'BoarderCtrl as ctrl'
        }).state('addboarder', {
            url: "/boarder/add",
            parent: "main-content",
            templateUrl: 'views/add-boarder.html',
            controller: 'AddBoarderCtrl as ctrl'
        }).state('updateboarder', {
            url: "/boarder/update/:id",
            parent: "main-content",
            templateUrl: '../../views/add-boarder.html',
            controller: 'UpdateBoarderCtrl as ctrl'
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
        }).state('updateinsulinDosage', {
            url: "/insulinDosage/update/:id",
            parent: "main-content",
            templateUrl: '../../views/add-insulinDosage.html',
            controller: 'UpdateInsulinDosageCtrl as ctrl'
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
        }).state('updateobservation', {
            url: "/observation/update/:id",
            parent: "main-content",
            templateUrl: '../../views/add-observation.html',
            controller: 'UpdateObservationCtrl as ctrl'
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
        }).state('updatepatch', {
            url: "/patch/update/:id",
            parent: "main-content",
            templateUrl: '../../views/add-patch.html',
            controller: 'UpdatePatchCtrl as ctrl'
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
        }).state('updateinsulinTaking', {
            url: "/insulinTaking/update/:id",
            parent: "main-content",
            templateUrl: '../../views/add-insulinTaking.html',
            controller: 'UpdateInsulinTakingCtrl as ctrl'
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
        }).state('updatetherapeutic', {
            url: "/therapeutic/update/:id",
            parent: "main-content",
            templateUrl: '../../views/add-therapeutic.html',
            controller: 'UpdateTherapeuticCtrl as ctrl'
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
        }).state('updateinjection', {
            url: "/injection/update/:id",
            parent: "main-content",
            templateUrl: '../../views/add-injection.html',
            controller: 'UpdateInjectionCtrl as ctrl'
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
        }).state('surroundingSkin', {
            url: "/surroundingSkin",
            parent: "main-content",
            templateUrl: '../../views/surroundingSkin.html',
            controller: 'SurroundingSkinCtrl as ctrl'
        }).state('addsurroundingSkin', {
            url: "/surroundingSkin/add",
            parent: "main-content",
            templateUrl: '../../views/add-surroundingSkin.html',
            controller: 'AddSurroundingSkinCtrl as ctrl'
        }).state('treatment', {
            url: "/treatment",
            parent: "main-content",
            templateUrl: '../../views/treatment.html',
            controller: 'TreatmentCtrl as ctrl'
        }).state('addtreatment', {
            url: "/treatment/add",
            parent: "main-content",
            templateUrl: '../../views/add-treatment.html',
            controller: 'AddTreatmentCtrl as ctrl'
        }).state('bandage', {
            url: "/bandage",
            parent: "main-content",
            templateUrl: '../../views/bandage.html',
            controller: 'BandageCtrl as ctrl'
        }).state('addbandage', {
            url: "/bandage/add",
            parent: "main-content",
            templateUrl: '../../views/add-bandage.html',
            controller: 'AddBandageCtrl as ctrl'
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
moduleController.controller("BoarderCtrl", require('./controllers/Boarder/BoarderCtrl'));
moduleController.controller("AddBoarderCtrl", require('./controllers/Boarder/AddBoarderCtrl'));
moduleController.controller("UpdateBoarderCtrl", require('./controllers/Boarder/UpdateBoarderCtrl'));
moduleController.controller("MenuCtrl", require('./controllers/MenuCtrl'));
moduleController.controller("MealCtrl", require('./controllers/Meal/MealCtrl'));
moduleController.controller("AddMealCtrl", require('./controllers/Meal/AddMealCtrl'));
moduleController.controller("SwaddleCtrl", require('./controllers/SwaddleCtrl'));
moduleController.controller("AddSwaddleCtrl", require('./controllers/AddSwaddleCtrl'));
moduleController.controller("InsulinDosageCtrl", require('./controllers/InsulinDosage/InsulinDosageCtrl'));
moduleController.controller("AddInsulinDosageCtrl", require('./controllers/InsulinDosage/AddInsulinDosageCtrl'));
moduleController.controller("UpdateInsulinDosageCtrl", require('./controllers/InsulinDosage/UpdateInsulinDosageCtrl'));
moduleController.controller("ObservationCtrl", require('./controllers/Observation/ObservationCtrl'));
moduleController.controller("AddObservationCtrl", require('./controllers/Observation/AddObservationCtrl'));
moduleController.controller("UpdateObservationCtrl", require('./controllers/Observation/UpdateObservationCtrl'));
moduleController.controller("PatchCtrl", require('./controllers/Patch/PatchCtrl'));
moduleController.controller("AddPatchCtrl", require('./controllers/Patch/AddPatchCtrl'));
moduleController.controller("UpdatePatchCtrl", require('./controllers/Patch/UpdatePatchCtrl'));
moduleController.controller("AerosolCtrl", require('./controllers/Aerosol/AerosolCtrl'));
moduleController.controller("AddAerosolCtrl", require('./controllers/Aerosol/AddAerosolCtrl'));
moduleController.controller("UpdateAerosolCtrl", require('./controllers/Aerosol/UpdateAerosolCtrl'));
moduleController.controller("WoundCtrl", require('./controllers/WoundCtrl'));
moduleController.controller("AddWoundCtrl", require('./controllers/AddWoundCtrl'));
moduleController.controller("DrugTreatmentCtrl", require('./controllers/DrugTreatement/DrugTreatmentCtrl'));
moduleController.controller("AddDrugTreatmentCtrl", require('./controllers/DrugTreatement/AddDrugTreatmentCtrl'));
moduleController.controller("InsulinTakingCtrl", require('./controllers/InsulinTaking/InsulinTakingCtrl'));
moduleController.controller("AddInsulinTakingCtrl", require('./controllers/InsulinTaking/AddInsulinTakingCtrl'));
moduleController.controller("UpdateInsulinTakingCtrl", require('./controllers/InsulinTaking/UpdateInsulinTakingCtrl'));
moduleController.controller("TherapeuticCtrl", require('./controllers/Therapeutic/TherapeuticCtrl'));
moduleController.controller("AddTherapeuticCtrl", require('./controllers/Therapeutic/AddTherapeuticCtrl'));
moduleController.controller("UpdateTherapeuticCtrl", require('./controllers/Therapeutic/UpdateTherapeuticCtrl'));
moduleController.controller("InjectionCtrl", require('./controllers/Injection/InjectionCtrl'));
moduleController.controller("AddInjectionCtrl", require('./controllers/Injection/AddInjectionCtrl'));
moduleController.controller("UpdateInjectionCtrl", require('./controllers/Injection/UpdateInjectionCtrl'));
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
moduleController.controller("SurroundingSkinCtrl", require('./controllers/SurroundingSkin/SurroundingSkinCtrl'));
moduleController.controller("AddSurroundingSkinCtrl", require('./controllers/SurroundingSkin/AddSurroundingSkinCtrl'));
moduleController.controller("TreatmentCtrl", require('./controllers/Treatment/TreatmentCtrl'));
moduleController.controller("AddTreatmentCtrl", require('./controllers/Treatment/AddTreatmentCtrl'));
moduleController.controller("BandageCtrl", require('./controllers/Bandage/BandageCtrl'));
moduleController.controller("AddBandageCtrl", require('./controllers/Bandage/AddBandageCtrl'));

},{"./controllers/AddIncontinenceCtrl":7,"./controllers/AddMobilizationCtrl":9,"./controllers/AddParameterCtrl":10,"./controllers/AddSwaddleCtrl":11,"./controllers/AddToiletHelpingCtrl":12,"./controllers/AddWoundCtrl":13,"./controllers/Aerosol/AddAerosolCtrl":14,"./controllers/Aerosol/AerosolCtrl":15,"./controllers/Aerosol/UpdateAerosolCtrl":16,"./controllers/Bandage/AddBandageCtrl":18,"./controllers/Bandage/BandageCtrl":19,"./controllers/Boarder/AddBoarderCtrl":20,"./controllers/Boarder/BoarderCtrl":21,"./controllers/Boarder/UpdateBoarderCtrl":22,"./controllers/Clothing/AddClothingCtrl":23,"./controllers/Clothing/ClothingCtrl":24,"./controllers/Disorder/AddDisorderCtrl":25,"./controllers/Disorder/DisorderCtrl":26,"./controllers/DrugTreatement/AddDrugTreatmentCtrl":27,"./controllers/DrugTreatement/DrugTreatmentCtrl":28,"./controllers/Eat/AddEatCtrl":29,"./controllers/Eat/EatCtrl":30,"./controllers/HeaderCtrl":32,"./controllers/Hygiene/AddHygieneCtrl":33,"./controllers/Hygiene/HygieneCtrl":34,"./controllers/IncontinenceCtrl":35,"./controllers/Injection/AddInjectionCtrl":36,"./controllers/Injection/InjectionCtrl":37,"./controllers/Injection/UpdateInjectionCtrl":38,"./controllers/InsulinDosage/AddInsulinDosageCtrl":39,"./controllers/InsulinDosage/InsulinDosageCtrl":40,"./controllers/InsulinDosage/UpdateInsulinDosageCtrl":41,"./controllers/InsulinTaking/AddInsulinTakingCtrl":42,"./controllers/InsulinTaking/InsulinTakingCtrl":43,"./controllers/InsulinTaking/UpdateInsulinTakingCtrl":44,"./controllers/LoginCtrl":45,"./controllers/Meal/AddMealCtrl":46,"./controllers/Meal/MealCtrl":47,"./controllers/MenuCtrl":49,"./controllers/MobilizationCtrl":50,"./controllers/Observation/AddObservationCtrl":51,"./controllers/Observation/ObservationCtrl":52,"./controllers/Observation/UpdateObservationCtrl":53,"./controllers/ParameterCtrl":54,"./controllers/Patch/AddPatchCtrl":55,"./controllers/Patch/PatchCtrl":56,"./controllers/Patch/UpdatePatchCtrl":57,"./controllers/SurroundingSkin/AddSurroundingSkinCtrl":58,"./controllers/SurroundingSkin/SurroundingSkinCtrl":59,"./controllers/SwaddleCtrl":60,"./controllers/Therapeutic/AddTherapeuticCtrl":61,"./controllers/Therapeutic/TherapeuticCtrl":62,"./controllers/Therapeutic/UpdateTherapeuticCtrl":63,"./controllers/ToiletHelpingCtrl":64,"./controllers/Treatment/AddTreatmentCtrl":65,"./controllers/Treatment/TreatmentCtrl":66,"./controllers/WoundCtrl":67}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
var AddSwaddleCtrl = module.exports = function ($scope, $state, SwaddleService) {
    this.$scope = $scope;
    this.SwaddleService = SwaddleService;
    this.$state = $state;
    $scope.date = new Date();
    $scope.selectedSwaddles = [];

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
    var _this = this;
    if (this.$scope.selectedSwaddles.length !== 0) {
        this.SwaddleService.addSwaddle(this.$scope.selectedSwaddles[0].id, this.$scope.date.getTime()).then(function () {
            _this.$state.go('swaddle');
        });
    }
};
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
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
    $scope.dosage = 0;

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
},{}],15:[function(require,module,exports){
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
        multiSelect: true,
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
},{}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
var AddBandageCtrl = module.exports = function ($scope, BandageService) {
    this.$scope = $scope;
    this.BandageService = BandageService;
    $scope.date = new Date();

    $scope.product = "";
    $scope.bandageCovering = "";
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

AddBandageCtrl.prototype.ajouterBandage = function() {
    this.BandageService.addBandage(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.product,this.$scope.bandageCovering,this.$scope.comment).then(function () {});


};
},{}],19:[function(require,module,exports){
var BandageCtrl = module.exports = function ($scope, BandageService) {
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

    BandageService.getBandages().then(function (data) {
        $scope.data = data.map(function(bandage) {
            bandage.date = new Date(bandage.date);
            return bandage;
        });
    });
};
},{}],20:[function(require,module,exports){
var AddBoarderCtrl = module.exports = function ($scope, $state, BoarderService) {
    this.$state = $state;
    this.$scope = $scope;
    this.BoarderService = BoarderService;

    $scope.dateBirth = "";
    $scope.name = "";
    $scope.surname = "";
    $scope.room = 0;
    $scope.age = 0;

    $scope.mutuel = "";
    $scope.personResponsible = "";
    $scope.phone = "";

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

AddBoarderCtrl.prototype.ajouterBoarder = function() {
    _this = this;
    this.BoarderService.addBoarder(this.$scope.name,this.$scope.surname,this.$scope.room,this.$scope.age,this.$scope.dateBirth,this.$scope.mutuel,this.$scope.personResponsible,this.$scope.phone).then(function () {});
    _this.$state.go('boarder');

};
},{}],21:[function(require,module,exports){
var BoarderCtrl = module.exports = function ($scope, $state, BoarderService, $rootScope) {
    $scope = $scope;
    $scope.selectedBoarders = [];
    $scope.filterOptions = {
        filterText: $rootScope.search
    };

    $rootScope.$watch('search', function(newValue) {
        $scope.filterOptions.filterText = newValue;
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
            },
            {
                field : 'age',
                displayName : 'Age',
                visible: !!$scope.showDetailedInformations
            },
            {
                field : 'dateBirth',
                displayName : 'Date de naissance',
                visible: !!$scope.showDetailedInformations
            },
            {
                field : 'mutuel',
                displayName : 'Mutuel',
                visible: !!$scope.showDetailedInformations
            },
            {
                field : 'personResponsible',
                displayName : 'Personne responsable',
                visible: !!$scope.showDetailedInformations
            },
            {
                field : 'phone',
                displayName : 'Téléphone',
                visible: !!$scope.showDetailedInformations
            }],
        showFooter: false,
        totalServerItems: 'totalServerItems',
        enableCellSelection: false,
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedBoarders = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: false,
        filterOptions: $scope.filterOptions
    };

    BoarderService.getBoarders().then(function (data) {
        $scope.data = data.map(function(boarder) {

            return boarder;
        });
    });

    $scope.removeSelectedBoarders = function () {
        BoarderService.removeBoarders($scope.selectedBoarders).then(function () {
            $state.go('reload', {reload:'boarder'});
        });
    }
};

},{}],22:[function(require,module,exports){
var UpdateBoarderCtrl = module.exports = function ($scope, BoarderService, $stateParams, $state) {
    this.$scope = $scope;
    this.BoarderService = BoarderService;
    this.$stateParams = $stateParams;
    this.$state = $state;

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

    BoarderService.getBoarder($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.name = data.name;
        $scope.surname = data.surname;
        $scope.room = data.room;
        $scope.age = data.age;
        $scope.dateBirth = data.dateBirth;
        $scope.mutuel = data.mutuel;
        $scope.personResponsible = data.personResponsible;
        $scope.phone = data.phone;

    });
};

UpdateBoarderCtrl.prototype.updateBoarder = function() {
    _this = this;
    this.BoarderService.updateBoarder(this.$stateParams.id, this.$scope.name,this.$scope.surname,this.$scope.room,this.$scope.age,this.$scope.dateBirth,this.$scope.mutuel,this.$scope.personResponsible,this.$scope.phone).then(function () {
        _this.$state.go('boarder');
    });
};
},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{}],30:[function(require,module,exports){
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
},{}],31:[function(require,module,exports){
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
},{}],32:[function(require,module,exports){
var HeaderCtrl = module.exports = function (LoginService, $state, $scope, $rootScope) {
    this.LoginService = LoginService;
    this.$state = $state;
    $scope.$rootScope = $rootScope;
};

HeaderCtrl.prototype.disconnect  = function () {
    this.LoginService.doLogout();
    this.$state.go("login");
};
},{}],33:[function(require,module,exports){
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
},{}],34:[function(require,module,exports){
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
},{}],35:[function(require,module,exports){
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
},{}],36:[function(require,module,exports){
var AddInjectionCtrl = module.exports = function ($scope, $state, InjectionService) {
    this.$scope = $scope;
    this.$state = $state;
    this.InjectionService = InjectionService;
    $scope.date = new Date();
    //$scope.dateStart = new Date();
    //$scope.dateEnd = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";
    $scope.establishment= "";
    $scope.dosage= 0;

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
    _this = this;
    this.InjectionService.addInjection(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.establishment,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit).then(function () {});
    _this.$state.go('injection');
    // this.$scope.dateStart.getTime(),
    // this.$scope.dateEnd.getTime()

};
},{}],37:[function(require,module,exports){
var InjectionCtrl = module.exports = function ($scope, $state, InjectionService) {
    $scope = $scope;
    $scope.selectedInjections = [];

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
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedInjections = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    InjectionService.getInjections().then(function (data) {
        $scope.data = data.map(function(injection) {
            injection.date = new Date(injection.date);
            return injection;
        });
    });
    $scope.removeSelectedInjections = function () {
        InjectionService.removeInjections($scope.selectedInjections).then(function () {
            $state.go('reload', {reload:'injection'});
        });
    }
};
},{}],38:[function(require,module,exports){
var UpdateInjectionCtrl = module.exports = function ($scope, InjectionService, $stateParams, $state) {
    this.$scope = $scope;
    this.InjectionService = InjectionService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();
    $scope.doctor = "";
    $scope.establishment = "";
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

    InjectionService.getInjection($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.dateStart = data.dateStart;
        $scope.dateEnd = data.dateEnd;
        $scope.doctor = data.doctor;
        $scope.establishment = data.establishment;
        $scope.nameMedic = data.nameMedic;
        $scope.dosage = data.dosage;
        $scope.unit = data.unit;
    });
};

UpdateInjectionCtrl.prototype.updateInjection = function() {
    _this = this;
    this.InjectionService.updateInjection(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.doctor, this.$scope.establishment, this.$scope.nameMedic, this.$scope.dosage, this.$scope.unit).then(function () {
        _this.$state.go('injection');
    });
};
},{}],39:[function(require,module,exports){
var InsulinDosageCtrl = module.exports = function ($scope, $state, InsulinDosageService) {
    this.$scope = $scope;
    this.$state = $state;
    this.InsulinDosageService = InsulinDosageService;
    $scope.date = new Date();
    $scope.dosage = 0;

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
    _this = this;
    this.InsulinDosageService.addInsulinDosage(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(), this.$scope.dosage).then(function () {});
    _this.$state.go('insulinDosage');
};

//InsulinDosageCtrl.prototype.getInsulinDosages = function() {
//    this.InsulinDosageService.getInsulinDosages().then(function () {});
//};

},{}],40:[function(require,module,exports){
var InsulinDosageCtrl = module.exports = function ($scope, $state, InsulinDosageService) {
    $scope = $scope;
    $scope.selectedInsulinDosages = [];

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
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedInsulinDosages = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    InsulinDosageService.getInsulinDosages().then(function (data) {
        $scope.data = data.map(function(insulinDosage) {
            insulinDosage.date = new Date(insulinDosage.date);
            return insulinDosage;
        });
    });
    $scope.removeSelectedInsulinDosages = function () {
        InsulinDosageService.removeInsulinDosages($scope.selectedInsulinDosages).then(function () {
            $state.go('reload', {reload:'insulinDosage'});
        });
    }

};

},{}],41:[function(require,module,exports){
var UpdateInsulinDosageCtrl = module.exports = function ($scope, InsulinDosageService, $stateParams, $state) {
    this.$scope = $scope;
    this.InsulinDosageService = InsulinDosageService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();
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

    InsulinDosageService.getInsulinDosage($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.dosage = data.dosage;

    });
};

UpdateInsulinDosageCtrl.prototype.updateInsulinDosage = function() {
    _this = this;
    this.InsulinDosageService.updateInsulinDosage(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.dosage).then(function () {
        _this.$state.go('insulinDosage');
    });
};
},{}],42:[function(require,module,exports){
var InsulinTakingCtrl = module.exports = function ($scope, $state, InsulinTakingService) {
    this.$scope = $scope;
    this.$state = $state;
    this.InsulinTakingService = InsulinTakingService;
    $scope.date = new Date();
    $scope.glycemia = 0;

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
    _this = this;
    this.InsulinTakingService.addInsulinTaking(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(), this.$scope.glycemia).then(function () {});
    _this.$state.go('insulinTaking');
};

//InsulinDosageCtrl.prototype.getInsulinDosages = function() {
//    this.InsulinDosageService.getInsulinDosages().then(function () {});
//};

},{}],43:[function(require,module,exports){
var InsulinTakingCtrl = module.exports = function ($scope, $state, InsulinTakingService) {
    $scope = $scope;
    $scope.selectedInsulinTakings = [];

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
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedInsulinTakings = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    InsulinTakingService.getInsulinTakings().then(function (data) {
        $scope.data = data.map(function(insulinTaking) {
            insulinTaking.date = new Date(insulinTaking.date);
            return insulinTaking;
        });
    });

    $scope.removeSelectedInsulinTakings = function () {
        InsulinTakingService.removeInsulinTakings($scope.selectedInsulinTakings).then(function () {
            $state.go('reload', {reload:'insulinTaking'});
        });
    }
};
},{}],44:[function(require,module,exports){
var UpdateInsulinTakingCtrl = module.exports = function ($scope, InsulinTakingService, $stateParams, $state) {
    this.$scope = $scope;
    this.InsulinTakingService = InsulinTakingService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();

    $scope.glycemia = 0;
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

    InsulinTakingService.getInsulinTaking($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.glycemia = data.glycemia;
    });
};

UpdateInsulinTakingCtrl.prototype.updateInsulinTaking = function() {
    _this = this;
    this.InsulinTakingService.updateInsulinTaking(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.glycemia).then(function () {
        _this.$state.go('insulinTaking');
    });
};
},{}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
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
},{}],47:[function(require,module,exports){
var MealCtrl = module.exports = function ($scope, $state, MealService, $rootScope) {
    $scope = $scope;
    $scope.selectedMeals = [];
    $scope.filterOptions = {
        filterText: $rootScope.search
    };

    $rootScope.$watch('search', function(newValue) {
        $scope.filterOptions.filterText = newValue;
    });
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
        showGroupPanel: true,
        filterOptions: $scope.filterOptions
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
},{}],48:[function(require,module,exports){
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
},{}],49:[function(require,module,exports){
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
},{}],50:[function(require,module,exports){
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
},{}],51:[function(require,module,exports){
var AddObservationCtrl = module.exports = function ($scope, $state, ObservationService) {
    this.$scope = $scope;
    this.$state = $state;
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
    _this = this;
    this.ObservationService.addObservation(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(), this.$scope.comment).then(function () {});
    _this.$state.go('observation');
};
},{}],52:[function(require,module,exports){
var ObservationCtrl = module.exports = function ($scope, $state, ObservationService) {
    $scope = $scope;
    $scope.selectedObservations = [];

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
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedObservations = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    ObservationService.getObservations().then(function (data) {
        $scope.data = data.map(function(observation) {
            observation.date = new Date(observation.date);
            return observation;
        });
    });
    $scope.removeSelectedObservations = function () {
        ObservationService.removeObservations($scope.selectedObservations).then(function () {
            $state.go('reload', {reload:'observation'});
        });
    }
};
},{}],53:[function(require,module,exports){
var UpdateObservationCtrl = module.exports = function ($scope, ObservationService, $stateParams, $state) {
    this.$scope = $scope;
    this.ObservationService = ObservationService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();

    $scope.comment = "";
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

    ObservationService.getObservation($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.comment = data.comment;
    });
};

UpdateObservationCtrl.prototype.updateObservation = function() {
    _this = this;
    this.ObservationService.updateObservation(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.comment).then(function () {
        _this.$state.go('observation');
    });
};
},{}],54:[function(require,module,exports){
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
},{}],55:[function(require,module,exports){
var AddPatchCtrl = module.exports = function ($scope, $state, PatchService) {
    this.$scope = $scope;
    this.$state = $state;
    this.PatchService = PatchService;
    $scope.date = new Date();
    //$scope.dateStart = new Date();
    //$scope.dateEnd = new Date();
    $scope.doctor = "";
    $scope.nameMedic = "";
    $scope.unit = "";
    $scope.dosage = 0;

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
    _this = this;
    this.PatchService.addPatch(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.doctor,this.$scope.nameMedic,this.$scope.dosage,this.$scope.unit).then(function () {});
    _this.$state.go('patch');
       // this.$scope.dateStart.getTime(),
       // this.$scope.dateEnd.getTime()

};
},{}],56:[function(require,module,exports){
var PatchCtrl = module.exports = function ($scope, $state, PatchService) {
    $scope = $scope;
    $scope.selectedPatchs = [];

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
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedPatchs = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    PatchService.getPatchs().then(function (data) {
        $scope.data = data.map(function(patch) {
            patch.date = new Date(patch.date);
            return patch;
        });
    });

    $scope.removeSelectedPatchs = function () {
        PatchService.removePatchs($scope.selectedPatchs).then(function () {
            $state.go('reload', {reload:'patch'});
        });
    }
};
},{}],57:[function(require,module,exports){
var UpdatePatchCtrl = module.exports = function ($scope, PatchService, $stateParams, $state) {
    this.$scope = $scope;
    this.PatchService = PatchService;
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

    PatchService.getPatch($stateParams.id).then(function (data) {
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

UpdatePatchCtrl.prototype.updatePatch = function() {
    _this = this;
    this.PatchService.updatePatch(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.doctor, this.$scope.nameMedic, this.$scope.dosage, this.$scope.unit).then(function () {
        _this.$state.go('patch');
    });
};
},{}],58:[function(require,module,exports){
var AddSurroundingSkinCtrl = module.exports = function ($scope, SurroundingSkinService) {
    this.$scope = $scope;
    this.SurroundingSkinService = SurroundingSkinService;
    $scope.date = new Date();

    $scope.healthy = false;
    $scope.fragile = false;
    $scope.dry = false;
    $scope.hyperpigmented = false;
    $scope.hyperkeration = false;
    $scope.inflammatory = false;
    $scope.macerated = false;
    $scope.ulcerated = false;

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

AddSurroundingSkinCtrl.prototype.ajouterSurroundingSkin = function() {
    this.SurroundingSkinService.addSurroundingSkin(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.healthy,this.$scope.fragile,this.$scope.dry,
        this.$scope.hyperpigmented,this.$scope.hyperkeration,this.$scope.inflammatory,this.$scope.macerated,this.$scope.ulcerated).then(function () {});


};
},{}],59:[function(require,module,exports){
var SurroundingSkinCtrl = module.exports = function ($scope, SurroundingSkinService) {
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

    SurroundingSkinService.getSurroundingSkins().then(function (data) {
        $scope.data = data.map(function(surroundingSkin) {
            surroundingSkin.date = new Date(surroundingSkin.date);
            return surroundingSkin;
        });
    });
};
},{}],60:[function(require,module,exports){
var SwaddleCtrl = module.exports = function ($scope, $state, SwaddleService) {
    $scope = $scope;
    $scope.selectedSwaddles = [];

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
            $scope.selectedSwaddles = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    SwaddleService.getSwaddles().then(function (data) {
        $scope.data = data.map(function(swaddle) {
            swaddle.date = new Date(swaddle.date);
            return swaddle;
        });
    });

    $scope.removeSelectedSwaddles = function () {
    SwaddleService.removeSwaddles($scope.selectedSwaddles).then(function () {
        $state.go('reload', {reload:'swaddle'});
    });
}
};
},{}],61:[function(require,module,exports){
var AddTherapeuticCtrl = module.exports = function ($scope, $state, TherapeuticService) {
    this.$scope = $scope;
    this.$state = $state;
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
    _this = this;
    this.TherapeuticService.addTherapeutic(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.preparation,
    this.$scope.adMorning,this.$scope.adMidday,this.$scope.adEvening,this.$scope.adNight).then(function () {});
    _this.$state.go('therapeutic');
};
},{}],62:[function(require,module,exports){
var TherapeuticCtrl = module.exports = function ($scope, $state, TherapeuticService) {
    $scope = $scope;
    $scope.selectedTherapeutics = [];

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
        multiSelect: true,
        afterSelectionChange: function(row, event) {
            $scope.selectedTherapeutics = angular.copy(row.config.selectedItems);
        },
        showGroupPanel: true
    };

    TherapeuticService.getTherapeutics().then(function (data) {
        $scope.data = data.map(function(therapeutic) {
            therapeutic.date = new Date(therapeutic.date);
            return therapeutic;
        });
    });
    $scope.removeSelectedTherapeutics = function () {
        TherapeuticService.removeTherapeutics($scope.selectedTherapeutics).then(function () {
            $state.go('reload', {reload:'therapeutic'});
        });
    }
};
},{}],63:[function(require,module,exports){
var UpdateTherapeuticCtrl = module.exports = function ($scope, TherapeuticService, $stateParams, $state) {
    this.$scope = $scope;
    this.TherapeuticService = TherapeuticService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    $scope.date = new Date();


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

    TherapeuticService.getTherapeutic($stateParams.id).then(function (data) {
        $scope.selectedBoarder = data.boarder;
        $scope.date = new Date(data.date);
        $scope.preparation = data.preparation;
        $scope.adMorning = data.adMorning;
        $scope.adMidday = data.adMidday;
        $scope.adEvening = data.adEvening;
        $scope.adNight = data.adNight;
    });
};

UpdateTherapeuticCtrl.prototype.updateTherapeutic = function() {
    _this = this;
    this.TherapeuticService.updateTherapeutic(this.$stateParams.id, this.$scope.selectedBoarder.id, this.$scope.date, this.$scope.preparation,
        this.$scope.adMorning,this.$scope.adMidday,this.$scope.adEvening,this.$scope.adNight).then(function () {
        _this.$state.go('therapeutic');
    });
};
},{}],64:[function(require,module,exports){
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
},{}],65:[function(require,module,exports){
var AddTreatmentCtrl = module.exports = function ($scope, TreatmentService) {
    this.$scope = $scope;
    this.TreatmentService = TreatmentService;
    $scope.date = new Date();

    $scope.pst = false;
    $scope.irrigation = false;
    $scope.therapeuticBath = false;
    $scope.drillWidth = 0;
    $scope.drillLength = 0;
    $scope.debridement = false;
    $scope.treatmentOther = "";

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

AddTreatmentCtrl.prototype.ajouterTreatment = function() {
    this.TreatmentService.addTreatment(this.$scope.selectedBoarders[0].id, this.$scope.date.getTime(),this.$scope.pst,this.$scope.irrigation,
        this.$scope.therapeuticBath,
        this.$scope.drillWidth,
        this.$scope.drillLength,
        this.$scope.debridement,
        this.$scope.treatmentOther).then(function () {});


};
},{}],66:[function(require,module,exports){
var TreatmentCtrl = module.exports = function ($scope, TreatmentService) {
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

    TreatmentService.getTreatments().then(function (data) {
        $scope.data = data.map(function(treatment) {
            treatment.date = new Date(treatment.date);
            return treatment;
        });
    });
};
},{}],67:[function(require,module,exports){
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
},{}],68:[function(require,module,exports){
'user strict';

var moduleDirective = angular.module('app.directives', ['app.services']);

moduleDirective.directive("boarderlist", require("./directives/BoarderListDirective"));

},{"./directives/BoarderListDirective":69}],69:[function(require,module,exports){
var BoarderListDirective = module.exports =  function(BoarderService) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selectedBoarders: "=",
            showDetailedInformations: "@"
        },
        controller: "BoarderCtrl",
        templateUrl: 'views/directives/boarderlist.html',
        link: function (scope) {
        }
    };
};
},{}],70:[function(require,module,exports){
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
moduleService.service("SurroundingSkinService", require('./services/SurroundingSkinService'));
moduleService.service("TreatmentService", require('./services/TreatmentService'));
moduleService.service("BandageService", require('./services/BandageService'));


},{"./services/AerosolService":71,"./services/AspectService":72,"./services/BandageService":73,"./services/BoarderService":74,"./services/ClothingService":75,"./services/DisorderService":76,"./services/DrugTreatmentService":77,"./services/EatService":78,"./services/EmbankmentService":79,"./services/HygieneService":80,"./services/IncontinenceService":81,"./services/InjectionService":82,"./services/InsulinDosageService":83,"./services/InsulinTakingService":84,"./services/LoginService":85,"./services/MealService":86,"./services/MeasureService":87,"./services/MobilizationService":88,"./services/ObservationService":89,"./services/ParameterService":90,"./services/PatchService":91,"./services/SurroundingSkinService":92,"./services/SwaddleService":93,"./services/TherapeuticService":94,"./services/ToiletHelpingService":95,"./services/TreatmentService":96,"./services/WoundService":97,"RouteService":"mxJoi8"}],71:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

AerosolService.prototype.getAerosols = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'aerosol/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};

AerosolService.prototype.getAerosol = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'aerosol?id=' + id, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],72:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

AspectService.prototype.getAspects = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'aspect/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],73:[function(require,module,exports){
var BandageService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

BandageService.prototype.addBandage = function (idBoarder, date, product, bandageCovering, comment) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&product=" + product +
        "&bandageCovering=" + bandageCovering +
        "&comment=" + comment;

    return this.$http.post(this.SERVER_ROOT + 'bandage', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

BandageService.prototype.getBandages = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'bandage/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],74:[function(require,module,exports){
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
},{}],75:[function(require,module,exports){
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
},{}],76:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

DisorderService.prototype.getDisorders = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'disorder/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],77:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

DrugTreatmentService.prototype.getDrugTreatments = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'drugTreatment/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],78:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

EatService.prototype.getEats = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'eat/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],79:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

EmbankmentService.prototype.getEmbankments = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'embankment/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],80:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

HygieneService.prototype.getHygienes = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'hygiene/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],81:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

IncontinenceService.prototype.getIncontinences = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'incontinence/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],82:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InjectionService.prototype.getInjections = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'injection/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
InjectionService.prototype.getInjection = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'injection?id=' + id, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};


InjectionService.prototype.updateInjection = function (id, idBoarder, date, doctor, establishment, nameMedic, dosage, unit) {
    var _this = this;
    var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
    data += '&doctor=' + doctor + "&establishment=" + establishment + '&nameMedic=' + nameMedic + '&dosage=' + dosage + '&unit=' + unit;
    return this.$http.put(this.SERVER_ROOT + 'injection?' + data, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
InjectionService.prototype.removeInjection = function (idInjection) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'injection?id=' + idInjection, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InjectionService.prototype.removeInjections = function (injections) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    injections.forEach(function (injection) {
        var defer = _this.$q.defer();
        _this.removeInjection(injection.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
};
},{}],83:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinDosageService.prototype.getInsulinDosages = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinDosage/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
    InsulinDosageService.prototype.getInsulinDosage = function (id) {
        var _this = this;
        return this.$http.get(this.SERVER_ROOT + 'insulinDosage?id=' + id, {
            headers: {
                'Authorization': 'Basic ZGFtOmRhbQ=='
            }}).then(function (response) {
            return response.data;
        }).catch(function (response) {

        });
    };


InsulinDosageService.prototype.updateInsulinDosage = function (id, idBoarder, date, dosage) {
        var _this = this;
        var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
        data += '&dosage=' + dosage;
        return this.$http.put(this.SERVER_ROOT + 'insulinDosage?' + data, {
            headers: {
                'Authorization': 'Basic ZGFtOmRhbQ=='
            }}).then(function (response) {
            return response.data;
        }).catch(function (response) {

        });
    };

InsulinDosageService.prototype.removeInsulinDosage = function (idInsulinDosage) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'insulinDosage?id=' + idInsulinDosage, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinDosageService.prototype.removeInsulinDosages = function (insulinDosages) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    insulinDosages.forEach(function (insulinDosage) {
        var defer = _this.$q.defer();
        _this.removeInsulinDosage(insulinDosage.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
}
},{}],84:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinTakingService.prototype.getInsulinTakings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinTaking/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
InsulinTakingService.prototype.getInsulinTaking = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'insulinTaking?id=' + id, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};


InsulinTakingService.prototype.updateInsulinTaking = function (id, idBoarder, date, glycemia) {
    var _this = this;
    var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
    data += '&glycemia=' + glycemia;
    return this.$http.put(this.SERVER_ROOT + 'insulinTaking?' + data, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
InsulinTakingService.prototype.removeInsulinTaking = function (idInsulinTaking) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'insulinTaking?id=' + idInsulinTaking, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

InsulinTakingService.prototype.removeInsulinTakings = function (insulinTakings) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    insulinTakings.forEach(function (insulinTaking) {
        var defer = _this.$q.defer();
        _this.removeInsulinTaking(insulinTaking.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
};
},{}],85:[function(require,module,exports){
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
},{}],86:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MealService.prototype.getMeals = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'meal/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
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
};

},{}],87:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MeasureService.prototype.getMeasures = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'measure/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],88:[function(require,module,exports){
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
            'Authorization': 'BBasic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

MobilizationService.prototype.getMobilizations = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'mobilization/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],89:[function(require,module,exports){
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
},{}],90:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ParameterService.prototype.getParameters = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'parameter/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],91:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

PatchService.prototype.getPatchs = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'patch/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
PatchService.prototype.getPatch = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'patch?id=' + id, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};


PatchService.prototype.updatePatch = function (id, idBoarder, date, doctor, nameMedic, dosage, unit) {
    var _this = this;
    var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
    data += '&doctor=' + doctor + '&nameMedic=' + nameMedic + '&dosage=' + dosage + '&unit=' + unit;
    return this.$http.put(this.SERVER_ROOT + 'patch?' + data, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
PatchService.prototype.removePatch = function (idPatch) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'patch?id=' + idPatch, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

PatchService.prototype.removePatchs = function (patchs) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    patchs.forEach(function (patch) {
        var defer = _this.$q.defer();
        _this.removePatch(patch.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
};

},{}],92:[function(require,module,exports){
var SurroundingSkinService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

SurroundingSkinService.prototype.addSurroundingSkin = function (idBoarder, date, healthy, fragile, dry, hyperpigmented, hyperkeration, inflammatory,
                                                                  macerated,ulcerated) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&healthy=" + healthy +
        "&fragile=" + fragile +
        "&dry=" + dry +
        "&hyperpigmented=" + hyperpigmented +
        "&hyperkeration=" + hyperkeration +
        "&inflammatory=" + inflammatory +
        "&macerated=" + macerated +
        "&ulcerated=" + ulcerated ;
    return this.$http.post(this.SERVER_ROOT + 'surroundingSkin', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

SurroundingSkinService.prototype.getSurroundingSkins = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'surroundingSkin/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],93:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

SwaddleService.prototype.getSwaddles = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'swaddle/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};

SwaddleService.prototype.removeSwaddle = function (idSwaddle) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'swaddle?id=' + idSwaddle, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

SwaddleService.prototype.removeSwaddles = function (swaddles) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    swaddles.forEach(function (swaddle) {
        var defer = _this.$q.defer();
        _this.removeSwaddle(swaddle.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
}
},{}],94:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

TherapeuticService.prototype.getTherapeutics = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'therapeutic/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
TherapeuticService.prototype.getTherapeutic = function (id) {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'therapeutic?id=' + id, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};


TherapeuticService.prototype.updateTherapeutic = function (id, idBoarder, date, preparation, adMorning, adMidday, adEvening, adNight) {
    var _this = this;
    var data = 'id=' + id + '&boarder=' + idBoarder + '&date=' + date.getTime();
    data += "&preparation=" + preparation +
        "&adMorning=" + adMorning +
        "&adMidday=" + adMidday +
        "&adEvening=" + adEvening +
        "&adNight=" + adNight;
    return this.$http.put(this.SERVER_ROOT + 'therapeutic?' + data, {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
TherapeuticService.prototype.removeTherapeutic = function (idTherapeutic) {
    var _this = this;
    return this.$http.delete(this.SERVER_ROOT + 'therapeutic?id=' + idTherapeutic, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

TherapeuticService.prototype.removeTherapeutics = function (therapeutics) {
    var _this = this;
    var deferGlobal = this.$q.defer();
    var promises = [];
    therapeutics.forEach(function (therapeutic) {
        var defer = _this.$q.defer();
        _this.removeTherapeutic(therapeutic.id).then(function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });
    this.$q.all(promises).then(function () {
        deferGlobal.resolve();
    });
    return deferGlobal.promise;
};
},{}],95:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

ToiletHelpingService.prototype.getToiletHelpings = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'toiletHelping/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],96:[function(require,module,exports){
var TreatmentService = module.exports = function (SERVER_ROOT, $http, $q) {
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};

TreatmentService.prototype.addTreatment = function (idBoarder, date, pst, irrigation, therapeuticBath, drillWidth, drillLength, debridement, treatmentOther) {
    var _this = this;
    var data = "boarder=" + idBoarder +
        "&date=" + date +
        "&pst=" + pst +
        "&irrigation=" + irrigation +
        "&therapeuticBath=" + therapeuticBath +
        "&drillWidth=" + drillWidth +
        "&drillLength=" + drillLength +
        "&debridement=" + debridement +
        "&treatmentOther=" + treatmentOther;

    return this.$http.post(this.SERVER_ROOT + 'treatment', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

TreatmentService.prototype.getTreatments = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'treatment/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}],97:[function(require,module,exports){
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
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }
    }).then(function (data) {

    }).catch(function (data) {

    });
};

WoundService.prototype.getWounds = function () {
    var _this = this;
    return this.$http.get(this.SERVER_ROOT + 'wound/all', {
        headers: {
            'Authorization': 'Basic ZGFtOmRhbQ=='
        }}).then(function (response) {
        return response.data;
    }).catch(function (response) {

    });
};
},{}]},{},[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9ub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9jb25maWcvZGV2L1JvdXRlU2VydmljZS5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2FwcGxpY2F0aW9uLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRBc3BlY3RDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkRW1iYW5rbWVudEN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRJbmNvbnRpbmVuY2VDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkTWVhc3VyZUN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRNb2JpbGl6YXRpb25DdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkUGFyYW1ldGVyQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0FkZFN3YWRkbGVDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWRkVG9pbGV0SGVscGluZ0N0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZGRXb3VuZEN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9BZXJvc29sL0FkZEFlcm9zb2xDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQWVyb3NvbC9BZXJvc29sQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0Flcm9zb2wvVXBkYXRlQWVyb3NvbEN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Bc3BlY3RDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQmFuZGFnZS9BZGRCYW5kYWdlQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0JhbmRhZ2UvQmFuZGFnZUN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Cb2FyZGVyL0FkZEJvYXJkZXJDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvQm9hcmRlci9Cb2FyZGVyQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0JvYXJkZXIvVXBkYXRlQm9hcmRlckN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9DbG90aGluZy9BZGRDbG90aGluZ0N0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9DbG90aGluZy9DbG90aGluZ0N0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EaXNvcmRlci9BZGREaXNvcmRlckN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EaXNvcmRlci9EaXNvcmRlckN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9EcnVnVHJlYXRlbWVudC9BZGREcnVnVHJlYXRtZW50Q3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0RydWdUcmVhdGVtZW50L0RydWdUcmVhdG1lbnRDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvRWF0L0FkZEVhdEN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9FYXQvRWF0Q3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0VtYmFua21lbnRDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSGVhZGVyQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0h5Z2llbmUvQWRkSHlnaWVuZUN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9IeWdpZW5lL0h5Z2llbmVDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSW5jb250aW5lbmNlQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0luamVjdGlvbi9BZGRJbmplY3Rpb25DdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSW5qZWN0aW9uL0luamVjdGlvbkN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbmplY3Rpb24vVXBkYXRlSW5qZWN0aW9uQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2UvQWRkSW5zdWxpbkRvc2FnZUN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbnN1bGluRG9zYWdlL0luc3VsaW5Eb3NhZ2VDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSW5zdWxpbkRvc2FnZS9VcGRhdGVJbnN1bGluRG9zYWdlQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0luc3VsaW5UYWtpbmcvQWRkSW5zdWxpblRha2luZ0N0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9JbnN1bGluVGFraW5nL0luc3VsaW5UYWtpbmdDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvSW5zdWxpblRha2luZy9VcGRhdGVJbnN1bGluVGFraW5nQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL01lYWwvQWRkTWVhbEN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9NZWFsL01lYWxDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvTWVhc3VyZUN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9NZW51Q3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL01vYmlsaXphdGlvbkN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9PYnNlcnZhdGlvbi9BZGRPYnNlcnZhdGlvbkN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9PYnNlcnZhdGlvbi9PYnNlcnZhdGlvbkN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9PYnNlcnZhdGlvbi9VcGRhdGVPYnNlcnZhdGlvbkN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9QYXJhbWV0ZXJDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvUGF0Y2gvQWRkUGF0Y2hDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvUGF0Y2gvUGF0Y2hDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvUGF0Y2gvVXBkYXRlUGF0Y2hDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvU3Vycm91bmRpbmdTa2luL0FkZFN1cnJvdW5kaW5nU2tpbkN0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9TdXJyb3VuZGluZ1NraW4vU3Vycm91bmRpbmdTa2luQ3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1N3YWRkbGVDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvVGhlcmFwZXV0aWMvQWRkVGhlcmFwZXV0aWNDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvVGhlcmFwZXV0aWMvVGhlcmFwZXV0aWNDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvVGhlcmFwZXV0aWMvVXBkYXRlVGhlcmFwZXV0aWNDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvVG9pbGV0SGVscGluZ0N0cmwuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9jb250cm9sbGVycy9UcmVhdG1lbnQvQWRkVHJlYXRtZW50Q3RybC5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2NvbnRyb2xsZXJzL1RyZWF0bWVudC9UcmVhdG1lbnRDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvY29udHJvbGxlcnMvV291bmRDdHJsLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvZGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL2RpcmVjdGl2ZXMvQm9hcmRlckxpc3REaXJlY3RpdmUuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0Flcm9zb2xTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvQXNwZWN0U2VydmljZS5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0JhbmRhZ2VTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvQm9hcmRlclNlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9DbG90aGluZ1NlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9EaXNvcmRlclNlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9EcnVnVHJlYXRtZW50U2VydmljZS5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0VhdFNlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9FbWJhbmttZW50U2VydmljZS5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0h5Z2llbmVTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvSW5jb250aW5lbmNlU2VydmljZS5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0luamVjdGlvblNlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9JbnN1bGluRG9zYWdlU2VydmljZS5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL0luc3VsaW5UYWtpbmdTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvTG9naW5TZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvTWVhbFNlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9NZWFzdXJlU2VydmljZS5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL01vYmlsaXphdGlvblNlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9PYnNlcnZhdGlvblNlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9QYXJhbWV0ZXJTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvUGF0Y2hTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvU3Vycm91bmRpbmdTa2luU2VydmljZS5qcyIsIi9Vc2Vycy9MM200Qy9XZWJzdG9ybVByb2plY3RzL1RGRUNsaWVudC9hcHAvanMvc3JjL3NlcnZpY2VzL1N3YWRkbGVTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvVGhlcmFwZXV0aWNTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvVG9pbGV0SGVscGluZ1NlcnZpY2UuanMiLCIvVXNlcnMvTDNtNEMvV2Vic3Rvcm1Qcm9qZWN0cy9URkVDbGllbnQvYXBwL2pzL3NyYy9zZXJ2aWNlcy9UcmVhdG1lbnRTZXJ2aWNlLmpzIiwiL1VzZXJzL0wzbTRDL1dlYnN0b3JtUHJvamVjdHMvVEZFQ2xpZW50L2FwcC9qcy9zcmMvc2VydmljZXMvV291bmRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUm91dGVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0OjgwODAvJztcbn07IiwidmFyIGFwcCA9ICBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ25nR3JpZCcsICdwYXNjYWxwcmVjaHQudHJhbnNsYXRlJywgJ2FwcC5jb250cm9sbGVycycsICdhcHAuc2VydmljZXMnLCAnYXBwLmRpcmVjdGl2ZXMnXSk7XG5cbmFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgIC8vIEZvciBhbnkgdW5tYXRjaGVkIHVybCwgcmVkaXJlY3QgdG8gL3N0YXRlMVxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvbG9naW5cIik7XG4gICAgLy9cbiAgICAvLyBOb3cgc2V0IHVwIHRoZSBzdGF0ZXNcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgICAgICAgdXJsOiBcIi9sb2dpblwiLFxuICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2xvZ2luLmh0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCBhcyBjdHJsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuc3RhdGUoJ3JlbG9hZCcsIHtcbiAgICAgICAgICAgIHVybDogXCIvcmVsb2FkLzpyZWxvYWRcIixcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMsICRzdGF0ZSwgJHRpbWVvdXQpIHt9LFxuICAgICAgICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcywgJHN0YXRlLCAkdGltZW91dCkge1xuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCRzdGF0ZVBhcmFtcy5yZWxvYWQpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5zdGF0ZSgnbWFpbi1jb250ZW50Jywge1xuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICdmb290ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9vdGVyLmh0bWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnaGVhZGVyJzoge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hlYWRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckN0cmwgYXMgY3RybCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21haW4tY29udGVudC5odG1sJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuc3RhdGUoJ21lbnUnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL21lbnVcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWVudS5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZW51Q3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnYm9hcmRlcicsIHtcbiAgICAgICAgICAgIHVybDogXCIvYm9hcmRlclwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9ib2FyZGVyLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0JvYXJkZXJDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRib2FyZGVyJywge1xuICAgICAgICAgICAgdXJsOiBcIi9ib2FyZGVyL2FkZFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9hZGQtYm9hcmRlci5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRCb2FyZGVyQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgndXBkYXRlYm9hcmRlcicsIHtcbiAgICAgICAgICAgIHVybDogXCIvYm9hcmRlci91cGRhdGUvOmlkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1ib2FyZGVyLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1VwZGF0ZUJvYXJkZXJDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdtZWFsJywge1xuICAgICAgICAgICAgdXJsOiBcIi9tZWFsXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL21lYWwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVhbEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZG1lYWwnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL21lYWwvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1tZWFsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZE1lYWxDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdzd2FkZGxlJywge1xuICAgICAgICAgICAgdXJsOiBcIi9zd2FkZGxlXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3N3YWRkbGUuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU3dhZGRsZUN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZHN3YWRkbGUnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL3N3YWRkbGUvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2FkZC1zd2FkZGxlLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFN3YWRkbGVDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdpbnN1bGluRG9zYWdlJywge1xuICAgICAgICAgICAgdXJsOiBcIi9pbnN1bGluRG9zYWdlXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luc3VsaW5Eb3NhZ2UuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSW5zdWxpbkRvc2FnZUN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGluc3VsaW5Eb3NhZ2UnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2luc3VsaW5Eb3NhZ2UvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1pbnN1bGluRG9zYWdlLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEluc3VsaW5Eb3NhZ2VDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCd1cGRhdGVpbnN1bGluRG9zYWdlJywge1xuICAgICAgICAgICAgdXJsOiBcIi9pbnN1bGluRG9zYWdlL3VwZGF0ZS86aWRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWluc3VsaW5Eb3NhZ2UuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVXBkYXRlSW5zdWxpbkRvc2FnZUN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ29ic2VydmF0aW9uJywge1xuICAgICAgICAgICAgdXJsOiBcIi9vYnNlcnZhdGlvblwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9vYnNlcnZhdGlvbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPYnNlcnZhdGlvbkN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZG9ic2VydmF0aW9uJywge1xuICAgICAgICAgICAgdXJsOiBcIi9vYnNlcnZhdGlvbi9hZGRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLW9ic2VydmF0aW9uLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZE9ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgndXBkYXRlb2JzZXJ2YXRpb24nLCB7XG4gICAgICAgICAgICB1cmw6IFwiL29ic2VydmF0aW9uL3VwZGF0ZS86aWRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLW9ic2VydmF0aW9uLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1VwZGF0ZU9ic2VydmF0aW9uQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgncGF0Y2gnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL3BhdGNoXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL3BhdGNoLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BhdGNoQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnYWRkcGF0Y2gnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL3BhdGNoL2FkZFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtcGF0Y2guaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkUGF0Y2hDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCd1cGRhdGVwYXRjaCcsIHtcbiAgICAgICAgICAgIHVybDogXCIvcGF0Y2gvdXBkYXRlLzppZFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtcGF0Y2guaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVXBkYXRlUGF0Y2hDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZXJvc29sJywge1xuICAgICAgICAgICAgdXJsOiBcIi9hZXJvc29sXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2Flcm9zb2wuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWVyb3NvbEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGFlcm9zb2wnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2Flcm9zb2wvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1hZXJvc29sLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEFlcm9zb2xDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCd1cGRhdGVhZXJvc29sJywge1xuICAgICAgICAgICAgdXJsOiBcIi9hZXJvc29sL3VwZGF0ZS86aWRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWFlcm9zb2wuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVXBkYXRlQWVyb3NvbEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ3dvdW5kJywge1xuICAgICAgICAgICAgdXJsOiBcIi93b3VuZFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy93b3VuZC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdXb3VuZEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZHdvdW5kJywge1xuICAgICAgICAgICAgdXJsOiBcIi93b3VuZC9hZGRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLXdvdW5kLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFdvdW5kQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnZHJ1Z1RyZWF0bWVudCcsIHtcbiAgICAgICAgICAgIHVybDogXCIvZHJ1Z1RyZWF0bWVudFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9kcnVnVHJlYXRtZW50Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0RydWdUcmVhdG1lbnRDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRkcnVnVHJlYXRtZW50Jywge1xuICAgICAgICAgICAgdXJsOiBcIi9kcnVnVHJlYXRtZW50L2FkZFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtZHJ1Z1RyZWF0bWVudC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGREcnVnVHJlYXRtZW50Q3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnaW5zdWxpblRha2luZycsIHtcbiAgICAgICAgICAgIHVybDogXCIvaW5zdWxpblRha2luZ1wiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9pbnN1bGluVGFraW5nLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luc3VsaW5UYWtpbmdDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbnN1bGluVGFraW5nJywge1xuICAgICAgICAgICAgdXJsOiBcIi9pbnN1bGluVGFraW5nL2FkZFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtaW5zdWxpblRha2luZy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRJbnN1bGluVGFraW5nQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgndXBkYXRlaW5zdWxpblRha2luZycsIHtcbiAgICAgICAgICAgIHVybDogXCIvaW5zdWxpblRha2luZy91cGRhdGUvOmlkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1pbnN1bGluVGFraW5nLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1VwZGF0ZUluc3VsaW5UYWtpbmdDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCd0aGVyYXBldXRpYycsIHtcbiAgICAgICAgICAgIHVybDogXCIvdGhlcmFwZXV0aWNcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvdGhlcmFwZXV0aWMuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVGhlcmFwZXV0aWNDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGR0aGVyYXBldXRpYycsIHtcbiAgICAgICAgICAgIHVybDogXCIvdGhlcmFwZXV0aWMvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC10aGVyYXBldXRpYy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRUaGVyYXBldXRpY0N0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ3VwZGF0ZXRoZXJhcGV1dGljJywge1xuICAgICAgICAgICAgdXJsOiBcIi90aGVyYXBldXRpYy91cGRhdGUvOmlkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC10aGVyYXBldXRpYy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdVcGRhdGVUaGVyYXBldXRpY0N0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2luamVjdGlvbicsIHtcbiAgICAgICAgICAgIHVybDogXCIvaW5qZWN0aW9uXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2luamVjdGlvbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmplY3Rpb25DdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRpbmplY3Rpb24nLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2luamVjdGlvbi9hZGRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWluamVjdGlvbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRJbmplY3Rpb25DdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCd1cGRhdGVpbmplY3Rpb24nLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2luamVjdGlvbi91cGRhdGUvOmlkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1pbmplY3Rpb24uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVXBkYXRlSW5qZWN0aW9uQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnaHlnaWVuZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2h5Z2llbmVcIixcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9oeWdpZW5lLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIeWdpZW5lQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnYWRkaHlnaWVuZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2h5Z2llbmUvYWRkXCIsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWh5Z2llbmUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEh5Z2llbmVDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdjbG90aGluZycsIHtcbiAgICAgICAgICAgIHVybDogXCIvY2xvdGhpbmdcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvY2xvdGhpbmcuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQ2xvdGhpbmdDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRjbG90aGluZycsIHtcbiAgICAgICAgICAgIHVybDogXCIvY2xvdGhpbmcvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1jbG90aGluZy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRDbG90aGluZ0N0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ21vYmlsaXphdGlvbicsIHtcbiAgICAgICAgICAgIHVybDogXCIvbW9iaWxpemF0aW9uXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL21vYmlsaXphdGlvbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNb2JpbGl6YXRpb25DdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRtb2JpbGl6YXRpb24nLCB7XG4gICAgICAgICAgICB1cmw6IFwiL21vYmlsaXphdGlvbi9hZGRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLW1vYmlsaXphdGlvbi5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRNb2JpbGl6YXRpb25DdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCd0b2lsZXRIZWxwaW5nJywge1xuICAgICAgICAgICAgdXJsOiBcIi90b2lsZXRIZWxwaW5nXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL3RvaWxldEhlbHBpbmcuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVG9pbGV0SGVscGluZ0N0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZHRvaWxldEhlbHBpbmcnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL3RvaWxldEhlbHBpbmcvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC10b2lsZXRIZWxwaW5nLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFRvaWxldEhlbHBpbmdDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdpbmNvbnRpbmVuY2UnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2luY29udGluZW5jZVwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9pbmNvbnRpbmVuY2UuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSW5jb250aW5lbmNlQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnYWRkaW5jb250aW5lbmNlJywge1xuICAgICAgICAgICAgdXJsOiBcIi9pbmNvbnRpbmVuY2UvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1pbmNvbnRpbmVuY2UuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkSW5jb250aW5lbmNlQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnZWF0Jywge1xuICAgICAgICAgICAgdXJsOiBcIi9lYXRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvZWF0Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0VhdEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGVhdCcsIHtcbiAgICAgICAgICAgIHVybDogXCIvZWF0L2FkZFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtZWF0Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEVhdEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ3BhcmFtZXRlcicsIHtcbiAgICAgICAgICAgIHVybDogXCIvcGFyYW1ldGVyXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL3BhcmFtZXRlci5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQYXJhbWV0ZXJDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRwYXJhbWV0ZXInLCB7XG4gICAgICAgICAgICB1cmw6IFwiL3BhcmFtZXRlci9hZGRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLXBhcmFtZXRlci5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRQYXJhbWV0ZXJDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdkaXNvcmRlcicsIHtcbiAgICAgICAgICAgIHVybDogXCIvZGlzb3JkZXJcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvZGlzb3JkZXIuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRGlzb3JkZXJDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRkaXNvcmRlcicsIHtcbiAgICAgICAgICAgIHVybDogXCIvZGlzb3JkZXIvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1kaXNvcmRlci5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGREaXNvcmRlckN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FzcGVjdCcsIHtcbiAgICAgICAgICAgIHVybDogXCIvYXNwZWN0XCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FzcGVjdC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBc3BlY3RDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdhZGRhc3BlY3QnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2FzcGVjdC9hZGRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWFzcGVjdC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZGRBc3BlY3RDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdtZWFzdXJlJywge1xuICAgICAgICAgICAgdXJsOiBcIi9tZWFzdXJlXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL21lYXN1cmUuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVhc3VyZUN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZG1lYXN1cmUnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL21lYXN1cmUvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1tZWFzdXJlLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZE1lYXN1cmVDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdlbWJhbmttZW50Jywge1xuICAgICAgICAgICAgdXJsOiBcIi9lbWJhbmttZW50XCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2VtYmFua21lbnQuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRW1iYW5rbWVudEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZGVtYmFua21lbnQnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2VtYmFua21lbnQvYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1lbWJhbmttZW50Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZEVtYmFua21lbnRDdHJsIGFzIGN0cmwnXG4gICAgICAgIH0pLnN0YXRlKCdzdXJyb3VuZGluZ1NraW4nLCB7XG4gICAgICAgICAgICB1cmw6IFwiL3N1cnJvdW5kaW5nU2tpblwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9zdXJyb3VuZGluZ1NraW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU3Vycm91bmRpbmdTa2luQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnYWRkc3Vycm91bmRpbmdTa2luJywge1xuICAgICAgICAgICAgdXJsOiBcIi9zdXJyb3VuZGluZ1NraW4vYWRkXCIsXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3ZpZXdzL2FkZC1zdXJyb3VuZGluZ1NraW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkU3Vycm91bmRpbmdTa2luQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgndHJlYXRtZW50Jywge1xuICAgICAgICAgICAgdXJsOiBcIi90cmVhdG1lbnRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvdHJlYXRtZW50Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RyZWF0bWVudEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2FkZHRyZWF0bWVudCcsIHtcbiAgICAgICAgICAgIHVybDogXCIvdHJlYXRtZW50L2FkZFwiLFxuICAgICAgICAgICAgcGFyZW50OiBcIm1haW4tY29udGVudFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi8uLi92aWV3cy9hZGQtdHJlYXRtZW50Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkZFRyZWF0bWVudEN0cmwgYXMgY3RybCdcbiAgICAgICAgfSkuc3RhdGUoJ2JhbmRhZ2UnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2JhbmRhZ2VcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYmFuZGFnZS5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdCYW5kYWdlQ3RybCBhcyBjdHJsJ1xuICAgICAgICB9KS5zdGF0ZSgnYWRkYmFuZGFnZScsIHtcbiAgICAgICAgICAgIHVybDogXCIvYmFuZGFnZS9hZGRcIixcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vLi4vdmlld3MvYWRkLWJhbmRhZ2UuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRkQmFuZGFnZUN0cmwgYXMgY3RybCdcbiAgICAgICAgfSlcbn0pLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCBmdW5jdGlvbiAoJGh0dHBQcm92aWRlcikge1xuICAgIC8vIEF1dG9yaXNhdGlvbiBkZXMgY29va2llcyBwb3VyIGxlcyByZXF1w6l0ZXMgQ09SU1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbn1dKS5jb25maWcoWyckdHJhbnNsYXRlUHJvdmlkZXInLCBmdW5jdGlvbigkdHJhbnNsYXRlUHJvdmlkZXIpIHtcbiAgICAkdHJhbnNsYXRlUHJvdmlkZXIucHJlZmVycmVkTGFuZ3VhZ2UoJ2ZyJyk7XG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcbiAgICAgICAgcHJlZml4OiAnbGFuZ3VhZ2VzLycsXG4gICAgICAgIHN1ZmZpeDogJy5qc29uJ1xuICAgIH0pO1xufV0pOyIsIid1c2VyIHN0cmljdCc7XG5cbnZhciBtb2R1bGVDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcblxubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiTG9naW5DdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvTG9naW5DdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiSGVhZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0hlYWRlckN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJCb2FyZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0JvYXJkZXIvQm9hcmRlckN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRCb2FyZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0JvYXJkZXIvQWRkQm9hcmRlckN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJVcGRhdGVCb2FyZGVyQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0JvYXJkZXIvVXBkYXRlQm9hcmRlckN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJNZW51Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL01lbnVDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiTWVhbEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9NZWFsL01lYWxDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkTWVhbEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9NZWFsL0FkZE1lYWxDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiU3dhZGRsZUN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9Td2FkZGxlQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFN3YWRkbGVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvQWRkU3dhZGRsZUN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2UvSW5zdWxpbkRvc2FnZUN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2UvQWRkSW5zdWxpbkRvc2FnZUN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJVcGRhdGVJbnN1bGluRG9zYWdlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0luc3VsaW5Eb3NhZ2UvVXBkYXRlSW5zdWxpbkRvc2FnZUN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJPYnNlcnZhdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9PYnNlcnZhdGlvbi9PYnNlcnZhdGlvbkN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRPYnNlcnZhdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9PYnNlcnZhdGlvbi9BZGRPYnNlcnZhdGlvbkN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJVcGRhdGVPYnNlcnZhdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9PYnNlcnZhdGlvbi9VcGRhdGVPYnNlcnZhdGlvbkN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJQYXRjaEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9QYXRjaC9QYXRjaEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRQYXRjaEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9QYXRjaC9BZGRQYXRjaEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJVcGRhdGVQYXRjaEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9QYXRjaC9VcGRhdGVQYXRjaEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZXJvc29sQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Flcm9zb2wvQWVyb3NvbEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRBZXJvc29sQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Flcm9zb2wvQWRkQWVyb3NvbEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJVcGRhdGVBZXJvc29sQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Flcm9zb2wvVXBkYXRlQWVyb3NvbEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJXb3VuZEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9Xb3VuZEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRXb3VuZEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRXb3VuZEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJEcnVnVHJlYXRtZW50Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0RydWdUcmVhdGVtZW50L0RydWdUcmVhdG1lbnRDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkRHJ1Z1RyZWF0bWVudEN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9EcnVnVHJlYXRlbWVudC9BZGREcnVnVHJlYXRtZW50Q3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluc3VsaW5UYWtpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5zdWxpblRha2luZy9JbnN1bGluVGFraW5nQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluc3VsaW5UYWtpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5zdWxpblRha2luZy9BZGRJbnN1bGluVGFraW5nQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlVwZGF0ZUluc3VsaW5UYWtpbmdDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSW5zdWxpblRha2luZy9VcGRhdGVJbnN1bGluVGFraW5nQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlRoZXJhcGV1dGljQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1RoZXJhcGV1dGljL1RoZXJhcGV1dGljQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFRoZXJhcGV1dGljQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1RoZXJhcGV1dGljL0FkZFRoZXJhcGV1dGljQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlVwZGF0ZVRoZXJhcGV1dGljQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1RoZXJhcGV1dGljL1VwZGF0ZVRoZXJhcGV1dGljQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluamVjdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9JbmplY3Rpb24vSW5qZWN0aW9uQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEluamVjdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9JbmplY3Rpb24vQWRkSW5qZWN0aW9uQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIlVwZGF0ZUluamVjdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9JbmplY3Rpb24vVXBkYXRlSW5qZWN0aW9uQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkh5Z2llbmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSHlnaWVuZS9IeWdpZW5lQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZEh5Z2llbmVDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvSHlnaWVuZS9BZGRIeWdpZW5lQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkNsb3RoaW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Nsb3RoaW5nL0Nsb3RoaW5nQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZENsb3RoaW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0Nsb3RoaW5nL0FkZENsb3RoaW5nQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIk1vYmlsaXphdGlvbkN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9Nb2JpbGl6YXRpb25DdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkTW9iaWxpemF0aW9uQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZE1vYmlsaXphdGlvbkN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJUb2lsZXRIZWxwaW5nQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1RvaWxldEhlbHBpbmdDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkVG9pbGV0SGVscGluZ0N0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRUb2lsZXRIZWxwaW5nQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkluY29udGluZW5jZUN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9JbmNvbnRpbmVuY2VDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkSW5jb250aW5lbmNlQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0FkZEluY29udGluZW5jZUN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJFYXRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvRWF0L0VhdEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJBZGRFYXRDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvRWF0L0FkZEVhdEN0cmwnKSk7XG5tb2R1bGVDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJQYXJhbWV0ZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvUGFyYW1ldGVyQ3RybCcpKTtcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkFkZFBhcmFtZXRlckN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9BZGRQYXJhbWV0ZXJDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiRGlzb3JkZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvRGlzb3JkZXIvRGlzb3JkZXJDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkRGlzb3JkZXJDdHJsXCIsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvRGlzb3JkZXIvQWRkRGlzb3JkZXJDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiU3Vycm91bmRpbmdTa2luQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1N1cnJvdW5kaW5nU2tpbi9TdXJyb3VuZGluZ1NraW5DdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkU3Vycm91bmRpbmdTa2luQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1N1cnJvdW5kaW5nU2tpbi9BZGRTdXJyb3VuZGluZ1NraW5DdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiVHJlYXRtZW50Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1RyZWF0bWVudC9UcmVhdG1lbnRDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkVHJlYXRtZW50Q3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1RyZWF0bWVudC9BZGRUcmVhdG1lbnRDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQmFuZGFnZUN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9CYW5kYWdlL0JhbmRhZ2VDdHJsJykpO1xubW9kdWxlQ29udHJvbGxlci5jb250cm9sbGVyKFwiQWRkQmFuZGFnZUN0cmxcIiwgcmVxdWlyZSgnLi9jb250cm9sbGVycy9CYW5kYWdlL0FkZEJhbmRhZ2VDdHJsJykpO1xuIiwidmFyIEFkZEFzcGVjdEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEFzcGVjdFNlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLkFzcGVjdFNlcnZpY2UgPSBBc3BlY3RTZXJ2aWNlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcblxuICAgICRzY29wZS5yZWRuZXNzID0gZmFsc2U7XG4gICAgJHNjb3BlLmZpYnJpbiA9IGZhbHNlO1xuICAgICRzY29wZS5uZWNyb3NpcyA9IGZhbHNlO1xuICAgICRzY29wZS5waW5rID0gZmFsc2U7XG4gICAgJHNjb3BlLmFzcGVjdE90aGVyID0gXCJcIjtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZEFzcGVjdEN0cmwucHJvdG90eXBlLmFqb3V0ZXJBc3BlY3QgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLkFzcGVjdFNlcnZpY2UuYWRkQXNwZWN0KHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnJlZG5lc3MsXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpYnJpbiwgdGhpcy4kc2NvcGUubmVjcm9zaXMsIHRoaXMuJHNjb3BlLnBpbmssXG4gICAgICAgICB0aGlzLiRzY29wZS5hc3BlY3RPdGhlcikudGhlbihmdW5jdGlvbiAoKSB7fSk7XG5cblxufTsiLCJ2YXIgQWRkRW1iYW5rbWVudEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEVtYmFua21lbnRTZXJ2aWNlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5FbWJhbmttZW50U2VydmljZSA9IEVtYmFua21lbnRTZXJ2aWNlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcblxuICAgICRzY29wZS5yZWd1bGFyID0gZmFsc2U7XG4gICAgJHNjb3BlLmlycmVndWxhciA9IGZhbHNlO1xuICAgICRzY29wZS5mdXJyb3cgPSBmYWxzZTtcbiAgICAkc2NvcGUuZGV0YWNobWVudCA9IGZhbHNlO1xuICAgICRzY29wZS5idWRkaW5nID0gZmFsc2U7XG5cbiAgICAkc2NvcGUuYmF0aCA9IGZhbHNlO1xuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZEVtYmFua21lbnRDdHJsLnByb3RvdHlwZS5ham91dGVyRW1iYW5rbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuRW1iYW5rbWVudFNlcnZpY2UuYWRkRW1iYW5rbWVudCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5yZWd1bGFyLHRoaXMuJHNjb3BlLmlycmVndWxhcix0aGlzLiRzY29wZS5mdXJyb3csXG4gICAgICAgIHRoaXMuJHNjb3BlLmRldGFjaG1lbnQsdGhpcy4kc2NvcGUuYnVkZGluZykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG5cblxufTsiLCJ2YXIgQWRkSW5jb250aW5lbmNlQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5jb250aW5lbmNlU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuSW5jb250aW5lbmNlU2VydmljZSA9IEluY29udGluZW5jZVNlcnZpY2U7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgJHNjb3BlLmRpdXJuYWwgPSBmYWxzZTtcbiAgICAkc2NvcGUubm9jdHVybmFsID0gZmFsc2U7XG4gICAgJHNjb3BlLmJvdGggPSBmYWxzZTtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZEluY29udGluZW5jZUN0cmwucHJvdG90eXBlLmFqb3V0ZXJJbmNvbnRpbmVuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLkluY29udGluZW5jZVNlcnZpY2UuYWRkSW5jb250aW5lbmNlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmRpdXJuYWwsdGhpcy4kc2NvcGUubm9jdHVybmFsLHRoaXMuJHNjb3BlLmJvdGgpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuXG5cbn07IiwidmFyIEFkZE1lYXN1cmVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBNZWFzdXJlU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuTWVhc3VyZVNlcnZpY2UgPSBNZWFzdXJlU2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAkc2NvcGUuc2l6ZSA9IDA7XG4gICAgJHNjb3BlLmRlcHRoID0gMDtcbiAgICAkc2NvcGUucXVhbnRpdHkgPSBcIlwiO1xuICAgICRzY29wZS5uYXR1cmUgPSBcIlwiO1xuICAgICRzY29wZS5vZG9yID0gZmFsc2U7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG59O1xuXG5BZGRNZWFzdXJlQ3RybC5wcm90b3R5cGUuYWpvdXRlck1lYXN1cmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLk1lYXN1cmVTZXJ2aWNlLmFkZE1lYXN1cmUodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuc2l6ZSx0aGlzLiRzY29wZS5kZXB0aCxcbiAgICB0aGlzLiRzY29wZS5xdWFudGl0eSxcbiAgICB0aGlzLiRzY29wZS5uYXR1cmUsXG4gICAgdGhpcy4kc2NvcGUub2RvcikudGhlbihmdW5jdGlvbiAoKSB7fSk7XG5cblxufTsiLCJ2YXIgQWRkTW9iaWxpemF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgTW9iaWxpemF0aW9uU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuTW9iaWxpemF0aW9uU2VydmljZSA9IE1vYmlsaXphdGlvblNlcnZpY2U7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICRzY29wZS5oZWxwID0gZmFsc2U7XG4gICAgJHNjb3BlLm1hdGVyaWFsID0gZmFsc2U7XG4gICAgJHNjb3BlLmNhbmUgPSBmYWxzZTtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZE1vYmlsaXphdGlvbkN0cmwucHJvdG90eXBlLmFqb3V0ZXJNb2JpbGl6YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLk1vYmlsaXphdGlvblNlcnZpY2UuYWRkTW9iaWxpemF0aW9uKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmhlbHAsdGhpcy4kc2NvcGUubWF0ZXJpYWwsdGhpcy4kc2NvcGUuY2FuZSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG5cblxufTsiLCJ2YXIgQWRkUGFyYW1ldGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgUGFyYW1ldGVyU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuUGFyYW1ldGVyU2VydmljZSA9IFBhcmFtZXRlclNlcnZpY2U7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgJHNjb3BlLnB1bHNlID0gXCJcIjtcbiAgICAkc2NvcGUudGVuc2lvbiA9IFwiXCI7XG4gICAgJHNjb3BlLnRlbXBlcmF0dXJlID0gXCJcIjtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZFBhcmFtZXRlckN0cmwucHJvdG90eXBlLmFqb3V0ZXJQYXJhbWV0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLlBhcmFtZXRlclNlcnZpY2UuYWRkUGFyYW1ldGVyKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnB1bHNlLHRoaXMuJHNjb3BlLnRlbnNpb24sdGhpcy4kc2NvcGUudGVtcGVyYXR1cmUpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVTdGFydC5nZXRUaW1lKCksXG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZUVuZC5nZXRUaW1lKClcblxufTsiLCJ2YXIgQWRkU3dhZGRsZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgU3dhZGRsZVNlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLlN3YWRkbGVTZXJ2aWNlID0gU3dhZGRsZVNlcnZpY2U7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICRzY29wZS5zZWxlY3RlZFN3YWRkbGVzID0gW107XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG59O1xuXG5BZGRTd2FkZGxlQ3RybC5wcm90b3R5cGUuYWpvdXRlclN3YWRkbGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0aGlzLiRzY29wZS5zZWxlY3RlZFN3YWRkbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLlN3YWRkbGVTZXJ2aWNlLmFkZFN3YWRkbGUodGhpcy4kc2NvcGUuc2VsZWN0ZWRTd2FkZGxlc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuJHN0YXRlLmdvKCdzd2FkZGxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwidmFyIEFkZFRvaWxldEhlbHBpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUb2lsZXRIZWxwaW5nU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuVG9pbGV0SGVscGluZ1NlcnZpY2UgPSBUb2lsZXRIZWxwaW5nU2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLm1vdmUgPSBmYWxzZTtcblxuXG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG59O1xuXG5BZGRUb2lsZXRIZWxwaW5nQ3RybC5wcm90b3R5cGUuYWpvdXRlclRvaWxldEhlbHBpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLlRvaWxldEhlbHBpbmdTZXJ2aWNlLmFkZFRvaWxldEhlbHBpbmcodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUubW92ZSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG5cbn07IiwidmFyIEFkZFdvdW5kQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgV291bmRTZXJ2aWNlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5Xb3VuZFNlcnZpY2UgPSBXb3VuZFNlcnZpY2U7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICRzY29wZS5sb2NhbGlzYXRpb24gPSBcIlwiO1xuICAgICRzY29wZS50eXBlID0gXCJcIjtcbiAgICAkc2NvcGUuZGVzY3JpcHRpb24gPSBcIlwiO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xufTtcblxuQWRkV291bmRDdHJsLnByb3RvdHlwZS5ham91dGVyV291bmQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLldvdW5kU2VydmljZS5hZGRXb3VuZCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5sb2NhbGlzYXRpb24sdGhpcy4kc2NvcGUudHlwZSx0aGlzLiRzY29wZS5kZXNjcmlwdGlvbikudGhlbihmdW5jdGlvbiAoKSB7fSk7XG5cbn07IiwidmFyIEFkZEFlcm9zb2xDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIEFlcm9zb2xTZXJ2aWNlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy5BZXJvc29sU2VydmljZSA9IEFlcm9zb2xTZXJ2aWNlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcblxuICAgIC8vJHNjb3BlLmRhdGVTdGFydCA9IG5ldyBEYXRlKCk7XG4gICAgLy8kc2NvcGUuZGF0ZUVuZCA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLmRvY3RvciA9IFwiXCI7XG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XG4gICAgJHNjb3BlLnVuaXQgPSBcIlwiO1xuICAgICRzY29wZS5kb3NhZ2UgPSAwO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xufTtcblxuQWRkQWVyb3NvbEN0cmwucHJvdG90eXBlLmFqb3V0ZXJBZXJvc29sID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuQWVyb3NvbFNlcnZpY2UuYWRkQWVyb3NvbCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5kb2N0b3IsdGhpcy4kc2NvcGUubmFtZU1lZGljLHRoaXMuJHNjb3BlLmRvc2FnZSx0aGlzLiRzY29wZS51bml0KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuJHN0YXRlLmdvKCdhZXJvc29sJyk7XG4gICAgfSk7XG59OyIsInZhciBBZXJvc29sQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQWVyb3NvbFNlcnZpY2UpIHtcbiAgICAkc2NvcGUgPSAkc2NvcGU7XG4gICAgJHNjb3BlLnNlbGVjdGVkQWVyb3NvbHMgPSBbXTtcblxuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IHRydWUsXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRBZXJvc29scyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xuICAgICAgICB9LFxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxuICAgIH07XG5cbiAgICBBZXJvc29sU2VydmljZS5nZXRBZXJvc29scygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihhZXJvc29sKSB7XG4gICAgICAgICAgICBhZXJvc29sLmRhdGUgPSBuZXcgRGF0ZShhZXJvc29sLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFlcm9zb2w7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTsiLCJ2YXIgVXBkYXRlQWVyb3NvbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEFlcm9zb2xTZXJ2aWNlLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuQWVyb3NvbFNlcnZpY2UgPSBBZXJvc29sU2VydmljZTtcbiAgICB0aGlzLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLmRvY3RvciA9IFwiXCI7XG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XG4gICAgJHNjb3BlLnVuaXQgPSBcIlwiO1xuICAgICRzY29wZS51cGRhdGUgPSB0cnVlO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xuXG4gICAgQWVyb3NvbFNlcnZpY2UuZ2V0QWVyb3NvbCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlciA9IGRhdGEuYm9hcmRlcjtcbiAgICAgICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZShkYXRhLmRhdGUpO1xuICAgICAgICAkc2NvcGUuZGF0ZVN0YXJ0ID0gZGF0YS5kYXRlU3RhcnQ7XG4gICAgICAgICRzY29wZS5kYXRlRW5kID0gZGF0YS5kYXRlRW5kO1xuICAgICAgICAkc2NvcGUuZG9jdG9yID0gZGF0YS5kb2N0b3I7XG4gICAgICAgICRzY29wZS5uYW1lTWVkaWMgPSBkYXRhLm5hbWVNZWRpYztcbiAgICAgICAgJHNjb3BlLmRvc2FnZSA9IGRhdGEuZG9zYWdlO1xuICAgICAgICAkc2NvcGUudW5pdCA9IGRhdGEudW5pdDtcbiAgICB9KTtcbn07XG5cblVwZGF0ZUFlcm9zb2xDdHJsLnByb3RvdHlwZS51cGRhdGVBZXJvc29sID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuQWVyb3NvbFNlcnZpY2UudXBkYXRlQWVyb3NvbCh0aGlzLiRzdGF0ZVBhcmFtcy5pZCwgdGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyLmlkLCB0aGlzLiRzY29wZS5kYXRlLCB0aGlzLiRzY29wZS5kb2N0b3IsIHRoaXMuJHNjb3BlLm5hbWVNZWRpYywgdGhpcy4kc2NvcGUuZG9zYWdlLCB0aGlzLiRzY29wZS51bml0KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuJHN0YXRlLmdvKCdhZXJvc29sJyk7XG4gICAgfSk7XG59OyIsInZhciBBc3BlY3RDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBBc3BlY3RTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgQXNwZWN0U2VydmljZS5nZXRBc3BlY3RzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGFzcGVjdCkge1xuICAgICAgICAgICAgYXNwZWN0LmRhdGUgPSBuZXcgRGF0ZShhc3BlY3QuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gYXNwZWN0O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwidmFyIEFkZEJhbmRhZ2VDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBCYW5kYWdlU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuQmFuZGFnZVNlcnZpY2UgPSBCYW5kYWdlU2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAkc2NvcGUucHJvZHVjdCA9IFwiXCI7XG4gICAgJHNjb3BlLmJhbmRhZ2VDb3ZlcmluZyA9IFwiXCI7XG4gICAgJHNjb3BlLmNvbW1lbnQgPSBcIlwiO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xufTtcblxuQWRkQmFuZGFnZUN0cmwucHJvdG90eXBlLmFqb3V0ZXJCYW5kYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5CYW5kYWdlU2VydmljZS5hZGRCYW5kYWdlKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnByb2R1Y3QsdGhpcy4kc2NvcGUuYmFuZGFnZUNvdmVyaW5nLHRoaXMuJHNjb3BlLmNvbW1lbnQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuXG5cbn07IiwidmFyIEJhbmRhZ2VDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBCYW5kYWdlU2VydmljZSkge1xuICAgICRzY29wZSA9ICRzY29wZTtcblxuXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xuICAgICAgICBpMThuOiAnZnInLFxuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXG4gICAgfTtcblxuICAgIEJhbmRhZ2VTZXJ2aWNlLmdldEJhbmRhZ2VzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGJhbmRhZ2UpIHtcbiAgICAgICAgICAgIGJhbmRhZ2UuZGF0ZSA9IG5ldyBEYXRlKGJhbmRhZ2UuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gYmFuZGFnZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59OyIsInZhciBBZGRCb2FyZGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBCb2FyZGVyU2VydmljZSkge1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuQm9hcmRlclNlcnZpY2UgPSBCb2FyZGVyU2VydmljZTtcblxuICAgICRzY29wZS5kYXRlQmlydGggPSBcIlwiO1xuICAgICRzY29wZS5uYW1lID0gXCJcIjtcbiAgICAkc2NvcGUuc3VybmFtZSA9IFwiXCI7XG4gICAgJHNjb3BlLnJvb20gPSAwO1xuICAgICRzY29wZS5hZ2UgPSAwO1xuXG4gICAgJHNjb3BlLm11dHVlbCA9IFwiXCI7XG4gICAgJHNjb3BlLnBlcnNvblJlc3BvbnNpYmxlID0gXCJcIjtcbiAgICAkc2NvcGUucGhvbmUgPSBcIlwiO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xuXG59O1xuXG5BZGRCb2FyZGVyQ3RybC5wcm90b3R5cGUuYWpvdXRlckJvYXJkZXIgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5Cb2FyZGVyU2VydmljZS5hZGRCb2FyZGVyKHRoaXMuJHNjb3BlLm5hbWUsdGhpcy4kc2NvcGUuc3VybmFtZSx0aGlzLiRzY29wZS5yb29tLHRoaXMuJHNjb3BlLmFnZSx0aGlzLiRzY29wZS5kYXRlQmlydGgsdGhpcy4kc2NvcGUubXV0dWVsLHRoaXMuJHNjb3BlLnBlcnNvblJlc3BvbnNpYmxlLHRoaXMuJHNjb3BlLnBob25lKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgICBfdGhpcy4kc3RhdGUuZ28oJ2JvYXJkZXInKTtcblxufTsiLCJ2YXIgQm9hcmRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgQm9hcmRlclNlcnZpY2UsICRyb290U2NvcGUpIHtcbiAgICAkc2NvcGUgPSAkc2NvcGU7XG4gICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBbXTtcbiAgICAkc2NvcGUuZmlsdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgZmlsdGVyVGV4dDogJHJvb3RTY29wZS5zZWFyY2hcbiAgICB9O1xuXG4gICAgJHJvb3RTY29wZS4kd2F0Y2goJ3NlYXJjaCcsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgICRzY29wZS5maWx0ZXJPcHRpb25zLmZpbHRlclRleHQgPSBuZXdWYWx1ZTtcbiAgICB9KTtcblxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcbiAgICAgICAgaTE4bjogJ2ZyJyxcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxuICAgICAgICBjb2x1bW5EZWZzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnTm9tJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdzdXJuYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQcsOpbm9tJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdyb29tJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdDaGFtYnJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdhZ2UnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0FnZScsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISEkc2NvcGUuc2hvd0RldGFpbGVkSW5mb3JtYXRpb25zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGVCaXJ0aCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSBkZSBuYWlzc2FuY2UnLFxuICAgICAgICAgICAgICAgIHZpc2libGU6ICEhJHNjb3BlLnNob3dEZXRhaWxlZEluZm9ybWF0aW9uc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdtdXR1ZWwnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ011dHVlbCcsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISEkc2NvcGUuc2hvd0RldGFpbGVkSW5mb3JtYXRpb25zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3BlcnNvblJlc3BvbnNpYmxlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZSByZXNwb25zYWJsZScsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISEkc2NvcGUuc2hvd0RldGFpbGVkSW5mb3JtYXRpb25zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3Bob25lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdUw6lsw6lwaG9uZScsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISEkc2NvcGUuc2hvd0RldGFpbGVkSW5mb3JtYXRpb25zXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiB0cnVlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IGZhbHNlLFxuICAgICAgICBmaWx0ZXJPcHRpb25zOiAkc2NvcGUuZmlsdGVyT3B0aW9uc1xuICAgIH07XG5cbiAgICBCb2FyZGVyU2VydmljZS5nZXRCb2FyZGVycygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihib2FyZGVyKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBib2FyZGVyO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICRzY29wZS5yZW1vdmVTZWxlY3RlZEJvYXJkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBCb2FyZGVyU2VydmljZS5yZW1vdmVCb2FyZGVycygkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3JlbG9hZCcsIHtyZWxvYWQ6J2JvYXJkZXInfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iLCJ2YXIgVXBkYXRlQm9hcmRlckN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJvYXJkZXJTZXJ2aWNlLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuQm9hcmRlclNlcnZpY2UgPSBCb2FyZGVyU2VydmljZTtcbiAgICB0aGlzLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblxuICAgICRzY29wZS51cGRhdGUgPSB0cnVlO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xuXG4gICAgQm9hcmRlclNlcnZpY2UuZ2V0Qm9hcmRlcigkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlciA9IGRhdGEuYm9hcmRlcjtcbiAgICAgICAgJHNjb3BlLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICRzY29wZS5zdXJuYW1lID0gZGF0YS5zdXJuYW1lO1xuICAgICAgICAkc2NvcGUucm9vbSA9IGRhdGEucm9vbTtcbiAgICAgICAgJHNjb3BlLmFnZSA9IGRhdGEuYWdlO1xuICAgICAgICAkc2NvcGUuZGF0ZUJpcnRoID0gZGF0YS5kYXRlQmlydGg7XG4gICAgICAgICRzY29wZS5tdXR1ZWwgPSBkYXRhLm11dHVlbDtcbiAgICAgICAgJHNjb3BlLnBlcnNvblJlc3BvbnNpYmxlID0gZGF0YS5wZXJzb25SZXNwb25zaWJsZTtcbiAgICAgICAgJHNjb3BlLnBob25lID0gZGF0YS5waG9uZTtcblxuICAgIH0pO1xufTtcblxuVXBkYXRlQm9hcmRlckN0cmwucHJvdG90eXBlLnVwZGF0ZUJvYXJkZXIgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5Cb2FyZGVyU2VydmljZS51cGRhdGVCb2FyZGVyKHRoaXMuJHN0YXRlUGFyYW1zLmlkLCB0aGlzLiRzY29wZS5uYW1lLHRoaXMuJHNjb3BlLnN1cm5hbWUsdGhpcy4kc2NvcGUucm9vbSx0aGlzLiRzY29wZS5hZ2UsdGhpcy4kc2NvcGUuZGF0ZUJpcnRoLHRoaXMuJHNjb3BlLm11dHVlbCx0aGlzLiRzY29wZS5wZXJzb25SZXNwb25zaWJsZSx0aGlzLiRzY29wZS5waG9uZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRzdGF0ZS5nbygnYm9hcmRlcicpO1xuICAgIH0pO1xufTsiLCJ2YXIgQWRkQ2xvdGhpbmdDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBDbG90aGluZ1NlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLkNsb3RoaW5nU2VydmljZSA9IENsb3RoaW5nU2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAkc2NvcGUuY2xvdGhpbmdDb21wbGV0ZSA9IGZhbHNlO1xuICAgICRzY29wZS5jbG90aGluZ1N0aW11bGF0ZWQgPSBmYWxzZTtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZENsb3RoaW5nQ3RybC5wcm90b3R5cGUuYWpvdXRlckNsb3RoaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5DbG90aGluZ1NlcnZpY2UuYWRkQ2xvdGhpbmcodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuY2xvdGhpbmdDb21wbGV0ZSx0aGlzLiRzY29wZS5jbG90aGluZ1N0aW11bGF0ZWQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuXG5cbn07IiwidmFyIENsb3RoaW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQ2xvdGhpbmdTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgQ2xvdGhpbmdTZXJ2aWNlLmdldENsb3RoaW5ncygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihjbG90aGluZykge1xuICAgICAgICAgICAgY2xvdGhpbmcuZGF0ZSA9IG5ldyBEYXRlKGNsb3RoaW5nLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb3RoaW5nO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwidmFyIEFkZERpc29yZGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRGlzb3JkZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5EaXNvcmRlclNlcnZpY2UgPSBEaXNvcmRlclNlcnZpY2U7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgJHNjb3BlLnRpbWVEaXNvcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICRzY29wZS5zcGFjZURpc29yaWVudGF0aW9uID0gZmFsc2U7XG4gICAgJHNjb3BlLnRlcm1EaWZmaWN1bHR5ID0gZmFsc2U7XG4gICAgJHNjb3BlLnZlcmJhbERpZmZpY3VsdHkgPSBmYWxzZTtcbiAgICAkc2NvcGUubG9zc0NvbmNlcHQgPSBmYWxzZTtcbiAgICAkc2NvcGUuYWdpdGF0ZWQgPSBmYWxzZTtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZERpc29yZGVyQ3RybC5wcm90b3R5cGUuYWpvdXRlckRpc29yZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5EaXNvcmRlclNlcnZpY2UuYWRkRGlzb3JkZXIodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUudGltZURpc29yaWVudGF0aW9uLHRoaXMuJHNjb3BlLnNwYWNlRGlzb3JpZW50YXRpb24sdGhpcy4kc2NvcGUudGVybURpZmZpY3VsdHksXG4gICAgICAgIHRoaXMuJHNjb3BlLnZlcmJhbERpZmZpY3VsdHksdGhpcy4kc2NvcGUubG9zc0NvbmNlcHQsdGhpcy4kc2NvcGUuYWdpdGF0ZWQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuXG5cbn07IiwidmFyIERpc29yZGVyQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRGlzb3JkZXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgRGlzb3JkZXJTZXJ2aWNlLmdldERpc29yZGVycygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihkaXNvcmRlcikge1xuICAgICAgICAgICAgZGlzb3JkZXIuZGF0ZSA9IG5ldyBEYXRlKGRpc29yZGVyLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGRpc29yZGVyO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwidmFyIEFkZERydWdUcmVhdG1lbnRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBEcnVnVHJlYXRtZW50U2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuRHJ1Z1RyZWF0bWVudFNlcnZpY2UgPSBEcnVnVHJlYXRtZW50U2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgLy8kc2NvcGUuZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgICAvLyRzY29wZS5kYXRlRW5kID0gbmV3IERhdGUoKTtcbiAgICAkc2NvcGUuZG9jdG9yID0gXCJcIjtcbiAgICAkc2NvcGUubmFtZU1lZGljID0gXCJcIjtcbiAgICAkc2NvcGUudW5pdCA9IFwiXCI7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG59O1xuXG5BZGREcnVnVHJlYXRtZW50Q3RybC5wcm90b3R5cGUuYWpvdXRlckRydWdUcmVhdG1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLkRydWdUcmVhdG1lbnRTZXJ2aWNlLmFkZERydWdUcmVhdG1lbnQodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuZG9jdG9yLHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCxcbiAgICAgICAgdGhpcy4kc2NvcGUubW9ybmluZywgdGhpcy4kc2NvcGUubWlkZGF5LCB0aGlzLiRzY29wZS5ldmVuaW5nLCB0aGlzLiRzY29wZS5uaWdodCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4gICAgLy8gdGhpcy4kc2NvcGUuZGF0ZVN0YXJ0LmdldFRpbWUoKSxcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxuXG59OyIsInZhciBEcnVnVHJlYXRtZW50Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgRHJ1Z1RyZWF0bWVudFNlcnZpY2UpIHtcbiAgICAkc2NvcGUgPSAkc2NvcGU7XG5cblxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcbiAgICAgICAgaTE4bjogJ2ZyJyxcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxuICAgICAgICBjb2x1bW5EZWZzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdtb3JuaW5nJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdNYXRpbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgRHJ1Z1RyZWF0bWVudFNlcnZpY2UuZ2V0RHJ1Z1RyZWF0bWVudHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oZHJ1Z1RyZWF0bWVudCkge1xuICAgICAgICAgICAgZHJ1Z1RyZWF0bWVudC5kYXRlID0gbmV3IERhdGUoZHJ1Z1RyZWF0bWVudC5kYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBkcnVnVHJlYXRtZW50O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwidmFyIEFkZEVhdEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEVhdFNlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLkVhdFNlcnZpY2UgPSBFYXRTZXJ2aWNlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcblxuICAgICRzY29wZS5wcmlvckFpZCA9IGZhbHNlO1xuICAgICRzY29wZS5mdWxsQWlkID0gZmFsc2U7XG4gICAgJHNjb3BlLmVhdFN0aW11bGF0ZWQgPSBmYWxzZTtcbiAgICAkc2NvcGUuaHlkcmF0aW9uID0gZmFsc2U7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG59O1xuXG5BZGRFYXRDdHJsLnByb3RvdHlwZS5ham91dGVyRWF0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5FYXRTZXJ2aWNlLmFkZEVhdCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5wcmlvckFpZCx0aGlzLiRzY29wZS5mdWxsQWlkLHRoaXMuJHNjb3BlLmVhdFN0aW11bGF0ZWQsdGhpcy4kc2NvcGUuaHlkcmF0aW9uKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcblxuXG59OyIsInZhciBFYXRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBFYXRTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgRWF0U2VydmljZS5nZXRFYXRzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGVhdCkge1xuICAgICAgICAgICAgZWF0LmRhdGUgPSBuZXcgRGF0ZShlYXQuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gZWF0O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwidmFyIEVtYmFua21lbnRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBFbWJhbmttZW50U2VydmljZSkge1xuICAgICRzY29wZSA9ICRzY29wZTtcblxuXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xuICAgICAgICBpMThuOiAnZnInLFxuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXG4gICAgfTtcblxuICAgIEVtYmFua21lbnRTZXJ2aWNlLmdldEVtYmFua21lbnRzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGVtYmFua21lbnQpIHtcbiAgICAgICAgICAgIGVtYmFua21lbnQuZGF0ZSA9IG5ldyBEYXRlKGVtYmFua21lbnQuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gZW1iYW5rbWVudDtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59OyIsInZhciBIZWFkZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTG9naW5TZXJ2aWNlLCAkc3RhdGUsICRzY29wZSwgJHJvb3RTY29wZSkge1xuICAgIHRoaXMuTG9naW5TZXJ2aWNlID0gTG9naW5TZXJ2aWNlO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgICRzY29wZS4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbn07XG5cbkhlYWRlckN0cmwucHJvdG90eXBlLmRpc2Nvbm5lY3QgID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuTG9naW5TZXJ2aWNlLmRvTG9nb3V0KCk7XG4gICAgdGhpcy4kc3RhdGUuZ28oXCJsb2dpblwiKTtcbn07IiwidmFyIEFkZEh5Z2llbmVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBIeWdpZW5lU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuSHlnaWVuZVNlcnZpY2UgPSBIeWdpZW5lU2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAkc2NvcGUudG9pbGV0UGFydGllbCA9IGZhbHNlO1xuICAgICRzY29wZS50b2lsZXRDb21wbGV0ZSA9IGZhbHNlO1xuICAgICRzY29wZS5oeWdpZW5lU3RpbXVsYXRlZCA9IGZhbHNlO1xuXG4gICAgJHNjb3BlLmJhdGggPSBmYWxzZTtcbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG59O1xuXG5BZGRIeWdpZW5lQ3RybC5wcm90b3R5cGUuYWpvdXRlckh5Z2llbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLkh5Z2llbmVTZXJ2aWNlLmFkZEh5Z2llbmUodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUudG9pbGV0UGFydGllbCx0aGlzLiRzY29wZS50b2lsZXRDb21wbGV0ZSx0aGlzLiRzY29wZS5oeWdpZW5lU3RpbXVsYXRlZCx0aGlzLiRzY29wZS5iYXRoKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcblxuXG59OyIsInZhciBIeWdpZW5lQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSHlnaWVuZVNlcnZpY2UpIHtcbiAgICAkc2NvcGUgPSAkc2NvcGU7XG5cblxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcbiAgICAgICAgaTE4bjogJ2ZyJyxcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxuICAgICAgICBjb2x1bW5EZWZzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xuICAgICAgICB9LFxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxuICAgIH07XG5cbiAgICBIeWdpZW5lU2VydmljZS5nZXRIeWdpZW5lcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihoeWdpZW5lKSB7XG4gICAgICAgICAgICBoeWdpZW5lLmRhdGUgPSBuZXcgRGF0ZShoeWdpZW5lLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGh5Z2llbmU7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTsiLCJ2YXIgSW5jb250aW5lbmNlQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5jb250aW5lbmNlU2VydmljZSkge1xuICAgICRzY29wZSA9ICRzY29wZTtcblxuXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xuICAgICAgICBpMThuOiAnZnInLFxuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXG4gICAgfTtcblxuICAgIEluY29udGluZW5jZVNlcnZpY2UuZ2V0SW5jb250aW5lbmNlcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihpbmNvbnRpbmVuY2UpIHtcbiAgICAgICAgICAgIGluY29udGluZW5jZS5kYXRlID0gbmV3IERhdGUoaW5jb250aW5lbmNlLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGluY29udGluZW5jZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59OyIsInZhciBBZGRJbmplY3Rpb25DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIEluamVjdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLkluamVjdGlvblNlcnZpY2UgPSBJbmplY3Rpb25TZXJ2aWNlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcbiAgICAvLyRzY29wZS5kYXRlU3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgIC8vJHNjb3BlLmRhdGVFbmQgPSBuZXcgRGF0ZSgpO1xuICAgICRzY29wZS5kb2N0b3IgPSBcIlwiO1xuICAgICRzY29wZS5uYW1lTWVkaWMgPSBcIlwiO1xuICAgICRzY29wZS51bml0ID0gXCJcIjtcbiAgICAkc2NvcGUuZXN0YWJsaXNobWVudD0gXCJcIjtcbiAgICAkc2NvcGUuZG9zYWdlPSAwO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xufTtcblxuQWRkSW5qZWN0aW9uQ3RybC5wcm90b3R5cGUuYWpvdXRlckluamVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzID0gdGhpcztcbiAgICB0aGlzLkluamVjdGlvblNlcnZpY2UuYWRkSW5qZWN0aW9uKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLmRvY3Rvcix0aGlzLiRzY29wZS5lc3RhYmxpc2htZW50LHRoaXMuJHNjb3BlLm5hbWVNZWRpYyx0aGlzLiRzY29wZS5kb3NhZ2UsdGhpcy4kc2NvcGUudW5pdCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4gICAgX3RoaXMuJHN0YXRlLmdvKCdpbmplY3Rpb24nKTtcbiAgICAvLyB0aGlzLiRzY29wZS5kYXRlU3RhcnQuZ2V0VGltZSgpLFxuICAgIC8vIHRoaXMuJHNjb3BlLmRhdGVFbmQuZ2V0VGltZSgpXG5cbn07IiwidmFyIEluamVjdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgSW5qZWN0aW9uU2VydmljZSkge1xuICAgICRzY29wZSA9ICRzY29wZTtcbiAgICAkc2NvcGUuc2VsZWN0ZWRJbmplY3Rpb25zID0gW107XG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZG9jdG9yJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEb2N0ZXVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBtdWx0aVNlbGVjdDogdHJ1ZSxcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEluamVjdGlvbnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgSW5qZWN0aW9uU2VydmljZS5nZXRJbmplY3Rpb25zKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGluamVjdGlvbikge1xuICAgICAgICAgICAgaW5qZWN0aW9uLmRhdGUgPSBuZXcgRGF0ZShpbmplY3Rpb24uZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0aW9uO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAkc2NvcGUucmVtb3ZlU2VsZWN0ZWRJbmplY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBJbmplY3Rpb25TZXJ2aWNlLnJlbW92ZUluamVjdGlvbnMoJHNjb3BlLnNlbGVjdGVkSW5qZWN0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3JlbG9hZCcsIHtyZWxvYWQ6J2luamVjdGlvbid9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJ2YXIgVXBkYXRlSW5qZWN0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5qZWN0aW9uU2VydmljZSwgJHN0YXRlUGFyYW1zLCAkc3RhdGUpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLkluamVjdGlvblNlcnZpY2UgPSBJbmplY3Rpb25TZXJ2aWNlO1xuICAgIHRoaXMuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcbiAgICAkc2NvcGUuZG9jdG9yID0gXCJcIjtcbiAgICAkc2NvcGUuZXN0YWJsaXNobWVudCA9IFwiXCI7XG4gICAgJHNjb3BlLm5hbWVNZWRpYyA9IFwiXCI7XG4gICAgJHNjb3BlLnVuaXQgPSBcIlwiO1xuICAgICRzY29wZS51cGRhdGUgPSB0cnVlO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xuXG4gICAgSW5qZWN0aW9uU2VydmljZS5nZXRJbmplY3Rpb24oJHN0YXRlUGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXIgPSBkYXRhLmJvYXJkZXI7XG4gICAgICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoZGF0YS5kYXRlKTtcbiAgICAgICAgJHNjb3BlLmRhdGVTdGFydCA9IGRhdGEuZGF0ZVN0YXJ0O1xuICAgICAgICAkc2NvcGUuZGF0ZUVuZCA9IGRhdGEuZGF0ZUVuZDtcbiAgICAgICAgJHNjb3BlLmRvY3RvciA9IGRhdGEuZG9jdG9yO1xuICAgICAgICAkc2NvcGUuZXN0YWJsaXNobWVudCA9IGRhdGEuZXN0YWJsaXNobWVudDtcbiAgICAgICAgJHNjb3BlLm5hbWVNZWRpYyA9IGRhdGEubmFtZU1lZGljO1xuICAgICAgICAkc2NvcGUuZG9zYWdlID0gZGF0YS5kb3NhZ2U7XG4gICAgICAgICRzY29wZS51bml0ID0gZGF0YS51bml0O1xuICAgIH0pO1xufTtcblxuVXBkYXRlSW5qZWN0aW9uQ3RybC5wcm90b3R5cGUudXBkYXRlSW5qZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuSW5qZWN0aW9uU2VydmljZS51cGRhdGVJbmplY3Rpb24odGhpcy4kc3RhdGVQYXJhbXMuaWQsIHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlci5pZCwgdGhpcy4kc2NvcGUuZGF0ZSwgdGhpcy4kc2NvcGUuZG9jdG9yLCB0aGlzLiRzY29wZS5lc3RhYmxpc2htZW50LCB0aGlzLiRzY29wZS5uYW1lTWVkaWMsIHRoaXMuJHNjb3BlLmRvc2FnZSwgdGhpcy4kc2NvcGUudW5pdCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRzdGF0ZS5nbygnaW5qZWN0aW9uJyk7XG4gICAgfSk7XG59OyIsInZhciBJbnN1bGluRG9zYWdlQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBJbnN1bGluRG9zYWdlU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UgPSBJbnN1bGluRG9zYWdlU2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLmRvc2FnZSA9IDA7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG5cbn07XG5cbkluc3VsaW5Eb3NhZ2VDdHJsLnByb3RvdHlwZS5ham91dGVySW5zdWxpbkRvc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzID0gdGhpcztcbiAgICB0aGlzLkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLmFkZEluc3VsaW5Eb3NhZ2UodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksIHRoaXMuJHNjb3BlLmRvc2FnZSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4gICAgX3RoaXMuJHN0YXRlLmdvKCdpbnN1bGluRG9zYWdlJyk7XG59O1xuXG4vL0luc3VsaW5Eb3NhZ2VDdHJsLnByb3RvdHlwZS5nZXRJbnN1bGluRG9zYWdlcyA9IGZ1bmN0aW9uKCkge1xuLy8gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZS5nZXRJbnN1bGluRG9zYWdlcygpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuLy99O1xuIiwidmFyIEluc3VsaW5Eb3NhZ2VDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuICAgICRzY29wZS5zZWxlY3RlZEluc3VsaW5Eb3NhZ2VzID0gW107XG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZG9zYWdlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEb3NhZ2UgKGVuIHVuaXTDqSknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiB0cnVlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkSW5zdWxpbkRvc2FnZXMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgSW5zdWxpbkRvc2FnZVNlcnZpY2UuZ2V0SW5zdWxpbkRvc2FnZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oaW5zdWxpbkRvc2FnZSkge1xuICAgICAgICAgICAgaW5zdWxpbkRvc2FnZS5kYXRlID0gbmV3IERhdGUoaW5zdWxpbkRvc2FnZS5kYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBpbnN1bGluRG9zYWdlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAkc2NvcGUucmVtb3ZlU2VsZWN0ZWRJbnN1bGluRG9zYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSW5zdWxpbkRvc2FnZVNlcnZpY2UucmVtb3ZlSW5zdWxpbkRvc2FnZXMoJHNjb3BlLnNlbGVjdGVkSW5zdWxpbkRvc2FnZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdyZWxvYWQnLCB7cmVsb2FkOidpbnN1bGluRG9zYWdlJ30pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn07XG4iLCJ2YXIgVXBkYXRlSW5zdWxpbkRvc2FnZUN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEluc3VsaW5Eb3NhZ2VTZXJ2aWNlLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuSW5zdWxpbkRvc2FnZVNlcnZpY2UgPSBJbnN1bGluRG9zYWdlU2VydmljZTtcbiAgICB0aGlzLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLnVwZGF0ZSA9IHRydWU7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG5cbiAgICBJbnN1bGluRG9zYWdlU2VydmljZS5nZXRJbnN1bGluRG9zYWdlKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVyID0gZGF0YS5ib2FyZGVyO1xuICAgICAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKGRhdGEuZGF0ZSk7XG4gICAgICAgICRzY29wZS5kb3NhZ2UgPSBkYXRhLmRvc2FnZTtcblxuICAgIH0pO1xufTtcblxuVXBkYXRlSW5zdWxpbkRvc2FnZUN0cmwucHJvdG90eXBlLnVwZGF0ZUluc3VsaW5Eb3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5JbnN1bGluRG9zYWdlU2VydmljZS51cGRhdGVJbnN1bGluRG9zYWdlKHRoaXMuJHN0YXRlUGFyYW1zLmlkLCB0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXIuaWQsIHRoaXMuJHNjb3BlLmRhdGUsIHRoaXMuJHNjb3BlLmRvc2FnZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRzdGF0ZS5nbygnaW5zdWxpbkRvc2FnZScpO1xuICAgIH0pO1xufTsiLCJ2YXIgSW5zdWxpblRha2luZ0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgSW5zdWxpblRha2luZ1NlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLkluc3VsaW5UYWtpbmdTZXJ2aWNlID0gSW5zdWxpblRha2luZ1NlcnZpY2U7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICRzY29wZS5nbHljZW1pYSA9IDA7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG5cbn07XG5cbkluc3VsaW5UYWtpbmdDdHJsLnByb3RvdHlwZS5ham91dGVySW5zdWxpblRha2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzID0gdGhpcztcbiAgICB0aGlzLkluc3VsaW5UYWtpbmdTZXJ2aWNlLmFkZEluc3VsaW5UYWtpbmcodGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksIHRoaXMuJHNjb3BlLmdseWNlbWlhKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgICBfdGhpcy4kc3RhdGUuZ28oJ2luc3VsaW5UYWtpbmcnKTtcbn07XG5cbi8vSW5zdWxpbkRvc2FnZUN0cmwucHJvdG90eXBlLmdldEluc3VsaW5Eb3NhZ2VzID0gZnVuY3Rpb24oKSB7XG4vLyAgICB0aGlzLkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLmdldEluc3VsaW5Eb3NhZ2VzKCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4vL307XG4iLCJ2YXIgSW5zdWxpblRha2luZ0N0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgSW5zdWxpblRha2luZ1NlcnZpY2UpIHtcbiAgICAkc2NvcGUgPSAkc2NvcGU7XG4gICAgJHNjb3BlLnNlbGVjdGVkSW5zdWxpblRha2luZ3MgPSBbXTtcblxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcbiAgICAgICAgaTE4bjogJ2ZyJyxcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxuICAgICAgICBjb2x1bW5EZWZzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdnbHljZW1pYScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnR2x5Y8OpbWllJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBtdWx0aVNlbGVjdDogdHJ1ZSxcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEluc3VsaW5UYWtpbmdzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXG4gICAgfTtcblxuICAgIEluc3VsaW5UYWtpbmdTZXJ2aWNlLmdldEluc3VsaW5UYWtpbmdzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKGluc3VsaW5UYWtpbmcpIHtcbiAgICAgICAgICAgIGluc3VsaW5UYWtpbmcuZGF0ZSA9IG5ldyBEYXRlKGluc3VsaW5UYWtpbmcuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gaW5zdWxpblRha2luZztcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUucmVtb3ZlU2VsZWN0ZWRJbnN1bGluVGFraW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSW5zdWxpblRha2luZ1NlcnZpY2UucmVtb3ZlSW5zdWxpblRha2luZ3MoJHNjb3BlLnNlbGVjdGVkSW5zdWxpblRha2luZ3MpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdyZWxvYWQnLCB7cmVsb2FkOidpbnN1bGluVGFraW5nJ30pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsInZhciBVcGRhdGVJbnN1bGluVGFraW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgSW5zdWxpblRha2luZ1NlcnZpY2UsICRzdGF0ZVBhcmFtcywgJHN0YXRlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5JbnN1bGluVGFraW5nU2VydmljZSA9IEluc3VsaW5UYWtpbmdTZXJ2aWNlO1xuICAgIHRoaXMuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcblxuICAgICRzY29wZS5nbHljZW1pYSA9IDA7XG4gICAgJHNjb3BlLnVwZGF0ZSA9IHRydWU7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG5cbiAgICBJbnN1bGluVGFraW5nU2VydmljZS5nZXRJbnN1bGluVGFraW5nKCRzdGF0ZVBhcmFtcy5pZCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVyID0gZGF0YS5ib2FyZGVyO1xuICAgICAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKGRhdGEuZGF0ZSk7XG4gICAgICAgICRzY29wZS5nbHljZW1pYSA9IGRhdGEuZ2x5Y2VtaWE7XG4gICAgfSk7XG59O1xuXG5VcGRhdGVJbnN1bGluVGFraW5nQ3RybC5wcm90b3R5cGUudXBkYXRlSW5zdWxpblRha2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzID0gdGhpcztcbiAgICB0aGlzLkluc3VsaW5UYWtpbmdTZXJ2aWNlLnVwZGF0ZUluc3VsaW5UYWtpbmcodGhpcy4kc3RhdGVQYXJhbXMuaWQsIHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlci5pZCwgdGhpcy4kc2NvcGUuZGF0ZSwgdGhpcy4kc2NvcGUuZ2x5Y2VtaWEpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy4kc3RhdGUuZ28oJ2luc3VsaW5UYWtpbmcnKTtcbiAgICB9KTtcbn07IiwidmFyIExvZ2luQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHN0YXRlLCBMb2dpblNlcnZpY2UpIHtcbiAgICAkc2NvcGUuZW1haWwgPSBcIlwiO1xuICAgICRzY29wZS5wYXNzd29yZCA9IFwiXCI7XG4gICAgJHNjb3BlLnJlbWVtYmVyTWUgPSBmYWxzZTtcbiAgICAkc2NvcGUuZXJyb3Jtc2cgPSBcIlwiO1xuXG4gICAgaWYoTG9naW5TZXJ2aWNlLmlzTG9nKCkpIHtcbiAgICAgICAgJHN0YXRlLmdvKFwibWFpblwiKTtcbiAgICB9XG5cbiAgICAkc2NvcGUuY29ubmV4aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkc2NvcGUuZW1haWwgPT09IHVuZGVmaW5lZCB8fCAkc2NvcGUucGFzc3dvcmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgJHNjb3BlLmVycm9ybXNnID0gJHRyYW5zbGF0ZSgnbG9naW4ubWVzc2FnZS5lcnJvcicpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBMb2dpblNlcnZpY2UuZG9Mb2dpbigkc2NvcGUuZW1haWwsICRzY29wZS5wYXNzd29yZCwgJHNjb3BlLnJlbWVtYmVyTWUpLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGlzT2spIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbyhcIm1lbnVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXJyb3Jtc2cgPSAkdHJhbnNsYXRlKCdsb2dpbi5tZXNzYWdlLmVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufSIsInZhciBBZGRNZWFsQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBNZWFsU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuTWVhbFNlcnZpY2UgPSBNZWFsU2VydmljZTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLnNlbGVjdGVkTWVhbHMgPSBbXTtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZE1lYWxDdHJsLnByb3RvdHlwZS5ham91dGVyTWVhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuJHNjb3BlLnNlbGVjdGVkTWVhbHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuTWVhbFNlcnZpY2UuYWRkTWVhbCh0aGlzLiRzY29wZS5zZWxlY3RlZE1lYWxzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy4kc3RhdGUuZ28oJ21lYWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJ2YXIgTWVhbEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgTWVhbFNlcnZpY2UsICRyb290U2NvcGUpIHtcbiAgICAkc2NvcGUgPSAkc2NvcGU7XG4gICAgJHNjb3BlLnNlbGVjdGVkTWVhbHMgPSBbXTtcbiAgICAkc2NvcGUuZmlsdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgZmlsdGVyVGV4dDogJHJvb3RTY29wZS5zZWFyY2hcbiAgICB9O1xuXG4gICAgJHJvb3RTY29wZS4kd2F0Y2goJ3NlYXJjaCcsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgICRzY29wZS5maWx0ZXJPcHRpb25zLmZpbHRlclRleHQgPSBuZXdWYWx1ZTtcbiAgICB9KTtcbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IHRydWUsXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRNZWFscyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xuICAgICAgICB9LFxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZSxcbiAgICAgICAgZmlsdGVyT3B0aW9uczogJHNjb3BlLmZpbHRlck9wdGlvbnNcbiAgICB9O1xuXG4gICAgTWVhbFNlcnZpY2UuZ2V0TWVhbHMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24obWVhbCkge1xuICAgICAgICAgICAgbWVhbC5kYXRlID0gbmV3IERhdGUobWVhbC5kYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBtZWFsO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICRzY29wZS5yZW1vdmVTZWxlY3RlZE1lYWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBNZWFsU2VydmljZS5yZW1vdmVNZWFscygkc2NvcGUuc2VsZWN0ZWRNZWFscykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3JlbG9hZCcsIHtyZWxvYWQ6J21lYWwnfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwidmFyIE1lYXN1cmVDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBNZWFzdXJlU2VydmljZSkge1xuICAgICRzY29wZSA9ICRzY29wZTtcblxuXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xuICAgICAgICBpMThuOiAnZnInLFxuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXG4gICAgfTtcblxuICAgIE1lYXN1cmVTZXJ2aWNlLmdldE1lYXN1cmVzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKG1lYXN1cmUpIHtcbiAgICAgICAgICAgIG1lYXN1cmUuZGF0ZSA9IG5ldyBEYXRlKG1lYXN1cmUuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gbWVhc3VyZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59OyIsInZhciBNZW51Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSkge1xuXG4gICAgJHNjb3BlLnBlcm1pc3Npb24gPSB7fTtcbiAgICAkc2NvcGUucGVybWlzc2lvbi5tZWFsID0gdHJ1ZTtcbiAgICAkc2NvcGUucGVybWlzc2lvbi5zd2FkZGxlID0gdHJ1ZTtcbiAgICAkc2NvcGUucGVybWlzc2lvbi5pbnN1bGluRG9zYWdlID0gdHJ1ZTtcbiAgICAkc2NvcGUucGVybWlzc2lvbi5wYXRjaCA9IHRydWU7XG4gICAgJHNjb3BlLnBlcm1pc3Npb24uYWVyb3NvbCA9IHRydWU7XG4gICAgJHNjb3BlLnBlcm1pc3Npb24ud291bmQgPSB0cnVlO1xuICAgICRzY29wZS5wZXJtaXNzaW9uLm9ic2VydmF0aW9uID0gdHJ1ZTtcbiAgICAkc2NvcGUucGVybWlzc2lvbi5kcnVnVHJlYXRtZW50ID0gdHJ1ZTtcbiAgICAkc2NvcGUucGVybWlzc2lvbi5pbnN1bGluVGFraW5nID0gdHJ1ZTtcbiAgICAkc2NvcGUucGVybWlzc2lvbi50aGVyYXBldXRpYyA9IHRydWU7XG4gICAgJHNjb3BlLnBlcm1pc3Npb24uaW5qZWN0aW9uID0gdHJ1ZTtcblxufSIsInZhciBNb2JpbGl6YXRpb25DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBNb2JpbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgTW9iaWxpemF0aW9uU2VydmljZS5nZXRNb2JpbGl6YXRpb25zKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKG1vYmlsaXphdGlvbikge1xuICAgICAgICAgICAgbW9iaWxpemF0aW9uLmRhdGUgPSBuZXcgRGF0ZShtb2JpbGl6YXRpb24uZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gbW9iaWxpemF0aW9uO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwidmFyIEFkZE9ic2VydmF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBPYnNlcnZhdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLk9ic2VydmF0aW9uU2VydmljZSA9IE9ic2VydmF0aW9uU2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLmNvbW1lbnQgPSBcIlwiO1xuXG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xufTtcblxuQWRkT2JzZXJ2YXRpb25DdHJsLnByb3RvdHlwZS5ham91dGVyT2JzZXJ2YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5PYnNlcnZhdGlvblNlcnZpY2UuYWRkT2JzZXJ2YXRpb24odGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksIHRoaXMuJHNjb3BlLmNvbW1lbnQpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuICAgIF90aGlzLiRzdGF0ZS5nbygnb2JzZXJ2YXRpb24nKTtcbn07IiwidmFyIE9ic2VydmF0aW9uQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBPYnNlcnZhdGlvblNlcnZpY2UpIHtcbiAgICAkc2NvcGUgPSAkc2NvcGU7XG4gICAgJHNjb3BlLnNlbGVjdGVkT2JzZXJ2YXRpb25zID0gW107XG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnY29tbWVudCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnT2JzZXJ2YXRpb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiB0cnVlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkT2JzZXJ2YXRpb25zID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXG4gICAgfTtcblxuICAgIE9ic2VydmF0aW9uU2VydmljZS5nZXRPYnNlcnZhdGlvbnMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24ob2JzZXJ2YXRpb24pIHtcbiAgICAgICAgICAgIG9ic2VydmF0aW9uLmRhdGUgPSBuZXcgRGF0ZShvYnNlcnZhdGlvbi5kYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgJHNjb3BlLnJlbW92ZVNlbGVjdGVkT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBPYnNlcnZhdGlvblNlcnZpY2UucmVtb3ZlT2JzZXJ2YXRpb25zKCRzY29wZS5zZWxlY3RlZE9ic2VydmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3JlbG9hZCcsIHtyZWxvYWQ6J29ic2VydmF0aW9uJ30pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsInZhciBVcGRhdGVPYnNlcnZhdGlvbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIE9ic2VydmF0aW9uU2VydmljZSwgJHN0YXRlUGFyYW1zLCAkc3RhdGUpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLk9ic2VydmF0aW9uU2VydmljZSA9IE9ic2VydmF0aW9uU2VydmljZTtcbiAgICB0aGlzLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAkc2NvcGUuY29tbWVudCA9IFwiXCI7XG4gICAgJHNjb3BlLnVwZGF0ZSA9IHRydWU7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG5cbiAgICBPYnNlcnZhdGlvblNlcnZpY2UuZ2V0T2JzZXJ2YXRpb24oJHN0YXRlUGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXIgPSBkYXRhLmJvYXJkZXI7XG4gICAgICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoZGF0YS5kYXRlKTtcbiAgICAgICAgJHNjb3BlLmNvbW1lbnQgPSBkYXRhLmNvbW1lbnQ7XG4gICAgfSk7XG59O1xuXG5VcGRhdGVPYnNlcnZhdGlvbkN0cmwucHJvdG90eXBlLnVwZGF0ZU9ic2VydmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuT2JzZXJ2YXRpb25TZXJ2aWNlLnVwZGF0ZU9ic2VydmF0aW9uKHRoaXMuJHN0YXRlUGFyYW1zLmlkLCB0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXIuaWQsIHRoaXMuJHNjb3BlLmRhdGUsIHRoaXMuJHNjb3BlLmNvbW1lbnQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy4kc3RhdGUuZ28oJ29ic2VydmF0aW9uJyk7XG4gICAgfSk7XG59OyIsInZhciBQYXJhbWV0ZXJDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBQYXJhbWV0ZXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgUGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXJzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHBhcmFtZXRlcikge1xuICAgICAgICAgICAgcGFyYW1ldGVyLmRhdGUgPSBuZXcgRGF0ZShwYXJhbWV0ZXIuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwidmFyIEFkZFBhdGNoQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBQYXRjaFNlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLlBhdGNoU2VydmljZSA9IFBhdGNoU2VydmljZTtcbiAgICAkc2NvcGUuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgLy8kc2NvcGUuZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgICAvLyRzY29wZS5kYXRlRW5kID0gbmV3IERhdGUoKTtcbiAgICAkc2NvcGUuZG9jdG9yID0gXCJcIjtcbiAgICAkc2NvcGUubmFtZU1lZGljID0gXCJcIjtcbiAgICAkc2NvcGUudW5pdCA9IFwiXCI7XG4gICAgJHNjb3BlLmRvc2FnZSA9IDA7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG59O1xuXG5BZGRQYXRjaEN0cmwucHJvdG90eXBlLmFqb3V0ZXJQYXRjaCA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzID0gdGhpcztcbiAgICB0aGlzLlBhdGNoU2VydmljZS5hZGRQYXRjaCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5kb2N0b3IsdGhpcy4kc2NvcGUubmFtZU1lZGljLHRoaXMuJHNjb3BlLmRvc2FnZSx0aGlzLiRzY29wZS51bml0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgICBfdGhpcy4kc3RhdGUuZ28oJ3BhdGNoJyk7XG4gICAgICAgLy8gdGhpcy4kc2NvcGUuZGF0ZVN0YXJ0LmdldFRpbWUoKSxcbiAgICAgICAvLyB0aGlzLiRzY29wZS5kYXRlRW5kLmdldFRpbWUoKVxuXG59OyIsInZhciBQYXRjaEN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgUGF0Y2hTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuICAgICRzY29wZS5zZWxlY3RlZFBhdGNocyA9IFtdO1xuXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xuICAgICAgICBpMThuOiAnZnInLFxuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RvY3RvcicsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRG9jdGV1cidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IHRydWUsXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRQYXRjaHMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgUGF0Y2hTZXJ2aWNlLmdldFBhdGNocygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihwYXRjaCkge1xuICAgICAgICAgICAgcGF0Y2guZGF0ZSA9IG5ldyBEYXRlKHBhdGNoLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGNoO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICRzY29wZS5yZW1vdmVTZWxlY3RlZFBhdGNocyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUGF0Y2hTZXJ2aWNlLnJlbW92ZVBhdGNocygkc2NvcGUuc2VsZWN0ZWRQYXRjaHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdyZWxvYWQnLCB7cmVsb2FkOidwYXRjaCd9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJ2YXIgVXBkYXRlUGF0Y2hDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBQYXRjaFNlcnZpY2UsICRzdGF0ZVBhcmFtcywgJHN0YXRlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5QYXRjaFNlcnZpY2UgPSBQYXRjaFNlcnZpY2U7XG4gICAgdGhpcy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICRzY29wZS5kb2N0b3IgPSBcIlwiO1xuICAgICRzY29wZS5uYW1lTWVkaWMgPSBcIlwiO1xuICAgICRzY29wZS51bml0ID0gXCJcIjtcbiAgICAkc2NvcGUudXBkYXRlID0gdHJ1ZTtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcblxuICAgIFBhdGNoU2VydmljZS5nZXRQYXRjaCgkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlciA9IGRhdGEuYm9hcmRlcjtcbiAgICAgICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZShkYXRhLmRhdGUpO1xuICAgICAgICAkc2NvcGUuZGF0ZVN0YXJ0ID0gZGF0YS5kYXRlU3RhcnQ7XG4gICAgICAgICRzY29wZS5kYXRlRW5kID0gZGF0YS5kYXRlRW5kO1xuICAgICAgICAkc2NvcGUuZG9jdG9yID0gZGF0YS5kb2N0b3I7XG4gICAgICAgICRzY29wZS5uYW1lTWVkaWMgPSBkYXRhLm5hbWVNZWRpYztcbiAgICAgICAgJHNjb3BlLmRvc2FnZSA9IGRhdGEuZG9zYWdlO1xuICAgICAgICAkc2NvcGUudW5pdCA9IGRhdGEudW5pdDtcbiAgICB9KTtcbn07XG5cblVwZGF0ZVBhdGNoQ3RybC5wcm90b3R5cGUudXBkYXRlUGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5QYXRjaFNlcnZpY2UudXBkYXRlUGF0Y2godGhpcy4kc3RhdGVQYXJhbXMuaWQsIHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlci5pZCwgdGhpcy4kc2NvcGUuZGF0ZSwgdGhpcy4kc2NvcGUuZG9jdG9yLCB0aGlzLiRzY29wZS5uYW1lTWVkaWMsIHRoaXMuJHNjb3BlLmRvc2FnZSwgdGhpcy4kc2NvcGUudW5pdCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRzdGF0ZS5nbygncGF0Y2gnKTtcbiAgICB9KTtcbn07IiwidmFyIEFkZFN1cnJvdW5kaW5nU2tpbkN0cmwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIFN1cnJvdW5kaW5nU2tpblNlcnZpY2UpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLlN1cnJvdW5kaW5nU2tpblNlcnZpY2UgPSBTdXJyb3VuZGluZ1NraW5TZXJ2aWNlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcblxuICAgICRzY29wZS5oZWFsdGh5ID0gZmFsc2U7XG4gICAgJHNjb3BlLmZyYWdpbGUgPSBmYWxzZTtcbiAgICAkc2NvcGUuZHJ5ID0gZmFsc2U7XG4gICAgJHNjb3BlLmh5cGVycGlnbWVudGVkID0gZmFsc2U7XG4gICAgJHNjb3BlLmh5cGVya2VyYXRpb24gPSBmYWxzZTtcbiAgICAkc2NvcGUuaW5mbGFtbWF0b3J5ID0gZmFsc2U7XG4gICAgJHNjb3BlLm1hY2VyYXRlZCA9IGZhbHNlO1xuICAgICRzY29wZS51bGNlcmF0ZWQgPSBmYWxzZTtcblxuICAgICRzY29wZS5iYXRoID0gZmFsc2U7XG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcblxuICAgICRzY29wZS5vcHRpb25zID0ge1xuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNtZXJpZGlhbiA9IGZhbHNlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc21lcmlkaWFuID0gISAkc2NvcGUuaXNtZXJpZGlhbjtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUuZGF0ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xufTtcblxuQWRkU3Vycm91bmRpbmdTa2luQ3RybC5wcm90b3R5cGUuYWpvdXRlclN1cnJvdW5kaW5nU2tpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuU3Vycm91bmRpbmdTa2luU2VydmljZS5hZGRTdXJyb3VuZGluZ1NraW4odGhpcy4kc2NvcGUuc2VsZWN0ZWRCb2FyZGVyc1swXS5pZCwgdGhpcy4kc2NvcGUuZGF0ZS5nZXRUaW1lKCksdGhpcy4kc2NvcGUuaGVhbHRoeSx0aGlzLiRzY29wZS5mcmFnaWxlLHRoaXMuJHNjb3BlLmRyeSxcbiAgICAgICAgdGhpcy4kc2NvcGUuaHlwZXJwaWdtZW50ZWQsdGhpcy4kc2NvcGUuaHlwZXJrZXJhdGlvbix0aGlzLiRzY29wZS5pbmZsYW1tYXRvcnksdGhpcy4kc2NvcGUubWFjZXJhdGVkLHRoaXMuJHNjb3BlLnVsY2VyYXRlZCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG5cblxufTsiLCJ2YXIgU3Vycm91bmRpbmdTa2luQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgU3Vycm91bmRpbmdTa2luU2VydmljZSkge1xuICAgICRzY29wZSA9ICRzY29wZTtcblxuXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xuICAgICAgICBpMThuOiAnZnInLFxuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZEJvYXJkZXJzID0gYW5ndWxhci5jb3B5KHJvdy5jb25maWcuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dHcm91cFBhbmVsOiB0cnVlXG4gICAgfTtcblxuICAgIFN1cnJvdW5kaW5nU2tpblNlcnZpY2UuZ2V0U3Vycm91bmRpbmdTa2lucygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihzdXJyb3VuZGluZ1NraW4pIHtcbiAgICAgICAgICAgIHN1cnJvdW5kaW5nU2tpbi5kYXRlID0gbmV3IERhdGUoc3Vycm91bmRpbmdTa2luLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHN1cnJvdW5kaW5nU2tpbjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59OyIsInZhciBTd2FkZGxlQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBTd2FkZGxlU2VydmljZSkge1xuICAgICRzY29wZSA9ICRzY29wZTtcbiAgICAkc2NvcGUuc2VsZWN0ZWRTd2FkZGxlcyA9IFtdO1xuXG4gICAgJHNjb3BlLmdyaWRPcHRpb25zID0ge1xuICAgICAgICBpMThuOiAnZnInLFxuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdib2FyZGVyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlbnNpb25uYWlyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAndXNlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZXJzb25uZWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0RhdGUnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgICAgIHRvdGFsU2VydmVySXRlbXM6ICd0b3RhbFNlcnZlckl0ZW1zJyxcbiAgICAgICAgZW5hYmxlQ2VsbFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIG11bHRpU2VsZWN0OiB0cnVlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkU3dhZGRsZXMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgU3dhZGRsZVNlcnZpY2UuZ2V0U3dhZGRsZXMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24oc3dhZGRsZSkge1xuICAgICAgICAgICAgc3dhZGRsZS5kYXRlID0gbmV3IERhdGUoc3dhZGRsZS5kYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBzd2FkZGxlO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICRzY29wZS5yZW1vdmVTZWxlY3RlZFN3YWRkbGVzID0gZnVuY3Rpb24gKCkge1xuICAgIFN3YWRkbGVTZXJ2aWNlLnJlbW92ZVN3YWRkbGVzKCRzY29wZS5zZWxlY3RlZFN3YWRkbGVzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHN0YXRlLmdvKCdyZWxvYWQnLCB7cmVsb2FkOidzd2FkZGxlJ30pO1xuICAgIH0pO1xufVxufTsiLCJ2YXIgQWRkVGhlcmFwZXV0aWNDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIFRoZXJhcGV1dGljU2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuVGhlcmFwZXV0aWNTZXJ2aWNlID0gVGhlcmFwZXV0aWNTZXJ2aWNlO1xuICAgICRzY29wZS5kYXRlID0gbmV3IERhdGUoKTtcbiAgICAkc2NvcGUucHJlcGFyYXRpb24gPSBmYWxzZTtcbiAgICAkc2NvcGUuYWRNb3JuaW5nID0gZmFsc2U7XG4gICAgJHNjb3BlLmFkTWlkZGF5ID0gZmFsc2U7XG4gICAgJHNjb3BlLmFkRXZlbmluZyA9IGZhbHNlO1xuICAgICRzY29wZS5hZE5pZ2h0ID0gZmFsc2U7XG5cblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbn07XG5cbkFkZFRoZXJhcGV1dGljQ3RybC5wcm90b3R5cGUuYWpvdXRlclRoZXJhcGV1dGljID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuVGhlcmFwZXV0aWNTZXJ2aWNlLmFkZFRoZXJhcGV1dGljKHRoaXMuJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnNbMF0uaWQsIHRoaXMuJHNjb3BlLmRhdGUuZ2V0VGltZSgpLHRoaXMuJHNjb3BlLnByZXBhcmF0aW9uLFxuICAgIHRoaXMuJHNjb3BlLmFkTW9ybmluZyx0aGlzLiRzY29wZS5hZE1pZGRheSx0aGlzLiRzY29wZS5hZEV2ZW5pbmcsdGhpcy4kc2NvcGUuYWROaWdodCkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4gICAgX3RoaXMuJHN0YXRlLmdvKCd0aGVyYXBldXRpYycpO1xufTsiLCJ2YXIgVGhlcmFwZXV0aWNDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIFRoZXJhcGV1dGljU2VydmljZSkge1xuICAgICRzY29wZSA9ICRzY29wZTtcbiAgICAkc2NvcGUuc2VsZWN0ZWRUaGVyYXBldXRpY3MgPSBbXTtcblxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcbiAgICAgICAgaTE4bjogJ2ZyJyxcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxuICAgICAgICBjb2x1bW5EZWZzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdwcmVwYXJhdGlvbicsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUHLDqXBhcmF0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBtdWx0aVNlbGVjdDogdHJ1ZSxcbiAgICAgICAgYWZ0ZXJTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHJvdywgZXZlbnQpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZFRoZXJhcGV1dGljcyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xuICAgICAgICB9LFxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxuICAgIH07XG5cbiAgICBUaGVyYXBldXRpY1NlcnZpY2UuZ2V0VGhlcmFwZXV0aWNzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHRoZXJhcGV1dGljKSB7XG4gICAgICAgICAgICB0aGVyYXBldXRpYy5kYXRlID0gbmV3IERhdGUodGhlcmFwZXV0aWMuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhlcmFwZXV0aWM7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgICRzY29wZS5yZW1vdmVTZWxlY3RlZFRoZXJhcGV1dGljcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgVGhlcmFwZXV0aWNTZXJ2aWNlLnJlbW92ZVRoZXJhcGV1dGljcygkc2NvcGUuc2VsZWN0ZWRUaGVyYXBldXRpY3MpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdyZWxvYWQnLCB7cmVsb2FkOid0aGVyYXBldXRpYyd9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJ2YXIgVXBkYXRlVGhlcmFwZXV0aWNDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUaGVyYXBldXRpY1NlcnZpY2UsICRzdGF0ZVBhcmFtcywgJHN0YXRlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5UaGVyYXBldXRpY1NlcnZpY2UgPSBUaGVyYXBldXRpY1NlcnZpY2U7XG4gICAgdGhpcy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cbiAgICAkc2NvcGUudXBkYXRlID0gdHJ1ZTtcblxuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG5cbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgICAgaHN0ZXA6IFsxLCAyLCAzXSxcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSBmYWxzZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNtZXJpZGlhbiA9ICEgJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcblxuICAgICRzY29wZS5jaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLmRhdGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcblxuICAgIFRoZXJhcGV1dGljU2VydmljZS5nZXRUaGVyYXBldXRpYygkc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlciA9IGRhdGEuYm9hcmRlcjtcbiAgICAgICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZShkYXRhLmRhdGUpO1xuICAgICAgICAkc2NvcGUucHJlcGFyYXRpb24gPSBkYXRhLnByZXBhcmF0aW9uO1xuICAgICAgICAkc2NvcGUuYWRNb3JuaW5nID0gZGF0YS5hZE1vcm5pbmc7XG4gICAgICAgICRzY29wZS5hZE1pZGRheSA9IGRhdGEuYWRNaWRkYXk7XG4gICAgICAgICRzY29wZS5hZEV2ZW5pbmcgPSBkYXRhLmFkRXZlbmluZztcbiAgICAgICAgJHNjb3BlLmFkTmlnaHQgPSBkYXRhLmFkTmlnaHQ7XG4gICAgfSk7XG59O1xuXG5VcGRhdGVUaGVyYXBldXRpY0N0cmwucHJvdG90eXBlLnVwZGF0ZVRoZXJhcGV1dGljID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuVGhlcmFwZXV0aWNTZXJ2aWNlLnVwZGF0ZVRoZXJhcGV1dGljKHRoaXMuJHN0YXRlUGFyYW1zLmlkLCB0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXIuaWQsIHRoaXMuJHNjb3BlLmRhdGUsIHRoaXMuJHNjb3BlLnByZXBhcmF0aW9uLFxuICAgICAgICB0aGlzLiRzY29wZS5hZE1vcm5pbmcsdGhpcy4kc2NvcGUuYWRNaWRkYXksdGhpcy4kc2NvcGUuYWRFdmVuaW5nLHRoaXMuJHNjb3BlLmFkTmlnaHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy4kc3RhdGUuZ28oJ3RoZXJhcGV1dGljJyk7XG4gICAgfSk7XG59OyIsInZhciBUb2lsZXRIZWxwaW5nQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgVG9pbGV0SGVscGluZ1NlcnZpY2UpIHtcbiAgICAkc2NvcGUgPSAkc2NvcGU7XG5cblxuICAgICRzY29wZS5ncmlkT3B0aW9ucyA9IHtcbiAgICAgICAgaTE4bjogJ2ZyJyxcbiAgICAgICAgZGF0YTogJ2RhdGEnLFxuICAgICAgICBjb2x1bW5EZWZzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnYm9hcmRlci5uYW1lJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdQZW5zaW9ubmFpcmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ3VzZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVyc29ubmVsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA6ICdEYXRlJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxuICAgICAgICB0b3RhbFNlcnZlckl0ZW1zOiAndG90YWxTZXJ2ZXJJdGVtcycsXG4gICAgICAgIGVuYWJsZUNlbGxTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgICAgIGFmdGVyU2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbihyb3csIGV2ZW50KSB7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRCb2FyZGVycyA9IGFuZ3VsYXIuY29weShyb3cuY29uZmlnLnNlbGVjdGVkSXRlbXMpO1xuICAgICAgICB9LFxuICAgICAgICBzaG93R3JvdXBQYW5lbDogdHJ1ZVxuICAgIH07XG5cbiAgICBUb2lsZXRIZWxwaW5nU2VydmljZS5nZXRUb2lsZXRIZWxwaW5ncygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbih0b2lsZXRIZWxwaW5nKSB7XG4gICAgICAgICAgICB0b2lsZXRIZWxwaW5nLmRhdGUgPSBuZXcgRGF0ZSh0b2lsZXRIZWxwaW5nLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRvaWxldEhlbHBpbmc7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTsiLCJ2YXIgQWRkVHJlYXRtZW50Q3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgVHJlYXRtZW50U2VydmljZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuVHJlYXRtZW50U2VydmljZSA9IFRyZWF0bWVudFNlcnZpY2U7XG4gICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgJHNjb3BlLnBzdCA9IGZhbHNlO1xuICAgICRzY29wZS5pcnJpZ2F0aW9uID0gZmFsc2U7XG4gICAgJHNjb3BlLnRoZXJhcGV1dGljQmF0aCA9IGZhbHNlO1xuICAgICRzY29wZS5kcmlsbFdpZHRoID0gMDtcbiAgICAkc2NvcGUuZHJpbGxMZW5ndGggPSAwO1xuICAgICRzY29wZS5kZWJyaWRlbWVudCA9IGZhbHNlO1xuICAgICRzY29wZS50cmVhdG1lbnRPdGhlciA9IFwiXCI7XG5cbiAgICAkc2NvcGUuaHN0ZXAgPSAxO1xuICAgICRzY29wZS5tc3RlcCA9IDE1O1xuXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXG4gICAgfTtcblxuICAgICRzY29wZS5pc21lcmlkaWFuID0gZmFsc2U7XG4gICAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmlzbWVyaWRpYW4gPSAhICRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgY2hhbmdlZCB0bzogJyArICRzY29wZS5kYXRlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5teXRpbWUgPSBudWxsO1xuICAgIH07XG59O1xuXG5BZGRUcmVhdG1lbnRDdHJsLnByb3RvdHlwZS5ham91dGVyVHJlYXRtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5UcmVhdG1lbnRTZXJ2aWNlLmFkZFRyZWF0bWVudCh0aGlzLiRzY29wZS5zZWxlY3RlZEJvYXJkZXJzWzBdLmlkLCB0aGlzLiRzY29wZS5kYXRlLmdldFRpbWUoKSx0aGlzLiRzY29wZS5wc3QsdGhpcy4kc2NvcGUuaXJyaWdhdGlvbixcbiAgICAgICAgdGhpcy4kc2NvcGUudGhlcmFwZXV0aWNCYXRoLFxuICAgICAgICB0aGlzLiRzY29wZS5kcmlsbFdpZHRoLFxuICAgICAgICB0aGlzLiRzY29wZS5kcmlsbExlbmd0aCxcbiAgICAgICAgdGhpcy4kc2NvcGUuZGVicmlkZW1lbnQsXG4gICAgICAgIHRoaXMuJHNjb3BlLnRyZWF0bWVudE90aGVyKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcblxuXG59OyIsInZhciBUcmVhdG1lbnRDdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCBUcmVhdG1lbnRTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgVHJlYXRtZW50U2VydmljZS5nZXRUcmVhdG1lbnRzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uKHRyZWF0bWVudCkge1xuICAgICAgICAgICAgdHJlYXRtZW50LmRhdGUgPSBuZXcgRGF0ZSh0cmVhdG1lbnQuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJlYXRtZW50O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwidmFyIFdvdW5kQ3RybCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgV291bmRTZXJ2aWNlKSB7XG4gICAgJHNjb3BlID0gJHNjb3BlO1xuXG5cbiAgICAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gICAgICAgIGkxOG46ICdmcicsXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkIDogJ2JvYXJkZXIubmFtZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnUGVuc2lvbm5haXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA6ICd1c2VyLm5hbWUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ1BlcnNvbm5lbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lIDogJ0Rlc2NyaXB0aW9uIGRlcyBzb2lucydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQgOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgOiAnRGF0ZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgdG90YWxTZXJ2ZXJJdGVtczogJ3RvdGFsU2VydmVySXRlbXMnLFxuICAgICAgICBlbmFibGVDZWxsU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBhZnRlclNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24ocm93LCBldmVudCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQm9hcmRlcnMgPSBhbmd1bGFyLmNvcHkocm93LmNvbmZpZy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0dyb3VwUGFuZWw6IHRydWVcbiAgICB9O1xuXG4gICAgV291bmRTZXJ2aWNlLmdldFdvdW5kcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbih3b3VuZCkge1xuICAgICAgICAgICAgd291bmQuZGF0ZSA9IG5ldyBEYXRlKHdvdW5kLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHdvdW5kO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwiJ3VzZXIgc3RyaWN0JztcblxudmFyIG1vZHVsZURpcmVjdGl2ZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFsnYXBwLnNlcnZpY2VzJ10pO1xuXG5tb2R1bGVEaXJlY3RpdmUuZGlyZWN0aXZlKFwiYm9hcmRlcmxpc3RcIiwgcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9Cb2FyZGVyTGlzdERpcmVjdGl2ZVwiKSk7XG4iLCJ2YXIgQm9hcmRlckxpc3REaXJlY3RpdmUgPSBtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbihCb2FyZGVyU2VydmljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBzZWxlY3RlZEJvYXJkZXJzOiBcIj1cIixcbiAgICAgICAgICAgIHNob3dEZXRhaWxlZEluZm9ybWF0aW9uczogXCJAXCJcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbGxlcjogXCJCb2FyZGVyQ3RybFwiLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvYm9hcmRlcmxpc3QuaHRtbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICB9XG4gICAgfTtcbn07IiwiJ3VzZXIgc3RyaWN0JztcbnZhciBSb3V0ZVNlcnZpY2UgPSByZXF1aXJlKCdSb3V0ZVNlcnZpY2UnKTtcblxudmFyIG1vZHVsZVNlcnZpY2UgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xuXG5tb2R1bGVTZXJ2aWNlLmNvbnN0YW50KCdTRVJWRVJfUk9PVCcsIFJvdXRlU2VydmljZSgpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkxvZ2luU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0xvZ2luU2VydmljZScpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkJvYXJkZXJTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvQm9hcmRlclNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJNZWFsU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL01lYWxTZXJ2aWNlJykpO1xubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiU3dhZGRsZVNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9Td2FkZGxlU2VydmljZScpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkluc3VsaW5Eb3NhZ2VTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSW5zdWxpbkRvc2FnZVNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJPYnNlcnZhdGlvblNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9PYnNlcnZhdGlvblNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJQYXRjaFNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9QYXRjaFNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJBZXJvc29sU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0Flcm9zb2xTZXJ2aWNlJykpO1xubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiV291bmRTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvV291bmRTZXJ2aWNlJykpO1xubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiRHJ1Z1RyZWF0bWVudFNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9EcnVnVHJlYXRtZW50U2VydmljZScpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkluc3VsaW5UYWtpbmdTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSW5zdWxpblRha2luZ1NlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJUaGVyYXBldXRpY1NlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9UaGVyYXBldXRpY1NlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbmplY3Rpb25TZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSW5qZWN0aW9uU2VydmljZScpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkh5Z2llbmVTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSHlnaWVuZVNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJDbG90aGluZ1NlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9DbG90aGluZ1NlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJNb2JpbGl6YXRpb25TZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvTW9iaWxpemF0aW9uU2VydmljZScpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIlRvaWxldEhlbHBpbmdTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvVG9pbGV0SGVscGluZ1NlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJJbmNvbnRpbmVuY2VTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvSW5jb250aW5lbmNlU2VydmljZScpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkVhdFNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9FYXRTZXJ2aWNlJykpO1xubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiUGFyYW1ldGVyU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1BhcmFtZXRlclNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJEaXNvcmRlclNlcnZpY2VcIiwgcmVxdWlyZSgnLi9zZXJ2aWNlcy9EaXNvcmRlclNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJBc3BlY3RTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvQXNwZWN0U2VydmljZScpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIk1lYXN1cmVTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvTWVhc3VyZVNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJFbWJhbmttZW50U2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL0VtYmFua21lbnRTZXJ2aWNlJykpO1xubW9kdWxlU2VydmljZS5zZXJ2aWNlKFwiU3Vycm91bmRpbmdTa2luU2VydmljZVwiLCByZXF1aXJlKCcuL3NlcnZpY2VzL1N1cnJvdW5kaW5nU2tpblNlcnZpY2UnKSk7XG5tb2R1bGVTZXJ2aWNlLnNlcnZpY2UoXCJUcmVhdG1lbnRTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvVHJlYXRtZW50U2VydmljZScpKTtcbm1vZHVsZVNlcnZpY2Uuc2VydmljZShcIkJhbmRhZ2VTZXJ2aWNlXCIsIHJlcXVpcmUoJy4vc2VydmljZXMvQmFuZGFnZVNlcnZpY2UnKSk7XG5cbiIsInZhciBBZXJvc29sU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbkFlcm9zb2xTZXJ2aWNlLnByb3RvdHlwZS5hZGRBZXJvc29sID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZG9jdG9yLCBuYW1lTWVkaWMsIGRvc2FnZSwgdW5pdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXG4gICAgICAgIC8vIFwiJmRhdGVTdGFydD1cIiArIGRhdGVTdGFydCArXG4gICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcbiAgICAgICAgXCImZG9jdG9yPVwiICsgZG9jdG9yICtcbiAgICAgICAgXCImbmFtZU1lZGljPVwiICsgbmFtZU1lZGljICtcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcbiAgICAgICAgXCImdW5pdD1cIiArIHVuaXQgO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdhZXJvc29sJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5BZXJvc29sU2VydmljZS5wcm90b3R5cGUuZ2V0QWVyb3NvbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdhZXJvc29sL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07XG5cbkFlcm9zb2xTZXJ2aWNlLnByb3RvdHlwZS5nZXRBZXJvc29sID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdhZXJvc29sP2lkPScgKyBpZCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcblxuXG5BZXJvc29sU2VydmljZS5wcm90b3R5cGUudXBkYXRlQWVyb3NvbCA9IGZ1bmN0aW9uIChpZCwgaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9ICdpZD0nICsgaWQgKyAnJmJvYXJkZXI9JyArIGlkQm9hcmRlciArICcmZGF0ZT0nICsgZGF0ZS5nZXRUaW1lKCk7XG4gICAgZGF0YSArPSAnJmRvY3Rvcj0nICsgZG9jdG9yICsgJyZuYW1lTWVkaWM9JyArIG5hbWVNZWRpYyArICcmZG9zYWdlPScgKyBkb3NhZ2UgKyAnJnVuaXQ9JyArIHVuaXQ7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYWVyb3NvbD8nICsgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTsiLCJ2YXIgQXNwZWN0U2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbkFzcGVjdFNlcnZpY2UucHJvdG90eXBlLmFkZEFzcGVjdCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHJlZG5lc3MsIGZpYnJpbiwgbmVjcm9zaXMsIHBpbmssIGFzcGVjdE90aGVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcbiAgICAgICAgXCImcmVkbmVzcz1cIiArIHJlZG5lc3MgK1xuICAgICAgICBcIiZmaWJyaW49XCIgKyBmaWJyaW4gK1xuICAgICAgICBcIiZuZWNyb3Npcz1cIiArIG5lY3Jvc2lzICtcbiAgICAgICAgXCImcGluaz1cIiArIHBpbmsgK1xuICAgICAgICBcIiZhc3BlY3RPdGhlcj1cIiArIGFzcGVjdE90aGVyO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdhc3BlY3QnLCBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cbkFzcGVjdFNlcnZpY2UucHJvdG90eXBlLmdldEFzcGVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdhc3BlY3QvYWxsJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTsiLCJ2YXIgQmFuZGFnZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcbiAgICB0aGlzLiRxID0gJHE7XG59O1xuXG5CYW5kYWdlU2VydmljZS5wcm90b3R5cGUuYWRkQmFuZGFnZSA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHByb2R1Y3QsIGJhbmRhZ2VDb3ZlcmluZywgY29tbWVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXG4gICAgICAgIFwiJnByb2R1Y3Q9XCIgKyBwcm9kdWN0ICtcbiAgICAgICAgXCImYmFuZGFnZUNvdmVyaW5nPVwiICsgYmFuZGFnZUNvdmVyaW5nICtcbiAgICAgICAgXCImY29tbWVudD1cIiArIGNvbW1lbnQ7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYmFuZGFnZScsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuQmFuZGFnZVNlcnZpY2UucHJvdG90eXBlLmdldEJhbmRhZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnYmFuZGFnZS9hbGwnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59OyIsInZhciBCb2FyZGVyU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbkJvYXJkZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRCb2FyZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2JvYXJkZXIvYWxsJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcblxuQm9hcmRlclNlcnZpY2UucHJvdG90eXBlLmdldEJvYXJkZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2JvYXJkZXI/aWQ9JyArIGlkLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59O1xuQm9hcmRlclNlcnZpY2UucHJvdG90eXBlLmFkZEJvYXJkZXIgPSBmdW5jdGlvbiAoIG5hbWUsIHN1cm5hbWUsIHJvb20sIGFnZSwgZGF0ZUJpcnRoLCBtdXR1ZWwsIHBlcnNvblJlc3BvbnNpYmxlLCBwaG9uZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSBcIm5hbWU9XCIgKyBuYW1lICtcbiAgICAgICAgXCImc3VybmFtZT1cIiArIHN1cm5hbWUgK1xuICAgICAgICBcIiZyb29tPVwiICsgcm9vbSArXG4gICAgICAgIFwiJmFnZT1cIiArIGFnZSArXG4gICAgICAgIFwiJmRhdGVCaXJ0aD1cIiArIGRhdGVCaXJ0aCArXG4gICAgICAgIFwiJm11dHVlbD1cIiArIG11dHVlbCArXG4gICAgICAgIFwiJnBlcnNvblJlc3BvbnNpYmxlPVwiICsgcGVyc29uUmVzcG9uc2libGUgK1xuICAgICAgICBcIiZwaG9uZT1cIiArIHBob25lO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdib2FyZGVyJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuQm9hcmRlclNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUJvYXJkZXIgPSBmdW5jdGlvbiAoaWQsIG5hbWUsIHN1cm5hbWUsIHJvb20sIGFnZSwgZGF0ZUJpcnRoLCBtdXR1ZWwsIHBlcnNvblJlc3BvbnNpYmxlLCBwaG9uZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSAnaWQ9JyArIGlkICsgJyZuYW1lPScgKyBuYW1lICsgJyZzdXJuYW1lPScgKyBzdXJuYW1lO1xuICAgIGRhdGEgKz0gJyZyb29tPScgKyByb29tICsgJyZhZ2U9JyArIGFnZSArICcmZGF0ZUJpcnRoPScgKyBkYXRlQmlydGggKyAnJm11dHVlbD0nICsgbXV0dWVsICsgJyZwZXJzb25SZXNwb25zaWJsZT0nICsgcGVyc29uUmVzcG9uc2libGUgKyAnJnBob2VuPScgKyBwaG9uZTtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQodGhpcy5TRVJWRVJfUk9PVCArICdib2FyZGVyPycgKyBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59O1xuXG5Cb2FyZGVyU2VydmljZS5wcm90b3R5cGUucmVtb3ZlQm9hcmRlciA9IGZ1bmN0aW9uIChpZEJvYXJkZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZSh0aGlzLlNFUlZFUl9ST09UICsgJ2JvYXJkZXI/aWQ9JyArIGlkQm9hcmRlciwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5Cb2FyZGVyU2VydmljZS5wcm90b3R5cGUucmVtb3ZlQm9hcmRlcnMgPSBmdW5jdGlvbiAoYm9hcmRlcnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkZWZlckdsb2JhbCA9IHRoaXMuJHEuZGVmZXIoKTtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBib2FyZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChib2FyZGVyKSB7XG4gICAgICAgIHZhciBkZWZlciA9IF90aGlzLiRxLmRlZmVyKCk7XG4gICAgICAgIF90aGlzLnJlbW92ZUJvYXJkZXIoYm9hcmRlci5pZCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWZlci5yZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9taXNlcy5wdXNoKGRlZmVyLnByb21pc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuJHEuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVmZXJHbG9iYWwucmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlckdsb2JhbC5wcm9taXNlO1xufSIsInZhciBDbG90aGluZ1NlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcbiAgICB0aGlzLiRxID0gJHE7XG59O1xuXG5DbG90aGluZ1NlcnZpY2UucHJvdG90eXBlLmFkZENsb3RoaW5nID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgY2xvdGhpbmdDb21wbGV0ZSwgY2xvdGhpbmdTdGltdWxhdGVkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcbiAgICAgICAgXCImY2xvdGhpbmdDb21wbGV0ZT1cIiArIGNsb3RoaW5nQ29tcGxldGUgK1xuICAgICAgICBcIiZjbG90aGluZ1N0aW11bGF0ZWQ9XCIgKyBjbG90aGluZ1N0aW11bGF0ZWQ7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2Nsb3RoaW5nJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5DbG90aGluZ1NlcnZpY2UucHJvdG90eXBlLmdldENsb3RoaW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2Nsb3RoaW5nL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07IiwidmFyIERpc29yZGVyU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbkRpc29yZGVyU2VydmljZS5wcm90b3R5cGUuYWRkRGlzb3JkZXIgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCB0aW1lRGlzb3JpZW50YXRpb24sIHNwYWNlRGlzb3JpZW50YXRpb24sIHRlcm1EaWZmaWN1bHR5LCB2ZXJiYWxEaWZmaWN1bHR5LCBsb3NzQ29uY2VwdCwgYWdpdGF0ZWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZ0aW1lRGlzb3JpZW50YXRpb249XCIgKyB0aW1lRGlzb3JpZW50YXRpb24gK1xuICAgICAgICBcIiZzcGFjZURpc29yaWVudGF0aW9uPVwiICsgc3BhY2VEaXNvcmllbnRhdGlvbiArXG4gICAgICAgIFwiJnRlcm1EaWZmaWN1bHR5PVwiICsgdGVybURpZmZpY3VsdHkgK1xuICAgICAgICBcIiZ2ZXJiYWxEaWZmaWN1bHR5PVwiICsgdmVyYmFsRGlmZmljdWx0eSArXG4gICAgICAgIFwiJmxvc3NDb25jZXB0PVwiICsgbG9zc0NvbmNlcHQgK1xuICAgICAgICBcIiZhZ2l0YXRlZD1cIiArIGFnaXRhdGVkO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdkaXNvcmRlcicsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuRGlzb3JkZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXREaXNvcmRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdkaXNvcmRlci9hbGwnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59OyIsInZhciBEcnVnVHJlYXRtZW50U2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbkRydWdUcmVhdG1lbnRTZXJ2aWNlLnByb3RvdHlwZS5hZGREcnVnVHJlYXRtZW50ID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZG9jdG9yLCBuYW1lTWVkaWMsIGRvc2FnZSwgdW5pdCwgbW9ybmluZywgbWlkZGF5LCBldmVuaW5nLCBuaWdodCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXG4gICAgICAgIC8vIFwiJmRhdGVTdGFydD1cIiArIGRhdGVTdGFydCArXG4gICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcbiAgICAgICAgXCImZG9jdG9yPVwiICsgZG9jdG9yICtcbiAgICAgICAgXCImbmFtZU1lZGljPVwiICsgbmFtZU1lZGljICtcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcbiAgICAgICAgXCImdW5pdD1cIiArIHVuaXQgK1xuICAgICAgICBcIiZtb3JuaW5nPVwiICsgbW9ybmluZyArXG4gICAgICAgIFwiJm1pZGRheT1cIiArIG1pZGRheSArXG4gICAgICAgIFwiJmV2ZW5pbmc9XCIgKyBldmVuaW5nICtcbiAgICAgICAgXCImbmlnaHQ9XCIgKyBuaWdodCA7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2RydWdUcmVhdG1lbnQnLCBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cbkRydWdUcmVhdG1lbnRTZXJ2aWNlLnByb3RvdHlwZS5nZXREcnVnVHJlYXRtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2RydWdUcmVhdG1lbnQvYWxsJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTsiLCJ2YXIgRWF0U2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbkVhdFNlcnZpY2UucHJvdG90eXBlLmFkZEVhdCA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIHByaW9yQWlkLCBmdWxsQWlkLCBlYXRTdGltdWxhdGVkLCBoeWRyYXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZwcmlvckFpZD1cIiArIHByaW9yQWlkICtcbiAgICAgICAgXCImZnVsbEFpZD1cIiArIGZ1bGxBaWQgK1xuICAgICAgICBcIiZlYXRTdGltdWxhdGVkPVwiICsgZWF0U3RpbXVsYXRlZCArXG4gICAgICAgIFwiJmh5ZHJhdGlvbj1cIiArIGh5ZHJhdGlvbiA7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2VhdCcsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuRWF0U2VydmljZS5wcm90b3R5cGUuZ2V0RWF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2VhdC9hbGwnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59OyIsInZhciBFbWJhbmttZW50U2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbkVtYmFua21lbnRTZXJ2aWNlLnByb3RvdHlwZS5hZGRFbWJhbmttZW50ID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgcmVndWxhciwgaXJyZWd1bGFyLCBmdXJyb3csIGRldGFjaG1lbnQsIGJ1ZGRpbmcpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZyZWd1bGFyPVwiICsgcmVndWxhciArXG4gICAgICAgIFwiJmlycmVndWxhcj1cIiArIGlycmVndWxhciArXG4gICAgICAgIFwiJmZ1cnJvdz1cIiArIGZ1cnJvdyArXG4gICAgICAgIFwiJmRldGFjaG1lbnQ9XCIgKyBkZXRhY2htZW50ICtcbiAgICAgICAgXCImYnVkZGluZz1cIiArIGJ1ZGRpbmcgO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdlbWJhbmttZW50JywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5FbWJhbmttZW50U2VydmljZS5wcm90b3R5cGUuZ2V0RW1iYW5rbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdlbWJhbmttZW50L2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07IiwidmFyIEh5Z2llbmVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XG4gICAgdGhpcy4kcSA9ICRxO1xufTtcblxuSHlnaWVuZVNlcnZpY2UucHJvdG90eXBlLmFkZEh5Z2llbmUgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCB0b2lsZXRQYXJ0aWVsLCB0b2lsZXRDb21wbGV0ZSwgaHlnaWVuZVN0aW11bGF0ZWQsIGJhdGgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZ0b2lsZXRQYXJ0aWVsPVwiICsgdG9pbGV0UGFydGllbCArXG4gICAgICAgIFwiJnRvaWxldENvbXBsZXRlPVwiICsgdG9pbGV0Q29tcGxldGUgK1xuICAgICAgICBcIiZoeWdpZW5lU3RpbXVsYXRlZD1cIiArIGh5Z2llbmVTdGltdWxhdGVkICtcbiAgICAgICAgXCImYmF0aD1cIiArIGJhdGggO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdoeWdpZW5lJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5IeWdpZW5lU2VydmljZS5wcm90b3R5cGUuZ2V0SHlnaWVuZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdoeWdpZW5lL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07IiwidmFyIEluY29udGluZW5jZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcbiAgICB0aGlzLiRxID0gJHE7XG59O1xuXG5JbmNvbnRpbmVuY2VTZXJ2aWNlLnByb3RvdHlwZS5hZGRJbmNvbnRpbmVuY2UgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkaXVybmFsLCBub2N0dXJuYWwsIGJvdGgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZkaXVybmFsPVwiICsgZGl1cm5hbCArXG4gICAgICAgIFwiJm5vY3R1cm5hbD1cIiArIG5vY3R1cm5hbCArXG4gICAgICAgIFwiJmJvdGg9XCIgKyBib3RoIDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5jb250aW5lbmNlJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5JbmNvbnRpbmVuY2VTZXJ2aWNlLnByb3RvdHlwZS5nZXRJbmNvbnRpbmVuY2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5jb250aW5lbmNlL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07IiwidmFyIEluamVjdGlvblNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcbiAgICB0aGlzLiRxID0gJHE7XG59O1xuXG5JbmplY3Rpb25TZXJ2aWNlLnByb3RvdHlwZS5hZGRJbmplY3Rpb24gPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIGVzdGFibGlzaG1lbnQsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcbiAgICAgICAgLy8gXCImZGF0ZVN0YXJ0PVwiICsgZGF0ZVN0YXJ0ICtcbiAgICAgICAgLy8gXCImZGF0ZUVuZD1cIiArIGRhdGVFbmQgK1xuICAgICAgICBcIiZkb2N0b3I9XCIgKyBkb2N0b3IgK1xuICAgICAgICBcIiZlc3RhYmxpc2htZW50PVwiICsgZXN0YWJsaXNobWVudCArXG4gICAgICAgIFwiJm5hbWVNZWRpYz1cIiArIG5hbWVNZWRpYyArXG4gICAgICAgIFwiJmRvc2FnZT1cIiArIGRvc2FnZSArXG4gICAgICAgIFwiJnVuaXQ9XCIgKyB1bml0IDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5qZWN0aW9uJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5JbmplY3Rpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRJbmplY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5qZWN0aW9uL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07XG5JbmplY3Rpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRJbmplY3Rpb24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2luamVjdGlvbj9pZD0nICsgaWQsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07XG5cblxuSW5qZWN0aW9uU2VydmljZS5wcm90b3R5cGUudXBkYXRlSW5qZWN0aW9uID0gZnVuY3Rpb24gKGlkLCBpZEJvYXJkZXIsIGRhdGUsIGRvY3RvciwgZXN0YWJsaXNobWVudCwgbmFtZU1lZGljLCBkb3NhZ2UsIHVuaXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gJ2lkPScgKyBpZCArICcmYm9hcmRlcj0nICsgaWRCb2FyZGVyICsgJyZkYXRlPScgKyBkYXRlLmdldFRpbWUoKTtcbiAgICBkYXRhICs9ICcmZG9jdG9yPScgKyBkb2N0b3IgKyBcIiZlc3RhYmxpc2htZW50PVwiICsgZXN0YWJsaXNobWVudCArICcmbmFtZU1lZGljPScgKyBuYW1lTWVkaWMgKyAnJmRvc2FnZT0nICsgZG9zYWdlICsgJyZ1bml0PScgKyB1bml0O1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dCh0aGlzLlNFUlZFUl9ST09UICsgJ2luamVjdGlvbj8nICsgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcbkluamVjdGlvblNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUluamVjdGlvbiA9IGZ1bmN0aW9uIChpZEluamVjdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZGVsZXRlKHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5qZWN0aW9uP2lkPScgKyBpZEluamVjdGlvbiwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5JbmplY3Rpb25TZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVJbmplY3Rpb25zID0gZnVuY3Rpb24gKGluamVjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkZWZlckdsb2JhbCA9IHRoaXMuJHEuZGVmZXIoKTtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBpbmplY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGluamVjdGlvbikge1xuICAgICAgICB2YXIgZGVmZXIgPSBfdGhpcy4kcS5kZWZlcigpO1xuICAgICAgICBfdGhpcy5yZW1vdmVJbmplY3Rpb24oaW5qZWN0aW9uLmlkKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb21pc2VzLnB1c2goZGVmZXIucHJvbWlzZSk7XG4gICAgfSk7XG4gICAgdGhpcy4kcS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWZlckdsb2JhbC5yZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVyR2xvYmFsLnByb21pc2U7XG59OyIsInZhciBJbnN1bGluRG9zYWdlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLnByb3RvdHlwZS5hZGRJbnN1bGluRG9zYWdlID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgZG9zYWdlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5Eb3NhZ2UnLCBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cbkluc3VsaW5Eb3NhZ2VTZXJ2aWNlLnByb3RvdHlwZS5nZXRJbnN1bGluRG9zYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5Eb3NhZ2UvYWxsJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcbiAgICBJbnN1bGluRG9zYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdWxpbkRvc2FnZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluRG9zYWdlP2lkPScgKyBpZCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuSW5zdWxpbkRvc2FnZVNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUluc3VsaW5Eb3NhZ2UgPSBmdW5jdGlvbiAoaWQsIGlkQm9hcmRlciwgZGF0ZSwgZG9zYWdlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gJ2lkPScgKyBpZCArICcmYm9hcmRlcj0nICsgaWRCb2FyZGVyICsgJyZkYXRlPScgKyBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgZGF0YSArPSAnJmRvc2FnZT0nICsgZG9zYWdlO1xuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluRG9zYWdlPycgKyBkYXRhLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuSW5zdWxpbkRvc2FnZVNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUluc3VsaW5Eb3NhZ2UgPSBmdW5jdGlvbiAoaWRJbnN1bGluRG9zYWdlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGUodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluRG9zYWdlP2lkPScgKyBpZEluc3VsaW5Eb3NhZ2UsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuSW5zdWxpbkRvc2FnZVNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUluc3VsaW5Eb3NhZ2VzID0gZnVuY3Rpb24gKGluc3VsaW5Eb3NhZ2VzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGVmZXJHbG9iYWwgPSB0aGlzLiRxLmRlZmVyKCk7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgaW5zdWxpbkRvc2FnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zdWxpbkRvc2FnZSkge1xuICAgICAgICB2YXIgZGVmZXIgPSBfdGhpcy4kcS5kZWZlcigpO1xuICAgICAgICBfdGhpcy5yZW1vdmVJbnN1bGluRG9zYWdlKGluc3VsaW5Eb3NhZ2UuaWQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVmZXIucmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChkZWZlci5wcm9taXNlKTtcbiAgICB9KTtcbiAgICB0aGlzLiRxLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlZmVyR2xvYmFsLnJlc29sdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJHbG9iYWwucHJvbWlzZTtcbn0iLCJ2YXIgSW5zdWxpblRha2luZ1NlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcbiAgICB0aGlzLiRxID0gJHE7XG59O1xuXG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUuYWRkSW5zdWxpblRha2luZyA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGdseWNlbWlhKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcbiAgICAgICAgXCImZ2x5Y2VtaWE9XCIgKyBnbHljZW1pYTtcblxuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluVGFraW5nJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdWxpblRha2luZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdpbnN1bGluVGFraW5nL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07XG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdWxpblRha2luZyA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnaW5zdWxpblRha2luZz9pZD0nICsgaWQsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07XG5cblxuSW5zdWxpblRha2luZ1NlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUluc3VsaW5UYWtpbmcgPSBmdW5jdGlvbiAoaWQsIGlkQm9hcmRlciwgZGF0ZSwgZ2x5Y2VtaWEpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gJ2lkPScgKyBpZCArICcmYm9hcmRlcj0nICsgaWRCb2FyZGVyICsgJyZkYXRlPScgKyBkYXRlLmdldFRpbWUoKTtcbiAgICBkYXRhICs9ICcmZ2x5Y2VtaWE9JyArIGdseWNlbWlhO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dCh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5UYWtpbmc/JyArIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07XG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUucmVtb3ZlSW5zdWxpblRha2luZyA9IGZ1bmN0aW9uIChpZEluc3VsaW5UYWtpbmcpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZSh0aGlzLlNFUlZFUl9ST09UICsgJ2luc3VsaW5UYWtpbmc/aWQ9JyArIGlkSW5zdWxpblRha2luZywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5JbnN1bGluVGFraW5nU2VydmljZS5wcm90b3R5cGUucmVtb3ZlSW5zdWxpblRha2luZ3MgPSBmdW5jdGlvbiAoaW5zdWxpblRha2luZ3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkZWZlckdsb2JhbCA9IHRoaXMuJHEuZGVmZXIoKTtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBpbnN1bGluVGFraW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN1bGluVGFraW5nKSB7XG4gICAgICAgIHZhciBkZWZlciA9IF90aGlzLiRxLmRlZmVyKCk7XG4gICAgICAgIF90aGlzLnJlbW92ZUluc3VsaW5UYWtpbmcoaW5zdWxpblRha2luZy5pZCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWZlci5yZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9taXNlcy5wdXNoKGRlZmVyLnByb21pc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuJHEuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVmZXJHbG9iYWwucmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlckdsb2JhbC5wcm9taXNlO1xufTsiLCJ2YXIgTG9naW5TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xuICAgIHRoaXMuX3VzZXIgPSBudWxsO1xuICAgIHRoaXMuX3VzZXJSaWdodHMgPSBudWxsO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XG4gICAgdGhpcy4kcSA9ICRxO1xuICAgIHRoaXMudXNlcm5hbWUgPSBudWxsO1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xufTtcblxuTG9naW5TZXJ2aWNlLnByb3RvdHlwZS5pc0xvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZih0aGlzLnVzZXJuYW1lICE9IG51bGwgJiYgdGhpcy5wYXNzd29yZCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vL1RPRE8gOiBQcm9taXNlIHZyYWltZW50IG7DqWNlc3NhaXJlID9cbkxvZ2luU2VydmljZS5wcm90b3R5cGUuZG9Mb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIHJlbWVtYmVyTWUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJ1c2VybmFtZT1cIiArIHVzZXJuYW1lICtcbiAgICAgICAgXCImcGFzc3dvcmQ9XCIgKyBwYXNzd29yZDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbG9naW4nLCBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAyMDIpIHtcbiAgICAgICAgICAgIF90aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICBfdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICAgICAgdmFyIGRlZmVyID0gX3RoaXMuJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBkZWZlcjIgPSBfdGhpcy4kcS5kZWZlcigpO1xuICAgICAgICBkZWZlcjIucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIHJldHVybiBkZWZlcjIucHJvbWlzZTtcbiAgICB9KTtcbn07XG5cbkxvZ2luU2VydmljZS5wcm90b3R5cGUuZG9Mb2dvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy51c2VybmFtZSA9IG51bGw7XG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XG59OyIsInZhciBNZWFsU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbk1lYWxTZXJ2aWNlLnByb3RvdHlwZS5hZGRNZWFsID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZTtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbWVhbCcsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuTWVhbFNlcnZpY2UucHJvdG90eXBlLmdldE1lYWxzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbWVhbC9hbGwnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59O1xuXG5NZWFsU2VydmljZS5wcm90b3R5cGUucmVtb3ZlTWVhbCA9IGZ1bmN0aW9uIChpZE1lYWwpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZSh0aGlzLlNFUlZFUl9ST09UICsgJ21lYWw/aWQ9JyArIGlkTWVhbCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5NZWFsU2VydmljZS5wcm90b3R5cGUucmVtb3ZlTWVhbHMgPSBmdW5jdGlvbiAobWVhbHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkZWZlckdsb2JhbCA9IHRoaXMuJHEuZGVmZXIoKTtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBtZWFscy5mb3JFYWNoKGZ1bmN0aW9uIChtZWFsKSB7XG4gICAgICAgIHZhciBkZWZlciA9IF90aGlzLiRxLmRlZmVyKCk7XG4gICAgICAgIF90aGlzLnJlbW92ZU1lYWwobWVhbC5pZCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWZlci5yZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9taXNlcy5wdXNoKGRlZmVyLnByb21pc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuJHEuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVmZXJHbG9iYWwucmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlckdsb2JhbC5wcm9taXNlO1xufTtcbiIsInZhciBNZWFzdXJlU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cbk1lYXN1cmVTZXJ2aWNlLnByb3RvdHlwZS5hZGRNZWFzdXJlID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgc2l6ZSwgZGVwdGgsIHF1YW50aXR5LCBuYXR1cmUsIG9kb3IpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZzaXplPVwiICsgc2l6ZSArXG4gICAgICAgIFwiJmRlcHRoPVwiICsgZGVwdGggK1xuICAgICAgICBcIiZxdWFudGl0eT1cIiArIHF1YW50aXR5ICtcbiAgICAgICAgXCImbmF0dXJlPVwiICsgbmF0dXJlICtcbiAgICAgICAgXCImb2Rvcj1cIiArIG9kb3I7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbWVhc3VyZScsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuTWVhc3VyZVNlcnZpY2UucHJvdG90eXBlLmdldE1lYXN1cmVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnbWVhc3VyZS9hbGwnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59OyIsInZhciBNb2JpbGl6YXRpb25TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XG4gICAgdGhpcy4kcSA9ICRxO1xufTtcblxuTW9iaWxpemF0aW9uU2VydmljZS5wcm90b3R5cGUuYWRkTW9iaWxpemF0aW9uID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgaGVscCwgbWF0ZXJpYWwsIGNhbmUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZoZWxwPVwiICsgaGVscCArXG4gICAgICAgIFwiJm1hdGVyaWFsPVwiICsgbWF0ZXJpYWwgK1xuICAgICAgICBcIiZjYW5lPVwiICsgY2FuZSA7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ21vYmlsaXphdGlvbicsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQkJhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cbk1vYmlsaXphdGlvblNlcnZpY2UucHJvdG90eXBlLmdldE1vYmlsaXphdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdtb2JpbGl6YXRpb24vYWxsJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTsiLCJ2YXIgT2JzZXJ2YXRpb25TZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XG4gICAgdGhpcy4kcSA9ICRxO1xufTtcblxuT2JzZXJ2YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5hZGRPYnNlcnZhdGlvbiA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGNvbW1lbnQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZjb21tZW50PVwiICsgY29tbWVudDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnb2JzZXJ2YXRpb24nLCBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cbk9ic2VydmF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0T2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnb2JzZXJ2YXRpb24vYWxsJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcbk9ic2VydmF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0T2JzZXJ2YXRpb24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ29ic2VydmF0aW9uP2lkPScgKyBpZCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcblxuXG5PYnNlcnZhdGlvblNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZU9ic2VydmF0aW9uID0gZnVuY3Rpb24gKGlkLCBpZEJvYXJkZXIsIGRhdGUsIGNvbW1lbnQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gJ2lkPScgKyBpZCArICcmYm9hcmRlcj0nICsgaWRCb2FyZGVyICsgJyZkYXRlPScgKyBkYXRlLmdldFRpbWUoKTtcbiAgICBkYXRhICs9ICcmY29tbWVudD0nICsgY29tbWVudDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQodGhpcy5TRVJWRVJfUk9PVCArICdvYnNlcnZhdGlvbj8nICsgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcbk9ic2VydmF0aW9uU2VydmljZS5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2YXRpb24gPSBmdW5jdGlvbiAoaWRPYnNlcnZhdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZGVsZXRlKHRoaXMuU0VSVkVSX1JPT1QgKyAnb2JzZXJ2YXRpb24/aWQ9JyArIGlkT2JzZXJ2YXRpb24sIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuT2JzZXJ2YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAob2JzZXJ2YXRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGVmZXJHbG9iYWwgPSB0aGlzLiRxLmRlZmVyKCk7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgb2JzZXJ2YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XG4gICAgICAgIHZhciBkZWZlciA9IF90aGlzLiRxLmRlZmVyKCk7XG4gICAgICAgIF90aGlzLnJlbW92ZU9ic2VydmF0aW9uKG9ic2VydmF0aW9uLmlkKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb21pc2VzLnB1c2goZGVmZXIucHJvbWlzZSk7XG4gICAgfSk7XG4gICAgdGhpcy4kcS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWZlckdsb2JhbC5yZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVyR2xvYmFsLnByb21pc2U7XG59OyIsInZhciBQYXJhbWV0ZXJTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XG4gICAgdGhpcy4kcSA9ICRxO1xufTtcblxuUGFyYW1ldGVyU2VydmljZS5wcm90b3R5cGUuYWRkUGFyYW1ldGVyPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBwdWxzZSwgdGVuc2lvbiwgdGVtcGVyYXR1cmUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZwdWxzZT1cIiArIHB1bHNlICtcbiAgICAgICAgXCImdGVuc2lvbj1cIiArIHRlbnNpb24gK1xuICAgICAgICBcIiZ0ZW1wZXJhdHVyZT1cIiArIHRlbXBlcmF0dXJlIDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAncGFyYW1ldGVyJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5QYXJhbWV0ZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAncGFyYW1ldGVyL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07IiwidmFyIFBhdGNoU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cblBhdGNoU2VydmljZS5wcm90b3R5cGUuYWRkUGF0Y2ggPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBkb2N0b3IsIG5hbWVNZWRpYywgZG9zYWdlLCB1bml0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcbiAgICAgICAvLyBcIiZkYXRlU3RhcnQ9XCIgKyBkYXRlU3RhcnQgK1xuICAgICAgIC8vIFwiJmRhdGVFbmQ9XCIgKyBkYXRlRW5kICtcbiAgICAgICAgXCImZG9jdG9yPVwiICsgZG9jdG9yICtcbiAgICAgICAgXCImbmFtZU1lZGljPVwiICsgbmFtZU1lZGljICtcbiAgICAgICAgXCImZG9zYWdlPVwiICsgZG9zYWdlICtcbiAgICAgICAgXCImdW5pdD1cIiArIHVuaXQgO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdwYXRjaCcsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuUGF0Y2hTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYXRjaHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdwYXRjaC9hbGwnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59O1xuUGF0Y2hTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYXRjaCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAncGF0Y2g/aWQ9JyArIGlkLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59O1xuXG5cblBhdGNoU2VydmljZS5wcm90b3R5cGUudXBkYXRlUGF0Y2ggPSBmdW5jdGlvbiAoaWQsIGlkQm9hcmRlciwgZGF0ZSwgZG9jdG9yLCBuYW1lTWVkaWMsIGRvc2FnZSwgdW5pdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSAnaWQ9JyArIGlkICsgJyZib2FyZGVyPScgKyBpZEJvYXJkZXIgKyAnJmRhdGU9JyArIGRhdGUuZ2V0VGltZSgpO1xuICAgIGRhdGEgKz0gJyZkb2N0b3I9JyArIGRvY3RvciArICcmbmFtZU1lZGljPScgKyBuYW1lTWVkaWMgKyAnJmRvc2FnZT0nICsgZG9zYWdlICsgJyZ1bml0PScgKyB1bml0O1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dCh0aGlzLlNFUlZFUl9ST09UICsgJ3BhdGNoPycgKyBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59O1xuUGF0Y2hTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVQYXRjaCA9IGZ1bmN0aW9uIChpZFBhdGNoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGUodGhpcy5TRVJWRVJfUk9PVCArICdwYXRjaD9pZD0nICsgaWRQYXRjaCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5QYXRjaFNlcnZpY2UucHJvdG90eXBlLnJlbW92ZVBhdGNocyA9IGZ1bmN0aW9uIChwYXRjaHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkZWZlckdsb2JhbCA9IHRoaXMuJHEuZGVmZXIoKTtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBwYXRjaHMuZm9yRWFjaChmdW5jdGlvbiAocGF0Y2gpIHtcbiAgICAgICAgdmFyIGRlZmVyID0gX3RoaXMuJHEuZGVmZXIoKTtcbiAgICAgICAgX3RoaXMucmVtb3ZlUGF0Y2gocGF0Y2guaWQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVmZXIucmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChkZWZlci5wcm9taXNlKTtcbiAgICB9KTtcbiAgICB0aGlzLiRxLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlZmVyR2xvYmFsLnJlc29sdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJHbG9iYWwucHJvbWlzZTtcbn07XG4iLCJ2YXIgU3Vycm91bmRpbmdTa2luU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cblN1cnJvdW5kaW5nU2tpblNlcnZpY2UucHJvdG90eXBlLmFkZFN1cnJvdW5kaW5nU2tpbiA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIGhlYWx0aHksIGZyYWdpbGUsIGRyeSwgaHlwZXJwaWdtZW50ZWQsIGh5cGVya2VyYXRpb24sIGluZmxhbW1hdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hY2VyYXRlZCx1bGNlcmF0ZWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZoZWFsdGh5PVwiICsgaGVhbHRoeSArXG4gICAgICAgIFwiJmZyYWdpbGU9XCIgKyBmcmFnaWxlICtcbiAgICAgICAgXCImZHJ5PVwiICsgZHJ5ICtcbiAgICAgICAgXCImaHlwZXJwaWdtZW50ZWQ9XCIgKyBoeXBlcnBpZ21lbnRlZCArXG4gICAgICAgIFwiJmh5cGVya2VyYXRpb249XCIgKyBoeXBlcmtlcmF0aW9uICtcbiAgICAgICAgXCImaW5mbGFtbWF0b3J5PVwiICsgaW5mbGFtbWF0b3J5ICtcbiAgICAgICAgXCImbWFjZXJhdGVkPVwiICsgbWFjZXJhdGVkICtcbiAgICAgICAgXCImdWxjZXJhdGVkPVwiICsgdWxjZXJhdGVkIDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnc3Vycm91bmRpbmdTa2luJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5TdXJyb3VuZGluZ1NraW5TZXJ2aWNlLnByb3RvdHlwZS5nZXRTdXJyb3VuZGluZ1NraW5zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnc3Vycm91bmRpbmdTa2luL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07IiwidmFyIFN3YWRkbGVTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XG4gICAgdGhpcy4kcSA9ICRxO1xufTtcblxuU3dhZGRsZVNlcnZpY2UucHJvdG90eXBlLmFkZFN3YWRkbGUgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QodGhpcy5TRVJWRVJfUk9PVCArICdzd2FkZGxlJywgZGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSk7XG59O1xuXG5Td2FkZGxlU2VydmljZS5wcm90b3R5cGUuZ2V0U3dhZGRsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5TRVJWRVJfUk9PVCArICdzd2FkZGxlL2FsbCcsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07XG5cblN3YWRkbGVTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVTd2FkZGxlID0gZnVuY3Rpb24gKGlkU3dhZGRsZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZGVsZXRlKHRoaXMuU0VSVkVSX1JPT1QgKyAnc3dhZGRsZT9pZD0nICsgaWRTd2FkZGxlLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cblN3YWRkbGVTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVTd2FkZGxlcyA9IGZ1bmN0aW9uIChzd2FkZGxlcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRlZmVyR2xvYmFsID0gdGhpcy4kcS5kZWZlcigpO1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHN3YWRkbGVzLmZvckVhY2goZnVuY3Rpb24gKHN3YWRkbGUpIHtcbiAgICAgICAgdmFyIGRlZmVyID0gX3RoaXMuJHEuZGVmZXIoKTtcbiAgICAgICAgX3RoaXMucmVtb3ZlU3dhZGRsZShzd2FkZGxlLmlkKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb21pc2VzLnB1c2goZGVmZXIucHJvbWlzZSk7XG4gICAgfSk7XG4gICAgdGhpcy4kcS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWZlckdsb2JhbC5yZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVyR2xvYmFsLnByb21pc2U7XG59IiwidmFyIFRoZXJhcGV1dGljU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xuICAgIHRoaXMuJHEgPSAkcTtcbn07XG5cblRoZXJhcGV1dGljU2VydmljZS5wcm90b3R5cGUuYWRkVGhlcmFwZXV0aWMgPSBmdW5jdGlvbiAoaWRCb2FyZGVyLCBkYXRlLCBwcmVwYXJhdGlvbiwgYWRNb3JuaW5nLCBhZE1pZGRheSwgYWRFdmVuaW5nLCBhZE5pZ2h0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IFwiYm9hcmRlcj1cIiArIGlkQm9hcmRlciArXG4gICAgICAgIFwiJmRhdGU9XCIgKyBkYXRlICtcbiAgICAgICAgXCImcHJlcGFyYXRpb249XCIgKyBwcmVwYXJhdGlvbiArXG4gICAgICAgIFwiJmFkTW9ybmluZz1cIiArIGFkTW9ybmluZyArXG4gICAgICAgIFwiJmFkTWlkZGF5PVwiICsgYWRNaWRkYXkgK1xuICAgICAgICBcIiZhZEV2ZW5pbmc9XCIgKyBhZEV2ZW5pbmcgK1xuICAgICAgICBcIiZhZE5pZ2h0PVwiICsgYWROaWdodDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAndGhlcmFwZXV0aWMnLCBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cblRoZXJhcGV1dGljU2VydmljZS5wcm90b3R5cGUuZ2V0VGhlcmFwZXV0aWNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAndGhlcmFwZXV0aWMvYWxsJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcblRoZXJhcGV1dGljU2VydmljZS5wcm90b3R5cGUuZ2V0VGhlcmFwZXV0aWMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3RoZXJhcGV1dGljP2lkPScgKyBpZCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTtcblxuXG5UaGVyYXBldXRpY1NlcnZpY2UucHJvdG90eXBlLnVwZGF0ZVRoZXJhcGV1dGljID0gZnVuY3Rpb24gKGlkLCBpZEJvYXJkZXIsIGRhdGUsIHByZXBhcmF0aW9uLCBhZE1vcm5pbmcsIGFkTWlkZGF5LCBhZEV2ZW5pbmcsIGFkTmlnaHQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gJ2lkPScgKyBpZCArICcmYm9hcmRlcj0nICsgaWRCb2FyZGVyICsgJyZkYXRlPScgKyBkYXRlLmdldFRpbWUoKTtcbiAgICBkYXRhICs9IFwiJnByZXBhcmF0aW9uPVwiICsgcHJlcGFyYXRpb24gK1xuICAgICAgICBcIiZhZE1vcm5pbmc9XCIgKyBhZE1vcm5pbmcgK1xuICAgICAgICBcIiZhZE1pZGRheT1cIiArIGFkTWlkZGF5ICtcbiAgICAgICAgXCImYWRFdmVuaW5nPVwiICsgYWRFdmVuaW5nICtcbiAgICAgICAgXCImYWROaWdodD1cIiArIGFkTmlnaHQ7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0KHRoaXMuU0VSVkVSX1JPT1QgKyAndGhlcmFwZXV0aWM/JyArIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB9KTtcbn07XG5UaGVyYXBldXRpY1NlcnZpY2UucHJvdG90eXBlLnJlbW92ZVRoZXJhcGV1dGljID0gZnVuY3Rpb24gKGlkVGhlcmFwZXV0aWMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZSh0aGlzLlNFUlZFUl9ST09UICsgJ3RoZXJhcGV1dGljP2lkPScgKyBpZFRoZXJhcGV1dGljLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cblRoZXJhcGV1dGljU2VydmljZS5wcm90b3R5cGUucmVtb3ZlVGhlcmFwZXV0aWNzID0gZnVuY3Rpb24gKHRoZXJhcGV1dGljcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRlZmVyR2xvYmFsID0gdGhpcy4kcS5kZWZlcigpO1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHRoZXJhcGV1dGljcy5mb3JFYWNoKGZ1bmN0aW9uICh0aGVyYXBldXRpYykge1xuICAgICAgICB2YXIgZGVmZXIgPSBfdGhpcy4kcS5kZWZlcigpO1xuICAgICAgICBfdGhpcy5yZW1vdmVUaGVyYXBldXRpYyh0aGVyYXBldXRpYy5pZCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWZlci5yZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9taXNlcy5wdXNoKGRlZmVyLnByb21pc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuJHEuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVmZXJHbG9iYWwucmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlckdsb2JhbC5wcm9taXNlO1xufTsiLCJ2YXIgVG9pbGV0SGVscGluZ1NlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcbiAgICB0aGlzLiRxID0gJHE7XG59O1xuXG5Ub2lsZXRIZWxwaW5nU2VydmljZS5wcm90b3R5cGUuYWRkVG9pbGV0SGVscGluZyA9IGZ1bmN0aW9uIChpZEJvYXJkZXIsIGRhdGUsIG1vdmUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZtb3ZlPVwiICsgbW92ZSA7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAndG9pbGV0SGVscGluZycsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuVG9pbGV0SGVscGluZ1NlcnZpY2UucHJvdG90eXBlLmdldFRvaWxldEhlbHBpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAndG9pbGV0SGVscGluZy9hbGwnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59OyIsInZhciBUcmVhdG1lbnRTZXJ2aWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoU0VSVkVSX1JPT1QsICRodHRwLCAkcSkge1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLlNFUlZFUl9ST09UID0gU0VSVkVSX1JPT1Q7XG4gICAgdGhpcy4kcSA9ICRxO1xufTtcblxuVHJlYXRtZW50U2VydmljZS5wcm90b3R5cGUuYWRkVHJlYXRtZW50ID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgcHN0LCBpcnJpZ2F0aW9uLCB0aGVyYXBldXRpY0JhdGgsIGRyaWxsV2lkdGgsIGRyaWxsTGVuZ3RoLCBkZWJyaWRlbWVudCwgdHJlYXRtZW50T3RoZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gXCJib2FyZGVyPVwiICsgaWRCb2FyZGVyICtcbiAgICAgICAgXCImZGF0ZT1cIiArIGRhdGUgK1xuICAgICAgICBcIiZwc3Q9XCIgKyBwc3QgK1xuICAgICAgICBcIiZpcnJpZ2F0aW9uPVwiICsgaXJyaWdhdGlvbiArXG4gICAgICAgIFwiJnRoZXJhcGV1dGljQmF0aD1cIiArIHRoZXJhcGV1dGljQmF0aCArXG4gICAgICAgIFwiJmRyaWxsV2lkdGg9XCIgKyBkcmlsbFdpZHRoICtcbiAgICAgICAgXCImZHJpbGxMZW5ndGg9XCIgKyBkcmlsbExlbmd0aCArXG4gICAgICAgIFwiJmRlYnJpZGVtZW50PVwiICsgZGVicmlkZW1lbnQgK1xuICAgICAgICBcIiZ0cmVhdG1lbnRPdGhlcj1cIiArIHRyZWF0bWVudE90aGVyO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCh0aGlzLlNFUlZFUl9ST09UICsgJ3RyZWF0bWVudCcsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdGdE9tUmhiUT09J1xuICAgICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pO1xufTtcblxuVHJlYXRtZW50U2VydmljZS5wcm90b3R5cGUuZ2V0VHJlYXRtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLlNFUlZFUl9ST09UICsgJ3RyZWF0bWVudC9hbGwnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgfSk7XG59OyIsInZhciBXb3VuZFNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTRVJWRVJfUk9PVCwgJGh0dHAsICRxKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuU0VSVkVSX1JPT1QgPSBTRVJWRVJfUk9PVDtcbiAgICB0aGlzLiRxID0gJHE7XG59O1xuXG5Xb3VuZFNlcnZpY2UucHJvdG90eXBlLmFkZFdvdW5kID0gZnVuY3Rpb24gKGlkQm9hcmRlciwgZGF0ZSwgbG9jYWxpc2F0aW9uLCB0eXBlLCBkZXNjcmlwdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSBcImJvYXJkZXI9XCIgKyBpZEJvYXJkZXIgK1xuICAgICAgICBcIiZkYXRlPVwiICsgZGF0ZSArXG4gICAgICAgIFwiJmxvY2FsaXNhdGlvbj1cIiArIGxvY2FsaXNhdGlvbiArXG4gICAgICAgIFwiJnR5cGU9XCIgKyB0eXBlICtcbiAgICAgICAgXCImZGVzY3JpcHRpb249XCIgKyBkZXNjcmlwdGlvbiA7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KHRoaXMuU0VSVkVSX1JPT1QgKyAnd291bmQnLCBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFpHRnRPbVJoYlE9PSdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9KTtcbn07XG5cbldvdW5kU2VydmljZS5wcm90b3R5cGUuZ2V0V291bmRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuU0VSVkVSX1JPT1QgKyAnd291bmQvYWxsJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBaR0Z0T21SaGJRPT0nXG4gICAgICAgIH19KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIH0pO1xufTsiXX0=
