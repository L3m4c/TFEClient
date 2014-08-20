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
