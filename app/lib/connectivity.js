/**
 * DNS is usually a better way to test connectivity than HTTP
 * HTTP is used regardless due to a bug in Electron/Chromium
 * @see https://github.com/electron/electron/issues/2299
 */
const ping = require('./ping/http'); // require('./ping/dns')
const onetime = require('onetime');
const status = require('./status');

const PING_INTERVAL = 3000;
const SAMPLE_SIZE = 5;

let last;
let samples = [];
let callback;

exports.monitor = function(cb) {
	callback = cb;
	setInterval(check, PING_INTERVAL);
	check();
};

exports.getMode = function() {
	return ping.NAME;
};

exports.reset = function() {
	samples = [];
	last = null;
	check();
};

function check() {
	const start = Date.now();
	ping.run(onetime(function(err) {
		record(err ? Infinity : Date.now() - start);
		const curr = getStatus();
		if (curr !== last) {
			last = curr;
			callback(curr);
		}
	}));
}

function record(ms) {
	samples.push(ms);
	if (samples.length > SAMPLE_SIZE) {
		samples.shift();
	}
}

function getStatus() {
	const sorted = samples.concat().sort(function(a, b) {
		return a - b;
	});
	// Use median rather than average to reduce the impact of outliers
	const mid = Math.ceil((sorted.length - 1) / 2);
	const median = sorted[mid];
	if (median === Infinity) return status.OFFLINE;
	if (median < ping.THRESHOLD) return status.ONLINE;
	return status.SLOW;
}
