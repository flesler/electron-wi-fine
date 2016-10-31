/**
 * DNS is usually a better way to test connectivity as it relies on less layers and is ligther
 * Electron/Chromium has a bug, with no connection the callback is never called
 * and Chromium logs an error to the console without any way to catch it
 * @see https://github.com/electron/electron/issues/2299
 */
const dns = require('dns');

// Google DNS + OpenDNS
const IPS = ['8.8.8.8', '8.8.4.4', '208.67.222.222', '208.67.220.220'];
const HOST = 'google.com';

dns.setServers(IPS);

exports.THRESHOLD = 300;

exports.NAME = 'DNS';

exports.run = function(done) {
	// dns.lookup() won't work because OS caches results
	dns.resolve(HOST, done);
	// TODO: How to avoid request stacking?
	setTimeout(exports.THRESHOLD, done);
};
