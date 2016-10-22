const electron = require('electron');
const Menu = electron.Menu;

const notifications = require('./notifications');
const autolaunch = require('./autolaunch');
const updates = require('./updates');
const about = require('./about');
const status = require('./status');

exports.create = function() {
	return Menu.buildFromTemplate([
		{label: 'Show Notifications', type: 'checkbox', checked: notifications.isEnabled(), click: toggleNotifications },
		{label: 'Launch At Startup', type: 'checkbox', checked: autolaunch.isEnabled(), click: toggleAutoLaunch },
		{type: 'separator'},
		{label: 'Check for updates', click: updates.check },
		{label: 'About...', click: about.show },
		{label: 'Exit', role: 'quit'}
	]);
};

function toggleNotifications(item) {
	notifications.setEnabled(item.checked);
}

function toggleAutoLaunch(item) {
	autolaunch.setEnabled(item.checked);
}
