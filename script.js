 
 // page preventDefault 
 document.getElementById("submitbtn").addEventListener("click",function(event){event.preventDefault()});
 // validate the form
 function validate() {
 // Download img let jpg=document.getElementById('dwnld');
  let content_table=document.getElementById('content');
  let btn_table=document.getElementById('button');
  let invalid=document.getElementById('check');
  let valid=document.getElementById('success');
  let loginpage=document.getElementById('form_container');
   let userName=document.getElementById('uname');
   let pass_word=document.getElementById('password');
   let loginbtn=document.getElementById('submitbtn');
   // CHANGE HERE user name and pass word!
   var admin= "admin";
   var pass= "tntj";
  // check the user name and password...
  if (userName.value != admin || pass_word.value != pass ) {
    //vibrate
     navigator.vibrate([350]);
    // border colors
    userName.style.border= "2px solid red";
        pass_word.style.border = "2px solid red";
        // outline colors
        userName.style.outline= "2px solid red";
        pass_word.style.outline = "2px solid red";
        //animation
        userName.style. animation = "shake 0.2s ease-in-out 0s 2";
        pass_word.style.animation="shake 0.2s ease-in-out 0s 2";
        invalid.style.animation= "shake 0.2s ease-in-out 0s 2";
         loginbtn.style.background ="red";
       invalid.style.display = "block";
  //login failed Error message

    function loginfailed(){
        invalid.style.display = "none";
        userName.style.border= "none";
        pass_word.style.border = "none";
        userName.style.outline= "none";
        pass_word.style.outline = "none";
         loginbtn.style.background ="yellow";
       userName.focus();

  }
     setTimeout(loginfailed,1500);
        // alert("Incorrect Details")
        userName.value='';
        pass_word.value='';
  }
  else if (userName.value == admin || pass_word.value == pass ) {
         //vibrate
        navigator.vibrate([200,50,200,50,200]);

        userName.style.border= "4px solid #29f013";
        pass_word.style.border = "4px solid #29f013";
        userName.style.outline= "2px solid green";
        pass_word.style.outline = "2px solid green";
        valid.style.display = "block";
         loginbtn.style.color ="white";
         loginbtn.style.background ="#29f013";

        valid.style. animation = "shake 1s ease-in-out 0s 5";
        valid.focus();
        //alert("✳️👍Login Successfully👍✳️");
        //login success message
        function loginsuccess(){
         
         //Download img jpg.style.display = "block" ;
          loginbtn.style.color ="black";
          loginbtn.style.background ="yellow";
        content_table.style.display = "block" ;
          btn_table.style.display = "block";
          loginpage.style.display= "none";
        }
      setTimeout(loginsuccess,1500);
     // This for download jpg ....autoClick();
  }
  //unnecessary part
  else{
       alert("SYSTEM ERROR ! !")
          
  }
 }
 //show password
function showpassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    navigator.vibrate([50]);
    x.type = "text";
  } else {
    navigator.vibrate([50]);
    x.type = "password";
  }
}

//Session timeout
function refresh(){
    navigator.vibrate([200]);
    alert("_SESSION_EXPIRED_\n\n_PLEASE RE-LOGIN🔄_");
    location.reload();
    }
//print the page
function printing(){
       //vibrate
       navigator.vibrate([50]);

      let pwd=prompt("Please Enter Password To download 'PDF' File");
      var session_expired=document.getElementById('session');
      //confirmation password
      if (pwd!= "tntj"){
        
        if (confirm("ℹ️INCORRECT PASSWORD❗  \n Press 'OK' to TRY AGAIN 🔄...")) {
          printing();
        }else{
          alert("If You Want To Download PDF file,Please Enter The Correct Password...");
        }
        
      }else{
        alert("_AUTHENTICATED SUCCESSFULLY_✔️\n\nReady to Previewing your PDF File...")
        print();
       setTimeout(refresh,50000);
       setTimeout(()=>{session_expired.style.display = "block" ;},42000);
     }
   }
//session timeout
// onafterprint="session_expired()"
// function session_expired() {
//       // body...
//       var btn_table=document.getElementById('button');
//        var session_expired=document.getElementById('session');
//        var timeleft=60;
//        session_expired.style.display="block";
//      var timeid=setInterval(countdown,1000);
//  function countdown(){
//   if (timeleft==0) {
//     clearTimeout(timeid);
//     session_expired.style.display="none";
//     refresh();}
//   else if(timeleft<=15){
//     btn_table.style.display='none';
//     session_expired.innerHTML='Your Session Expired in '+ timeleft + ' Seconds ! PLEASE RE-LOGIN🔄 ...';
//     timeleft--;
//   }

//   else{
    
//     timeleft--;
//   }
//  }

//}


   //on online
function online(){
      // alert("🌐Back online...");
       //vibrate
       navigator.vibrate([100,100,100]);
      
      var online=document.getElementById('online');
      var offline=document.getElementById('offline');
      offline.style.display="none";
      online.style.display="block";
$('#button').removeAttr('disabled');
      setTimeout(()=>{online.style.display="none";},2000);
    }
    //on offline
    function offline(){
       //vibrate
      navigator.vibrate([200,100,200]);
       $('#button').attr('disabled','disabled');
      // alert("OOPS ! 😯\n Something Went Wrong!\nPlease,Check Your Network Connection....\n_ERROR_CONNECTION_");
       var online=document.getElementById('online');
      var offline=document.getElementById('offline');
      offline.style.display="block";
    }

 
 

    
