define([], function(){
    function Task(defaults){
        var _changeSubscribers = {};
        var _data = defaults || {
            id : -1,
            name : "",
            isCompleted : false
        };
        
        this.get = function(attrName){
            return _data[attrName];
        };
        
        this.set = function(attrName,value){
            _data[attrName] = value;
            this.triggerChange(attrName);
        };

        this.toJSON = function(){
            return JSON.parse(JSON.stringify(_data));
        }

        this.addChangeSubscriber = function(attrName, listener){
            _changeSubscribers[attrName] = _changeSubscribers[attrName] || [];
            _changeSubscribers[attrName].push(listener);
        };
        this.triggerChange = function(attrName){
            var listeners = _changeSubscribers[attrName] || [];
            for(var i=0;i<listeners.length;i++)
                listeners[i]();
        };
    }

    Task.prototype.toggle = function(){
        this.set("isCompleted", !this.get("isCompleted"));
    }
    return Task;
});