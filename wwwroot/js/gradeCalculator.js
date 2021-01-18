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

/*Calculate final weighted letter grade*/
    var letterG = "";
    if (finalG >= 94) {
        letterG = "A"
    } else if (finalG >= 90 && finalG < 94) {
        letterG = "A-"
    } else if (finalG >= 87 && finalG < 90) {
        letterG = "B+"
    } else if (finalG >= 84 && finalG < 87) {
        letterG = "B"
    } else if (finalG >= 80 && finalG < 84) {
        letterG = "B-"
    } else if (finalG >= 77 && finalG < 80) {
        letterG = "C+"
    } else if (finalG >= 74 && finalG < 77) {
        letterG = "C"
    } else if (finalG >= 70 && finalG < 74) {
        letterG = "C-"
    } else if (finalG >= 67 && finalG < 70) {
        letterG = "D+"
    } else if (finalG >= 64 && finalG < 67) {
        letterG = "D"
    } else if (finalG >= 60 && finalG < 64) {
        letterG = "D-"
    } else if (finalG < 60) {
        letterG = "E"
    }
    
    document.getElementById("result1").value = finalG;
    document.getElementById("result2").value = letterG;
}