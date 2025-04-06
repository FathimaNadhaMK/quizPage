function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const dbmsQuestions = [
    {
        question: "What does DBMS stand for?",
        options: ["Database Management System", "Data Backup Management System", "Database Managing Server", "Data Basic Management System"],
        answer: "Database Management System"
    },
    {
        question: "Which of the following is not a type of database?",
        options: ["Hierarchical", "Network", "Relational", "Flat file"],
        answer: "Flat file"
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Standard Query Language", "System Query Language"],
        answer: "Structured Query Language"
    },
    {
        question: "Which of the following is a primary key constraint?",
        options: ["Unique", "Null", "Foreign Key", "Index"],
        answer: "Unique"
    },
    {
        question: "Which of the following is a valid DDL command?",
        options: ["INSERT", "UPDATE", "CREATE", "SELECT"],
        answer: "CREATE"
    },
    {
        question: "What does ACID stand for in DBMS?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Connectivity, Isolation, Durability", "Availability, Consistency, Isolation, Dependency", "Atomicity, Connectivity, Integration, Dependency"],
        answer: "Atomicity, Consistency, Isolation, Durability"
    },
    {
        question: "What is the full form of DML?",
        options: ["Data Manipulation Language", "Data Management Language", "Data Markup Language", "Data Mining Language"],
        answer: "Data Manipulation Language"
    },
    {
        question: "Which of these is not a NoSQL database?",
        options: ["MongoDB", "Redis", "MySQL", "Cassandra"],
        answer: "MySQL"
    },
    {
        question: "Which SQL clause is used to filter records?",
        options: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
        answer: "WHERE"
    },
    {
        question: "Which of the following is an aggregate function?",
        options: ["AVG()", "SUM()", "MAX()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of these is not a valid type of JOIN in SQL?",
        options: ["INNER JOIN", "OUTER JOIN", "FULL JOIN", "RIGHT OUTER JOIN"],
        answer: "FULL JOIN"
    },
    {
        question: "What does the 'TRUNCATE' command do?",
        options: ["Deletes a table", "Removes all rows from a table", "Removes all columns from a table", "Drops the table"],
        answer: "Removes all rows from a table"
    },
    {
        question: "Which key is used to uniquely identify rows in a table?",
        options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"],
        answer: "Primary Key"
    },
    {
        question: "What is a foreign key?",
        options: ["A key that references a primary key in another table", "A key that has null values", "A key that references itself", "None of the above"],
        answer: "A key that references a primary key in another table"
    },
    {
        question: "What is the purpose of normalization?",
        options: ["To reduce redundancy", "To ensure data integrity", "To optimize performance", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is a stored procedure in DBMS?",
        options: ["A compiled SQL query", "A set of precompiled SQL statements", "A trigger", "A database table"],
        answer: "A set of precompiled SQL statements"
    },
    {
        question: "What does the 'GROUP BY' clause do?",
        options: ["Groups rows with the same values", "Filters rows", "Orders rows", "Joins tables"],
        answer: "Groups rows with the same values"
    },
    {
        question: "What is a transaction in DBMS?",
        options: ["A unit of program execution", "A change in data", "A single SQL query", "None of the above"],
        answer: "A unit of program execution"
    },
    {
        question: "Which of the following is an example of a key-value store?",
        options: ["MongoDB", "Redis", "Cassandra", "MySQL"],
        answer: "Redis"
    },
    {
        question: "Which of these is not a constraint in DBMS?",
        options: ["NOT NULL", "DEFAULT", "KEY", "CHECK"],
        answer: "KEY"
    },
    {
        question: "Which of these is a command used to retrieve data from a database?",
        options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
        answer: "SELECT"
    },
    {
        question: "What is a view in DBMS?",
        options: ["A virtual table", "A database schema", "A physical table", "A database object"],
        answer: "A virtual table"
    },
    {
        question: "What is the maximum number of columns a table can have?",
        options: ["255", "1000", "Unlimited", "It depends on the database system"],
        answer: "It depends on the database system"
    },
    {
        question: "Which of the following is an OLAP operation?",
        options: ["Drill-down", "Roll-up", "Pivot", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which SQL keyword is used to combine two or more conditions?",
        options: ["AND", "OR", "NOT", "IN"],
        answer: "AND"
    },
    {
        question: "What is a trigger in DBMS?",
        options: ["An event-based procedure", "A type of constraint", "A column in a table", "A key"],
        answer: "An event-based procedure"
    },
    {
        question: "What is the result of the Cartesian product in SQL?",
        options: ["A join", "A single table", "A cross-join", "None of the above"],
        answer: "A cross-join"
    },
    {
        question: "What is a deadlock in DBMS?",
        options: ["Two transactions waiting for each other", "A query failure", "A corrupted table", "None of the above"],
        answer: "Two transactions waiting for each other"
    },
    {
        question: "Which of the following is a transaction state?",
        options: ["Active", "Partially committed", "Aborted", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is a surrogate key?",
        options: ["A unique identifier", "A primary key", "An artificial key", "Both unique and artificial key"],
        answer: "Both unique and artificial key"
    },
    {
        question: "What does the 'ROLLBACK' command do?",
        options: ["Commits a transaction", "Reverts changes in a transaction", "Deletes a table", "Ends a session"],
        answer: "Reverts changes in a transaction"
    },
    {
        question: "What is an ER diagram in DBMS?",
        options: ["Entity-Relationship diagram", "Entity-Relational diagram", "Entity-Roles diagram", "None of the above"],
        answer: "Entity-Relationship diagram"
    },
    {
        question: "Which of the following is not an indexing method?",
        options: ["B-Tree", "Hash", "Sequential", "Binary"],
        answer: "Binary"
    },
    {
        question: "What is the main purpose of the 'HAVING' clause?",
        options: ["Filter aggregated data", "Filter rows", "Join tables", "None of the above"],
        answer: "Filter aggregated data"
    },
    {
        question: "What is a weak entity in DBMS?",
        options: ["An entity without a primary key", "An entity dependent on another entity", "An entity without attributes", "None of the above"],
        answer: "An entity dependent on another entity"
    },
    {
        question: "Which of these is not a SQL data type?",
        options: ["VARCHAR", "INTEGER", "NUMERIC", "PI"],
        answer: "PI"
    },
    {
        question: "What is a functional dependency?",
        options: ["A relationship between columns", "A relationship between rows", "A relationship between tables", "None of the above"],
        answer: "A relationship between columns"
    },
    {
        question: "What is the default isolation level in most databases?",
        options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
        answer: "Read Committed"
    },
    {
        question: "What is the purpose of a database schema?",
        options: ["Define the structure of a database", "Define keys in a database", "Manage transactions", "None of the above"],
        answer: "Define the structure of a database"
    },
    {
        question: "Which of the following is a DBMS language?",
        options: ["DDL", "DML", "DCL", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the size of a BLOB in MySQL?",
        options: ["Up to 64 KB", "Up to 16 MB", "Up to 4 GB", "Depends on the database system"],
        answer: "Depends on the database system"
    },
    {
        question: "What is a cursor in DBMS?",
        options: ["A pointer to a result set", "A database table", "A primary key", "None of the above"],
        answer: "A pointer to a result set"
    },
    {
        question: "What is the purpose of the 'SAVEPOINT' command?",
        options: ["Mark a point in a transaction", "Commit a transaction", "Rollback to a point", "Both mark and rollback"],
        answer: "Both mark and rollback"
    },
];


// Shuffle questions and pick the first 10
const shuffledQuestions = shuffleArray(dbmsQuestions).slice(0, 10);

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