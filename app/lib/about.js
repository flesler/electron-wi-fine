const electron = require('electron');
const dialog = electron.dialog;

const status = require('./status');
const pkg = require('../package.json');

exports.show = function() {
	dialog.showMessageBox({
		type: 'info', buttons: ['OK'], title: 'About ' + pkg.productName,
		icon: status.ONLINE.icon, message: getMessage()
	});
};

function getMessage() {
	return [
		'Name: ' + pkg.productName,
		'Version: ' + pkg.version,
		'Author: ' + pkg.author,
		'Description: ' + pkg.description,
		'Homepage: ' + pkg.homepage,
	].join('\n');
}
