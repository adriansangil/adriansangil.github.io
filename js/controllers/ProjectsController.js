app.controller('ProjectsController', ['$scope', function($scope) { 
   $scope.header = "Projects";

  let myProjects = [];
  myProjects.push({
  	name: "adriansangil.github.io",
  	description: "A webpage hosted in github with a short summary of me",
  	tags: "HTML, AngularJS, CSS, Bootstrap 3, Javascript",
  	url: "https://github.com/adriansangil/adriansangil.github.io"
  });
  myProjects.push({
  	name: "Human Resource Information System",
  	description: "School project way back in 2013. A system created for handling Leaves, Ranking and Promotion, and Benefits of a public school",
  	tags: "PHP, CodeIgniter, Bootstrap, HTML, CSS, Javascript",
  	url:"https://github.com/adriansangil/hris"
  });
  myProjects.push({
  	name: "XRates",
  	description: "Test Problem for converting money Rates using NodeJS Framework and koa2",
  	tags: "NodeJS, koa2, Javascript, ESLint, Babel, Postman",
  	url: "https://github.com/adriansangil/xrates"
  });
  myProjects.push({
  	name: "Library Management System",
  	description: "A simple REST Application for managing books, borrowers and branches for a library",
  	tags: "SpringBoot, Java, Rest-API, Spring MVC, Postman",
  	url: "https://github.com/adriansangil/Library-Management-System"
  });

  $scope.projects = myProjects;

}]);