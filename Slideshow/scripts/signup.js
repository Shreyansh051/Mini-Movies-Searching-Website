document.querySelector("#signup-form").addEventListener('submit',formsubmit)


var signupArr=JSON.parse(localStorage.getItem("signupstore")) || [];
console.log(signupArr)


 function formsubmit(event){
  event.preventDefault();
  var name=document.querySelector("#name").value;
 var mobile=document.querySelector("#mobile").value;
  var email=document.querySelector("#email").value;
 var password=document.querySelector("#password").value;

  var signupobj={
    name:name,
    mobile:mobile,
    email:email,
    password:password,

  };
signupArr.push(signupobj);
localStorage.setItem("signupstore",JSON.stringify(signupArr));


document.querySelector("input[type='submit']").addEventListener("click",function(){
    window.location.href="../login.html";
});
};

     // sticky navbar
     window.onscroll = function () { myFunction() };

     var navbar = document.getElementById("container");
     var sticky = navbar.offsetTop;
     
     function myFunction() {
       if (window.pageYOffset >= sticky) {
           navbar.classList.add("sticky")
       } else {
           navbar.classList.remove("sticky");
       }
     }