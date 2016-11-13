const express = require('express');
const logger = require('morgan');
const session = require('express-session');

const Grant = require('grant-express');
const grant = new Grant(require('./config.json'));

const app = express();
app.use(logger('dev'));
app.use(session({secret: 'very secret'}));
app.use(grant);

app.get('/handle_facebook_callback', function(req, res) {
	console.log(req.query)
	res.end(JSON.stringify(req.query, null, 2))
});

app.listen(8080, function () {
	console.log('Server started on port: ' + 8080);
});

// React
// app.use('/files', express.static(__dirname + '/src'));

// app.get('/*', function(request, response) {
//   response.sendFile(__dirname + '/src/index.html');
// });