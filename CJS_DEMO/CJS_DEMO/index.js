const searchFunctions=require('./searching');
console.log(searchFunctions);
console.log(searchFunctions.linearSearch([3,44,77,45,12,34],34));
//destructuring
const{ linearSearch:ls,binarySearch:bs}=require('./searching');
console.log(ls([5,3,2,65,44,34],34));
console.log(bs([1,2,3,4,5,6,7],7)); 