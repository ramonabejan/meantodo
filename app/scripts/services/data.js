'use strict';
var angular = require('angular');

angular.module('todoListApp').service('dataService',function($http){
	this.saveTodos = function(todos){
		console.log(todos);
		console.log("Saved '" + todos.length+ " todos ");
	}

	this.getTodos= function(callback){
		$http.get("api/todos").then(callback);
	}


	this.deleteTodo= function(todo){
		console.log("The todo '" + todo.name+ "' has been deleted " );
	}


})

require('../directives/todos.js');