'use strict';

/**
 * @ngdoc overview
 * @name ansteApp
 * @description
 * # ansteApp
 *
 * Main module of the application.
 */
angular
  .module('ansteApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/step1.html',
        controller: 'step1Ctrl'
      })
      .when('/step2', {
        templateUrl: 'views/step2.html',
        controller: 'step2Ctrl'
      }).when('/step3', {
        templateUrl: 'views/step3.html',
        controller: 'step3Ctrl'
      })
        .otherwise({
        redirectTo: '/'
      });
  });

document.getElementById('st1').className="active";
document.getElementById('st2').className="disabled";
document.getElementById('st3').className="disabled";

  angular.module("ansteApp")
    .service("sharedData",function(){
        this.fname="";
        this.lname="";
        this.emaily="";
        this.phon="";
        this.locy="";
        this.retur="";
        this.conver="";
    });

    angular.module("ansteApp")
      .factory("changeDat",function(){

         return (function(a){
        
          var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
          var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
          var now = a;
          var day = days[ now.getDay() ];
          var month = months[ now.getMonth() ];
          var t=day+", "+month + "  " + now.getDate() + ", " + now.getFullYear();
          return t;
        });
      });
