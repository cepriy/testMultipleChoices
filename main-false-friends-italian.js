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
    button1.css("background-color",'white');
    button2.css("background-color",'white');
    button3.css("background-color",'white');
    button4.css("background-color",'white');
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
    $("#startNewTest").hide();
    let allTestQuestions = getQuestionsSet();
    iter = allTestQuestions.entries();
    currentQuestion = iter.next();

    if (currentQuestion != null) {
        console.log(currentQuestion.value[0]);

        setNextQuestion(currentQuestion.value[0]);
    }

}

function showCorrectAnswer(quest){

        if (button1.text() === quest.correctVariant)
        {
            button1.css("background-color",'#09c111');
         //   button1.style.color='#14010c';
            $(button1).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        }

        if (button2.text()=== quest.correctVariant)
        {
            button2.css("background-color",'#09c111');
          //  button2.style.color='#14010c';
            $(button2).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        }
        if (button3.text()=== quest.correctVariant)
        {
            button3.css("background-color",'#09c111');
        //    button3.style.color='#14010c';
            $(button3).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        }
        if (button4.text()=== quest.correctVariant)
        {
            button4.css("background-color",'#09c111');
           // button4.style.color='#14010c';
            $(button4).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        }
    }



function processCorrectAnswer(button){
    button.css("background-color",'#09c111');
    button.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    points++;
}

function processWrongAnswer(button){
    button.css("background-color","#DA2F1D");
    showCorrectAnswer(currentQuestion.value[0]);
    button.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function handleButtonClick(){
        if (currentQuestion.value[0].correctVariant === $("#" +this.id).text()) {
            processCorrectAnswer($("#" +this.id));
        }
        else {
            processWrongAnswer($("#" +this.id));
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