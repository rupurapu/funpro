var reverse = function(arr){
    let arrLen = arr.length;
    let newArr = [];
    (function rev(){
        if(newArr.length < arr.length){
            newArr.push(arr[--arrLen]);
            return rev();
        }else{
            return newArr;
        }
    }());
      return newArr;
    }

var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(reverse(list));