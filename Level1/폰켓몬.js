function solution(nums) {
    let setArr = new Set(nums);
    let setNums = [...setArr];

    if(nums.length / 2 === setNums.length || nums.length / 2 < setNums.length) {
        return nums.length / 2;
    } else if(nums.length / 2 > setNums.length) {
        return setNums.length;
    }
}
