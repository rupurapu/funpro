var power = function(value, pow){
    if(pow <= 0)
        return 1;
    return helper(value, pow, value);
}

function helper(value, power, num){
    if(power === 1)
        return num;
    else
        return helper(value, power - 1, value * num);
}

console.log(power(2, 2));
console.log(power(3, 2));
console.log(power(2, 3));