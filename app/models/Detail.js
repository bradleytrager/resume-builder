var App;

App = require('app');

module.exports = App.Detail = DS.Model.extend({
	detail: DS.attr("string")
});