App = require('app');

module.exports = App.IndexRoute = Ember.Route.extend({
  model: function() {
  	return App.Resume.find();
  }
});