// 자연수 12345 를 뒤집애서 배열 [5, 4, 3, 2, 1]로 만들기 
// 1. 자연수 배열에 담아주기 
// 2. pop 사용할 것이라서 길이 고정값으로 주기 : len
// 3. 배열 길이만큼 for문 돌려서 pop 해주고 
// 4. result 배열에 concat으로 담아주기 
// 5. 출력해보면 ["1", "2", "3", "4", "5"] 로 출력됨 -> number 타입으로 바꿔주기 

function solution(n) {
    const arr = String(n).split('');
    const len = arr.length;
    
    let result = [];
    let popNum = 0;
    
    for(let i = 0; i < len; i++) {
        lastNum = arr.pop();
        result.push(Number(popNum))
    }
    
    return result;
}
