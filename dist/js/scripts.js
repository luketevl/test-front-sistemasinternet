"use strict";angular.module("app",["ngRoute","ngMaterial","ngMessages","ngMdIcons"]),function(){function a(a){a.when("/courses",{templateUrl:"/views/courses.html",controller:"coursesCtrl"}),a.when("/studants",{templateUrl:"/views/studants.html",controller:"studantsCtrl"}),a.otherwise({redirectTo:"/404.html"})}angular.module("app").config(a),a.$inject=["$routeProvider"]}(),function(){function a(a,b){}angular.module("app").controller("appCtrl",a),a.$inject=["$scope","coursesService","$mdDialog"]}(),function(){function a(a,c,d,e){a.courses=d.getListCourse(),a.showAdd=function(f,g){c.show({controller:b,templateUrl:"views/formCourse.html",targetEvent:f,locals:{course:g}}).then(function(b){var c=d.add(b);return c?(e.show("Adicionado com sucesso"),void a.courses.push(b)):(e.show("Curso já existe, cadastre com nome diferente"),!1)},function(){})},a.remove=function(b){d.remove(b),e.show("Excluido com sucesso"),a.courses=d.getListCourse()}}function b(a,b,c){a.course=c,a.hide=function(){b.hide()},a.cancel=function(){b.cancel()},a.add=function(a){b.hide(a)}}angular.module("app").controller("coursesCtrl",a),a.$inject=["$scope","$mdDialog","coursesService","toastService"]}(),function(){function a(a,c,d,e){a.studants=d.getListStudant(),a.showAdd=function(f,g){c.show({controller:b,templateUrl:"views/formStudant.html",targetEvent:f,locals:{studant:g}}).then(function(b){var c=d.add(b);return c?(e.show("Adicionado com sucesso"),void a.studants.push(b)):(e.show("Curso já existe, cadastre com nome diferente"),!1)},function(){})},a.remove=function(b){d.remove(b),e.show("Excluido com sucesso"),a.studants=d.getListStudant()}}function b(a,b,c){a.studant=c,a.hide=function(){b.hide()},a.cancel=function(){b.cancel()},a.add=function(a){b.hide(a)}}angular.module("app").controller("studantsCtrl",a),a.$inject=["$scope","$mdDialog","studantsService","toastService"]}(),function(){"esversion 6";function a(){return{restrict:"E",scope:{items:"=",columns:"="},templateUrl:function(a,b){return b.templateName||""}}}angular.module("app").directive("reponsiveTable",a)}(),function(){function a(){var a=[],b=function(b){return!e(b)&&(a.push(b),!0)},c=function(){return[].concat(a)},d=function(b){a=a.filter(function(a){if(a.name!=b.name)return a.name})},e=function(b){var c=!1;return a.forEach(function(a){if(a.name==b.name)return void(c=!0)}),c};return{add:b,remove:d,getListCourse:c}}angular.module("app").factory("coursesService",a)}(),function(){function a(){var a=[],b=function(b){return!e(b)&&(a.push(b),!0)},c=function(){return[].concat(a)},d=function(b){a=a.filter(function(a){if(a.name!=b.name)return a.name})},e=function(b){var c=!1;return a.forEach(function(a){if(a.name==b.name)return void(c=!0)}),c};return{add:b,remove:d,getListStudant:c}}angular.module("app").factory("studantsService",a)}(),function(){function a(a){var b=function(b){a.show(a.simple().textContent(b).hideDelay(3e3))};return{show:b}}angular.module("app").factory("toastService",a),a.$inject=["$mdToast"]}();