app.controller('ExperienceController', ['$scope', function($scope) { 
  $scope.header = "Professional Experience";

  let myExperience = [];

  myExperience.push({jobTitle:"Junior Media Buyer",
  	company:"WeweMedia",
  	jobLength:"Jul 2016 - Feb 2017", 
  	location:"Iligan City, Philippines",
  	responsibilities:[
  	"Enabled analytics and notification by integrating Firebase to the mobile application.",
  	"Engaged with affiliates regarding mobile advertisement and offer negotiations."],
  	tech: "Android Studio, Firebase, Java"
  });

  myExperience.push({jobTitle:"Associate Software Engineer",
  	company:"Accenture",
  	jobLength:"Apr 2015 - Jun 2016", 
  	location:"Cebu City, Philippines",
  	responsibilities:[
  	"Developed web service endpoints based on Interface Agreement.",
  	"Performed and created test cases using JUnit, JMeter and Mockito.",
  	"Worked on SQL scripts and other database related stuff.",
  	"Coordinated with the team on release and management of builds using Jenkins.",
  	"Resolved bugs identified by remote QA."],
  	tech: "Java, Git, Jmeter, JBoss, JavaEE,Mockito, REST, Postman, MySQL"
  });

  myExperience.push({jobTitle:"Web Developer",
  	company:"Arnlea Systems Ltd.",
  	jobLength:"Jul 2014 - Jan 2015", 
  	location:"Iligan City, Philippines",
  	responsibilities:[
  	"Reworked front-end interface using Bootstrap.",
  	"Assisted on creating and implementing database design.",
  	"Helped develop client project using PHP, Bootstrap and CodeIgniter.",
  	"Assisted the team on QA duties and testing."
  	],
  	tech:"PHP, CodeIgniter, MySQL, Git, SASS, Grunt, AJAX, HTML, CSS, Javascript, jQuery, Bootstrap, Slack"
  });

  $scope.experience = myExperience;
}]);