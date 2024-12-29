// Get the final score from localStorage and display it
const finalScore = parseInt(localStorage.getItem('finalScore'), 10) || 0;
const scoreDisplay = document.getElementById('finalScore');
const feedbackMessage = document.getElementById('feedbackMessage');

// Display the score
scoreDisplay.textContent = finalScore;

// Provide feedback based on the score
if (finalScore < 4) {
    feedbackMessage.textContent = "Try again! You can do better!";
} else if (finalScore < 7) {
    feedbackMessage.textContent = "Good job! Keep trying for an even better score!";
} else {
    feedbackMessage.textContent = "Excellent! You're amazing!";
    function triggerConfetti() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }, // Adjust starting height
        });
    }
}

// Function to trigger confetti

// Attach event listener to the confetti image
document.querySelector('.confetti-trigger img').addEventListener('click', triggerConfetti);

// Function for the "Try Again" button
function tryAgain() {
    window.location.href = "index.html"; // Redirect to quiz start page
}

// Attach event listener to the Try Again button
document.getElementById('tryAgainBtn').addEventListener('click', tryAgain);
