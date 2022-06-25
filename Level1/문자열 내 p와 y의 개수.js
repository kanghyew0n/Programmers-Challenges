function solution(s){
    // 대소문자 구분하지 않음
    // 하나도 포함되지 않으면 항상 true

    let upperS = s.toUpperCase();
    let countP = 0;
    let countY = 0;

    for(let i = 0; i < upperS.length; i++) {
        if(upperS[i] === "P") {
            countP++;
        }
         if(upperS[i] === "Y") {
            countY++;
        }
    }

    if(countP !== countY) return false;
    else return true;


}
