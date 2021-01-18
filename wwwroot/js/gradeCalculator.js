function gradeCalculator() {

    var assignments = document.getElementById("assignments").value;
    var groupP = document.getElementById("groupP").value;
    var quiz = document.getElementById("quizzes").value;
    var exams = document.getElementById("exams").value;
    var intex = document.getElementById("intex").value;

    /*Calculate weighted grades*/
    var wAssignment = assignments * .50;
    var wGroup = groupP * .1;
    var wQuiz = quiz * .1;
    var wExam = exams * .2;
    var wIntex = intex * .1;

    /*calculate final weighted grade*/
    var finalG = wAssignment + wGroup + wQuiz + wExam + wIntex;
    finalG = Math.floor(finalG);

    document.getElementById("result").value = finalG;
}