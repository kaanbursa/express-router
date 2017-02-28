const express = require('express');
var fs = require('fs');
var path = require('path');

// generate a router object
const router = express.Router();

router.get('/new', (req, res) => {
	fs.readFile(__dirname + '/../textfile.txt', 'utf-8' ,(err, data) => {
  	if (err) throw err;
  		
  		res.send(data);
});
	
})

router.get('/json', (req, res) => {
	fs.readFile(__dirname + '/../users.json', 'utf-8', (err, data) => {
		if (err) throw err;
  		
  		res.send(JSON.parse(data));
	});

})

module.exports = router;