function solution(citations) {
    citations.sort((a, b) => b - a);
    
    let result = 0;
    
    for(let i = 0; i < citations.length; i ++) {
        if(citations[i] >= i+1) {
             result = i +1;
        }
    }
    
    return result;
    
}
