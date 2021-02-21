function allLongestStrings(inputArray) {
let greatestLength  = Math.max(...inputArray.map(i => i.length));
console.log(greatestLength);

return inputArray.filter(i => i.length === greatestLength )

}
let inputArray = ['abc','acb','cba','a','cde']
console.log( allLongestStrings(inputArray))
