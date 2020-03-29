// Give the  SCORE and the TOTALSCORE


let gradeCalc = function (score, totalScore) {
    let percent = score / totalScore * 100;
    let letterGrade = ' ';
    if (percent >= 90) {
        letterGrade = 'A';
    } else if (percent >= 80) {
        letterGrade = 'B';
    } else if (percent >= 70) {
        letterGrade = 'D';
    } else if (percent >= 60) {
        letterGrade = 'C';
    } else {
        letterGrade = 'F'
    }

    if (letterGrade === 'F') {
        return `You failed (%${percent})`
    } else
        return `You got ${letterGrade} (%${percent})`;
}

let result = gradeCalc(18, 20);
console.log(result);

// for ex ouput here is: You got A (90%)
