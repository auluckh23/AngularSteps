'use strict';

/**
 * @ngdoc function
 * @name ansteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ansteApp
 */
angular.module('ansteApp')
  .controller('step2Ctrl', function ($scope,sharedData, changeDat) {
  	$scope.stdats2=function(){
  		sharedData.conver = changeDat($scope.deps);
  		sharedData.locy=$scope.locanat;
  		sharedData.retur=changeDat($scope.reps);
  		document.getElementById('st1').className="disabled";
		document.getElementById('st2').className="disabled";
		document.getElementById('st3').className="active";
  		};
  });
