//javascript printing
console.log("heello codee vibe innovation")

//datatypes
//primitive and non primitive
//primitive can not be changed
//object non-primitive
//primitive
//numbers
//boollean
//string
//undefined
//null
//object 
//type of keywordd
console.log(typeof("hello"))
console.log(typeof(123))
console.log(typeof(true))
console.log(typeof(null))
// console.log(typeof(1 / "hello"))

// key valuee
// const abd{car:"thar",color:"red"}

//variables 

 //var  //let //const 
var fname; //declaration
fname="dog" //assignation
console.log(fname)
fname="cat" //redeclaare + reassign

console.log(fname)

//let

let mname="maango"
console.log(mname)
// let mname="apple"
console.log(mname)

//const

const lastname="apple"
console.log(lastname)

//mathemetical expression
//+ - * / %
console.log('java'+ 'script')
console.log(3*4/7)


//relational operators
//< >= <= >= 
//== checck only datatype
//=== check datatype & value
//true and false
let a = 10; let b = 20; 
console.log ( a === b);
 console.log ( a >= b);
console.log ( a <= b); 
console.log ( a !== b);

let age=16
if(age !== 18){
    console.log("age is not 18")
}
//logical operators
//and &&
//or ||

let num=45;

if(num>=1  && num<=100 )
{
    console.log("number is between 1 to 100")
}
// 0-9 represend 
let password="code1234"
if(password.length >= 8 && /\d/.test(password) ){
    console.log("strong password ")
}

//or
let email="";
let phone="9898675434";
if(email=="" || phone=="")
{
    console.log("useer entered")
}

//not operators 
let input="";
if(!input){
    console.log("input can not be empty")
}


// if( ){

// }else if{

// }else if{

// }else{

// }


let marks=82;
if(marks>=90){
    console.log("grade A")
}else if(marks>=80){
    console.log("grade B")
}else{
    console.log("grade D")
}

function multiply(a,b){
    return a*b;
}
let result=multiply(9,8)
console.log(result)


//time based grettings
let hour=15;
if(hour<12){
    console.log("good morning")
}else if(hour<18){
    console.log("good afternoon")
}else if(hour<21){
    console.log("good evening")
}else{
    console.log("good night")
}
//temrature checker

let temp=35;
if(temp>=40){
    console.log("very hot")
}else if(temp>=30){
    console.log("hot")
}else if(temp>=20){
    console.log("warm")
}else {
    console.log("cold")
}

//user rolee

let role="admin";
if(role==='admin'){
    console.log("full accesse")
}else if(role === 'editor'){
    console.log('edit access')
}else if(role==='viewer'){
    console.log('reaad only')
}else{
    console.log('no access')
}
//festival grettings

let month=prompt("enter a month");
if(month==='january'){
    console.log('happy new year')
}else if(month==='august'){
    console.log('independence day')
}else if(month==='december'){
    console.log('marry christmas')
}else{
    console.log('have a great month')
}
//for loop 
for(let i=1;i<=3;i++){
    console.log(i)
}

//do..while
let count=1;
do{
console.log(count)
}while(count<=5)

//reverse string
function reverse(string){
 
    let rev="";
    for(let i=string.length-1;i>=0;i--){
        rev +=string[i]
    }
    return rev;
}
console.log(reverse)

//sum
function sum(){
    let sum=0;
    do{
        sum+=num % 10;
        num=math.floor(num/10)

    }while(num>0);
    return sum;
}
console.log(sum(5634))

//find first
function fdigit(){
    do{
        number=math.floor(number/10);

    }while(number>=10)
    return number;
}
console.log(fdigit(647473))

//object

const person={
    name:"myname",
    age:30,
    greet:function(){
        console.log("heello")
    }

}

//new keywordd
//this
//constructor function
function Person(name,age){
    this.name=name;
    this.age=age;
}
const person1 = new Person("fname",30)
console.log(person1.name) //fname
console.log(person1)


//
const car={
brand:"thar",
model:"new",
year:"2024"
}
//access object properties

console.log(car.brand)
car["model"]


//neested object
const course={
    title:"mern stack",
    instructor:"hina",
    students:[
        {name:"priya",grade:45},
        {name:"priya1",grade:47},
        {name:"priya2",grade:40}
    ]

}
console.log(course.title)
course.students.forEach((student)=>{
    console.log(`Name:${student.name}-grade:${student.grade}`)
})

//name:priya
