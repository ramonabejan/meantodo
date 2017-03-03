'use strict';

var express = require('express');
var todos = require ('../../mock/todos.json'); 

var router = express.Router();

router.get('/todos',function(req,res){
	res.json({todos:todos});
});

//Add post route to create new entries

//Add PUT route to update entries

//ADD Delete route

module.exports = router;