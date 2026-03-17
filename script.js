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
async function suggestCrop() {
    const soilInput = document.getElementById('soilType').value.trim();
    const seasonInput = document.getElementById('weather').value.toLowerCase(); // Using the weather box for season
    const resultDiv = document.getElementById('predictionResult');

    if (!soilInput) {
        alert("Please enter a soil type first!");
        return;
    }

    try {
        const response = await fetch('data.json');
        const cropData = await response.json();

        // Search for the soil type (case insensitive)
        const match = cropData.find(item => item.soil.toLowerCase() === soilInput.toLowerCase());

        if (match) {
            let cropSuggestion = "";
            // Logic to pick the right column based on user input
            if (seasonInput.includes("summer")) cropSuggestion = match.summer;
            else if (seasonInput.includes("monsoon") || seasonInput.includes("rain")) cropSuggestion = match.monsoon;
            else if (seasonInput.includes("winter") || seasonInput.includes("cold")) cropSuggestion = match.winter;
            else cropSuggestion = `Summer: ${match.summer}, Monsoon: ${match.monsoon}, Winter: ${match.winter}`;

            resultDiv.innerHTML = `
                <div style="background: #e8f5e9; border-left: 5px solid #2e7d32; padding: 15px; color: #1b5e20;">
                    <h3 style="margin-top: 0;">Recommendations for ${match.soil} Soil:</h3>
                    <p><strong>Recommended Crops:</strong> ${cropSuggestion}</p>
                    <p><strong>Field Conditions:</strong> ${match.weather}</p>
                </div>
            `;
        } else {
            resultDiv.innerHTML = "<p style='color: red;'>Soil type not found. Try 'Clay', 'Black', or 'Red'.</p>";
        }
    } catch (error) {
        resultDiv.innerText = "Error loading crop database.";
    }
}
function filterCourses() {
    // Get the search input value
    const input = document.getElementById('courseSearch').value.toLowerCase();
    // Get all course cards
    const cards = document.getElementsByClassName('course-card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        const description = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        // If the title or description contains the search term, show it; otherwise, hide it
        if (title.includes(input) || description.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
