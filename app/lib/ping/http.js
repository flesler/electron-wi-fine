const http = require('http');

const HOST = {method: 'HEAD', host: 'google.com', path: '/'};

// Natually takes longer than dns queries
exports.THRESHOLD = 800;

exports.NAME = 'HTTP';

exports.run = function(done) {
	const req = http.request(HOST);
	req.on('response', function(res) {
		res.resume();
		done();
	});
	// Don't let it take ages so they don't stack
	req.setTimeout(exports.THRESHOLD, function () {
		req.abort();
		done();
	});
	req.on('error', done);
	req.end();
};
