function validation(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var error_message=document.getElementById("error_message");
    var text;

if(name.length < 5){
    error_message.style.padding = "10px";
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
 
  if(isNaN(phone) || phone.length != 10){
    error_message.style.padding = "10px";
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    error_message.style.padding = "10px";
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  
  
  alert("form submitted successfully!")
  return true;
}