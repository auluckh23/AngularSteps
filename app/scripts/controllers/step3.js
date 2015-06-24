'use strict';

/**
 * @ngdoc function
 * @name ansteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ansteApp
 */
angular.module('ansteApp')
  .controller('step3Ctrl', function ($scope,sharedData) {
   	$scope.firstname=sharedData.fname;
   	$scope.lastname=sharedData.lname;
   	$scope.emails1=sharedData.emaily;
   	$scope.phony=sharedData.phon;
   	$scope.loparo=sharedData.locy;
   	$scope.deparo=sharedData.conver;
   	$scope.reparo=sharedData.retur;


  });
