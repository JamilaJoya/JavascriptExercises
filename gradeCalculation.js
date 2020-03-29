// Give the  SCORE and the TOTALSCORE

let gradeCalc = function (score, totalScore) {
    let percent = score / totalScore * 100;
    if (percent >= 90) {
        return `You got A (${percent}%)`;
    } else if (percent >= 80) {
        return `You got B (${percent}%)`;
    } else if (percent >= 70) {
        return `You got C (${percent}%)`;
    } else if (percent >= 60) {
        return `You got D (${percent}%)`;
    } else {
        return `You failed (${percent}%)`;
    }
}

let result = gradeCalc(18, 20);
console.log(result);

// for ex ouput here is: You got A (90%)
