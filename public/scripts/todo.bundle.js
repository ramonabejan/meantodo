webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);
__webpack_require__(3);

angular.module('todoListApp').controller('mainCtrl', function($scope,dataService) {

	$scope.helloWorld = function() {
	    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
	};

	$scope.addTodo=function(){
		var todo = {name: 'New task'};
		$scope.todos.unshift(todo);
	}

	dataService.getTodos(function(response){
		$scope.todos = response.data.todos;
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
		dataService.saveTodos(editedTodos)
					.finally($scope.resetStateTodo());
	}

	$scope.resetStateTodo=function(){
		$scope.todos.forEach(function(todo){
			todo.editing=false;
		});
	}


})

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(0);
angular.module('todoListApp').directive('todos', function(){
	return{
		templateUrl: 'templates/todos.html',
		controller: 'mainCtrl' 
	}
})

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var angular = __webpack_require__(0);

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

__webpack_require__(2);

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);


angular.module("todoListApp", []);


__webpack_require__(1);


/***/ })
],[5]);