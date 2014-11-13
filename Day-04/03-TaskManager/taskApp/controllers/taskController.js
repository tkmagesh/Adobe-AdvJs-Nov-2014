angular.module("taskApp")
.controller("taskController", ["$scope","taskStorage","notificationService","Task", function($scope, taskStorage, ns, Task){
            
            var storage = taskStorage;
            $scope.taskList = storage.getAll();

            $scope.addTask = function(newTask){
                var task = new Task({
                    id : new Date().getTime().toString(),
                    name : newTask,
                    isCompleted : false,
                    created : new Date()
                });
                storage.save(task);
                $scope.taskList.push(task);
                ns.sendMessage("A new task is added");
            };

            $scope.removeCompleted = function(){
                $scope.taskList.forEach(function(t){
                    if (t.isCompleted)
                        storage.remove(t);
                });
                $scope.taskList = $scope.taskList.filter(function(t){
                    return !t.isCompleted;
                });
            };
            $scope.toggle = function(task){
                task.toggle();
                storage.save(task);
            }
        }]);