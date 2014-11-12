function TaskItemView(task){

    this.initialize = function(){
        var $root = this.$root = $("<li></li>");

        task.addChangeSubscriber('isCompleted',function(newTask){
            $root.toggleClass("completed");
        });


        //View Changes
        $root.on("click", function(){
            task.toggle();
        });

    }

    this.render = function(){
        this.$root.html(task.get("name"));
        if (task.get("isCompleted")){
            this.$root.addClass('completed');
        } else {
            this.$root.removeClass('completed');
        }
        return this;
    }
}