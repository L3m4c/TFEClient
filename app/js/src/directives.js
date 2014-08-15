'user strict';

var moduleDirective = angular.module('app.directives', ['app.services']);

moduleDirective.directive("boarderlist", require("./directives/BoarderListDirective"));
