function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const htmlQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyperlinking Text Management Language",
            "Hyperlink Textual Management Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["&lt;script&gt;", "&lt;style&gt;", "&lt;css&gt;", "&lt;link&gt;"],
        answer: "&lt;style&gt;"
    },
    {
        question: "Which tag is used to define the largest heading in HTML?",
        options: ["&lt;h6&gt;", "&lt;h1&gt;", "&lt;heading&gt;", "&lt;head&gt;"],
        answer: "&lt;h1&gt;"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["title", "src", "alt", "longdesc"],
        answer: "alt"
    },
    {
        question: "What is the purpose of the &lt;title&gt; tag in HTML?",
        options: [
            "To specify a heading in the webpage",
            "To define metadata",
            "To specify the title of the document",
            "To define the footer"
        ],
        answer: "To specify the title of the document"
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        options: ["&lt;lb&gt;", "&lt;break&gt;", "&lt;br&gt;", "&lt;line&gt;"],
        answer: "&lt;br&gt;"
    },
    {
        question: "Which attribute is used to open a hyperlink in a new tab?",
        options: ['target="_self"', 'target="_blank"', 'target="_top"', 'target="_parent"'],
        answer: 'target="_blank"'
    },
    {
        question: "Which HTML element is used to define a navigation bar?",
        options: ["&lt;navbar&gt;", "&lt;navigation&gt;", "&lt;nav&gt;", "&lt;menu&gt;"],
        answer: "&lt;nav&gt;"
    },
    {
        question: "Which tag is used to display a numbered list in HTML?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;list&gt;", "&lt;dl&gt;"],
        answer: "&lt;ol&gt;"
    },
    {
        question: "What does the &lt;iframe&gt; tag do?",
        options: [
            "Creates an inline frame",
            "Embeds an image",
            "Defines a section",
            "Links to another page"
        ],
        answer: "Creates an inline frame"
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;foot&gt;", "&lt;end&gt;"],
        answer: "&lt;footer&gt;"
    },
    {
        question: "What does the &lt;a&gt; tag in HTML define?",
        options: ["An anchor/link", "An audio file", "An article", "An alert box"],
        answer: "An anchor/link"
    },
    {
        question: "Which tag is used to embed a video in HTML5?",
        options: ["&lt;movie&gt;", "&lt;video&gt;", "&lt;media&gt;", "&lt;embed&gt;"],
        answer: "&lt;video&gt;"
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: [
            '&lt;body bg="yellow"&gt;',
            '&lt;body style="background-color: yellow;"&gt;',
            '&lt;background&gt;yellow&lt;/background&gt;',
            '&lt;body color="yellow"&gt;'
        ],
        answer: '&lt;body style="background-color: yellow;"&gt;'
    },
    {
        question: "How can you make a list that lists items with bullets?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;dl&gt;", "&lt;list&gt;"],
        answer: "&lt;ul&gt;"
    },
    {
        question: "Which input type is used to display a slider in HTML5?",
        options: ["text", "range", "slider", "number"],
        answer: "range"
    },
    {
        question: "What is the purpose of the &lt;meta&gt; tag in HTML?",
        options: [
            "To link to external files",
            "To define metadata",
            "To include JavaScript",
            "To display special characters"
        ],
        answer: "To define metadata"
    },
    {
        question: "Which HTML tag is used to define a client-side script?",
        options: ["&lt;script&gt;", "&lt;code&gt;", "&lt;javascript&gt;", "&lt;js&gt;"],
        answer: "&lt;script&gt;"
    },
    {
        question: "What does the &lt;b&gt; tag in HTML do?",
        options: ["Makes text bold", "Creates a button", "Adds a border", "None of the above"],
        answer: "Makes text bold"
    },
    {
        question: "Which HTML attribute is used to specify a unique id for an element?",
        options: ["class", "id", "name", "key"],
        answer: "id"
    },
    {
        question: "Which HTML tag is used to create a checkbox?",
        options: ["&lt;input type='checkbox'&gt;", "&lt;check&gt;", "&lt;checkbox&gt;", "&lt;tick&gt;"],
        answer: "&lt;input type='checkbox'&gt;"
    },
    {
        question: "What is the default display property of the &lt;div&gt; tag?",
        options: ["inline", "block", "inline-block", "flex"],
        answer: "block"
    },
    {
        question: "What is the correct HTML for making a text input field?",
        options: [
            "&lt;input type='text'&gt;",
            "&lt;textinput&gt;",
            "&lt;textfield&gt;",
            "&lt;input type='textfield'&gt;"
        ],
        answer: "&lt;input type='text'&gt;"
    },
    {
        question: "How do you add a comment in HTML?",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "&lt;!-- This is a comment --&gt;",
            "&lt;comment&gt;This is a comment&lt;/comment&gt;"
        ],
        answer: "&lt;!-- This is a comment --&gt;"
    },
    {
        question: "Which HTML tag is used to specify a table row?",
        options: ["&lt;td&gt;", "&lt;th&gt;", "&lt;tr&gt;", "&lt;row&gt;"],
        answer: "&lt;tr&gt;"
    },
    {
        question: "Which HTML tag is used to display images?",
        options: ["&lt;img&gt;", "&lt;picture&gt;", "&lt;photo&gt;", "&lt;graphics&gt;"],
        answer: "&lt;img&gt;"
    },
    {
        question: "Which tag is used to define a drop-down list in HTML?",
        options: ["&lt;dropdown&gt;", "&lt;list&gt;", "&lt;select&gt;", "&lt;option&gt;"],
        answer: "&lt;select&gt;"
    },
    {
        question: "What does the &lt;strong&gt; tag in HTML do?",
        options: [
            "Makes text italic",
            "Creates a bold importance",
            "Adds a strike-through",
            "None of the above"
        ],
        answer: "Creates a bold importance"
    },
    {
        question: "Which HTML element is used to define important text?",
        options: ["&lt;b&gt;", "&lt;important&gt;", "&lt;strong&gt;", "&lt;i&gt;"],
        answer: "&lt;strong&gt;"
    },
    {
        question: "Which element is used to create a line through the center of text?",
        options: ["&lt;strike&gt;", "&lt;del&gt;", "&lt;s&gt;", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What does the 'disabled' attribute do in an input tag?",
        options: [
            "Hides the input",
            "Prevents user input",
            "Highlights the input",
            "None of the above"
        ],
        answer: "Prevents user input"
    },
    {
        question: "Which tag is used to group related options in a drop-down list?",
        options: ["&lt;group&gt;", "&lt;optgroup&gt;", "&lt;fieldset&gt;", "&lt;related&gt;"],
        answer: "&lt;optgroup&gt;"
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: [
            '&lt;img src="image.jpg" alt="Description"&gt;',
            '&lt;image src="image.jpg"&gt;',
            '&lt;img href="image.jpg"&gt;',
            '&lt;img link="image.jpg"&gt;'
        ],
        answer: '&lt;img src="image.jpg" alt="Description"&gt;'
    },
    {
        question: "Which HTML attribute specifies the language of the document?",
        options: ["lang", "xml:lang", "locale", "language"],
        answer: "lang"
    },
    {
        question: "What is the correct way to specify a hyperlink in HTML?",
        options: [
            '&lt;a href="url"&gt;Link text&lt;/a&gt;',
            '&lt;link="url"&gt;Link text&lt;/link&gt;',
            '&lt;a link="url"&gt;Link text&lt;/a&gt;',
            '&lt;a href="url"&gt;Link&lt;/a&gt;'
        ],
        answer: '&lt;a href="url"&gt;Link text&lt;/a&gt;'
    },
    {
        question: "Which tag is used for creating a form in HTML?",
        options: ["&lt;form&gt;", "&lt;fieldset&gt;", "&lt;input&gt;", "&lt;textarea&gt;"],
        answer: "&lt;form&gt;"
    },
    {
        question: "Which HTML element is used to play audio files?",
        options: ["&lt;music&gt;", "&lt;sound&gt;", "&lt;audio&gt;", "&lt;media&gt;"],
        answer: "&lt;audio&gt;"
    },
    {
        question: "What is the purpose of the 'placeholder' attribute in HTML?",
        options: [
            "To add a tooltip",
            "To display default text in an input field",
            "To style an input field",
            "To set a default value"
        ],
        answer: "To display default text in an input field"
    },
    {
        question: "Which tag is used to display a horizontal line in HTML?",
        options: ["&lt;hr&gt;", "&lt;line&gt;", "&lt;br&gt;", "&lt;separator&gt;"],
        answer: "&lt;hr&gt;"
    },
    {
        question: "What does the &lt;canvas&gt; element do in HTML5?",
        options: [
            "Creates a container for SVG graphics",
            "Defines a drawing area for 2D graphics",
            "Embeds a video",
            "Displays an image"
        ],
        answer: "Defines a drawing area for 2D graphics"
    },
    {
        question: "Which tag is used to define a table cell in HTML?",
        options: ["&lt;tr&gt;", "&lt;td&gt;", "&lt;cell&gt;", "&lt;table&gt;"],
        answer: "&lt;td&gt;"
    },
    {
        question: "Which tag is used to display inline elements?",
        options: ["&lt;span&gt;", "&lt;div&gt;", "&lt;section&gt;", "&lt;p&gt;"],
        answer: "&lt;span&gt;"
    },
    {
        question: "What is the default value of the 'method' attribute in a form?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: "GET"
    }
];

const shuffledQuestions = shuffleArray(htmlQuestions).slice(0, 10);

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
    // Ensure DOM elements are initialized
    if (!optionsElement || !questionElement || !resultElement) {
        console.error('Required DOM elements are not initialized.');
        return;
    }

    // Clear previous content
    optionsElement.innerHTML = '';
    resultElement.textContent = '';

    // Ensure there are questions to load
    if (!shuffledQuestions || shuffledQuestions.length === 0) {
        console.error('No questions available to load.');
        return;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    // Validate the current question and its options
    if (!currentQuestion || !Array.isArray(currentQuestion.options) || currentQuestion.options.length === 0) {
        console.error('Invalid question format or missing options.');
        return;
    }

    questionElement.textContent = currentQuestion.question;

    // Shuffle options and display them
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
    const debugMode = true;
    if (debugMode && !shuffledOptions.includes(currentQuestion.answer)) {
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