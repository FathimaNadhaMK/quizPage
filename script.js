// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAAGOqn66M7TVTzfL5u0EeA-NBWkbGgu0",
  authDomain: "quiz-b229e.firebaseapp.com",
  projectId: "quiz-b229e",
  storageBucket: "quiz-b229e.firebasestorage.app",
  messagingSenderId: "418890610117",
  appId: "1:418890610117:web:3dee610a03bfacb21047ac",
  measurementId: "G-X0ZG6ECP2S"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function myFunction() {
// Toggle the dropdown menu visibility
document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.closest('.menu-container')) {  // Adjust the class name here
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
};

document.getElementById('contactBtn').addEventListener('click', function () {
var contactInfo = document.getElementById('contactInfo');
contactInfo.classList.toggle('hidden'); // Toggle the 'hidden' class
});

function redirectToLogin() {
window.location.href = "login.html";  // Redirect to login page
}

// Firebase Login form validation and authentication
function validateLoginForm() {
const email = document.getElementById("username").value;  // Username field will be used for email
const password = document.getElementById("password").value;

if (email === "" || password === "") {
    alert("Both email and password are required!");
    return false; // Prevent form submission if fields are empty
}

// Firebase authentication logic
auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Logged in as:", user.email);
      window.location.href = 'home.html';  // Redirect to home page on successful login
  })
  .catch((error) => {
      var errorMessage = error.message;
      alert("Error: " + errorMessage);  // Show error message if login fails
  });

return false; // Prevent form submission to PHP
}

function nextpage(){
window.location.href='Quiz.html';
}

function cprog(){
window.location.href='c.html';
}

function javaprog(){
window.location.href='java.html';
}

function db(){
window.location.href='dbms.html';
}

function python(){
window.location.href='python.html';
}

function html(){
window.location.href='html.html';
}
