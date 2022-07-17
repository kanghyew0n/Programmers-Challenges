
// Set을 사용하면 객체 안에 유일한 값만 존재함 -> 중복 제거 
// new Set()을 사용하며 결과가 객체로 나오기 때문에
// 전개연산자로 풀어서 배열에 담아준당 
// 오호 

function solution(numbers) {
    let arr = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
                arr.push(numbers[i]+numbers[j])
        }
    }
    
    const result = new Set(arr.sort((a,b) => a-b))
    
    return [...result]
}


// 처음 풀었던 풀이 

function solution(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(!result.includes(numbers[i]+numbers[j])) {
                result.push(numbers[i]+numbers[j])
            }
        }
    }
    
    return result.sort((a,b) => a-b)
}
