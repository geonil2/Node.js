console.log('logging...');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보 남길 때
console.warn('warn'); // 경보
console.error('error'); // 사용자 에러, 시스템 에러

// assert
console.assert( 2 === 3, 'nots same!');
console.assert( 2 === 2, 'same!');

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC'} };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time - 성능 확인할 때
console.time('for loop');
for(let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
a();
console.countReset('a function'); // count 초기화

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace(); // 어디서 함수를 호출했는지 알려줌. 디버깅할 때 좋아
}
f1();