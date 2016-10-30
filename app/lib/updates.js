const electron = require('electron');
const dialog = electron.dialog;
const shell = electron.shell;
const request = require('request');
const pkg = require('../package.json');

const PACKAGE_URL = 'https://raw.githubusercontent.com/' + pkg.repository + '/master/app/package.json';

exports.check = function() {
	request({url: PACKAGE_URL, json: true}, function(err, res, newPkg) {
		if (newPkg.version === pkg.version) {
			showUpToDate();
		} else {
			openDownloadPage(newPkg);
		}
	});
};

function showUpToDate() {
	dialog.showMessageBox({
		type: 'info',
		message: pkg.productName + ' is up-to-date',
		detail: 'Latest version is ' + pkg.version,
		buttons: ['OK'],
	});
}

function openDownloadPage(newPkg) {
	const confirm = dialog.showMessageBox({
		type: 'info',
		message: newPkg.productName + ' ' + newPkg.version + ' is available to download.',
		detail: 'Do you want to open the releases page?',
		buttons: ['Yes', 'No']
	});
	if (confirm === 0) {
		shell.openExternal('https://github.com/' + pkg.repository + '/releases');
	}
}
