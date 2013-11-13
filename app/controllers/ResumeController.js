var App;

App = require('app');

module.exports = App.ResumeController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function() {
			//TODO: get target element
			this.set('isEditing', true);
		},
		doneEditing: function() {
			this.set('isEditing', false);
			var resume = this.get('model');
			console.log(resume);
			resume.save();
		},
		createSection: function() {
			var title = 'New Section';
			var resume = this.get('model');
			// Create the new Todo model
			var section = this.store.createRecord('section', {
				id:"3",
				title: title,
				items: [],
				resume:resume
			});
			console.log(section.get('title'));
			
			// console.log(resume.get('content'));
			var sections = resume.get('sections');
			sections.pushObject(section);
			resume.set('name', "newName");
			//resume.set('sections', ["1", "2"]);//Doesn't work
			// console.log(sections.get('content'));
			
			// Save the new model
			resume.save();
			section.save();
		}
	}
});