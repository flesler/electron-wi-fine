const Config = require('electron-config');
const pkg = require('../package.json');

const config = new Config(pkg.name);

exports.get = function(key, def) {
	return config.has(key) ? config.get(key) : def;
};

exports.set = function(key, value) {
	config.set(key, value);
};
