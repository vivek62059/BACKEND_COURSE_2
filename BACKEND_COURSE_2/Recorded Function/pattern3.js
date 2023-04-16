function pattern3(n){
    for(let row=1;row<=n;row+=1){
        let str="";
        let spaces=n-row;
        //for spaces
        for(let j=1;j<=spaces;j++){
            str+=" ";
        }
        // for stars
        let stars=row;
        for(let col=1;col<=stars;col++){
            str+="*";
        }
        console.log(str);
    }
}
pattern3(4);

/* pattern output
   *
   ** 
   ***
   */