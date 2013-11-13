var App;

App = require('app');

module.exports = App.SectionController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function() {
			//TODO: get target element
			this.set('isEditing', true);
			console.log("SectionController");
		},
		doneEditing: function() {
			this.set('isEditing', false);
			var section = this.get('model');
			console.log(section);
			section.save();
		}
	}
});