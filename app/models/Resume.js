var App;

App = require('app');

module.exports = App.Resume = DS.Model.extend({
	name: DS.attr('string'),
	title: DS.attr('string'),
	sections:DS.hasMany('section')
});