const quiz = [
    {
      question: "What is the main goal of a software design pattern?",
      ans1text: "To make code more complex",
      ans2text: "To standardize and solve common design problems",
      ans3text: "To create software bugs",
      ans4text: "To confuse developers",
      answer: "To standardize and solve common design problems",
    },
    {
      question: "Which machine learning algorithm is commonly used for image classification?",
      ans1text: "K-Means",
      ans2text: "Support Vector Machine (SVM)",
      ans3text: "Decision Tree",
      ans4text: "Naive Bayes",
      answer: "Support Vector Machine (SVM)",
    },
    {
      question: "What is the purpose of backpropagation in deep learning?",
      ans1text: "Training a neural network by adjusting weights and biases",
      ans2text: "Visualizing neural network architecture",
      ans3text: "Creating convolutional layers",
      ans4text: "Generating random data",
      answer: "Training a neural network by adjusting weights and biases",
    },
    {
        question: "What is the purpose of the 'git clone' command in version control?",
        ans1text: "Create a new repository",
        ans2text: "Commit changes",
        ans3text: "Copy a remote repository to your local machine",
        ans4text: "Merge branches",
        answer: "Copy a remote repository to your local machine",
      },
      {
        question: "Which sorting algorithm has an average and worst-case time complexity of O(n log n)?",
        ans1text: "Bubble Sort",
        ans2text: "Insertion Sort",
        ans3text: "Quick Sort",
        ans4text: "Selection Sort",
        answer: "Quick Sort",
      },
      {
        question: "What is the main purpose of a firewall in network security?",
        ans1text: "Prevent unauthorized access",
        ans2text: "Boost network speed",
        ans3text: "Create backups of data",
        ans4text: "Scan for viruses",
        answer: "Prevent unauthorized access",
      },
      {
        question: "Which of the following is a dynamically typed programming language?",
        ans1text: "C",
        ans2text: "Java",
        ans3text: "Python",
        ans4text: "C++",
        answer: "Python",
      },
      {
        question: "What is the term for a design pattern that allows one class to have only one instance?",
        ans1text: "Factory Pattern",
        ans2text: "Singleton Pattern",
        ans3text: "Observer Pattern",
        ans4text: "Decorator Pattern",
        answer: "Singleton Pattern",
      },
      {
        question: "Which SQL statement is used to retrieve data from a database?",
        ans1text: "SELECT",
        ans2text: "UPDATE",
        ans3text: "INSERT",
        ans4text: "DELETE",
        answer: "SELECT",
      },
      {
        question: "What does API stand for in the context of web development?",
        ans1text: "Application Programming Interface",
        ans2text: "Advanced Programming Interaction",
        ans3text: "Automated Protocol Integration",
        ans4text: "Application Protocol Interface",
        answer: "Application Programming Interface",
      },
      {
        question: "Which machine learning algorithm is used for supervised classification tasks and is based on decision trees?",
        ans1text: "K-Means",
        ans2text: "Random Forest",
        ans3text: "Linear Regression",
        ans4text: "K-Nearest Neighbors",
        answer: "Random Forest",
      },
    
    // Add more questions here...
  ];
  
  // You can continue adding more questions to the 'quiz' array.
  
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});
