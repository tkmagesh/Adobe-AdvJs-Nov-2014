    angular.module("taskApp").service("notificationService",function(){
        this.sendMessage = function(msg){
            console.log(msg + " - sent at " + new Date());
        }
    });