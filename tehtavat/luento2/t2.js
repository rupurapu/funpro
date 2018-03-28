var f1 = function(){
    return function(x, y){
        if(x > y)
            return 1;
        if(x < y)
            return -1;
        return 0;
    }
}();

var f2 = function(func, arr1, arr2){
    let count = 0;
    for(i = 0; i < arr1.length; i++){
        if(func(arr1[i], arr2[i]) === -1){
            count++;
        }
    }
    return count;
};

var arr2015 = [-0.9, 0.8, 2.3, 5.2, 9.2, 13.1, 16.2, 17.3, 13.6, 6.3, 5.5, 3.3];
var arr2016 = [-8.8, 0.3, 0.8, 4.7, 13.6, 15.1, 17.6, 16.2, 13.2, 5.5, 0.0, 0.2];

console.log(f2(f1, arr2015, arr2016));