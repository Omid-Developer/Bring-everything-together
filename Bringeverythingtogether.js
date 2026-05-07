var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var address = document.getElementById("address");
var phone = document.getElementById("phone");
var city = document.getElementById("city");
var postal_code = document.getElementById("postal_code");
var submit = document.getElementById("submit");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    if (name.value === "" || email.value === "" || password.value === "" || confirm_password.value === "" || address.value === "" || phone.value === "" || city.value === "" || postal_code.value === "") {
        alert("Please fill in all fields.");
    } else if (password.value !== confirm_password.value) {
        alert("Passwords do not match.");
    } else {
        alert("Form submitted successfully!");
    }   
});
