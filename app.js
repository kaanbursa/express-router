const express = require('express');
// create our app from the library
const app = express();

// require the useless router
const user = require(__dirname + '/routes/useless');

// mount the router of user module as /user  as the mother 
// other router are in useless.js file so user/new and user/delete are subs
app.use('/user', user);

// set html as template engine
// app.set('view engine', 'html');

// html file
app.use(express.static('public/views'));

app.get('/', (req, res) => {
	res.send('Hello World');
})

app.listen( 3000, f => {
	console.log('server running');
})