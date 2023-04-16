var student="vivek";//student->global scope
function ask(question){//ask->global
    console.log(student, question);

}
function fun(){//fun->global
    var teacher="sanket";//teacher->fun
    ask("why?");
}
fun();