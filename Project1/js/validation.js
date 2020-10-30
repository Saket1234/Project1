function validation()
{
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var phone = document.contactForm.phone.value;
    var message = document.contactForm.message.value;
    var error = true;
    var errmsg = "";
    if(name == ""){
        errmsg+= "Please enter your name\n";
    }
    else
    {
        var regex1 = /^[a-zA-Z\s]+$/;
        if(regex1.test(name) == false)
        {
            errmsg+="Please enter a valid name\n";
        }
        else
        {
            document.getElementById("nameerr").textContent = "";
            error = false;
        }
    }

    if(email == ""){
        errmsg+="Please enter your email\n";
    }
    else
    {
        var regex1 = /^\S+@\S+\.\S+$/;
        if(regex1.test(name) == false)
        {
            errmsg+="Please enter a valid email\n";
        }
        else
        {
            document.getElementById("emailerr").textContent = "";
            error = false;
        }
    }

    if(name == ""){
        errmsg+="Please enter your Phone number\n";
    }
    else
    {
        var regex1 = /^\d{10}$/;
        if(regex1.test(name) == false)
        {
            errmsg+="Please enter a valid phone number\n";
        }
        else
        {
            document.getElementById("phoneerr").textContent = "";
            error = false;
        }
    }
    if(name == ""){
        errmsg+="Please enter your message\n";
    }
    if(!error)
    {
        alert("Form submitted successfully");
        errmsg = "";
    }
    else
    {
            alert(errmsg);
    }
}