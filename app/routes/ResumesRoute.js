App = require('app');

module.exports = App.ResumesRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('resume');
	}
});