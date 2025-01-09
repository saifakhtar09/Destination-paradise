document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mock credentials (replace with real authentication later)
    const validCredentials = {
        username: "user",
        password: "password123"
    };

    if (username === validCredentials.username && password === validCredentials.password) {
        // Save login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to main page
        window.location.href = "index.html";
    } else {
        // Show error message
        document.getElementById('loginError').style.display = 'block';
    }
});
