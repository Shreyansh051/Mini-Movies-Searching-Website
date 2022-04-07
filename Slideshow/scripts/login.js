var getlogin =JSON.parse(localStorage.getItem("signupstore")) || [];
console.log(getlogin);

document.querySelector("#login-form").addEventListener("submit",formsubmitlogin);


var form=document.querySelector("#login-form");


function formsubmitlogin(event){
  event.preventDefault();

    var user=form.email.value;
    var pass=form.password.value;
   
    for(var i=0; i<getlogin.length;i++){
        if(getlogin[i].email== user && getlogin[i].password==pass )
            {
                flag = true;
                break;
            }
        
        if(flag==true){
           alert("login sucessfuly");
        }
        else{
           alert("invalid Credentials ");
        }

    }
    document.querySelector('input[type="submit"]').addEventListener('click',function(){
        window.location.href = "./index.html";
    })


}


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