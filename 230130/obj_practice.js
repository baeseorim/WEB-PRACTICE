// 1. 다양한 데이터 타입으로 이루어진 객체를 선언하라.
obj = {
    0: 'hello',
    1: 1,
    2: true,
    3: null,
    4: undefined,
    5: [0, 1, 2],
    6: { '1': 'a', '2': 'b', '3': 'c' },
    7: function forObj(greeting) {
        let result = greeting;
        return result;
    },
    8: 10,
    9: 20
};

// 2. 객체 값의 데이터 타입이 number인 [키, 값]만 뽑아서 새로운 객체를 return하라.
const getOnlyNumberObj = (obj) =>
    Object.entries(obj).reduce((acc, [key, value]) => {
        if (typeof value === 'number') acc[key] = value;
        return acc;
    }, {})

// console.log(getOnlyNumberObj(obj))