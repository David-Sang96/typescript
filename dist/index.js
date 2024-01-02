let num = 10;
let person = "david";
person = "sang";
const arr = ["david", 123, true];
const obj = [{ name: "david", age: 34 }];
const news = ["david", 123, true, undefined];
const hel = {
    name: "david",
    age: 25,
    passed: true,
};
const some = (a, b) => {
    console.log(a + b);
};
const add = (a, b, c) => {
    return a + b;
};
add(1, 2);
const log = () => {
    console.log("hello");
};
log();
let tuple;
tuple = [1, "d", true, "d"];
const userOne = {
    name: "userOne",
    email: "user1@gmail.com",
    isLogin: () => {
        return true;
    },
    getAge(x = 10) {
        const plus = x + 10;
        return plus;
    },
    isDriving() {
        return "driving";
    },
};
const userTwo = {
    name: "userTwo",
    email: "user2@gmail.com",
    isLogin() {
        return false;
    },
    getAge(age) {
        return 20;
    },
    isDriving() {
        return "not driving";
    },
};
console.log(userTwo.isDriving(true));
let drive = (direction) => {
    if (direction === 0) {
        console.log("driving up");
    }
    else if (direction === 1) {
        console.log("driving down");
    }
    else if (direction === 2) {
        console.log("driving left");
    }
    else if (direction === 3) {
        console.log("driving right");
    }
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Upside"] = 4] = "Upside";
})(Direction || (Direction = {}));
let drive1 = (direction) => {
    if (direction === Direction.Up) {
        console.log("driving up");
    }
    else if (direction === Direction.Down) {
        console.log("driving down");
    }
    else if (direction === Direction.Left) {
        console.log("driving left");
    }
    else if (direction === Direction.Right) {
        console.log("driving right");
    }
};
drive1(1);
console.log(Direction.Upside);
const userInfo = (info) => {
    console.log(`${info.name} is ${info.age} years old and working as ${info.job}`);
};
userInfo({
    name: "user1",
    age: 27,
    job: "developer",
});
const userInfo2 = (info) => {
    console.log(`${info.name} is ${info.age} years old and working as ${info.job}`);
};
userInfo2({
    name: "user2",
    age: 25,
    job: "developer",
});
class Details {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    getDetails() {
        console.log(`${this.name} is ${this.age} years old and working as ${this.job} `);
    }
}
const davidDetails = new Details("david", 27, "developer");
davidDetails.getDetails();
const kyawDetails = new Details("kyaw", 37, "developer");
kyawDetails.getDetails();
let detailArray = [];
detailArray.push(davidDetails);
detailArray.push(kyawDetails);
console.log(detailArray);
export {};
