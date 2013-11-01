App = require('app');

module.exports = App.IndexRoute = Ember.Route.extend({
	model: function() {
		return Ember.$.getJSON("http://localhost:3000/resume.json");
	}
});