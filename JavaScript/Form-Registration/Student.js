function validate() {
    var namelen = /^([a-zA-Z]{6,15})$/;
    var username = document.getElementById('inputUsername3').value;
    var password = document.getElementById('inputPassword3').value;
    var psd = "";

    // Username check
    if (!namelen.test(username)) {
        alert("Enter a valid Username with 6 to 15 letters");
        return false;
    }

    // Password check
    var strongPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!strongPassword.test(password)) {
        psd = "Weak password";
        document.getElementById('status').innerText = psd;
        return false; // stop here if weak password
    } else {
        psd = "Strong password";
        document.getElementById('status').innerText = psd;
        window.location.href = "Student_Registration.html"; // redirect only if strong
        return false;
    }


}
