const electron = require('electron');
const dialog = electron.dialog;
const GhReleases = require('electron-gh-releases');
const pkg = require('../package.json');
const error = require('./error');

const updater = new GhReleases({
	repo: pkg.repository,
	currentVersion: pkg.version
});

exports.check = function() {
	updater.check(function (err, status) {
		if (status) {
			updater.download();
		} else {
			showUpToDate();
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

updater.on('update-downloaded', function (info) {
	updater.install();
});
