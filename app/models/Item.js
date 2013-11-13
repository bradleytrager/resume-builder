var App;

App = require('app');

module.exports = App.Item = DS.Model.extend({
	title: DS.attr('string'),
	location: DS.attr('string'),
	date: DS.attr('string'),
	section:DS.belongsTo('section')
	//details:DS.hasMany('detail')
});