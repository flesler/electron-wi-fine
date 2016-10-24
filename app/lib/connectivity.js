const dns = require('dns');
const http = require('http');
const status = require('./status');

const HOST = {method: 'HEAD', host: 'google.com', path: '/'};
const INTERVAL = 3000;
const MAX_MS = 800;
// How many SLOW in a row to conclude
const SLOW_ATTEMPTS = 5;

let last;
let count = 0;

exports.monitor = function(cb) {
	setInterval(function() { check(cb); }, INTERVAL);
	check(cb);
};

function check(cb) {
	ping(function(err, ms) {
		const curr = getStatus(err, ms);
		if (curr !== last) {
			last = curr;
			cb(curr);
		}
	});
}

function getStatus(err, ms) {
	if (err) return status.OFFLINE;
	if (ms <= MAX_MS) {
		count = 0;
		return status.ONLINE;
	}
	if (++count >= SLOW_ATTEMPTS || !last) {
		return status.SLOW;
	}
	return last;
}

function ping(done) {
	// Using DNS is not good enough because it has caching
	// Using native ping I don't like because it means more running processes
	const start = Date.now();
	const req = http.request(HOST);
	req.on('response', function(res) {
		// Flush
		res.resume();
		done(null, Date.now() - start);
	})
	req.on('error', done);
	req.end();
}

