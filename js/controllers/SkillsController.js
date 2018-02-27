app.controller('SkillsController', ['$scope', function($scope) { 
   $scope.header = "Skills and Technology";

  let mySkills = {
    web:" CSS, HTML, Javascript, jQuery, SQL, Bootstrap, REST Architecture, Git",
    lang: " Java, J2EE, PHP",
    mobile: " familiar with Android and Unity",
    others: " Spring MVC, Spring Boot, Maven, Jmeter, familiar with NodeJS, AngularJS, CodeIgniter, JUnit, Mockito"
  }
  $scope.skills = mySkills;

}]);