'use strict';
//The controller

var express = require('express');

var Todo = require('../models/todo');

// mock data: var todos = require ('../../mock/todos.json'); 



var router = express.Router();


//end point api http://localhost:3000/api/todoss
router.get('/todos',function(req,res){
	Todo.find({},function(err,todos){
		if(err){
			return res.status(500).json({message:err.message});
		}
		else{
				res.json({todos:todos});
		}
	})

});

//Add post route to create new entries

//Add PUT route to update entries

//ADD Delete route

module.exports = router;