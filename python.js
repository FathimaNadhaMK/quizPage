function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const pythonQuestions = [
    {
        question: "What is Python?",
        options: ["A programming language", "A snake", "A database", "A web server"],
        answer: "A programming language"
    },
    {
        question: "Who developed Python?",
        options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"],
        answer: "Guido van Rossum"
    },
    {
        question: "What type of programming language is Python?",
        options: ["Procedural", "Object-oriented", "Functional", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the file extension for Python files?",
        options: [".py", ".python", ".pt", ".pyt"],
        answer: ".py"
    },
    {
        question: "Which of these is a valid Python data type?",
        options: ["list", "dictionary", "tuple", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the output of `print(2 ** 3)`?",
        options: ["5", "8", "9", "6"],
        answer: "8"
    },
    {
        question: "What does the `len()` function do?",
        options: ["Counts elements", "Finds length", "Adds elements", "None of the above"],
        answer: "Finds length"
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "def", "function", "lambda"],
        answer: "def"
    },
    {
        question: "How do you write a single-line comment in Python?",
        options: ["//", "#", "/*", "<!--"],
        answer: "#"
    },
    {
        question: "Which of the following is an immutable data type in Python?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        answer: "Tuple"
    },
    {
        question: "What is the output of `print(type(10))`?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'string'>", "Error"],
        answer: "<class 'int'>"
    },
    {
        question: "What does `pip` stand for in Python?",
        options: ["Pip Installs Python", "Python Installation Package", "Pip Installs Packages", "None of the above"],
        answer: "Pip Installs Packages"
    },
    {
        question: "Which of the following is not a Python keyword?",
        options: ["if", "else", "loop", "elif"],
        answer: "loop"
    },
    {
        question: "What does the `range()` function do?",
        options: ["Generates a sequence of numbers", "Returns the length of an object", "Reverses a list", "None of the above"],
        answer: "Generates a sequence of numbers"
    },
    {
        question: "What is a correct syntax to create a class in Python?",
        options: ["class MyClass:", "MyClass:", "create MyClass:", "None of the above"],
        answer: "class MyClass:"
    },
    {
        question: "What is the result of `5 // 2` in Python?",
        options: ["2", "2.5", "3", "Error"],
        answer: "2"
    },
    {
        question: "What is the purpose of the `self` keyword in Python?",
        options: ["To define a static method", "To refer to the current instance of the class", "To refer to the parent class", "None of the above"],
        answer: "To refer to the current instance of the class"
    },
    {
        question: "Which function is used to read input from the user in Python?",
        options: ["read()", "input()", "scan()", "get()"],
        answer: "input()"
    },
    {
        question: "What is the output of `print(bool(0))`?",
        options: ["True", "False", "Error", "None"],
        answer: "False"
    },
    {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "*", "//"],
        answer: "**"
    },
    {
        question: "What does the `is` keyword compare?",
        options: ["Values", "Memory locations", "Data types", "None of the above"],
        answer: "Memory locations"
    },
    {
        question: "Which module is used for random number generation in Python?",
        options: ["random", "math", "numbers", "rand"],
        answer: "random"
    },
    {
        question: "What does `break` do in a loop?",
        options: ["Ends the loop", "Skips to the next iteration", "Restarts the loop", "None of the above"],
        answer: "Ends the loop"
    },
    {
        question: "Which of these is not a Python built-in function?",
        options: ["max()", "min()", "print()", "get()"],
        answer: "get()"
    },
    {
        question: "What is the output of `print('Hello' + 'World')`?",
        options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
        answer: "HelloWorld"
    },
    {
        question: "What does `lambda` define in Python?",
        options: ["A function", "A variable", "A class", "A loop"],
        answer: "A function"
    },
    {
        question: "Which method is used to convert a string to lowercase in Python?",
        options: ["lower()", "toLower()", "convertLower()", "strtolower()"],
        answer: "lower()"
    },
    {
        question: "What is the default value returned by a function if no return statement is provided?",
        options: ["None", "0", "False", "Error"],
        answer: "None"
    },
    {
        question: "Which of the following is used to handle exceptions in Python?",
        options: ["try-except", "catch-finally", "throw-catch", "try-finally"],
        answer: "try-except"
    },
    {
        question: "Which function is used to open a file in Python?",
        options: ["open()", "file()", "read()", "write()"],
        answer: "open()"
    },
    {
        question: "What is the purpose of the `with` statement in Python?",
        options: ["To manage resources", "To define a function", "To handle exceptions", "None of the above"],
        answer: "To manage resources"
    },
    {
        question: "Which of these is not a valid Python loop?",
        options: ["for", "while", "do-while", "None of the above"],
        answer: "do-while"
    },
    {
        question: "Which method is used to add an element to a list in Python?",
        options: ["append()", "add()", "insert()", "extend()"],
        answer: "append()"
    },
    {
        question: "How do you check for the presence of a key in a dictionary?",
        options: ["in", "has_key()", "contains()", "exists()"],
        answer: "in"
    },
    {
        question: "What is the output of `print(3 > 2)`?",
        options: ["True", "False", "Error", "None"],
        answer: "True"
    },
    {
        question: "What is the purpose of `import` in Python?",
        options: ["To import modules", "To define classes", "To initialize variables", "None of the above"],
        answer: "To import modules"
    },
    {
        question: "Which of the following is a mutable data type in Python?",
        options: ["List", "String", "Tuple", "Integer"],
        answer: "List"
    },
    {
        question: "How do you write a multi-line string in Python?",
        options: ["Using triple quotes", "Using double slashes", "Using backticks", "Using semicolons"],
        answer: "Using triple quotes"
    },
    {
        question: "What is the result of `len([1, 2, 3])`?",
        options: ["3", "2", "4", "Error"],
        answer: "3"
    },
    {
        question: "What does `enumerate()` do in Python?",
        options: ["Adds an index to an iterable", "Reverses an iterable", "Sorts an iterable", "None of the above"],
        answer: "Adds an index to an iterable"
    },
    {
        question: "Which of the following is not a Python data structure?",
        options: ["List", "Tuple", "Set", "Map"],
        answer: "Map"
    },
    {
        question: "How do you remove whitespace from the beginning and end of a string in Python?",
        options: ["strip()", "trim()", "remove()", "erase()"],
        answer: "strip()"
    },
    {
        question: "What does the `zip()` function do in Python?",
        options: ["Combines iterables into tuples", "Reverses a string", "Joins strings", "Sorts a list"],
        answer: "Combines iterables into tuples"
    },
    {
        question: "What is a generator in Python?",
        options: ["A function that yields values", "A list comprehension", "A lambda function", "None of the above"],
        answer: "A function that yields values"
    },
    {
        question: "Which method is used to remove an item from a set?",
        options: ["remove()", "delete()", "pop()", "discard()"],
        answer: "remove()"
    },
    {
        question: "What does `str()` do in Python?",
        options: ["Converts an object to a string", "Converts a string to an integer", "Converts a list to a tuple", "None of the above"],
        answer: "Converts an object to a string"
    },
    {
        question: "What is a Python decorator?",
        options: ["A function that modifies another function", "A loop modifier", "A class attribute", "None of the above"],
        answer: "A function that modifies another function"
    },
];


// Shuffle questions and pick the first 10
const shuffledQuestions = shuffleArray(pythonQuestions).slice(0, 10);

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


