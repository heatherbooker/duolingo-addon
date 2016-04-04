function submit(name) {
    var answer = getAnswer(name);
    inform(answer);
}

function getAnswer(name) {
    var answer = $('input[name=' + name + ']:checked', '#' + name).val();
    return answer;
}

function inform(answer) {
    if (answer === 'y') {
        alert('correct!');
    } else if (answer === 'n') {
        alert('try again!');
    } else {
        console.log('qqchose se passe? answer is: ', answer);
    }
}

function submitAll() {
    var answers = []
    for (var i = 1; i < 4; i++) {
        answ = getAnswer('q' + i);
        answers.push(answ);
    }
    if (answers.indexOf('n') > 0) {
        alert('try again!');
    } else {
        alert('all correct!');
    }
    console.log(answers);
}