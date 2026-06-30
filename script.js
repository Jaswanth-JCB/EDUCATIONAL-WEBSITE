document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value;

    if(name==""){
        alert("Please enter your name.");
        return;
    }

    if(email==""){
        alert("Please enter your email.");
        return;
    }

    if(phone==""){
        alert("Please enter your phone number.");
        return;
    }

    if(course==""){
        alert("Please select a course.");
        return;
    }

    alert("🎉 Registration Successful!\nThank you for choosing GOOD SHEPHERD ACADEMY.");

    document.getElementById("contactForm").reset();

});