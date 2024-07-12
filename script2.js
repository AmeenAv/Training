function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Regular expression for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for password complexity (at least one uppercase, one number, one special character)
    var passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (email === "" || password === "") {
        alert("Email and password must be filled out");
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
    } else if (!passwordPattern.test(password)) {
        alert("Password must contain at least 8 characters, including at least one uppercase letter, one number, and one special character");
    } else {
        // Redirect to another page
        window.location.href = "new.html"; // Replace with your desired destination page
    }
}
