function solution(clothes) {
     let answer = 1
    let clothesHashMap = new Map()
    clothes.map((clothe) => {
        const type = clothe[1]
        if(clothesHashMap.get(type)) {
            clothesHashMap.set(type, clothesHashMap.get(type) + 1)
        } else {
            clothesHashMap.set(type, 1)
        }
    })
    
   
    for(let a of clothesHashMap.values()){
        answer *= (a + 1)
    }


    return answer -1
    
// 1차 시도
//     const values = [...clothesHashMap.values()];
//     const keys = [...clothesHashMap.keys()];
    
//     const sum = values.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue
//     }, 0);
    
//     const answer = (sum - values[0]) * clothesHashMap.get(keys[0]) + count
    
//    return answer
}
