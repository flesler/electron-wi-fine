const electron = require('electron');
const dialog = electron.dialog;
const shell = electron.shell;
const https = require('https');
const request = require('request');

const status = require('./status');
const pkg = require('../package.json');

const URL = 'https://raw.githubusercontent.com/flesler/electron-wi-fine/master/app/package.json';

exports.check = function() {
	request({url:URL, json:true}, function(err, res, newPkg) {
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
		message: 'A new version ' + newPkg.version + ' of ' + newPkg.productName + ' is available.',
		detail: 'Do you want to download it now?',
		buttons: ['Yes', 'No']
	});
	if (confirm === 0) {
		shell.openExternal('https://github.com/flesler/electron-wi-fine/releases');
	}
}
