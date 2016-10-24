const electron = require('electron');
const shell = electron.shell;
const settings = require('./settings');
const status = require('./status');

exports.isEnabled = function() {
	return settings.get('sound', false);
};

exports.setEnabled = function(state) {
	settings.set('sound', state);
};

exports.beep = function(stat) {
	if (exports.isEnabled() && stat !== status.LOW) {
		shell.beep();
	}
};
