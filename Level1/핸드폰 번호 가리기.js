// 지옥의 if 문,, 다시 풀어보겠습미다,,

// # 1번 풀이 
function solution(phone_number) {
    var answer = '';
    // 마지막 4개를 찍어야함 
    let len = phone_number.length;
    for(let i = 0; i < phone_number.length; i++) {
        if(i === (len - 1) || i === (len - 2) || i === (len - 3) || i === (len - 4) ){
            answer += phone_number[i];
        } else answer += '*'
    }
    return answer;
}

// # 2번 풀이 
// function solution(phone_number) {
//     var answer = '';
//     let lastIdx = phone_number.length - 1;
//     for(let i = 0; i < phone_number.length; i++) {
//         if(i > lastIdx-4) {
//             answer += phone_number[i];
//         } else answer += '*'
//     }
//     return answer;
// }
