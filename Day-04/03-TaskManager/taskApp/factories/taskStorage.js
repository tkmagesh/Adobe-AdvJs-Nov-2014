angular.module("taskApp").factory("taskStorage", function (Task){
                var storage = window.localStorage;
                function getAllTasks(){
                    var result = [];
                    for(var i=0;i<storage.length;i++){
                        var task = new Task( window.JSON.parse(storage.getItem(storage.key(i))));
                        result.push(task);                             
                    }
                    return result;
                }
                function saveTask(task){
                    storage.setItem(task.id, window.JSON.stringify(task));
                }
                function removeTask(task){
                    storage.removeItem(task.id);
                }
                return {
                    save : saveTask,
                    remove : removeTask,
                    getAll : getAllTasks
                };
        })