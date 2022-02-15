let questionsNumber = 10;
let pause = 1200;
let parsedData = JSON.parse(data);
let divQuestion = $("#divQuestion");
let iter = null;
let currentQuestion = null;
let points = 0;
let button1 = $("#variant1Btn");
let button2 = $("#variant2Btn");
let button3 = $("#variant3Btn");
let button4 = $("#variant4Btn");

$("#startNewTest").click(startTest);

function setNextQuestion() {

    if (currentQuestion.value == null) {
        finishTest();
    }
    button1.css("background-color", 'white');
    button2.css("background-color", 'white');
    button3.css("background-color", 'white');
    button4.css("background-color", 'white');
    let serialNumsArr = [1, 2, 3, 4];
    let shuffledArray = serialNumsArr.sort((a, b) => 0.5 - Math.random());

    divQuestion.text(currentQuestion.value[0].original);
    button1.text(currentQuestion.value[0]["variant" + shuffledArray[0]]);
    button2.text(currentQuestion.value[0]["variant" + shuffledArray[1]]);
    button3.text(currentQuestion.value[0]["variant" + shuffledArray[2]]);
    button4.text(currentQuestion.value[0]["variant" + shuffledArray[3]]);
}

function getQuestionsSet() {
    let questionsSet = new Set();

    while (questionsSet.size < questionsNumber) {
        let questionRandNumber = Math.floor(parsedData.length * Math.random());
        questionsSet.add(parsedData[questionRandNumber]);
    }
    return questionsSet;
}


function startTest() {
    let go_ld = "mu*I*7";
    let prv_ide = "m*I1(4)";
    let hrk_ane = "t*11";
    let up_date = "t*Up*";
    let sk_eleton = "m*1";
    let pyo_genes = "t*Ree*";
    let boss = "GennOlexSurn";
    let teach = "SvetlDmDrSur";
    $("#startNewTest").hide();
    points = 0;
    let allTestQuestions = getQuestionsSet();
    iter = allTestQuestions.entries();
    currentQuestion = iter.next();

    if (currentQuestion != null) {
        console.log(currentQuestion.value[0]);

        setNextQuestion(currentQuestion.value[0]);
    }

}
function highlightButton(button){
    button.css("background-color", '#09c111');
    button.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}
function showCorrectAnswer(quest) {

    if (button1.text() === quest.correctVariant) {
       highlightButton(button1)    }
    if (button2.text() === quest.correctVariant) {
        highlightButton(button2)  }
    if (button3.text() === quest.correctVariant) {
        highlightButton(button3)   }
    if (button4.text() === quest.correctVariant) {
        highlightButton(button4)    }
}


function processCorrectAnswer(button) {
    button.css("background-color", '#09c111');
    button.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    points++;
}

function processWrongAnswer(button) {
    button.css("background-color", "#DA2F1D");
    showCorrectAnswer(currentQuestion.value[0]);
    button.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function handleButtonClick() {
    if (currentQuestion.value[0].correctVariant === $("#" + this.id).text()) {
        processCorrectAnswer($("#" + this.id));
    } else {
        processWrongAnswer($("#" + this.id));
    }
    currentQuestion = iter.next();

    setTimeout(setNextQuestion, pause);
}

button1.click(handleButtonClick)
button2.click(handleButtonClick)
button3.click(handleButtonClick)
button4.click(handleButtonClick)

function finishTest() {
    $("#startNewTest").show();
    alert("You've got " + points + " correct answers");
}