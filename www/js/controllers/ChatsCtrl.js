'use strict';
/***
 * 聊天
 */
app.controller('ChatsCtrl', ["$scope","ChatsService",function($scope,ChatsService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = ChatsService.all();
  $scope.remove = function(chat) {
      ChatsService.remove(chat);
  };
}]);
