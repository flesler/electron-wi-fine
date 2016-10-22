// https://github.com/mongodb-js/electron-squirrel-startup
if (require('electron-squirrel-startup')) return;

const electron = require('electron');
const app = electron.app;

const tray = require('./lib/tray');
const menu = require('./lib/menu');
const connectivity = require('./lib/connectivity');
const notifications = require('./lib/notifications');
const autolaunch = require('./lib/autolaunch');

app.on('ready', function () {
	tray.setMenu(menu.create());

	connectivity.monitor(function(status) {
		tray.show(status);
		notifications.show(status);
	});
});

app.on('window-all-closed', function () {
	app.quit();
});

process.on('uncaughtException', function() {
	app.quit();
});
