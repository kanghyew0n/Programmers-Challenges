// 0-9까지 배열에 없는 수 더하기 
// 0-9까지 전체 합에서 배열에 포함된 수를 빼주면 된다 ~!

function solution(numbers) {
    let sum = 45;
    
    for(let i = 0; i < numbers.length; i++) {
     sum -= numbers[i]
    }
    
    return sum
}
