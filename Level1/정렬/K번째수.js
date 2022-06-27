// 테스트 2 〉	실패 (11.56ms, 30.6MB) => sort 사용 방법이 잘못됐음 
/* function solution(array, commands) {
    // commands[i][0]번째부터 commands[i][1]번째까지 자르고 
    // 오름차순 정렬을 한 뒤에 
    // commands[i][2]번째 수 구하기
    
    let sliceNums = [];
    let result = [];
    
    for(let i = 0; i < commands.length; i++) {
        sliceNums = array.slice(commands[i][0]-1,commands[i][1]);
        sliceNums.sort();
        // console.log(sliceNums)
        result.push(sliceNums[commands[i][2]-1]) // k번째 -> 인덱스 사용하기 위해서는 -1
    }
    
    return result;
} */

function solution(array, commands) {
    // commands[0]번째부터 commands[1]번째까지 자르고 
    // 오름차순 정렬을 한 뒤에 
    // commands[2]번째 수 구하기
    
    let sliceNums = [];
    let result = [];
    
    for(let i = 0; i < commands.length; i++) {
        sliceNums = array.slice(commands[i][0]-1,commands[i][1]);
        sliceNums.sort((a, b) => a - b);
        console.log(sliceNums)
        result.push(sliceNums[commands[i][2]-1])
        
    }
    
    return result;
}
