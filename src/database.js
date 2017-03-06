'use strict';

var mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/mean-todo',function(err){
	if(err){
		console.log("Error connection db");
	}
		else{
			console.log("Connection mongoose successfully")
		}
	}
);
