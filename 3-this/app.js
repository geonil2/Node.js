function hello() {
    console.log(this);
    console.log(this === global); //true
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('----- class -----');
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.memberFunction();

console.log('--- global scope ---')
console.log(this);
console.log(this === module.exports);

// browser에서는 this란 global을 의미하지만 node에서는 module에 있는 exports를 의미한다.