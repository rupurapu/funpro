var syt = function(p, q){
    if(q === 0){
        return p;
    }
    return syt(q, p % q);
}

console.log(syt(102, 68));
console.log(syt(101, 53));