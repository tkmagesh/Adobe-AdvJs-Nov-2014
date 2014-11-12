require.config({
        paths: {
            "jquery": "jquery-2.1.1",
            "Handlebars" : "handlebars-v2.0.0"
        }
    });
    require(["jquery","TaskCollection","TaskAppView"], function($, TaskCollection, TaskAppView){
    $(function(){
       
            window.taskCollection = new TaskCollection();
            window.taskAppView = new TaskAppView(taskCollection);
            taskAppView.initialize();
            taskAppView.render().$root.appendTo(document.body);
        });
    });