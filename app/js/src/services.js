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

