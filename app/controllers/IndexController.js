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
			console.log(this.get('store'));
			this.get('store').commit();
		}
	}

});