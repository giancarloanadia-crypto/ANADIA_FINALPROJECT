// Default login credentials
const validUser = "gian";
const validPass = "carlo";

// LOGIN FORM HANDLING
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let error = document.getElementById("errorMsg");

        if (username === validUser && password === validPass) {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "home.html";
        } else {
            error.textContent = "Invalid username or password!";
        }
    });
}

// LOGOUT HANDLING
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("loggedIn");
        alert("You have been logged out.");
        window.location.href = "index.html";
    });
}

// PAGE PROTECTION
if (!localStorage.getItem("loggedIn") && !window.location.href.includes("index.html")) {
    window.location.href = "index.html";
}
