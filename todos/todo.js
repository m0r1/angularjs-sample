var TodoCtrl = function($scope, $http) {
  $scope.tasks = [
    {'body': 'buy the beer', 'done': true},
    {'body': 'buy the wine', 'done': false},
    {'body': 'buy the milk', 'done': false},
    {'body': 'buy the cheese', 'done': false},
  ];

  $scope.addTask = function() {
    $scope.tasks.push({'body': $scope.taskBody, 'done': false});
    $scope.taskBody = '';
  }

  $scope.getDoneCount = function() {
    var count = 0;
    angular.forEach($scope.tasks, function(task) {
      count += task.done ? 1 : 0;
    });

    return count;
  }
  
  $scope.deleteDone = function() {
    var currentTasks = $scope.tasks;
    $scope.tasks = [];

    angular.forEach(currentTasks, function(task) {
      if (!task.done) {
        $scope.tasks.push(task);
      }
    });
  }
}