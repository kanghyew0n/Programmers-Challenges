// 아직 못푼 문제 
// 포문 지옥 그만!!!!!!!

function solution(id_list, report, k) {
    
    let reporter = [];
    let reportee = [];
    let reportCount = []; // 신고당한 횟수 담은 배열 
    let reporterMail = []; // 신고해서 메일 받은 횟수를 담은 배열 
    let reporterMailSum = [];
    
    const set = new Set(report); // 중복제거 => {'ryan con'}
    const setRepost = [...set]
    
    // reporter / reportee 분리하기 
    for(let i = 0; i < setRepost.length; i++) {
        let reportSplit = setRepost[i].split(' ')
        reporter.push(reportSplit[0]); // ["muzi","apeach","frodo","muzi","apeach"]
        reportee.push(reportSplit[1]); // ["frodo","frodo","neo","neo","muzi"]
    }
    
    // reportee 신고 받은 횟수 세기 
   for(let i = 0; i < reportee.length; i++) {
       let count = 0;
       for(let j = 0; j < reportee.length; j++) {
           if(reportee[i] === reportee[j]){
               count++;
           }
       }
       reportCount[i] = count
       // ["muzi","apeach","frodo","muzi","apeach"]
        // ["frodo","frodo","neo","neo","muzi"]
        // [2, 2, 2, 2, 1]
   }
    
    // k이상이면 메일 1회 
    for(let i = 0; i < reporter.length; i ++) {
        let count = 0;
        if(reportCount[i] >= k) {
            count++;
            reporterMail[i] = count;
        }
        else reporterMail[i] = count
        // ["muzi","apeach","frodo","muzi","apeach"]
        // ["frodo","frodo","neo","neo","muzi"]
        // [2, 2, 2, 2, 1]
        // [1, 1, 1, 1, 0]
    }
    
    // ["muzi","apeach","frodo","muzi","apeach"]
    // [1, 1, 1, 1, 0]
    // 메일 받는 횟수 중복 더해주기 
    for(let i = 0; i < reporter.length; i++) {
        let sum = 0;
        for(let j = i+1; j < reporter.length; j++) {
            if(reporter[i] === reporter[j]) { // 이름이 같으면 메일횟수 더하기 
               sum = reporterMail[i] + reporterMail[j];
                reporterMailSum.push(`${reporter[i]} ${sum}`)
            }
        }
        //reporterMailSum.push(`${reporter[i]} ${sum}`)
        // [muzi 2, apeach 1, frodo 1, muzi 2, apeach 1]
    }
    
    const set2 = new Set(reporter);
    const setReporter = [...set2]
    
    
    // [muzi 2, apeach 1, frodo 1, muzi 2, apeach 1] -> set 중복제거 
    // [muzi 2, apeach 1, frodo 1]
    
    
    // [muzi 2, apeach 1, frodo 1]
    // ["muzi", "frodo", "apeach", "neo"] -> 매치!
    
    return reporterMailSum;
}
