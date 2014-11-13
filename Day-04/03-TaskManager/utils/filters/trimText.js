 angular.module("utils")
            .filter("trimText",function(){
                return function(data, limit){
                    data = data || '';
                    limit = limit || 20;
                    return data.length > limit ? data.substr(0,limit) + "..." : data;
                }
            });