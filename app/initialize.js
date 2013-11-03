//var App;

// ===== Namespace =====
App = require('app');

// ===== Router =====
App.Router.map(function() {

});

// ===== Routes =====
require('routes/IndexRoute');


// ===== Store =====
App.Store = DS.Store.extend({
	revision: 13,
	adapter: 'DS.FixtureAdapter'
});

// ===== Models =====

// ===== Views =====

// ===== Controllers =====

require('controllers/IndexController');
// ===== Template Helpers =====
Swag.registerHelpers();

// ===== Templates =====
//require('templates/_loginPartial');

require('templates/application');
require('templates/index');