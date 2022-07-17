//bai 1
function run(n) {
    var factorial = 1;

    for (i = n; i > 0; i--) {
        factorial *= i
    }

    return factorial;
}
console.log(run(3))

function run(n) {
    var ketqua = 1;
    for (i = 1; i <= n; i++) {
        ketqua *= i;
    }
    return ketqua;
}
console.log(run(3))

//bài 2

function run(s) {
    var str = '';
    for (var i = s.length - 1; i >= 0; i--) {
        str += s[i];

    }
    return str;
}
console.log(run('quy'));

//Bai 3

function run(name, job) {
    const person = {
        name: "Jony Dang",
        job: "Da bao",
        printIntroduction: function () {
            console.log(`My name is ${this.name}.My job is ${this.job}`);
        }
    };
    const me = Object.create(person);

    me.name = "quy";
    me.job = "student"
    me.printIntroduction();
}

run();

//bai 4
function run() {
    var person = {
        firstName: "Trung",
        lastName: "Vuong",
        age: 50,
        eyeColor: "blue"
    };


    function printFunction() {
        console.log(Object.values(person));
    }

    printFunction();
}
run();