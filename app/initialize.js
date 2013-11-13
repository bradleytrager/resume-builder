//var App;

// ===== Namespace =====
App = require('app');

// ===== Router =====
App.Router.map(function() {
	this.resource('resumes', function() {
    this.resource('resume', { path: ':resume_id' });
  });
});

// ===== Routes =====
require('routes/IndexRoute');
require('routes/ResumesRoute');

// ===== Store =====
App.Store = DS.Store.extend({
  
});
//App.ApplicationAdapter = DS.RESTAdapter.extend({
 //  host: "http://localhost:3000"
 //});
// ===== Models =====

require('models/Resume');
require('models/Section');
require('models/Item');
//require('models/Detail');

// ===== Views =====

// ===== Controllers =====

//require('controllers/IndexController');

//require('controllers/ResumesController');
require('controllers/ResumeController');
require('controllers/SectionController');
// ===== Template Helpers =====
Swag.registerHelpers();

// ===== Templates =====
//require('templates/_loginPartial');

require('templates/application');
require('templates/index');
require('templates/resumes');
require('templates/resume');
//require('templates/sections');
