let question = [
    
    {
        'qsn': "Whice of the following is a Programming language?",
        'a': 'TailwindCss',
        'b': 'Python',
        'c': 'Css',
        'd': 'Html',
        'correct': 'b'

    },
    {
        'qsn': "What year Javascript Launched?",
        'a': '1990',
        'b': '1995',
        'c': '1996',
        'd': 'None Of the above',
        'correct': 'b'

    }, {
        'qsn': "Which of the following is a front-end framework?",
        'a': 'React',
        'b': 'Node.js',
        'c': 'Express',
        'd': 'Django',
        'correct': 'a'
    },
    {
        'qsn': "What does API stand for?",
        'a': 'Application Programming Interface',
        'b': 'Advanced Programming Interface',
        'c': 'Application Protocol Interface',
        'd': 'Advanced Protocol Interface',
        'correct': 'a'
    },
    {
        'qsn': "Who is the founder of Facebook?",
        'a': 'Mark Zuckerberg',
        'b': 'Bill Gates',
        'c': 'Elon Musk',
        'd': 'Jeff Bezos',
        'correct': 'a'
    },
    {
        'qsn': "What is the capital of France?",
        'a': 'Berlin',
        'b': 'Madrid',
        'c': 'Paris',
        'd': 'Rome',
        'correct': 'c'
    },
    {
        'qsn': "In which year was the first manned moon landing?",
        'a': '1965',
        'b': '1969',
        'c': '1975',
        'd': '1980',
        'correct': 'b'
    }
]

var heading1 = document.querySelector("#heading");
var input = document.querySelectorAll(".input");
var box = document.querySelector("#box");

var btn = document.querySelector("#btn");
var index = 0;
var total = question.length;
var right = 0, wrong = 0;

const loadQsn = () => {
    if (total === index) {
        return endQz()
    }

    var data = question[index]
    heading1.textContent = data.qsn;

    input[0].nextElementSibling.textContent = data.a;
    input[1].nextElementSibling.textContent = data.b;
    input[2].nextElementSibling.textContent = data.c;
    input[3].nextElementSibling.textContent = data.d;

}


const getAnswer = () => {
    let answer = null;
    input.forEach((inpt) => {
        if (inpt.checked) {
            answer = inpt.value;
        }
    })
    return answer
};

var reset = () =>{
    input.forEach((inpt) => {
        inpt.checked = false;
    })
}


btn.addEventListener("click", () => {
    const answer = getAnswer();
    let data = question[index]

    if (answer === data.correct) {
        right += 1
        index += 1
    } else {
        wrong += 1
        index += 1
    }
    reset();
    loadQsn();

})



function endQz() {
    box.innerHTML = `
        <h1>Correct :${right}</h1>
        <h1>Incorrect :${wrong}</h1>
        `;
}






loadQsn();