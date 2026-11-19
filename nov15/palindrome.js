
function rev(str1) {
let str2=str1
const arr= new Array(str2.length)
for(let i=str2.length-1;i>-1;i--){
let char =str2.charAt(i)
//Console.log(char)
arr[i] =char
}
let  revres= arr.reverse().join('')
return revres
}

function isPalindrome(str) {
   // console.log(str)
  const reversed =rev(str) 
 console.log("Reveresed string is",reversed)
  return str === reversed;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false*/
console.log(isPalindrome('malayalam'));   // false*/
