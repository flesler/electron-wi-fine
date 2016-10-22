const notifier = require('electron-notifications');
const settings = require('./settings');

exports.isEnabled = function() {
	return settings.isEnabled('notifications', true);
};

exports.setEnabled = function(state) {
	settings.set('notifications', state);
};

exports.show = function(status) {
	if (!exports.isEnabled()) return;

	notifier.notify(status.name, {
		message: status.message,
		icon: status.icon
	})
};
