'use strict';

var Todo = require('./models/todo.js');

var todos = [
	'Task 1',
	'Task 2',
	'Task 3'
]


todos.forEach(function(todo,index){
	Todo.find('name:todo',function(err,todos){
		if(!err && !todos.length) {
			Todo.create({completed:false, name: todo});
		}
	})
})
