app.controller('SkillsController', ['$scope', function($scope) { 
   $scope.header = "Skills and Technology";

  let mySkills = {
    web:" CSS, HTML, Javascript, jQuery, SQL, Bootstrap 3, REST Architecture, Git",
    lang: " Java, J2EE, PHP, familiar with Python",
    mobile: " familiar with Android and Unity",
    others: " Spring MVC, Spring Boot, Maven, Jmeter, familiar with NodeJS, AngularJS, CodeIgniter, JUnit, Mockito, UNIX scripting"
  }
  $scope.skills = mySkills;

}]);