const electron = require('electron');

exports.isDevelopment = function() {
  return electron.app.getPath('exe').includes('/node_modules/electron/');
};
