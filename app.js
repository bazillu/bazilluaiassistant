function getAnswer(question) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].question.toLowerCase() === question.toLowerCase()) {
            return data[i].answer;
        }
    }
    return "I'm sorry, I don't know the answer to that question.";
}

document.getElementById('submit-question').addEventListener('click', function() {
    var userQuestion = document.getElementById('user-question').value;
    var botAnswer = getAnswer(userQuestion);
    document.getElementById('bot-answer').innerText = botAnswer;
});