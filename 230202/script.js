const downBtn = document.querySelector('.down');
const upBtn = document.querySelector('.up');
const cntElement = document.querySelector('.cnt');

let cnt = 0;

// 00부터 시작함
cntElement.innerText = `${cnt}`.padStart(2, '0');

// 커링을 활용하여 onClick을 구현함
// 함수는 인자(type)를 전달 받음
const onClickBtn = (type) => {
    return () => {
        // 그 인자가 down이면서
        if (type === 'down') {
            // 숫자가 0일 경우 숫자는 줄어들지 않음 
            if (cnt === 0) {
                alert('⚠ 0보다 작을 수 없습니다 ⚠');
                return;
            }
            // 숫자가 0보다 클 경우 숫자는 줄어들고
            cnt -= 1;
            // 줄어든 수를 새로운 변수에 담아서
            const targetCnt = cnt;
            // 화면에 표시함
            cntElement.innerText = `${targetCnt}`.padStart(2, '0');
            // 그 인자가 up일 경우
        } else if (type === 'up') {
            cnt += 1;
            const targetCnt = cnt;
            cntElement.innerText = `${targetCnt}`.padStart(2, '0');
            // 그 외의 경우
        } else alert('⚠ 버튼을 눌러주세요 ⚠');
    };
};

// 클릭을 하면 함수가 실행 됨
downBtn.onclick = onClickBtn('down');
upBtn.onclick = onClickBtn('up');