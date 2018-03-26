var onPalindromi = function(str){
    let strLen = str.length;
    if(strLen === 0 || strLen ===1){
        return true;
    }
    else if(str[0] !== str[strLen - 1]){
        return false;
    }
    else{
        return onPalindromi(str.slice(1, strLen  - 1));
    }
}

console.log(onPalindromi('sokos'));
console.log(onPalindromi('antti'));
console.log(onPalindromi('imaami'));