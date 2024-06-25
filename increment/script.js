let i=0;
document.getElementById("count").textContent=0;

document.getElementById("dec").onclick=function(){
   
    if(i==0)
        {
            window.alert("warning lower bounadry is zero only");
            document.getElementById("count").textContent=i=0;
        }
        else{
     document.getElementById("count").textContent=--i;}

     if(i%2==0){
        document.getElementById("evenorodd").textContent="Even";
     }
     else{
        document.getElementById("evenorodd").textContent="odd";
    }
    
}

document.getElementById("reset").onclick=function(){
    document.getElementById("count").textContent=i=0;alert("vlaue assigned to zero");
    
}

document.getElementById("inc").onclick=function(){
   if(i<20)
    {document.getElementById("count").textContent=++i;}
   else {window.alert("Warning upper boundary is 20 only");
   document.getElementById("count").textContent=i;}

   if(i%2==0){
    document.getElementById("evenorodd").textContent="Even";
 }
 else{
    document.getElementById("evenorodd").textContent="Odd";
}


}












/*
-------------------------------------------------------------------------------------------------------
//spread operator (...) it is used to iterable each and every elements(unpack the elemnts)


let arr=[1,2,3,4,5]
const fruits=["banana","apple","grapes","orange"]

let ar=[...arr,...fruits,"hello",3.7]

console.log(ar)
/*
----------------------------------------------------------------------------------------------------
function add(a,b)
{ 
    console.log("addition =",a+b)

}

function sub(a,b){
    console.log("subtraction =",a-b);

}

function mul(a,b)
{
    console.log("multiplication",a*b)
}

function div(a,b){
    console.log("division =",a/b)
}


let input=prompt("Enter operation addition=add || subtraction=sub || multiplication=mul || division=div");
let num1=Number(prompt("Enter any  1st number"))
let num2=Number(prompt("Enter second number"))

console.log(input);

if(input=='add'){
    add(num1,num2);
}

else if(input=='sub')
    {
    sub(num1,num2);
    }
else if(input=='mul')
    {
        mul(num1,num2);
    }

else {
    div(num1,num2);
}


/*
--------------------------------------------------------------------------------------------
function alpha(al){
        var con=0;var vowel=0;
      for(i=0;i<=al.length;i++)
        {
            if(al[i]=='a'||al[i]=='e'||al[i]=='i'||al[i]=='o'||al[i]=='u')
                {
                  con++;   
                }

                else{

                    vowel++;
                    
                }
        }

        console.log(`consonant  count : ${con}`)
        console.log(`vowels count : ${vowel}`)
}

let str="prasad";
str=str.toLowerCase()
alpha(str)

/*
--------------------------------------------------------------------------------------------

function radiusofcircle(name){
    
    
    console.log(`THe length of name is ${name.length}`)


}

len=prompt(`Enter any name `)
radiusofcircle(len)


/*
------------------------------------------------------------------------------------------------
function radiusofcircle(radius){
    
    var cir=2*Math.PI*radius
    console.log(`circumference is ${cir}`)


}

radius=prompt("enter radius of a circle")
radiusofcircle(radius)

/*

---------------------------------------------------------------------------------------------

function add(a,b){

    console.log(`The addditon pf two numbers is ${a+b}`)

}


add(10,20);


------------------------------------------------------------------------------------------------------------------


/*
------------------------------------------------------------------------

var a=window.alert("hiii")
console.log(a)
let c=window.confirm("are u really want to close")
console.log(c)
a=9
let age=window.prompt("enter your age")
age=+age + +5;
console.log(age)
document.getElementById('h11').textContent='Welcome';

------------------------------------------------------------------------

<h1>Welcome to javascript </h1>
     <label>Radius:</label>
     <input  type="text" id="mytext"><br><br>
     <button id="submit">submit</button>
     <h2 id="h22"> </h2>

let radius;
let cir;
let PI=3.14159;
document.getElementById("submit").onclick=function(){
   radius=document.getElementById("mytext").value;
   radius=Number(radius);
   cir=2*PI*radius;
   document.getElementById("h22").textContent=`Circumference is ${cir} cm`}
---------------------------------------------------------------------------
   */

