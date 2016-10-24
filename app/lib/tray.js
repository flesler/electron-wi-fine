const electron = require('electron');
const Tray = electron.Tray;

const DEFAULT = require('./status').UNKNOWN;

let icon;

exports.setMenu = function(menu) {
  icon = new Tray(DEFAULT.icon);
	icon.setContextMenu(menu);
};

exports.show = function(status) {
	icon.setImage(status.icon);
	icon.setToolTip(status.message);
};
