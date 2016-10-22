const electron = require('electron');
const app = electron.app;

const tray = require('./lib/tray');
const menu = require('./lib/menu');
const connectivity = require('./lib/connectivity');
const settings = require('./lib/settings');
const notifications = require('./lib/notifications');
const autolaunch = require('./lib/autolaunch');

let initial = true;

app.on('ready', function() {
	tray.setMenu(menu.create());

	connectivity.monitor(function(status) {
		tray.show(status);
		if (settings.isEnabled('notifications', true)) {
			notifications.show(status);
		}
	});
});
