function solution(arr, divisor) {
    return arr.filter((el) => el % divisor === 0).length === 0 ? [-1] : arr.filter((el) => el % divisor === 0).sort((a,b) => a-b);
}
