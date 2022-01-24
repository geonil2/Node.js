const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid); //process id
console.log(process.ppid); // process parents id
console.log(process.platform); 
console.log(process.env); // 환경변수
console.log(process.uptime()); // 얼마나 실행되고 있었는지
console.log(process.cwd()); // 경로
console.log(process.cpuUsage()); // cpu 사용량

setTimeout(() => {
    console.log('setTimeout');
}, 0);

process.nextTick(() => { //tesk queue에 다른게 들어 있어도 무시하고 먼저 시작해준다!!
    console.log('nextTick');
});

for(let i = 0; i < 100; i++) {
    console.log('for loop');
}