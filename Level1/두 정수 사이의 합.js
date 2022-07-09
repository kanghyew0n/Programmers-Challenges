function solution(a, b) {
    let result = 0;
    
    if(a > b) { // b보다 a가 큰 경우 
        const empty = a;
        a = b;
        b = empty;
    }
    
    for(let i = a; i <= b; i++) {
        result += i;
    }

    return result
}
