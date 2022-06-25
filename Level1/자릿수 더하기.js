function solution(n){
  // 1. number 타입으로 받아오기 때문에 각 자리를 자를 수 있도록 string 타입으로 변환함 
  // 2. answer에 더할 때 string 타입을 number 타입으로 변환해서 더해줌 
    var answer = 0;
    const number = String(n);
    for(let i = 0; i < number.length; i++) {
        answer += Number(number[i]);
    }


    return answer;
}
