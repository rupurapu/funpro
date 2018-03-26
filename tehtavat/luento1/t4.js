var power = function(value, pow){
    if(pow === 0){
        return 1;
    }else{
        return value * power(value, --pow);
    }
}

console.log(power(2, 2));
console.log(power(3, 2));
console.log(power(2, 3));