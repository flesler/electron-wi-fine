const Monitor = new require('electron-online');
const status = require('./status');

exports.monitor = function(cb) {
	const monitor = new Monitor();
	monitor.on('online', function() {
		cb(status.ONLINE);
	});
	monitor.on('offline', function() {
		cb(status.OFFLINE);
	});
};
