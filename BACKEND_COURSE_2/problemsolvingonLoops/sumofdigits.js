function sumofdigits(x){
let sum=0;
while(x>0){
    let lastDigit=x%10;
    sum+=lastDigit;
    x=Math.floor(x/10);
}
return sum;
}
let ans=sumofdigits(1347);
console.log(ans);
