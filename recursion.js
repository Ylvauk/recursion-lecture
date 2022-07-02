// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
// You may find the string method slice helpful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

function factorial(n){
    // This function returns the factorial of a given number.
    if (n==1){ return 1}else{return n * factorial(n-1)}
}

function fibonacci(i){
    if (i <= 1) 
    return i;
    return fibonacci(i-1)+fibonacci(i-2);
    
}
function isPalindrome(string) {
    const stringArray = string.split("");
    if (stringArray.length == 1) return true;
    if(stringArray.pop() == stringArray.shift()){
    return pal(stringArray.join(""))}else{return false;
  }
}

function changeXY(str) {
    const arr = str.split("");
    if(arr.indexOf('x')<0) return str
    arr[arr.indexOf("x")] = "y";
    return changeXY(arr.join(""));
}


function findMax(array){
    if(array.length<=1) {
        return array[0]
      }
      if(array[0]>array[1])array.splice(1,1)
      if(array[0]<array[1])array.splice(0,1)
      return findMax(array)
}

// coinFlips is a hungry for more challenging recursion problem! Not required as part of the deliverable.
function coinFlips(){
//could not figure this one out
}


module.exports = {
    factorial,
    fibonacci,
    isPalindrome,
    changeXY,
    findMax,
    coinFlips,
}
