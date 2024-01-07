function submitLoginForm() {
    // Get input values
    var loginUsername = document.getElementById('login-username').value;
    var loginPassword = document.getElementById('login-password').value;

    // Perform basic client-side validation
    if (!loginUsername || !loginPassword) {
        alert('Please fill in all fields.');
        return;
    }

    // Retrieve the stored user data from local storage
    var storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if the user exists
    if (!storedUserData || storedUserData.username !== loginUsername || storedUserData.password !== loginPassword) {
        alert('Invalid username or password.');
        return;
    }

    // Successful login
    alert('Login successful! Redirecting to the home page...');

    // Redirect to the home page
    window.location.href = 'home.html';
}
