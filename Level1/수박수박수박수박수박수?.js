function solution(n) {
   let result = '';
    let num = 1;
    while(num <= n) {
        num%2 === 0 ? result += '박' : result += '수';
        num++;
    }
    
    return result;
}
