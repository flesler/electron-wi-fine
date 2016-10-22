const electron = require('electron');
const Menu = electron.Menu;

const settings = require('./settings');
const autolaunch = require('./autolaunch');
const status = require('./status');

exports.create = function() {
	return Menu.buildFromTemplate([
		{label: 'Show Notifications', type: 'checkbox', checked: settings.isEnabled('notifications', true), click: toggleNotifications },
		{label: 'Launch At Startup', type: 'checkbox', checked: settings.isEnabled('autolaunch', false), click: toggleAutoLaunch },
		{type: 'separator'},
		{label: 'Exit', role: 'quit'}
	]);
};

function toggleNotifications(item) {
	settings.set('notifications', item.checked);
}

function toggleAutoLaunch(item) {
	settings.set('autolaunch', item.checked);
	autolaunch.setEnabled(item.checked);
}
