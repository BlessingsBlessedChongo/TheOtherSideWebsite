function submitForm() {
    // Get input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Perform basic client-side validation
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Store user data in local storage
    var userData = {
        username: username,
        email: email,
        password: password
    };

    // Check if the user already exists
    var existingUserData = JSON.parse(localStorage.getItem('userData'));

    if (existingUserData && existingUserData.username === username) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Save the new user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Inform the user about successful registration
    alert('Registration successful! You can now log in.');

    // Optionally, you can redirect the user to the login page
    window.location.href = 'login.html';
}
