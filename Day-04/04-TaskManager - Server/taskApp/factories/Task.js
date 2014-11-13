angular.module("taskApp").factory("Task",function(){
                var Task = function(defaults){
                    defaults = defaults || {};
                    this.id = defaults.id || 0;
                    this.name = defaults.name || "";
                    this.isCompleted = defaults.isCompleted || false;
                    this.created = defaults.created;
                };
                Task.prototype.toggle = function(){
                    this.isCompleted = !this.isCompleted;
                };
                return Task;
            })