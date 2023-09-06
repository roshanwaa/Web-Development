// Higher order functions : higher order functionsare functions that can take other function a output || Higher order functions are functions that take one or more functions as arguments, or return a function as their result.

function add(num1, num2) {
  return num1 + num2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

const result = calculator(3, 4, divide);
console.log(result);

//  || OR

class HouseKeeper {
  constructor(YOEx, name, cleaningRepertoire) {
    this.YOEx = YOEx;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
  }
}

var HouseKeeper1 = new HouseKeeper(5, 'Ayush', ['lobby', 'bedroom']);
var HouseKeeper2 = new HouseKeeper(4, 'Aqib', ['Bathroom', 'Hall']);
var HouseKeeper3 = new HouseKeeper(5, 'Smoke', ['Guestroom']);
console.log(HouseKeeper1, HouseKeeper2, HouseKeeper3);

// ||
function HouseKeeperFun(YOEx, name, cleaningRepertoire) {
  this.YOEx = YOEx;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}
var HouseKeeper4 = new HouseKeeperFun(5, 'Ayush', ['Bathroom', 'Toilet']);
var HouseKeeper5 = new HouseKeeperFun(4, 'Aqib', ['Bobby', ' Hall']);
var HouseKeeper6 = new HouseKeeperFun(5, 'Smoke', ['Guestroom']);
console.log(HouseKeeper4, HouseKeeper5, HouseKeeper6);

// ||

function HouseKeeperObjFun(YOEx, name, cleaningRepertoire) {
  var self = {
    YOEx,
    name,
    cleaningRepertoire,
  };
  return self;
}

var HouseKeeper_1 = new HouseKeeperObjFun(5, 'Ayush', ['lobby', 'bedroom']);
var HouseKeeper_2 = new HouseKeeperObjFun(4, 'Aqib', ['Bathroom', 'Hall']);
var HouseKeeper_3 = new HouseKeeperObjFun(5, 'Smoke', ['Guestroom']);
console.log(HouseKeeper_1, HouseKeeper_2, HouseKeeper_3);

var bellBoy1 = {
  name: 'Jonny',
  age: 34,
  hasWorkPermission: true,
  language: ['English', 'Hindi'],
  MoveSuitcases: function () {
    // console.log('May i take your Suitcases?');
    // pickup();
    // moveBy();
    return 'May i take your Suitcases?';
  },
};

const callBellBoy = bellBoy1.MoveSuitcases();
console.log(callBellBoy);

// Understanding Callbacks and How to Respond to Events

function anotherEventListener(typeOfEvent, callback) {
  // Detect Event Code...
  var eventHappened = {
    eventType: 'keyPress',
    key: 'p',
    duration: 1000,
  };
  if (eventHappened.eventType === typeOfEvent) {
    callback(eventHappened);
  }
}

let eventResult = anotherEventListener('keyPress', function (event) {
  console.log(event);
});
