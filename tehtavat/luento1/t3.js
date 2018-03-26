var kjl = function(p, q){
    if(q === 0){
        if(p === 1){
            return "luvut ovat keskenaan jaottomia";
        }
        else{
            return "luvut ovat keskenaan jaollisia";
        }
    }
    return kjl(q, p % q);
}

console.log(kjl(35, 18));
console.log(kjl(102, 68));
console.log(kjl(7, 3));