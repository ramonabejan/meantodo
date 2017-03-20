'use strict';
//The controller

var express = require('express');

//mongoDB 
var Todo = require('../models/todo');

var router = express.Router();


//end point api http://localhost:3000/api/todoss
router.get('/todos',function(req,res){
	Todo.find({},function(err,todos){
		if(err){
			return res.status(500).json({message:err.message});
		}
	
		res.json({todos:todos});
		
	})

});

//post route to create new entries
router.post('/todos',function(req,res){
	var todo = req.body;
	Todo.create(todo,function(err,todo){
		if(err){
			return res.status(500).json({message:err.message});
		}
		
		res.json({'todo':todo,message:'Todo Created'});
		
	})
})


//PUT route to update entries

router.put('/todos/:id',function(req,res){
	var id = req.params.id;
	var todo = req.body;
	if(todo && todo._id !== id) {
		return res.status(500).json({message:"Ids don't match"});
	}
	Todo.findByIdAndUpdate(id,todo,{new:true},function(err,todo){
		if(err){
			return res.status(500).json({message:err.message});
		}
		
		res.json({'todo':todo,message:'Todo Updated'});
		
	})
})


//ADD Delete route

module.exports = router;