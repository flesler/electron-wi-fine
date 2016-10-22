const AutoLaunch = require('auto-launch');
const pkg = require('../package.json');
const launcher = new AutoLaunch({name: pkg.productName, isHidden:true});
const settings = require('./settings');

exports.isEnabled = function() {
	return settings.get('autolaunch', false);
};

exports.setEnabled = function(state) {
	settings.set('autolaunch', state);
	if (state) {
		launcher.enable();
	} else {
		launcher.disable();
	}
};
