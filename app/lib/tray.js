const electron = require('electron');
const Tray = electron.Tray;

const DEFAULT = require('./status').UNKNOWN;
const connectivity = require('./connectivity');

let icon;

exports.setMenu = function(menu) {
  icon = new Tray(DEFAULT.icon);
	icon.setContextMenu(menu);
	// On double click delete all history and re-check connectivity
	icon.on('double-click', connectivity.reset);
};

exports.show = function(status) {
	icon.setImage(status.icon);
	icon.setToolTip(status.message);
};
