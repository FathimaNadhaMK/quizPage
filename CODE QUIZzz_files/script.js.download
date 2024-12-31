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

// Optional: Login form validation
function validateLoginForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
      alert("Both username and password are required!");
      return false; // Prevent form submission if fields are empty
  }

  return true; // Allow form submission if validation passes
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