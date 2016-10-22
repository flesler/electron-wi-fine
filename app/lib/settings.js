const Configstore = require('configstore');
const pkg = require('../package.json');

const store = new Configstore(pkg.name);

store.isDefined = function(key) {
	return store.get(key) != null;
};

store.isEnabled = function(key, def) {
	return store.isDefined(key) ? store.get(key) : def;
};

module.exports = store;
