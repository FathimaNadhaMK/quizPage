function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Array of Java programming questions
const javaQuestions = [
    {
        question: "Which of the following is a valid Java variable name?",
        options: ["int", "float", "if", "variableName"],
        answer: "variableName"
    },
    {
        question: "Which is used to generate random numbers in Java?",
        options: ["Math.random()", "Random()", "rand()", "generate()"],
        answer: "Math.random()"
    },
    {
        question: "Which operator is used to allocate memory dynamically in Java?",
        options: ["new", "malloc", "alloc", "memalloc"],
        answer: "new"
    },
    {
        question: "Which function is used to find the length of a string in Java?",
        options: ["length()", "strlen()", "size()", "strlength()"],
        answer: "length()"
    },
    {
        question: "Which of these is not a loop structure in Java?",
        options: ["for", "while", "foreach", "do-while"],
        answer: "foreach"
    },
    {
        question: "What is the default return type of main() in Java?",
        options: ["int", "void", "String", "double"],
        answer: "void"
    },
    {
        question: "Which symbol is used to denote a package in Java?",
        options: ["@", "#", ".", "&"],
        answer: "."
    },
    {
        question: "Which of the following is a logical operator in Java?",
        options: ["&&", "||", "!", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the size of an int data type in Java?",
        options: ["2 bytes", "4 bytes", "Depends on compiler", "8 bytes"],
        answer: "4 bytes"
    },
    {
        question: "Which library is used for input and output operations in Java?",
        options: ["java.io", "java.util", "java.lang", "java.net"],
        answer: "java.io"
    },
    {
        question: "Which data type is used to store a single character in Java?",
        options: ["int", "char", "float", "double"],
        answer: "char"
    },
    {
        question: "What does the %d format specifier represent in Java?",
        options: ["Character", "Decimal integer", "Float", "String"],
        answer: "Decimal integer"
    },
    {
        question: "What is a reference in Java?",
        options: ["A variable storing an address", "A data type", "A memory location", "None of the above"],
        answer: "A variable storing an address"
    },
    {
        question: "What is the result of 5/2 in Java if both operands are integers?",
        options: ["2.5", "2", "3", "Error"],
        answer: "2"
    },
    {
        question: "Which function is used to terminate a program in Java?",
        options: ["System.exit(0)", "exit()", "terminate()", "stop()"],
        answer: "System.exit(0)"
    },
    {
        question: "What does the keyword 'static' signify in Java?",
        options: ["Shared among all instances", "Local to a thread", "Dynamic memory allocation", "None of the above"],
        answer: "Shared among all instances"
    },
    {
        question: "What is the output of System.out.println(10 + 5);?",
        options: ["105", "10+5", "15", "Error"],
        answer: "15"
    },
    {
        question: "What is the maximum number of dimensions an array can have in Java?",
        options: ["2", "3", "4", "As many as memory allows"],
        answer: "As many as memory allows"
    },
    {
        question: "Which method is used to compare two strings in Java?",
        options: ["equals()", "compareTo()", "==", "All of the above"],
        answer: "equals()"
    },
    {
        question: "What is the result of 10 >> 1 in Java?",
        options: ["5", "10", "20", "15"],
        answer: "5"
    },
    {
        question: "What does the keyword 'volatile' signify in Java?",
        options: ["Mutable variable", "Optimized variable", "Variable subject to change unexpectedly", "None of the above"],
        answer: "Variable subject to change unexpectedly"
    },
    {
        question: "What does 'EOFException' represent in Java?",
        options: ["End of File Exception", "Error or Failure", "End of Function Exception", "None of the above"],
        answer: "End of File Exception"
    },
    {
        question: "Which operator is used for bitwise OR in Java?",
        options: ["|", "&", "^", "||"],
        answer: "|"
    },
    {
        question: "Which type is used to represent true or false in Java?",
        options: ["bool", "boolean", "int", "None of the above"],
        answer: "boolean"
    },
    {
        question: "Which of these functions is used to open a file in Java?",
        options: ["FileInputStream", "fopen()", "file_open()", "create()"],
        answer: "FileInputStream"
    },
    {
        question: "Which keyword is used to prevent a variable from being modified?",
        options: ["final", "static", "volatile", "register"],
        answer: "final"
    },
    {
        question: "What does the keyword 'synchronized' signify in Java?",
        options: ["Thread-safe", "Mutable", "Serializable", "None of the above"],
        answer: "Thread-safe"
    },
    {
        question: "Which header file is required for mathematical operations in Java?",
        options: ["java.io", "java.util", "java.lang.Math", "java.math"],
        answer: "java.lang.Math"
    },
];


const shuffledQuestions = shuffleArray(javaQuestions).slice(0, 10);

let currentQuestionIndex = 0;
let score = 0;

// Get references to the HTML elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');

// Load the first question
loadQuestion();

function loadQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ''; // Clear previous options
    resultElement.textContent = ''; // Clear feedback

    // Shuffle the options array to display them in random order
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    shuffledOptions.forEach(option => {
        const optionHTML = `
            <label>
                <input type="radio" name="option" value="${option}"> ${option}
            </label><br>
        `;
        optionsElement.insertAdjacentHTML('beforeend', optionHTML);
    });

    // Debugging: Check if the correct answer is in the shuffled options
    if (!shuffledOptions.includes(currentQuestion.answer)) {
        console.error(`Correct answer "${currentQuestion.answer}" is missing for the question: "${currentQuestion.question}"`);
    }
}

// Event listener for the Submit button
submitButton.addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const isCorrect = selectedOption.value === shuffledQuestions[currentQuestionIndex].answer;

    if (isCorrect) {
        score++;
        resultElement.textContent = "Correct Answer!";
        resultElement.style.color = "green";
        triggerConfetti(); // Trigger confetti for correct answers
    } else {
        resultElement.textContent = `Wrong Answer! Correct answer: ${shuffledQuestions[currentQuestionIndex].answer}`;
        resultElement.style.color = "red";
    }

    currentQuestionIndex++;

    // Wait briefly to display feedback before moving to the next question
    setTimeout(() => {
        if (currentQuestionIndex < shuffledQuestions.length) {
            loadQuestion();
        } else {
            // Store the score in localStorage and navigate to the score page
            localStorage.setItem('finalScore', score);
            window.location.href = 'score.html'; // Redirect to score page
        }
    }, 1000); // 2-second delay for feedback
});

// Confetti trigger function
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 } // Confetti appears lower
    });
}

// Shuffle array utility function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
