 // page preventDefault 
 document.getElementById("submitbtn").addEventListener("click",function(event){event.preventDefault()});
 // validate the form
 function validate() {
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
     setTimeout(loginfailed,2000);
        // alert("Incorrect Details")
        userName.value='';
        pass_word.value='';
 	}
 	else if (userName.value == admin || pass_word.value == pass ) {
 		
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
          loginbtn.style.color ="black";
          loginbtn.style.background ="yellow";
        content_table.style.display = "block" ;
          btn_table.style.display = "block";
          loginpage.style.display= "none";
        }
      setTimeout(loginsuccess,2000);
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
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//Session timeout
function load(){
    alert("_SESSION_EXPIRED_\n\n_PLEASE RE-LOGIN🔄_");
    location.reload();
    }
//print the page
function printing(){
      let pwd=prompt("Please Enter Password To download 'PDF' File");
      //confirmation password
      if (pwd!= "tntj"){
        
        if (confirm("ℹ️INCORRECT PASSWORD❗  \n Press 'OK' to Re - Enter the password..")) {
          printing();
        }else{
          alert("If You Want To Download PDF file,Please Enter The Correct Password...");
        }
        
      }else{
        alert("_AUTHENTICATED SUCCESSFULLY_✔️\n\nReady to Previewing your PDF File...")
        print();
       setTimeout(load,50000);
      }
   }

   //on online
function online(){
      alert("🌐Back online...");
    }
    //on offline
    function offline(){
      alert("OOPS ! 😯\n Something Went Wrong!\nPlease,Check Your Network Connection....\n_ERROR_CONNECTION_");
    }
