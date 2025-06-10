const form = document.querySelector(".login-form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    const elements = form.elements;
    const email = elements.email.value.trim();
    const password = elements.password.value.trim();

    if (email === '' || password === '') {
        alert("zorunlu alanları doldurun");  
        return;        
    } 

    const formData = {
        email:email,
        password: password
    };

    console.log(formData);

    form.reset();

});