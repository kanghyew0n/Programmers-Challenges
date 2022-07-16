// sort를 하면 대문자는 뒤로 간다는 사실 
 function solution(s) {
   return s.split('').sort().reverse().join('') 
}
 
 
 function solution(s) {
    
    let upper = []
    let lower = []
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i].toUpperCase()) {
            upper.push(s[i])
        } else if(s[i] === s[i].toLowerCase()) {
            lower.push(s[i])
        }
    }
    return lower.sort().reverse().join('') + upper.sort().reverse().join('')
}
