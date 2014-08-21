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
