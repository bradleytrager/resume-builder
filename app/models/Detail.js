var App;

App = require('app');

module.exports = App.Detail = DS.Model.extend({
	item: DS.belongsTo("App.Item")
});