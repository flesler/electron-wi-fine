const AutoLaunch = require('auto-launch');
const pkg = require('../package.json');
const launcher = new AutoLaunch({name: pkg.productName, isHidden:true});

exports.setEnabled = function(enabled) {
	if (enabled) {
		launcher.enable();
	} else {
		launcher.disable();
	}
};
