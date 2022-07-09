function solution(s) {
    // 공백을 기준으로 짝/홀 인덱스 판단 
    // 공백 기준 짝수(대문자) 홀수(소문자)

    let result = ''
    const word = s.split(' ', -1) 
    // ['try', 'hello', 'world']
    // split(' ') 일 경우 "try hello world " (뒤에 공백이 있는 경우) 이것때문에 테스트 통과가 안됐었다!
    // split(' ', -1) 으로 해주면 공백도 배열에 포함시켜준당 

    for(let i = 0; i < word.length; i++) {
        for(let j = 0; j < word[i].length; j++) {
            j%2 === 0 ? result += word[i][j].toUpperCase() : result += word[i][j].toLowerCase()
        }
        if(i !== word.length -1 ) {
            result += ' '
        }
    }

    return result
}
