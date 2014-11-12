function SalaryCalculator(defaults){
            var _data = defaults || {
                basic : 0,
                hra : 0,
                da : 0,
                tax : 0,
                salary : 0
            };
            var _changeSubscribers = {};
            this.get = function(attrName){
                return _data[attrName];
            };
            this.set = function(attrName,value){
                _data[attrName] = value;
                this.triggerChange(attrName);
            };
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
        SalaryCalculator.prototype.calculate = function(){
            var gross = this.get('basic') + this.get('hra') + this.get('da');
            var net = gross * ((100-this.get('tax'))/100);
            this.set('salary',net);
            
        }