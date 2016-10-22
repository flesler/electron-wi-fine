const notifier = require('electron-notifications');

exports.show = function(status) {
	notifier.notify(status.name, {
		message: status.message,
		icon: status.icon
	})
};
