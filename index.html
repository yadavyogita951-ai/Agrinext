function setLoginState(isLoggedIn, username) {
    const btn = document.querySelector('.login-btn');
    if (isLoggedIn) {
        btn.innerText = `Logout (${username})`;
        btn.onclick = () => {
            localStorage.removeItem('farmerAccount');
            btn.innerText = 'LOGIN';
            btn.onclick = toggleModal;
            alert('Logged out successfully.');
        };
    } else {
        btn.innerText = 'Farmer Login';
        btn.onclick = toggleModal;
    }
}

function getStoredUsers() {
    try {
        return JSON.parse(localStorage.getItem('registeredFarmers') || '[]');
    } catch {
        return [];
    }
}

function saveUser(user) {
    const users = getStoredUsers();
    users.push(user);
    localStorage.setItem('registeredFarmers', JSON.stringify(users));
}

function findUser(username) {
    return getStoredUsers().find(u => u.username.toLowerCase() === username.toLowerCase());
}

function showRegister() {
    document.getElementById('loginTitle').innerText = 'Farmer Registration';
    document.getElementById('submitBtn').innerText = 'Register';
    document.getElementById('registerLink').classList.add('hidden');
    document.getElementById('existingLink').classList.remove('hidden');
    document.getElementById('passwordConfirmRow').classList.remove('hidden');
 }

function showLogin() {
    document.getElementById('loginTitle').innerText = 'Farmer Login (Mobile Number or Email)';
    document.getElementById('submitBtn').innerText = 'Sign In';
    document.getElementById('registerLink').classList.remove('hidden');
    document.getElementById('existingLink').classList.add('hidden');
    document.getElementById('passwordConfirmRow').classList.add('hidden');
}

function toggleModal() {
    const modal = document.getElementById('loginModal');
    if (!modal) return;
    const isOpen = modal.style.display === 'block';
    modal.style.display = isOpen ? 'none' : 'block';
    if (!isOpen) {
        document.getElementById('loginMessage').innerText = '';
        document.getElementById('loginForm').reset();
        showLogin();
    }
}

// Crop suggestion
async function suggestCrop() {
    const soilInput = document.getElementById('soilType').value.trim();
    const seasonInput = document.getElementById('weather').value.toLowerCase();
    const resultDiv = document.getElementById('predictionResult');

    if (!soilInput) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter a soil type.</p>';
        return;
    }

    try {
        const response = await fetch('data.json');
        const cropData = await response.json();
        const match = cropData.find(item => item.soil.toLowerCase() === soilInput.toLowerCase());

        if (!match) {
            resultDiv.innerHTML = '<p style="color: red;">Soil type not found. Try Clay/Black/Red.</p>';
            return;
        }

        let cropSuggestion = '';
        if (seasonInput.includes('summer')) cropSuggestion = match.summer;
        else if (seasonInput.includes('monsoon') || seasonInput.includes('rain')) cropSuggestion = match.monsoon;
        else if (seasonInput.includes('winter') || seasonInput.includes('cold')) cropSuggestion = match.winter;
        else cropSuggestion = `Summer: ${match.summer}, Monsoon: ${match.monsoon}, Winter: ${match.winter}`;

        resultDiv.innerHTML = `<div style="background: #e8f5e9; border-left: 5px solid #2e7d32; padding: 15px; color: #1b5e20;"><h3 style="margin-top:0;">Recommendations for ${match.soil} Soil:</h3><p><strong>Suggested:</strong> ${cropSuggestion}</p><p><strong>Condition:</strong> ${match.weather}</p></div>`;
    } catch (err) {
        resultDiv.innerHTML = '<p style="color: red;">Error loading crop data.</p>';
    }
}

function filterCourses() {
    const input = document.getElementById('courseSearch').value.toLowerCase();
    const cards = document.getElementsByClassName('course-card');
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('h3').innerText.toLowerCase();
        const description = cards[i].querySelector('p').innerText.toLowerCase();
        cards[i].style.display = (title.includes(input) || description.includes(input)) ? '' : 'none';
    }
}

// Auth form support
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginBtn').addEventListener('click', toggleModal);

    document.getElementById('registerLink').addEventListener('click', (e) => {
        e.preventDefault();
        showRegister();
    });

    document.getElementById('existingLink').addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const messageBox = document.getElementById('loginMessage');

        if (!username || !password) {
            messageBox.innerText = 'Enter both ID and Password.';
            messageBox.style.color = '#d32f2f';
            return;
        }

        if (document.getElementById('submitBtn').innerText === 'Register') {
            const confirmPassword = document.getElementById('passwordConfirm').value.trim();
            if (password !== confirmPassword) {
                messageBox.innerText = 'Passwords do not match.';
                messageBox.style.color = '#d32f2f';
                return;
            }
            if (findUser(username)) {
                messageBox.innerText = 'Account already exists. Please sign in.';
                messageBox.style.color = '#d32f2f';
                return;
            }
            saveUser({ username, password });
            messageBox.innerText = 'Registered successfully. Please sign in.';
            messageBox.style.color = '#2e7d32';
            showLogin();
            return;
        }

        const user = findUser(username);
        if (user && user.password === password) {
            messageBox.innerText = 'Login successful!';
            messageBox.style.color = '#2e7d32';
            setLoginState(true, username);
            setTimeout(toggleModal, 650);
        } else {
            messageBox.innerText = 'Invalid ID or password.';
            messageBox.style.color = '#d32f2f';
        }
    });

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('loginModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
