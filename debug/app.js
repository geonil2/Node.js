function sayHello() {
    console.log('hello!');
}

function caculate (x, y) {
    console.log('caculating..');
    const result = x + y;
    console.log('result', result)
    sayHello();
    return result;
}

const stop = 4;
console.log('...... loopings');
for ( let i = 0; i < 10; i ++) {
    console.log('count', i);
    if (o === stop) {
        break;
    }
}

// break point 생성 후 실행 및 디버그 
// console.log는 실시간으로 확을 할 수 없으므로 디버거로 확인가능