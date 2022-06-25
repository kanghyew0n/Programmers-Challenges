function solution(arr) {
   // 길이가 1이면 return -1 
    if(arr.length === 1) return [-1];

   // arr중 최소값을 찾아서 
   // idx를 사용해서 splice 해주기 
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    arr.splice(idx, 1)

    return arr;

}
