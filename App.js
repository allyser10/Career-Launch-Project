function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === team6 && password === careerLaunch) {
        return true;
    } else if (username === " " || password === " ") {
        alert("Please Enter username and password");
    } else {
        alert("Incorrect username or password");
        return false;
    }
}
