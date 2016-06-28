'use strict';
/***
 * 聊天详情
 */
app.controller('ChatDetailCtrl', ["$scope","$stateParams","ChatsService",function($scope, $stateParams, ChatsService) {
  $scope.chat = ChatsService.get($stateParams.chatId);
}]);
