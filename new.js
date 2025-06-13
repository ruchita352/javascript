//remove duplicate
const emails = [
    "abc@gmail.com",
    "bcd@gmail.com",
    "abc@gmail.com",
    "dca@gmail.com"
]
const uniquemails = [...new Set(emails)]
console.log(uniquemails);

//email validation


const email= "use@gmail.com"
const validation = email.includes('@') && email.endsWith('.com')

if(validation){
    console.log("valid email")
}else{
    console.log("not valid ")
}

//extract domain
const email1= "code@company.org"
const extract = email1.split('@')[1];
console.log(extract)


//math methods

const no=4.9
const res=Math.round(no) //4
const res1=Math.floor(no)//4 Rounds down to the nearest integer.//4
const res2=Math.ceil(no)//rounds up too nu //5
const maxvalue = Math.max(9,10,3)
console.log(maxvalue)
const random = Math.random();
console.log(random) //0.8971179315001458
const new1= Math.trunc(no)
const sq=Math.sqrt(9) //3


//global scope

var aa=10;

function func(){
    console.log(aa)
}
console.log(aa)

//block scope
{
    let name = "Ruchi";
    const age = 22;
    console.log(name); 
    console.log(age); 
  }

  console.log(name)


  //local scope

  function greet(){
    let mes="hello"
    console.log(mes)
  }
  greet();
  console.log(mes) //not access



//   arrow function
var call = (a)=>{
    call(8)
}

