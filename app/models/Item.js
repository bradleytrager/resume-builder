var App;

App = require('app');

module.exports = App.Item = DS.Model.extend({
	title: DS.attr('string'),
	location: DS.attr('string'),
	date: DS.attr('string'),
	details:DS.hasMany('App.Detail')
});