function pattern4(n){
    for(let row=1;row<=n;row++){
        let str="";
        let spaces=n-row;
        //for spaces
        for(let j=1;j<=spaces;j++){
            str+=" ";
        }
        //for stars
        let stars=2*row-1;
        for(let col=1;col<=stars;col++){
            str+="*";
        }
        console.log(str);
    }
}
pattern4(5);
/*
 *
   ***
  *****
 *******
*********
*/