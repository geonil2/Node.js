const os = require('os');

console.log(os.EOL === '\n'); //줄바꿈 문자열
console.log(os.EOL === '\r\n');

console.log(os.hostname());
console.log(os.loadavg());
console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());
// 내 서버가 돌아갈 때 어떤 운영체제를 사용하고 있는지

