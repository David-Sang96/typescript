import { User } from "./interfaces/user";

let num: number = 10;
let person = "david";
person = "sang";
// person = 12;

//union type (more than one type)
const arr: (string | boolean | number)[] = ["david", 123, true];

interface Hello {
  name: string;
  age: number;
}

const obj: Hello[] = [{ name: "david", age: 34 }];
const news = ["david", 123, true, undefined];
const hel = {
  name: "david",
  age: 25,
  passed: true,
};

const some = (a: number, b: number): void => {
  console.log(a + b);
};

const add = (a: number, b: number, c?: number): number => {
  return a + b;
};
add(1, 2);

const log = (): void => {
  console.log("hello");
};
log();

//Tuple
let tuple: [number, string, boolean, string]; //unique array type structure
tuple = [1, "d", true, "d"];

const userOne: User = {
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

const userTwo: User = {
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

// without enums
let drive = (direction: 0 | 1 | 2 | 3): void => {
  if (direction === 0) {
    console.log("driving up");
  } else if (direction === 1) {
    console.log("driving down");
  } else if (direction === 2) {
    console.log("driving left");
  } else if (direction === 3) {
    console.log("driving right");
  }
};
// drive(1);

//enum
enum Direction {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
  Upside,
}

let drive1 = (direction: 0 | 1 | 2 | 3 | 4): void => {
  if (direction === Direction.Up) {
    console.log("driving up");
  } else if (direction === Direction.Down) {
    console.log("driving down");
  } else if (direction === Direction.Left) {
    console.log("driving left");
  } else if (direction === Direction.Right) {
    console.log("driving right");
  }
};

drive1(1);
console.log(Direction.Upside);

//type alias
type strOrNum = string | number;
type infoObj = { name: string; age: strOrNum; job: string };

const userInfo = (info: infoObj) => {
  console.log(
    `${info.name} is ${info.age} years old and working as ${info.job}`
  );
};
userInfo({
  name: "user1",
  age: 27,
  job: "developer",
});

const userInfo2 = (info: infoObj) => {
  console.log(
    `${info.name} is ${info.age} years old and working as ${info.job}`
  );
};
userInfo2({
  name: "user2",
  age: 25,
  job: "developer",
});

class Details {
  public name: string; //public is read only property
  readonly age: number; //read-only in class and outside
  private job: string; //read and assign only in class
  constructor(name: string, age: number, job: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  getDetails() {
    console.log(
      `${this.name} is ${this.age} years old and working as ${this.job} `
    );
  }
}

const davidDetails = new Details("david", 27, "developer");
davidDetails.getDetails();

const kyawDetails = new Details("kyaw", 37, "developer");
kyawDetails.getDetails();

let detailArray: Details[] = [];

detailArray.push(davidDetails);
detailArray.push(kyawDetails);

console.log(detailArray);
