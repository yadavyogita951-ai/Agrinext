// script.js
function suggestCrop() {
    const soil = document.getElementById('soilType').value.toLowerCase();
    const weather = document.getElementById('weather').value.toLowerCase();
    const resultDiv = document.getElementById('predictionResult');

    let suggestion = "";

    // Simple logic based on your "Crop Suitability" note
    if (soil.includes("clay") && weather.includes("rainy")) {
        suggestion = "Rice or Sugarcane would be most suitable for these conditions.";
    } else if (soil.includes("loamy") && weather.includes("sunny")) {
        suggestion = "Wheat or Cotton would be ideal for your land.";
    } else {
        suggestion = "Based on current data, we suggest consulting our AI Assistant for a specific hybrid variety.";
    }

    resultDiv.innerHTML = `<strong>Prediction:</strong> ${suggestion}`;
    resultDiv.style.display = "block";
    resultDiv.style.backgroundColor = "#fff";
    resultDiv.style.color = "#2e7d32";
    resultDiv.style.padding = "15px";
    resultDiv.style.marginTop = "20px";
    resultDiv.style.borderRadius = "8px";
}
// Function to show/hide the login modal
function toggleModal() {
    const modal = document.getElementById('loginModal');
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

// Connect the header button to the function
document.querySelector('.login-btn').addEventListener('click', toggleModal);

// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from refreshing
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Simple Prototype Logic
    if (user === "admin" && pass === "1234") {
        alert("Welcome back, Farmer!");
        toggleModal();
        document.querySelector('.login-btn').innerText = "Logout";
    } else {
        alert("Invalid credentials. Try admin / 1234");
    }
});