var App;

App = require('app');

module.exports = App.IndexController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		doneEditing: function() {
			this.set('isEditing', false);
			var model = this.get('model');
			console.log(model);
			model.save();
		}
	}

});