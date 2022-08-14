// 다시 푼 모의고사 
// filter에 두번째 인자로 인덱스를 받을 수 있다는 것을 잊지말자 ~!

function solution(answers) {
    const answer_1 = [1, 2, 3, 4, 5];
    const answer_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const answer_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let scoreArr = [0, 0, 0];
    const result = []

    scoreArr[0] = answers.filter((el, idx) => el === answer_1[idx % answer_1.length]).length
    scoreArr[1] = answers.filter((el, idx) => el === answer_2[idx % answer_2.length]).length
    scoreArr[2] = answers.filter((el, idx) => el === answer_3[idx % answer_3.length]).length
    
    for(let i = 0; i < scoreArr.length; i++) {
        if(scoreArr[i] === Math.max(...scoreArr)) {
            result.push(i+1);
        }
    }
     return result
}



// 첫번째로 풀어보 모의고사 
// 모의고사 문제가 기존 수포자들의 답보다 길경우를 생각해서 
// 답변을 받는 함수(answerAll) 만들었당 

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
