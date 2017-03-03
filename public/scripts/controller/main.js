'use strict';
angular.module('todoListApp').controller('mainCtrl', function($scope,dataService) {

	$scope.helloWorld = function() {
	    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
	};

	$scope.addTodo=function(){
		var todo = {name: 'New task'};
		$scope.todos.unshift(todo);
	}

	dataService.getTodos(function(response){
		$scope.todos = response.data;
	});

	$scope.deleteTodo = function(todo,index){
		dataService.deleteTodo(todo);
		$scope.todos.splice(index,1);
	}

	$scope.saveTodos=function(){
		var editedTodos=$scope.todos.filter(function(todo){
			if(todo.editing==true){
				return todo;
			}
		}); 
		dataService.saveTodos(editedTodos);
	}


})