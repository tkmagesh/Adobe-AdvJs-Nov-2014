define(["Handlebars", "TaskItemView"], function(Handlebars, TaskItemView){
    function TaskAppView(taskCollection){

        this.initialize = function(){
            var $root = this.$root = $("<div></div>");

            taskCollection.addChangeSubscriber('add',function(newTask){
                var taskItemView = new TaskItemView(newTask);
                taskItemView.initialize();
                taskItemView.render();
                var $taskList = $("#olTaskList", $root);
                taskItemView.$root.appendTo($taskList);
            });


            //View Changes
            $root.on("click","#btnAddTask", function(){
                console.log("addtask clicked");
                var taskName = $("#txtTask",$root).val();
                taskCollection.add(taskName);
            });

        }

        this.render = function(){
            var source = $("#taskAppTemplate").html();
            var template = Handlebars.compile(source);
            var data = {list : taskCollection.toJSON()};
            this.$root.append(template(data));
            return this;
        }
    }
    return TaskAppView;
});