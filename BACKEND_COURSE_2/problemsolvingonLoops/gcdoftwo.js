function gcd(a,b){
    let ans=1;
    for(let i=2;i<=Math.min(a,b);i++){
        if(a%i==0 && b%i==0){
        ans=i;
    }
}
return ans;
}
let answer=gcd(24,28);
console.log(answer);