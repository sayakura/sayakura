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
        comments: ["a","b"],
        published_date: null,
    }
];


app.controller('blogCtrl',["$scope","$firebaseArray",
  function($scope,$firebaseArray){
 

    var ref = new Firebase("https://personalpage.firebaseio.com/posts");
    //$scope.posts = $firebaseArray(ref);
    $scope.posts = postss;
    

    ref.limitToLast(10).on("child_added",function(data){
      $scope.lastestten = data.val();
    });
    




  
}]);