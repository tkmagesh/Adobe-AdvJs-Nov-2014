angular.module("taskApp").factory("taskStorage", function (Task, $http, $q){
        function getAllTasks(){
            var deferred = $q.defer();
            $http.get("/tasks")
                .then(function(response){
                    var result = response.data.map(function(obj){
                        return new Task(obj);
                    });
                    deferred.resolve(result);
                })
            return deferred.promise;
        }
        function saveTask(task){

        }
        function removeTask(task){

        }
        return {
            save : saveTask,
            remove : removeTask,
            getAll : getAllTasks
        };
});