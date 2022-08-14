function solution(answers) {
    const result = []
    const answer_1 = [1, 2, 3, 4, 5];
    const answer_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const answer_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const number = answers.length;

    let scoreArr = [0, 0, 0];
    const arr1 = answerAll(number, answer_1)
    const arr2 = answerAll(number, answer_2)
    const arr3 = answerAll(number, answer_3)

    for(let i = 0; i < answers.length; i++) {
       if(answers[i] === arr1[i]) {
           scoreArr[0]++
       }
        if(answers[i] === arr2[i]) {
           scoreArr[1]++
       }
        if(answers[i] === arr3[i]) {
           scoreArr[2]++
       }
    }

    for(let i = 0; i < scoreArr.length; i++) {
        if(scoreArr[i] === Math.max(...scoreArr)) {
            result.push(i+1);

        }
    }

     return result

}

    const answerAll = (number, arr) => {
        let answerArr = []
        for(let i = 0; i < number; i++) {
            if(number >= arr.length && i >= arr.length) {
                answerArr.push(arr[i%arr.length])
            } else {
                answerArr.push(arr[i])
            }
        }

        return answerArr
    }
