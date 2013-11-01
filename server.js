var express = require('express'),
  app = express();
app.use(express.bodyParser());

var RESUME = {
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
      date: "August 2005- May 2007",
      details: ["Created finite-element simulations using C++ and MatLab"]
    }]
  }, {
    title: 'Education',
    items: [{
      title: "Master of Engineering in Applied Physics",
      location: "Cornell University, College of Engineering",
      date: "August 2002 - May 2007"
    }, {
      title: "Bachelor of Religious Studies",
      location: "Rabbinical College of America, Mayanot Institute",
      date: "June 2007 - January 2012"
    }]
  }, {
    title: "Skills",
    items: [{
      title: "Javascript",
      details: ["jQuery, jQuery UI, jQuery Mobile, Knockout.js, Ember.js, Backbone.js, Angular.js"]
    }, {

      title: "Content Management Systems",
      details: ["Concrete5, Wordpress, Magento"]
    }, {

      title: "Server Side Scripting",
      details: ["PHP, ASP.NET MVC, C#, Java, Node.js, Ruby"]
    }, {

      title: "Databases",
      details: ["MySQL, SQL Server, Oracle, MongoDB"]
    }, {

      title: "CSS",
      details: ["Sass, Less, Compass, Bootstrap, Zurb Foundation"]
    }, {

      title: "Tools",
      details: ["Git, SVN, Google Webmaster Tools, Google Analytics, Jira, Photoshop"]
    }]
  }]
};

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/resume.json', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(RESUME);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Listening on port 3000...');