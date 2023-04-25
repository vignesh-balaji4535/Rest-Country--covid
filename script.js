let div=document.createElement("div")

let div0=document.createElement("div")


let div1=document.createElement("div")
div1.style.textAlign="center"
div1.style.marginTop="150px";
div1.style.backgroundColor="rgb(193, 191, 191)";
div1.style.padding="20px 100px 200px 100px"
div1.style.margin="400px"
div1.style.border="2px solid grey"





let input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("placeholder","Enter Country Name")
input.id="countryname";


let br=document.createElement("br")

let p1=document.createElement("p");
p1.id="para1"
p1.style.color="yellow"

let p2=document.createElement("p");
p2.id="para2"
p2.style.color="red"


let p3=document.createElement("p");
p3.id="para3"
p3.style.color="green"


let button=document.createElement("button")
button.setAttribute("type","button")
button.innerHTML="Click Me";
button.addEventListener("click",getdata)
button.style.color="green"
button.style.backgroundColor="black"
button.style.margin="5px"
button.style.borderRadius="9px"


div1.append(input,button,br,p1,p2,p3)
div0.append(div1);
div.append(div0)
document.body.append(div);


async function getdata(){

let res=document.getElementById("countryname").value;
console.log(res)
    let res1=await fetch(`https://api.covid19api.com/total/dayone/country/${res}`)
    let res2=await res1.json();
    console.log(res2)

    let index=res2.length-1;
let resu1=`Active : ${res2[index].Active}`;
let resu2=`Deaths : ${res2[index].Deaths}`;
let resu3=`Recovered : ${res2[index].Recovered}`
document.getElementById("para1").innerHTML=resu1;
document.getElementById("para2").innerHTML=resu2;
document.getElementById("para3").innerHTML=resu3;



}

