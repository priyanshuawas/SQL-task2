let currentQuestion = 1;
let selectedGender = null;

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('gender-container').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    // Display initial question based on gender
    if (selectedGender === 'male') {
        document.getElementById('question').innerText = "Question 1: What is your favorite sport?";
    } else if (selectedGender === 'female') {
        document.getElementById('question').innerText = "Question 1: What is your favorite hobby?";
    } else {
        document.getElementById('question').innerText = "Question 1: What is your favorite activity?";
    }
}
function nextQuestion(option) {
    let nextQuestionText = "";
    if (currentQuestion === 1) {

        if (selectedGender === 'male') {
            nextQuestionText = option === 1 ? "Question 2: Do you play soccer or basketball?" : 
                                              "Question 2: Do you play cricket or tennis?";
        } else if (selectedGender === 'female') {
            nextQuestionText = option === 1 ? "Question 2: Do you like reading or painting?" : 
                                              "Question 2: Do you like cooking or gardening?";
        } else {
            nextQuestionText = option === 1 ? "Question 2: Do you enjoy hiking or cycling?" : 
                                              "Question 2: Do you enjoy swimming or dancing?";
        }
    } else if (currentQuestion === 2) {

        if (selectedGender === 'male') {
            nextQuestionText = option === 1 ? "Question 3: What is your favorite soccer team?" : 
                                              "Question 3: What is your favorite basketball team?";
        } else if (selectedGender === 'female') {
            nextQuestionText = option === 1 ? "Question 3: What is your favorite book genre?" : 
                                              "Question 3: What is your favorite painting style?";
        } else {
            nextQuestionText = option === 1 ? "Question 3: What is your favorite hiking destination?" : 
                                              "Question 3: What is your favorite swimming style?";
        }
    } else if (currentQuestion === 3) {
        // Determine next question based on gender and user's choice for the third question
        if (selectedGender === 'male') {
            nextQuestionText = option === 1 ? "Question 4: Do you prefer playing soccer indoors or outdoors?" : 
                                              "Question 4: Do you prefer playing basketball indoors or outdoors?";
        } else if (selectedGender === 'female') {
            nextQuestionText = option === 1 ? "Question 4: Do you prefer reading fiction or non-fiction?" : 
                                              "Question 4: Do you prefer painting landscapes or portraits?";
        } else {
            nextQuestionText = option === 1 ? "Question 4: Do you prefer hiking in mountains or forests?" : 
                                              "Question 4: Do you prefer swimming in pools or oceans?";
        }
    } else if (currentQuestion === 4) {
        // Determine next question based on gender and user's choice for the fourth question
        if (selectedGender === 'male') {
            nextQuestionText = option === 1 ? "Question 5: What is your favorite soccer player?" : 
                                              "Question 5: What is your favorite basketball player?";
        } else if (selectedGender === 'female') {
            nextQuestionText = option === 1 ? "Question 5: What is your favorite author?" : 
                                              "Question 5: What is your favorite artist?";
        } else {
            nextQuestionText = option === 1 ? "Question 5: What is your favorite hiking gear?" : 
                                              "Question 5: What is your favorite swimming equipment?";
        }
    } else {
        alert("Survey completed!"); // For demo purposes
        window.location.href = 'index.html'; // Redirect to home page after survey completion
        return;
    }
    document.getElementById('question').innerText = nextQuestionText;
    currentQuestion++;
}
