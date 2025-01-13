import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAAGOqn66M7TVTzfL5u0EeA-NBWkbGgu0",
    authDomain: "quiz-b229e.firebaseapp.com",
    projectId: "quiz-b229e",
    storageBucket: "quiz-b229e.appspot.com",
    messagingSenderId: "418890610117",
    appId: "1:418890610117:web:3dee610a03bfacb21047ac",
    measurementId: "G-X0ZG6ECP2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Sign in the user
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            window.location.href = 'Quiz.html'; // Redirect after successful login
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/user-not-found') {
                alert('No account found with this email. Please sign up.');
                window.location.href = 'signup.html';
            } else if (error.code === 'auth/wrong-password') {
                alert('Incorrect password. Please try again.');
            } else {
                alert(`Error: ${error.message}`);
            }
        }
    });
}

// Signup Form Handler
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            // Create the user
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Account created successfully!');
            window.location.href = 'login.html'; // Redirect after signup
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/email-already-in-use') {
                alert('Email is already registered. Please log in.');
                window.location.href = 'login.html';
            } else {
                alert(`Error: ${error.message}`);
            }
        }
    });
}

// Redirect Functions
window.redirectToLogin=function() {
    window.location.href = 'login.html';
}

function redirectToSignUp() {
    window.location.href = 'signup.html';
}

// Dropdown Menu Handler
function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById('dropdownMenu').classList.toggle('show');
}

// Close dropdown when clicking outside
window.onclick = function (event) {
    if (!event.target.closest('.menu-container')) {
        const dropdowns = document.getElementsByClassName('dropdown-menu');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
};

// Contact Info Toggle
document.getElementById('contactBtn')?.addEventListener('click', function () {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo?.classList.toggle('hidden');
});

// Page Navigation Functions
function nextpage() {
    window.location.href = 'Quiz.html';
}

window.cprog= function() {
    window.location.href = 'c.html';
}

window.javaprog=function() {
    window.location.href = 'java.html';
}

window.db=function() {
    window.location.href = 'dbms.html';
}

window.python=function() {
    window.location.href = 'python.html';
}

window.html=function() {
    window.location.href = 'html.html';
}
