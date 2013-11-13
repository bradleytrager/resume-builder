var express = require('express'),
  app = express();
app.use(express.bodyParser());
var fs = require('fs');

var SINGLE_RESUME = {
  "resume": {
    "id": 1,
    "name": "Bradley Trager",
    "title": "Web Developer",
    "sections": ["1", "2"]
  },
  "sections": [{
    "id": "1",
    "title": "Experience"
  }, {
    "id": "2",
    "title": "Education"
  }]
};

var RESUMES = [{
  "id": 1,
  "name": "Bradley Trager",
  "title": "Web Developer",
  "sections": ["1", "2"]
}];

var SECTIONS = [{
  "id": "1",
  "title": "Experience",
  "items":["1", "2", "3"],
  "resume": "1"
}, {
  "id": "2",
  "title": "Education",
  "resume": "1"
}];

var ITEMS = [{
    id: "1",
    title: "Senior Web Developer",
    location: "Team Detroit",
    date: "September 2013-present",
    details: ["Web Developer specializing in single-page web applications (SPA) and content management systems (CMS) using several back-end technologies including php, asp.net, java, ruby and nodejs."]
}, {
    id: "2",
    title: "Senior Web Developer",
    location: "SoftFinity",
    date: "October 2012-present"
  }, {
    id: "3",
    title: "C++ Programmer",
    location: "Cornell University",
    date: "August 2005- May 2007"
  },{
    id:"4",
    title: "Master of Engineering in Applied Physics",
    location: "Cornell University, College of Engineering",
    date: "August 2002 - May 2007"
  }, {
    id:"5",
    title: "Bachelor of Religious Studies",
    location: "Rabbinical College of America, Mayanot Institute",
    date: "June 2007 - January 2012"
  },{
    id: "6",
    title: "Javascript",
    details: ["jQuery, jQuery UI, jQuery Mobile, Knockout.js, Ember.js, Backbone.js, Angular.js"]
  }, {
    id: "7",
    title: "Content Management Systems",
    details: ["Concrete5, Wordpress, Magento"]
  }, {
    id: "8",
    title: "Server Side Scripting",
    details: ["PHP, ASP.NET MVC, C#, Java, Node.js, Ruby"]
  }, {
    id: "9",
    title: "Databases",
    details: ["MySQL, SQL Server, Oracle, MongoDB"]
  }, {
    id: "10",
    title: "CSS",
    details: ["Sass, Less, Compass, Bootstrap, Zurb Foundation"]
  }, {
    id: "11",
    title: "Tools",
    details: ["Git, SVN, Google Webmaster Tools, Google Analytics, Jira, Photoshop"]
  }];



//{
//   id: 1,
//   title: 'Experience',
//   items: [{
//     id: 1,
//     title: "Senior Web Developer",
//     location: "Team Detroit",
//     date: "September 2013-present",
//     details: ["Web Developer specializing in single-page web applications (SPA) and content management systems (CMS) using several back-end technologies including php, asp.net, java, ruby and nodejs."]
//   }, {
//     id: 2,
//     title: "Senior Web Developer",
//     location: "SoftFinity",
//     date: "October 2012-present",
//     details: ["Develop single page JavaScript web applications with various javscript frameworks",
//       "Develop solutions for storage, analysis and visualization of big data",
//       "Write articles about web development that have attracted over 24,000 unique visitors to our blog",
//       "Mentoring Intern Software Developer"
//     ]
//   }, {
//     id: 3,
//     title: "C++ Programmer",
//     location: "Cornell University",
//     date: "August 2005- May 2007",
//     details: ["Created finite-element simulations using C++ and MatLab"]
//   }]
// }, {
//   id: 2,
//   title: 'Education',
//   items: [{
//     id:1,
//     title: "Master of Engineering in Applied Physics",
//     location: "Cornell University, College of Engineering",
//     date: "August 2002 - May 2007"
//   }, {
//     id:2,
//     title: "Bachelor of Religious Studies",
//     location: "Rabbinical College of America, Mayanot Institute",
//     date: "June 2007 - January 2012"
//   }]
// }, {
//   id: 3,
//   title: "Skills",
//   items: [{
//     id: 1,
//     title: "Javascript",
//     details: ["jQuery, jQuery UI, jQuery Mobile, Knockout.js, Ember.js, Backbone.js, Angular.js"]
//   }, {
//     id: 2,
//     title: "Content Management Systems",
//     details: ["Concrete5, Wordpress, Magento"]
//   }, {
//     id: 3,
//     title: "Server Side Scripting",
//     details: ["PHP, ASP.NET MVC, C#, Java, Node.js, Ruby"]
//   }, {
//     id: 4,
//     title: "Databases",
//     details: ["MySQL, SQL Server, Oracle, MongoDB"]
//   }, {
//     id: 5,
//     title: "CSS",
//     details: ["Sass, Less, Compass, Bootstrap, Zurb Foundation"]
//   }, {
//     id: 6,
//     title: "Tools",
//     details: ["Git, SVN, Google Webmaster Tools, Google Analytics, Jira, Photoshop"]
//   }]
// }]
//}];

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/resumes', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
    resumes: RESUMES,
    sections: SECTIONS,
    items: ITEMS
  });
});
app.get('/sections', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
    sections: SECTIONS
  });
});
app.get('/resumes/:id', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
    resume: SINGLE_RESUME
  });
});
app.post('/resumes', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
    request: "hi"
  });
});

app.put('/resumes/:id', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  var resume = req.body.resume;
  resume.id = req.params.id;
  fs.writeFile("resume.json", JSON.stringify(resume), function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The file was saved!");
    }
    console.log(req.body);
  });
  res.send({
    request: "put"
  });
});
app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Listening on port 3000...');