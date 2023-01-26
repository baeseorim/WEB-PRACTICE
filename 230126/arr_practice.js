// 1. 1부터 100까지 들어간 arr를 선언하라.
const arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(i)
}

// 2. arr에서 짝수만 걸러서 출력하라.
console.log(arr.filter(arr => arr % 2 === 0))

// 3. arr에서 26의 인덱스 값을 구하라.
console.log(arr.findIndex(arr => arr === 26))

// 4. arr의 마지막에 200을 추가하라.
let pushTwohundred = arr.push(200)