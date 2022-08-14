function solution(new_id) {
    const symbol = ("~!@#$%^&*()=+[{]}:?,<>/").split('');
    const symbolIdx = []

    // step 1 & 2
    new_id = new_id.toLowerCase().split('');
    for(let i = 0; i < new_id.length; i++) {
        for(let j = 0; j < symbol.length; j++) {
            if(new_id[i] === symbol[j]) symbolIdx.push(i)
        }
    }
    const withoutSymbol = new_id.filter((el, idx) => !symbolIdx.includes(idx))

    // step 3
    const withoutdot = withoutSymbol.filter((el, idx) => withoutSymbol[idx] + withoutSymbol[idx+1] !== '..')

    // step 4
    withoutdot[0] === '.' ? withoutdot.shift() : ''
    withoutdot[withoutdot.length-1] === '.' ? withoutdot.pop() : ''

    // step 6
    while(withoutdot.length >= 16){
        withoutdot.pop()
    }  

    // step 4
    withoutdot[0] === '.' ? withoutdot.shift() : ''
    withoutdot[withoutdot.length-1] === '.' ? withoutdot.pop() : ''

    // step 5 & 7
    while(withoutdot.length < 3) {
        if(withoutdot.length === 0) withoutdot.push('a')
        withoutdot.push(withoutdot[withoutdot.length -1])
    }

    const result = withoutdot.join("");




   return result
}
