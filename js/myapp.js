var app = angular.module("launchApp",["firebase","ngRoute"]);


var postss = [
    {
        author: "null",
        title:"HAHA",
        content:"Description",
        likes: 0,
        comments: ["a","b"],
        published_date: null,
    }, {
        author: "ngRoute",
        title:"HAHA2",
        content:"Description",
        likes: 0,
        comments: null,
        published_date: null,
    }
];


app.controller('blogCtrl',["$scope","$firebaseArray",
  function($scope,$firebaseArray){
 

    var ref = new Firebase("https://personalpage.firebaseio.com/posts");
    $scope.allcomments = $firebaseArray(ref);
    $scope.comment = {};
 
   
    
    $scope.submit = function(){
      if($scope.comment.title && $scope.comment.content){
        $scope.comment.published_date = Date.now();
        $scope.comment.comments = null;
        $scope.comment.likes = 0;
        $scope.allcomments.$add($scope.comment);
        $scope.comment = {};
      }
    };
  

}]);