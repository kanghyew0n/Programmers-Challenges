function solution(seoul) {
    let num = 0;
    for(let i =0; i < seoul.length; i++) {
        if(seoul.includes("Kim")){
            num = seoul.indexOf("Kim");
            return "김서방은 "+num+"에 있다"
        }
    }
}
