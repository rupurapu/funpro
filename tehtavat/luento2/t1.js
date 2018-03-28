const f = function(){
    return function(x, y){
        if(x > y)
            return 1;
        if(x < y)
            return -1;
        return 0;
    }
}();

console.log(f(1, 2));
console.log(f(5, 2));
console.log(f(2, 2));
console.log(f(-2, -4));