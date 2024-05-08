const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
 // setTimeout(function(){
 //   loginPopup.classList.add("show");
 // },5000)

})

function showPopup(){
      const timeLimit = 2 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}
function checkEmail(){
  var msg="";
  msg="this email address is not available"
  var a=document.getElementById("email").value;
  if(a != "wissam.amer@gmail.com"){
    display("email1",msg)
  }else{
    display("email1","")
  }

}
function display(id,msg){
  var ref=document.getElementById(id);
  ref.innerHTML=msg;
  if(msg.length>0){
    ref.style.color="red";
    ref.style.fontSize="9px";
  }

}
function checkpass(){
  var msg=""
  msg="Password must be strong, at least 8 characters";
  var a=document.getElementById("pass").value;
  if(a.length<8){
    display("pass1",msg)
  }else{
    display("pass1","")
  }

}

close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})
