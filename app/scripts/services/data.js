'use strict';
var angular = require('angular');

dataService.$inject = ['$http','$q'];

angular.module('todoListApp')
		.service('dataService',dataService);

function dataService($http,$q){
	this.saveTodos = function(todos){
	
		var queue = [];

		todos.forEach(function(todo){
			var request; 
			if(!todo._id) {
				request = $http.post('/api/todos',todo);
			}
			else{
				request = $http.put('/api/todos/'+todo._id,todo).then(function(results){
							
							todo = results.data.todo;
							return todo;
				});
			}
			queue.push(request);
		});

		return $q.all(queue).then(function(results){
			console.log("I saved " + results.length + " todos");
		});
	}

	//see the src/api/index.js for the implementation of the "api/todos"api
	this.getTodos= function(callback){
		$http.get("api/todos").then(callback);
	}


	this.deleteTodo= function(todo){
		console.log("The todo '" + todo.name+ "' has been deleted " );
	}


}

require('../directives/todos.js');