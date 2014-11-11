var products = [
    {id : 3, name : "Pen", cost : 30, units : 20, category : 2},
    {id : 8, name : "Hen", cost : 60, units : 60, category : 1},
    {id : 5, name : "Den", cost : 40, units : 40, category : 2},
    {id : 9, name : "Ten", cost : 50, units : 70, category : 1},
    {id : 4, name : "Len", cost : 20, units : 30, category : 2},
    {id : 6, name : "Zen", cost : 70, units : 80, category : 1}
]

console.log("Initial List");
console.table(products);

var sort = function (list){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++)
            if (list[i].id > list[j].id){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
}

console.log("After sorting")
sort(products);
console.table(products);

sort = function (list, attrName){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++)
            if (list[i][attrName] > list[j][attrName]){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
}

console.log("After sorting by cost")
sort(products, "cost");
console.table(products);

//product value = units * cost
sort = function (list, comparerFn){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++)
            if (comparerFn(list[i],list[j]) > 0 ){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
}

var productComparerByValue = function(p1,p2){
    var p1Value = p1.cost * p1.units,
        p2Value = p2.cost * p2.units;
    if (p1Value < p2Value) return -1;
    if (p1Value === p2Value) return 0;
    return 1;
}

console.log("After Sorting by product value");
sort(products,productComparerByValue);
console.table(products);

var filter = function (list, predicate){
    var result = [];
    for(var i=0;i<list.length;i++)
        if (predicate(list[i]))
            result.push(list[i]);
    return result;
}

var costlyProductPredicate = function(product){
    return product.cost > 50;
}
console.log("All costly products");
var costlyProducts = filter(products,costlyProductPredicate);
console.table(costlyProducts);

var map = function(list,mapperFn){
    var result = [];
    for(var i=0;i<list.length; i++)
        result.push(mapperFn(list[i]));
    return result;
}

var productDisplayMapper = function(product){
    return {
        id : product.id,
        name : product.name,
        desc : product.cost > 50 ? "costly" : "affordable"
    }
}

console.log("products for display (using map)");
var productsForDisplay = map(products,productDisplayMapper);
console.table(productsForDisplay);

function forEach(list,action){
    for(var i=0;i<list.length;i++)
        action(list[i]);
}

function applyDiscount(product){
    product.cost = product.cost * 0.9;
}
console.log("After applying discount (using forEach)");
forEach(products,applyDiscount);
console.table(products);

var groupBy = function(list, keySelector){
    var result = {};
    for(var i=0;i<list.length;i++){
        var key = keySelector(list[i]);
        if (typeof result[key] === "undefined")
            result[key] = [];
        result[key].push(list[i]);
    }
    return result;
}
console.log("after grouping by category");
var categoryKeySelector = function(product){
    return product.category;
}
var productsByCategory = groupBy(products, categoryKeySelector);
console.log(productsByCategory);


console.log("after grouping by category");
var affordabilityKeySelector = function(product){
    return product.cost > 50 ? "costly" : "affordable";
}
var productsByAffordability = groupBy(products,affordabilityKeySelector);

var some = function(list,predicate){
    for(var i=0;i<list.length;i++)
        if (predicate(list[i])) return true;
    return false;
}

var every = function(list,predicate){
    for(var i=0;i<list.length;i++)
        if (!predicate(list[i])) return false;
    return true;
}
