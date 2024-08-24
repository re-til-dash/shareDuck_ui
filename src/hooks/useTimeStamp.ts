
//24시간 이전과 현재 시간의 차이  86,400,000
//48시간 이전과 현재 시간의 차이 172,800,000
const DAY = 86400000;
const HOUR = 3600000;
const MIN = Math.round(HOUR / 60);
const SEC =  Math.round(MIN / 60);
const useTimeStamp = (timestamp: number) => {
    //db에서 받은 시간
    const serverDate = new Date(timestamp);
    
    const nowDate = Date.now(); //return timestamp
    const diff = nowDate - timestamp;
    let relativeDate = `${diff}전`;

    if(0 < diff && diff< MIN){ // 몇 초 전
        relativeDate = `${Math.round(diff / SEC)}초전`;
    }else if(diff < HOUR){ // 몇 분 전
        relativeDate = `${Math.round(diff / MIN)}분전`;
    }else if(HOUR <= diff && diff < DAY){ // 몇 시간 전
        relativeDate = `${Math.round(diff / HOUR)}시간전`;
    }else{ // 며칠 전

        //todo 하루전 또는 어제 만들기
        relativeDate = `${Math.round(diff / DAY)}일전`;
    }

    const absoluteDate =  serverDate.toLocaleString();
    return {
        relativeDate, absoluteDate
    }
}

export default useTimeStamp
