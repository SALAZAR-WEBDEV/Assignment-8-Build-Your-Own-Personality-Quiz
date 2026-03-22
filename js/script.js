console.log("script.js connected!");

// 1. Logic to make buttons "Selectable"
const questionBlocks = document.querySelectorAll('.question-block');

questionBlocks.forEach(block => {
    const buttons = block.querySelectorAll('.answer-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Un-select all buttons in this block
            buttons.forEach(btn => {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline-primary');
            });

            // Select the one we clicked
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');

            // Save the points chosen to the block's data
            block.dataset.pointsChosen = this.dataset.points;
        });
    });
});

// 2. Logic to Show Results
const resultBtn = document.getElementById('show-result');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

resultBtn.addEventListener('click', function() {
    let score = 0;
    let questionsAnswered = 0;

    questionBlocks.forEach(block => {
        if (block.dataset.pointsChosen) {
            score += parseInt(block.dataset.pointsChosen);
            questionsAnswered++;
        }
    });

    // Check if the user finished the quiz
    if (questionsAnswered < questionBlocks.length) {
        alert("Wait! Answer all questions first.");
        return;
    }

    resultContainer.style.display = "block";

    // Results logic based on score
    if (score <= 4) {
        resultText.textContent = "Superman! You are powerful, optimistic, and fight for justice!";
    } else {
        resultText.textContent = "Batman! You are smart, tactical, and use your mind to save the city!";
    }

    resultContainer.scrollIntoView({ behavior: 'smooth' });
});