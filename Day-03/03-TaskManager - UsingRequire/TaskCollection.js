define(['Task'],function(Task){
    function TaskCollection(){
        var _list = [];
        var _changeSubscribers = {};
        this.add = function(taskName){
            var newTask = new Task({
                id : new Date().getTime().toString(),
                name : taskName,
                isCompleted : false
            });
           _list.push(newTask);
            this.triggerChange("add", [newTask])
        };
        this.getAll = function(){
            return _list.slice(0);
        };
        this.toJSON = function(){
            var dataList = _list.map(function(item){
                return item.toJSON();
            });
            return dataList;
        } 
        this.addChangeSubscriber = function(attrName, listener){
            _changeSubscribers[attrName] = _changeSubscribers[attrName] || [];
            _changeSubscribers[attrName].push(listener);
        };
        this.triggerChange = function(attrName, arrayOfEventArgs){
            arrayOfEventArgs = arrayOfEventArgs || [];
            var listeners = _changeSubscribers[attrName] || [];
            for(var i=0;i<listeners.length;i++)
                listeners[i].apply(this,arrayOfEventArgs);
        };

    }
    return TaskCollection;
});
