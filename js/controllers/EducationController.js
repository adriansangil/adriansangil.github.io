app.controller('EducationController', ['$scope', function($scope) { 
  $scope.header = "Education";

  let mySchool = {
    school:"Mindanao State University - Iligan Institute of Technology",
    degree: "Bachelor of Science in Information Technology - Major in Database Management System",
    activities: "Activities and Societies: ICCF, Software Freedom Day, ICT Youth Convention"
  }
  $scope.education = mySchool;
}]);