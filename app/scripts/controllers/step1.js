'use strict';

/**
 * @ngdoc function
 * @name ansteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ansteApp
 */
angular.module('ansteApp')
  .controller('step1Ctrl', function ($scope,sharedData) {

    	$scope.stdats = function(){
    		sharedData.fname=$scope.fname;
    		sharedData.lname=$scope.lname;
    		sharedData.emaily=$scope.emails;
    		sharedData.phon=$scope.phons;
    		document.getElementById('st1').className="disabled";
			document.getElementById('st2').className="active";
			document.getElementById('st3').className="disabled";

    	};
  });
