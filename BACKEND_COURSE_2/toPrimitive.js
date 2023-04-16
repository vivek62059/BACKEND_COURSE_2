// let obj={
//     toString(){
//         //by default gives [object object]
//         return "98";
//     }
//     valueOf(){
//         //by default it returns the same object 
//     }
// }
let obj={};
console.log(10-obj);
console.log(obj-obj);
let obj1={x:4,y:8};
console.log(100-obj1);
let obj2={x:5,valueOf(){return 99}};
console.log(100-obj2);//gives the output as 1

let obj3={x:6,toString(){return 98}};
console.log(90-obj3);

let obj4={x:7,toString(){return{}}};
console.log(100-obj4);