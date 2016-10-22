const platform = require('os').platform();

exports.UNKNOWN = createStatus('unknown');
exports.OFFLINE = createStatus('offline');
exports.LOW = createStatus('low');
exports.ONLINE = createStatus('online');

function createStatus(id) {
	const ext = platform === 'win32' ? 'ico' : 'png';
	return {
		id: id,
		name: id[0].toUpperCase() + id.slice(1),
		icon: __dirname + '/../icons/' + id + '.' + ext,
		message: 'Your Internet connection is ' + id
	};
}
