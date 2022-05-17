function validation(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    var error_message=document.getElementById("error_message");
    var text;

    error_message.style.padding="10pX";
    if(name.length <3){
        text="please enter valid name";
        error_message.innerHTML=text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text="please enter valid phone number";
        error_message.innerHTML=text;
        return false;
    }
    
    if(email.indeXof("@") == -1 || email.length < 6){
        text="please enter valid email";
        error_message.innerHTML=text;
        return false;
    }
    if(message.length <=50){
        text="please enter more than 50 characters";
        error_message.innerHTML=text;
        return false;
    }

    alert("form submitted successfully!")
    return true;
}

