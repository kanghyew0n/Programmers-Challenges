function solution(food) {
    let arr = []
    for(let i = 1; i < food.length; i ++) {
        if(food[i] % 2 !== 0) {
            for(let j = 0; j < Math.floor(food[i] / 2); j++) {
                arr.push(i)
            }
        }
        else {
             for(let j = 0; j < Math.floor(food[i] / 2); j++) {
                arr.push(i)
             }
        }
    }
    let newArr = arr;
 
    return newArr.join("") + "0"+ arr.reverse().join("");
    
    
 
    
    
    
}
