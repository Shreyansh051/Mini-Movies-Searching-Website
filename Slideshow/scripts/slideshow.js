let id;
let i = 0;
let image=JSON.parse(localStorage.getItem("slide"));

let Dabba=document.getElementById("firstSlide");


Dabba.innerHTML = null;

let img=document.createElement("img");

img.src=image[i];

Dabba.append(img);


id=setInterval(function (){
if(i===image.length){
i=0;
}
 let print=image[i]
  
Dabba.innerHTML=null;

 let img=document.createElement("img");

 img.src=print;


Dabba.append(img);

 i++;
},3000);
