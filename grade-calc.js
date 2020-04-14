// students score, total possible score
// 15/20 -> You got a C (75%)
// get the score, find the percentage, 
// show the result
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

/* let grade = function () {
    let subjects = [['Math', 99], ['English', 99], ['Suomi', 99], ['Dari', 99], ['kemia', 99]];
    let sum = 0;
    for (let i = 0; i < subjects.length; i++) {
        sum += subjects[i][1];
    }
    avgMark = sum / subjects.length;

    if (avgMark >= 90 && avgMark <= 100) {
        console.log(`You got A (${avgMark}%)!`);
    } else if (avgMark >= 80 && avgMark <= 89) {
        console.log(`You got B (${avgMark}%)!`);
    } else if (avgMark >= 70 && avgMark <= 79) {
        console.log(`You got C (${avgMark}%)!`);
    } else if (avgMark >= 60 && avgMark <= 69) {
        console.log(`You got D (${avgMark}%)!`);
    } else {
        console.log(`You faild (${avgMark}%)!`);
    }
}

grade();  */


const gradeCalc = function (score, totalScore) {
    if (typeof (score) === 'number' && typeof (totalScore) === 'number') {
        const percent = score / totalScore * 100;
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
    } else {
        throw Error('please provide numbers only')

    }
}

try {
    const result = gradeCalc(18, 20);
    console.log(result);
} catch (e) {
    console.log('catch block is running')
}

