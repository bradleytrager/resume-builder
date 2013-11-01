var App;

App = require('app');

module.exports = App.Section = DS.Model.extend({
	title:DS.attr('string'),
	items:DS.hasMany('App.Item')
});