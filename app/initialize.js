//var App;

// ===== Namespace =====
App = require('app');
//App.SERVER = 'localhost';
App.SERVER = '198.71.59.109';
// ===== Router =====
App.Router.map(function() {

});

// ===== Routes =====



// ===== Store =====
App.Store = DS.Store.extend({
	revision: 13,
	adapter: 'DS.FixtureAdapter'
});


// ===== Models =====

App.Resume = Ember.Object.create({
	name: 'Bradley Trager',
	title: 'Web Developer',
	sections: [{
		title: 'Experience',
		items: [{
			title: "Senior Web Developer",
			location: "Team Detroit",
			date: "September 2013-present",
			details: ["Web Developer specializing in single-page web applications (SPA) and content management systems (CMS) using several back-end technologies including php, asp.net, java, ruby and nodejs."]
		}, {
			title: "Senior Web Developer",
			location: "SoftFinity",
			date: "October 2012-present",
			details: ["Develop single page JavaScript web applications with various javscript frameworks",
				"Develop solutions for storage, analysis and visualization of big data",
				"Write articles about web development that have attracted over 24,000 unique visitors to our blog",
				"Mentoring Intern Software Developer"
			]
		}, {
			title: "C++ Programmer",
			location: "Cornell University",
			date: "2005-2007",
			details:["Created finite-element simulations using C++ and MatLab"]
		}]
	}, {
		title: 'Experience',
		items: [{
			title: "Senior Web Developer",
			location: "Team Detroit",
			date: "September 2013-present"
		}, {
			title: "Senior Web Developer",
			location: "Team Detroit",
			date: "September 2013-present"
		}]
	}]
});
// ===== Views =====

// ===== Controllers =====

//require('controllers/IndexController');
// ===== Template Helpers =====
Swag.registerHelpers();

// ===== Templates =====
//require('templates/_loginPartial');

require('templates/application');
require('templates/index');