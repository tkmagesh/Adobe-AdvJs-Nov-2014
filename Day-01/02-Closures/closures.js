function getSpinner(){

}

var spinner = getSpinner()
spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1

function getSpinner(){
    var count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    var result = {
        up : increment,
        down : decrement
    };
    return result;
}


function getPrimeFinder(){
    var cache = {};
    function checkPrime(n){
        if (n <= 3) return true;
        for(var i=2; i<=(n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    return function(n){
        if (typeof cache[n] !== "undefined"){
            console.log("returning from cache..!");
            return cache[n];
        }
        console.log("Juz processed..!");
        cache[n] = checkPrime(n);
        return cache[n];
    }
}

function memoize(fn){
    //
}

function add(x,y){
  return x + y;
}

var memorizedAdd = memoize(add);
memorizedAdd(10,20)
memorizedAdd(10,20)

function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (!cache.hasOwnProperty(key)) {
            console.log("juz processed");
            cache[key] = fn.apply(this,[].slice.call(arguments,0));
        } else {
            console.log("from cache");
        }
        return cache[key];
    }
}



























