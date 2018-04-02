var arr2015 = [-0.9, 0.8, 2.3, 5.2, 9.2, 13.1, 16.2, 17.3, 13.6, 6.3, 5.5, 3.3];
var arr2016 = [-8.8, 0.3, 0.8, 4.7, 13.6, 15.1, 17.6, 16.2, 13.2, 5.5, 0.0, 0.2];

var kLampoTilat = function(arr1, arr2){
    let yhdistetty = [];
    for(let i = 0; i < arr1.length; i++){
        yhdistetty.push((arr1[i] + arr2[i]) / 2);
    }
    return yhdistetty.filter(x => x > 0).reduce((prev, cur) => prev + cur);
};

var testi = (arr1, arr2) => arr1.map((x, i) => (arr1[i] + arr2[i]) / 2).filter(x => x > 0).reduce((prev, cur) => prev + cur, 0);

console.log(kLampoTilat(arr2015, arr2016));
console.log(testi(arr2015, arr2016));