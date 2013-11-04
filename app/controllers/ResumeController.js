var App;

App = require('app');

module.exports = App.ResumeController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		doneEditing: function() {
			this.set('isEditing', false);
			var resume = this.get('model');
			console.log(resume);
			resume.save();
		}
	}

});