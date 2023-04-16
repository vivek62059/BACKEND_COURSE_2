function fun(){//fun->global scope
   var x=15;//x->fun scope
    function gun(){//gun->fun scope
        var y=25;//y->gun scope
        console.log(y);//25
        console.log(x);//15
    }
    gun();
    console.log(x);//15
    console.log(y);//error
}
fun();