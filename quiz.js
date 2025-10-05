// Step 1: Define the function
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Handle case when no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer first!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare the user’s answer with the correct one
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 5: Add an event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
