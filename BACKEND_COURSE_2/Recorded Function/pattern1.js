function pattern( n){
for(let row=1;row<=n;row+=1){
    let str=" ";
    for(let col=1;col<=n;col+=1){
    str+="*";
}
console.log(str);
}
}
pattern(4);
pattern(6);
pattern(10);

