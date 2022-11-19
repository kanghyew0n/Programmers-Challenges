function solution(s) {
    let arr = s.split("")
    let newArr = []
       
    for(let i = 0; i < arr.length; i++) {
        if(newArr[newArr.length - 1] === arr[i]) {
            newArr.pop()
        } else {
            newArr.push(arr[i])
        }
    }
   
    return newArr.length === 0? 1 : 0
}
