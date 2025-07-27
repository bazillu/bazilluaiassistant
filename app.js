document.getElementById('question').innerText = data.question;
document.getElementById('show-answer').addEventListener('click', function() {
    document.getElementById('answer').style.display = 'block';
    document.getElementById('answer').innerText = data.answer;
});