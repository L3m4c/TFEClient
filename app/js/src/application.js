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