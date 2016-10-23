const electron = require('electron');
const dialog = electron.dialog;
const pkg = require('../package.json');

exports.show = function(err) {
	dialog.showMessageBox({
		type: 'error', title: pkg.productName + ' ' + pkg.version,
		message: err.message,
		detail: err.stack.replace(/.*\n/, ''),
		buttons: ['OK'],
	});
};
