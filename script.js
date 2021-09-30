

 document.addEventListener("change", function(e){

    var name = document.getElementById("nameInput");


    if (name.value.length > 0) {
        name.className = "form-control is-valid"
    }else {
        name.className = "form-control"
    }
})


document.addEventListener("change", function(e){

    var lastname = document.getElementById("lastnameInput");
    if (lastname.value.length > 0) {
        lastname.className = "form-control is-valid"
    }else {
        lastname.className = "form-control"
    }
    
})

document.addEventListener("change", function(e){

    var email = document.getElementById("emailInput");
    if (email.value.length > 0) {
        email.className = "form-control is-valid"
    }else {
        email.className = "form-control"
    }    
    
})

document.addEventListener("change", function(e){

   var subject = document.getElementById("subjectInput");

    if (subject.value.length > 0) {
        subject.className = "form-control is-valid"
    }else {
        subject.className = "form-control"
    }
    
    
    
})


document.addEventListener("change", function(e){

    var message = document.getElementById("messageInput");
 
     if (message.value.length > 0) {
        message.className = "form-control is-valid"
     }else {
        message.className = "form-control"
     }
     
     
     
 })
 
 

