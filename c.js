<<<<<<< HEAD
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Array of C programming questions (original + 30 additional)
const cQuestions = [
    {
        question: "Which of the following is a valid C variable name?",
        options: ["int", "float", "if", "variable_name"],
        answer: "variable_name"
    },
    {
        question: "Which is used to generate random numbers in C?",
        options: ["rand()", "random()", "rnd()", "generate()"],
        answer: "rand()"
    },
    {
        question: "Which operator is used to allocate memory dynamically in C?",
        options: ["new", "malloc", "alloc", "memalloc"],
        answer: "malloc"
    },
    {
        question: "Which of the following is a valid C variable name?",
        options: ["int", "float", "if", "variable_name"],
        answer: "variable_name"
    },
    {
        question: "Which is used to generate random numbers in C?",
        options: ["rand()", "random()", "rnd()", "generate()"],
        answer: "rand()"
    },
    {
        question: "Which operator is used to allocate memory dynamically in C?",
        options: ["new", "malloc", "alloc", "memalloc"],
        answer: "malloc"
    },
    {
        question: "Which function is used to find the length of a string in C?",
        options: ["strlen()", "length()", "strlength()", "size()"],
        answer: "strlen()"
    },
    {
        question: "Which of these is not a loop structure in C?",
        options: ["for", "while", "foreach", "do-while"],
        answer: "foreach"
    },

    {
        question: "Which function is used to find the length of a string in C?",
        options: ["strlen()", "length()", "strlength()", "size()"],
        answer: "strlen()"
    },
    {
        question: "Which of these is not a loop structure in C?",
        options: ["for", "while", "foreach", "do-while"],
        answer: "foreach"
    },
    {
        question: "What is the default return type of functions in C?",
        options: ["int", "void", "float", "double"],
        answer: "int"
    },
    {
        question: "Which symbol is used to denote a preprocessor directive?",
        options: ["@", "#", "$", "&"],
        answer: "#"
    },
    {
        question: "Which of the following is a logical operator in C?",
        options: ["&&", "||", "!", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the size of an int data type in C?",
        options: ["2 bytes", "4 bytes", "Depends on compiler", "8 bytes"],
        answer: "Depends on compiler"
    },
    {
        question: "Which library is used for input and output operations in C?",
        options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
        answer: "stdio.h"
    },
    {
        question: "Which data type is used to store a single character in C?",
        options: ["int", "char", "float", "double"],
        answer: "char"
    },
    {
        question: "What does the %d format specifier represent in C?",
        options: ["Character", "Decimal integer", "Float", "String"],
        answer: "Decimal integer"
    },
    {
        question: "What is a pointer in C?",
        options: ["A variable storing an address", "A data type", "A memory location", "None of the above"],
        answer: "A variable storing an address"
    },
    {
        question: "Which function is used to allocate memory in C?",
        options: ["malloc()", "calloc()", "Both malloc() and calloc()", "None of the above"],
        answer: "Both malloc() and calloc()"
    },
    {
        question: "What is the result of 5/2 in C if both operands are integers?",
        options: ["2.5", "2", "3", "Error"],
        answer: "2"
    },
    {
        question: "Which function is used to terminate a program in C?",
        options: ["end()", "exit()", "terminate()", "stop()"],
        answer: "exit()"
    },
    {
        question: "What does the keyword 'static' signify in C?",
        options: ["Global storage duration", "Local storage duration", "Dynamic memory allocation", "None of the above"],
        answer: "Global storage duration"
    },
    {
        question: "What does the keyword 'extern' mean in C?",
        options: ["External linkage", "Local linkage", "Static linkage", "None of the above"],
        answer: "External linkage"
    },
    {
        question: "What is the output of printf(\"%d\", 10+5);?",
        options: ["105", "10+5", "15", "Error"],
        answer: "15"
    },
    {
        question: "What is the maximum number of dimensions an array can have in C?",
        options: ["2", "3", "4", "As many as memory allows"],
        answer: "As many as memory allows"
    },
    {
        question: "Which header file is required for the function strcmp()?",
        options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
        answer: "string.h"
    },
    {
        question: "Which of the following is not a storage class in C?",
        options: ["auto", "register", "dynamic", "static"],
        answer: "dynamic"
    },
    {
        question: "What is the output of: printf(\"%c\", 'A' + 2);?",
        options: ["A", "C", "B", "Error"],
        answer: "C"
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "None of the above"],
        answer: "do-while"
    },
    {
        question: "Which operator is used to access a structure member using a pointer?",
        options: [".", "->", "*", "&"],
        answer: "->"
    },
    {
        question: "Which function is used to deallocate memory in C?",
        options: ["malloc()", "calloc()", "free()", "delete()"],
        answer: "free()"
    },
    {
        question: "What is a union in C?",
        options: ["Similar to a struct", "Memory-efficient structure", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        question: "Which function is used to copy a string in C?",
        options: ["strcpy()", "strcat()", "strcmp()", "strlen()"],
        answer: "strcpy()"
    },
    {
        question: "What is the result of 10 >> 1 in C?",
        options: ["5", "10", "20", "15"],
        answer: "5"
    },
    {
        question: "What does the keyword 'volatile' signify in C?",
        options: ["Mutable variable", "Optimized variable", "Variable subject to change unexpectedly", "None of the above"],
        answer: "Variable subject to change unexpectedly"
    },
    {
        question: "What does 'EOF' represent in C?",
        options: ["End of File", "Error or Failure", "End of Function", "None of the above"],
        answer: "End of File"
    },
    {
        question: "Which operator is used for bitwise OR in C?",
        options: ["|", "&", "^", "||"],
        answer: "|"
    },
    {
        question: "What does the function abs() do in C?",
        options: ["Finds the absolute value", "Finds the square root", "Rounds a number", "None of the above"],
        answer: "Finds the absolute value"
    },
    {
        question: "Which type is used to represent true or false in C?",
        options: ["bool", "boolean", "int", "None of the above"],
        answer: "int"
    },
    {
        question: "What is the output of printf(\"%d\", sizeof(char));?",
        options: ["1", "2", "4", "8"],
        answer: "1"
    },
    {
        question: "Which of these functions is used to open a file in C?",
        options: ["open()", "fopen()", "file_open()", "create()"],
        answer: "fopen()"
    },
    {
        question: "What is the value of an uninitialized variable in C?",
        options: ["0", "NULL", "Garbage value", "None of the above"],
        answer: "Garbage value"
    },
    {
        question: "Which of these is a ternary operator in C?",
        options: ["::", "?", "&&", "||"],
        answer: "?"
    },
    {
        question: "Which function is used to read a single character from input in C?",
        options: ["getchar()", "gets()", "scanf()", "fgetc()"],
        answer: "getchar()"
    },
    {
        question: "What is the difference between ++i and i++ in C?",
        options: [
            "++i increments after usage; i++ increments before usage",
            "++i increments before usage; i++ increments after usage",
            "Both are identical",
            "None of the above"
        ],
        answer: "++i increments before usage; i++ increments after usage"
    },
    {
        question: "Which operator is used to get the address of a variable?",
        options: ["&", "*", "#", "%"],
        answer: "&"
    },
    {
        question: "Which keyword is used to prevent a variable from being modified?",
        options: ["const", "static", "volatile", "register"],
        answer: "const"
    },
    {
        question: "What does the function fgets() do in C?",
        options: [
            "Reads a single character",
            "Reads a line of text",
            "Writes a line of text",
            "None of the above"
        ],
        answer: "Reads a line of text"
    },
    {
        question: "Which header file is required for mathematical operations in C?",
        options: ["stdio.h", "math.h", "stdlib.h", "string.h"],
        answer: "math.h"
    },
    {
        question: "What is the output of printf(\"%u\", -1); on a 16-bit machine?",
        options: ["-1", "65535", "0", "Error"],
        answer: "65535"
    },
    {
        question: "What is the range of a signed char in C?",
        options: ["0 to 255", "-128 to 127", "-256 to 255", "-127 to 128"],
        answer: "-128 to 127"
    },
    {
        question: "What will the following code print?\n`printf(\"\\t\\nHello World\\n\");`",
        options: ["Hello World", "  Hello World", "Error", "Hello World with new lines and tab"],
        answer: "Hello World with new lines and tab"
    },
    {
        question: "Which type is returned by malloc() in C?",
        options: ["void*", "char*", "int*", "None of the above"],
        answer: "void*"
    },
    {
        question: "What is the difference between calloc() and malloc() in C?",
        options: [
            "calloc() initializes memory to zero; malloc() does not",
            "malloc() initializes memory to zero; calloc() does not",
            "calloc() allocates contiguous memory; malloc() does not",
            "No difference"
        ],
        answer: "calloc() initializes memory to zero; malloc() does not"
    }
];


// Shuffle questions and pick the first 10
const shuffledQuestions = shuffleArray(cQuestions).slice(0, 10);

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


=======
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Array of C programming questions (original + 30 additional)
const cQuestions = [
    {
        question: "Which of the following is a valid C variable name?",
        options: ["int", "float", "if", "variable_name"],
        answer: "variable_name"
    },
    {
        question: "Which is used to generate random numbers in C?",
        options: ["rand()", "random()", "rnd()", "generate()"],
        answer: "rand()"
    },
    {
        question: "Which operator is used to allocate memory dynamically in C?",
        options: ["new", "malloc", "alloc", "memalloc"],
        answer: "malloc"
    },
    {
        question: "Which of the following is a valid C variable name?",
        options: ["int", "float", "if", "variable_name"],
        answer: "variable_name"
    },
    {
        question: "Which is used to generate random numbers in C?",
        options: ["rand()", "random()", "rnd()", "generate()"],
        answer: "rand()"
    },
    {
        question: "Which operator is used to allocate memory dynamically in C?",
        options: ["new", "malloc", "alloc", "memalloc"],
        answer: "malloc"
    },
    {
        question: "Which function is used to find the length of a string in C?",
        options: ["strlen()", "length()", "strlength()", "size()"],
        answer: "strlen()"
    },
    {
        question: "Which of these is not a loop structure in C?",
        options: ["for", "while", "foreach", "do-while"],
        answer: "foreach"
    },

    {
        question: "Which function is used to find the length of a string in C?",
        options: ["strlen()", "length()", "strlength()", "size()"],
        answer: "strlen()"
    },
    {
        question: "Which of these is not a loop structure in C?",
        options: ["for", "while", "foreach", "do-while"],
        answer: "foreach"
    },
    {
        question: "What is the default return type of functions in C?",
        options: ["int", "void", "float", "double"],
        answer: "int"
    },
    {
        question: "Which symbol is used to denote a preprocessor directive?",
        options: ["@", "#", "$", "&"],
        answer: "#"
    },
    {
        question: "Which of the following is a logical operator in C?",
        options: ["&&", "||", "!", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the size of an int data type in C?",
        options: ["2 bytes", "4 bytes", "Depends on compiler", "8 bytes"],
        answer: "Depends on compiler"
    },
    {
        question: "Which library is used for input and output operations in C?",
        options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
        answer: "stdio.h"
    },
    {
        question: "Which data type is used to store a single character in C?",
        options: ["int", "char", "float", "double"],
        answer: "char"
    },
    {
        question: "What does the %d format specifier represent in C?",
        options: ["Character", "Decimal integer", "Float", "String"],
        answer: "Decimal integer"
    },
    {
        question: "What is a pointer in C?",
        options: ["A variable storing an address", "A data type", "A memory location", "None of the above"],
        answer: "A variable storing an address"
    },
    {
        question: "Which function is used to allocate memory in C?",
        options: ["malloc()", "calloc()", "Both malloc() and calloc()", "None of the above"],
        answer: "Both malloc() and calloc()"
    },
    {
        question: "What is the result of 5/2 in C if both operands are integers?",
        options: ["2.5", "2", "3", "Error"],
        answer: "2"
    },
    {
        question: "Which function is used to terminate a program in C?",
        options: ["end()", "exit()", "terminate()", "stop()"],
        answer: "exit()"
    },
    {
        question: "What does the keyword 'static' signify in C?",
        options: ["Global storage duration", "Local storage duration", "Dynamic memory allocation", "None of the above"],
        answer: "Global storage duration"
    },
    {
        question: "What does the keyword 'extern' mean in C?",
        options: ["External linkage", "Local linkage", "Static linkage", "None of the above"],
        answer: "External linkage"
    },
    {
        question: "What is the output of printf(\"%d\", 10+5);?",
        options: ["105", "10+5", "15", "Error"],
        answer: "15"
    },
    {
        question: "What is the maximum number of dimensions an array can have in C?",
        options: ["2", "3", "4", "As many as memory allows"],
        answer: "As many as memory allows"
    },
    {
        question: "Which header file is required for the function strcmp()?",
        options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
        answer: "string.h"
    },
    {
        question: "Which of the following is not a storage class in C?",
        options: ["auto", "register", "dynamic", "static"],
        answer: "dynamic"
    },
    {
        question: "What is the output of: printf(\"%c\", 'A' + 2);?",
        options: ["A", "C", "B", "Error"],
        answer: "C"
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "None of the above"],
        answer: "do-while"
    },
    {
        question: "Which operator is used to access a structure member using a pointer?",
        options: [".", "->", "*", "&"],
        answer: "->"
    },
    {
        question: "Which function is used to deallocate memory in C?",
        options: ["malloc()", "calloc()", "free()", "delete()"],
        answer: "free()"
    },
    {
        question: "What is a union in C?",
        options: ["Similar to a struct", "Memory-efficient structure", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        question: "Which function is used to copy a string in C?",
        options: ["strcpy()", "strcat()", "strcmp()", "strlen()"],
        answer: "strcpy()"
    },
    {
        question: "What is the result of 10 >> 1 in C?",
        options: ["5", "10", "20", "15"],
        answer: "5"
    },
    {
        question: "What does the keyword 'volatile' signify in C?",
        options: ["Mutable variable", "Optimized variable", "Variable subject to change unexpectedly", "None of the above"],
        answer: "Variable subject to change unexpectedly"
    },
    {
        question: "What does 'EOF' represent in C?",
        options: ["End of File", "Error or Failure", "End of Function", "None of the above"],
        answer: "End of File"
    },
    {
        question: "Which operator is used for bitwise OR in C?",
        options: ["|", "&", "^", "||"],
        answer: "|"
    },
    {
        question: "What does the function abs() do in C?",
        options: ["Finds the absolute value", "Finds the square root", "Rounds a number", "None of the above"],
        answer: "Finds the absolute value"
    },
    {
        question: "Which type is used to represent true or false in C?",
        options: ["bool", "boolean", "int", "None of the above"],
        answer: "int"
    },
    {
        question: "What is the output of printf(\"%d\", sizeof(char));?",
        options: ["1", "2", "4", "8"],
        answer: "1"
    },
    {
        question: "Which of these functions is used to open a file in C?",
        options: ["open()", "fopen()", "file_open()", "create()"],
        answer: "fopen()"
    },
    {
        question: "What is the value of an uninitialized variable in C?",
        options: ["0", "NULL", "Garbage value", "None of the above"],
        answer: "Garbage value"
    },
    {
        question: "Which of these is a ternary operator in C?",
        options: ["::", "?", "&&", "||"],
        answer: "?"
    },
    {
        question: "Which function is used to read a single character from input in C?",
        options: ["getchar()", "gets()", "scanf()", "fgetc()"],
        answer: "getchar()"
    },
    {
        question: "What is the difference between ++i and i++ in C?",
        options: [
            "++i increments after usage; i++ increments before usage",
            "++i increments before usage; i++ increments after usage",
            "Both are identical",
            "None of the above"
        ],
        answer: "++i increments before usage; i++ increments after usage"
    },
    {
        question: "Which operator is used to get the address of a variable?",
        options: ["&", "*", "#", "%"],
        answer: "&"
    },
    {
        question: "Which keyword is used to prevent a variable from being modified?",
        options: ["const", "static", "volatile", "register"],
        answer: "const"
    },
    {
        question: "What does the function fgets() do in C?",
        options: [
            "Reads a single character",
            "Reads a line of text",
            "Writes a line of text",
            "None of the above"
        ],
        answer: "Reads a line of text"
    },
    {
        question: "Which header file is required for mathematical operations in C?",
        options: ["stdio.h", "math.h", "stdlib.h", "string.h"],
        answer: "math.h"
    },
    {
        question: "What is the output of printf(\"%u\", -1); on a 16-bit machine?",
        options: ["-1", "65535", "0", "Error"],
        answer: "65535"
    },
    {
        question: "What is the range of a signed char in C?",
        options: ["0 to 255", "-128 to 127", "-256 to 255", "-127 to 128"],
        answer: "-128 to 127"
    },
    {
        question: "What will the following code print?\n`printf(\"\\t\\nHello World\\n\");`",
        options: ["Hello World", "  Hello World", "Error", "Hello World with new lines and tab"],
        answer: "Hello World with new lines and tab"
    },
    {
        question: "Which type is returned by malloc() in C?",
        options: ["void*", "char*", "int*", "None of the above"],
        answer: "void*"
    },
    {
        question: "What is the difference between calloc() and malloc() in C?",
        options: [
            "calloc() initializes memory to zero; malloc() does not",
            "malloc() initializes memory to zero; calloc() does not",
            "calloc() allocates contiguous memory; malloc() does not",
            "No difference"
        ],
        answer: "calloc() initializes memory to zero; malloc() does not"
    }
];


// Shuffle questions and pick the first 10
const shuffledQuestions = shuffleArray(cQuestions).slice(0, 10);

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


>>>>>>> 0e406f7240c13edf8d53329b9cc8171a8e2f9840
