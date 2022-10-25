function solution(arr1, arr2) {
    let newArr = []
    let total = []
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1[i].length; j++) {
            newArr.push(arr1[i][j] + arr2[i][j])
        }
        total.push(newArr)
        newArr = []
    }
    
    return total
}
