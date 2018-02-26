app.controller('AboutMeController', ['$scope', function($scope) { 
  $scope.greetings1 = "Hello,";
  $scope.greetings2 = "a bit about me:";

  let myInfo = [];

  myInfo.push({title:"Wise Words",description:"The expert in anything was once a beginner."});
  myInfo.push({title:"Hobbies",description:"Playing the guitar, reading manga, sleeping and eating."});
  myInfo.push({title:"Web Developer",description:"I create web pages and web-based systems based on the client."});
  myInfo.push({title:"Gamer",description:"Gamers don't die, We respawn.", gameLink:"#", gameMessage:"Add me on Steam"});

  $scope.aboutMe = myInfo;

}]);