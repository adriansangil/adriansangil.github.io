app.controller('AboutMeController', ['$scope', function($scope) { 
  $scope.greetings1 = "Hello,";
  $scope.greetings2 = "a bit about me:";
  $scope.summary = "I am a software engineer with 2+ years of experience in web and software development. I am highly familiar with the technologies and wide variety of tools used for web development. I also possess a Bachelor Degree in Information Technology Major in Database Systems."

  let myInfo = [];

  myInfo.push({title:"Wise Words",description:"The expert in anything was once a beginner."});
  myInfo.push({title:"Hobbies",description:"Playing the guitar, reading manga, sleeping and eating."});
  myInfo.push({title:"Web Developer",description:"I create web pages and web-based systems based on the client."});
  myInfo.push({title:"Gamer",description:"Gamers don't die, We respawn.", gameLink:"#", gameMessage:"Add me on Steam"});

  $scope.aboutMe = myInfo;

}]);