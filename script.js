const questions = [
    {
        question: "Qual é a forma possessiva correta do substantivo 'cat'?",
        answers: [
            "Cat's",
            "Cats'",
            "Cats"
        ],
        correct: 0
    },
    {
        question: "Qual é a forma possessiva correta do substantivo 'children'?",
        answers: [
            "Childrens's",
            "Children's",
            "Childrens'"
        ],
        correct: 1
    },
    {
        question: "Como você forma a forma possessiva de um substantivo singular que termina em 's'?",
        answers: [
            "Adicionando 's",
            "Adicionando 'es",
            "Adicionando apenas o apóstrofo ('), sem 's"
        ],
        correct: 0
    },
    {
        question: "Qual é a forma possessiva correta do substantivo 'teacher'?",
        answers: [
            "Teachers's",
            "Teacher's",
            "Teachers'"
        ],
        correct: 1
    },
    {
        question: "Qual é a forma possessiva correta do substantivo 'mouse'?",
        answers: [
            "Mouses's",
            "Mouse's",
            "Mice's"
        ],
        correct: 1
    },
    {
        question: "Como você forma a forma possessiva de um substantivo plural que não termina em 's'?",
        answers: [
            "Adicionando 's",
            "Adicionando 'es",
            "Adicionando apenas o apóstrofo ('), sem 's"
        ],
        correct: 2
    },
    {
        question: "Qual é a forma possessiva correta do substantivo 'man'?",
        answers: [
            "Mans's",
            "Man's",
            "Men's"
        ],
        correct: 1
    },
    {
        question: "Qual é a forma possessiva correta do substantivo 'woman'?",
        answers: [
            "Womans's",
            "Woman's",
            "Women's"
        ],
        correct: 1
    },
    {
        question: "Qual é a forma possessiva correta do substantivo 'actor'?",
        answers: [
            "Actors'",
            "Actor's",
            "Actors's"
        ],
        correct: 2
    },
    {
        question: "Qual é a forma possessiva correta do substantivo 'Country'?",
        answers: [
            "Countrys",
            "Country's",
            "Countries's"
        ],
        correct: 2
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corrects = new Set()
const totalQuestions = questions.length
const showTotal = document.querySelector('#hits span')
showTotal.textContent = corrects.size + ' de ' + totalQuestions

questions.forEach((item, index) => {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.question;

    item.answers.forEach((response, responseIndex) => {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = response;
        dt.querySelector('input').setAttribute('name', `question-${index}`);
        dt.querySelector('input').value = responseIndex;
        dt.querySelector('input').onchange = (event) => {
            const correctAnswer = event.target.value == item.correct;

            corrects.delete(item);

            corrects.add(correctAnswer ? item : null);

            showTotal.textContent = `${corrects.size} de ${totalQuestions}`;
        };
        quizItem.querySelector('dl').appendChild(dt);
    });

    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem);
});
