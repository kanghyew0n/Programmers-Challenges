function solution(n) {
    const number = n.toString(3)
    const reverseNum = number.split("").reverse().join("");
    return parseInt(reverseNum, 3)
    
}
