

console.log('Hello world');

// print name

console.log(Math.random());

let amount = 6;
let price = 4.88;
console.log(amount * price);

let message = "good night";
console.log(message.length);


let atWork = true;
console.log(atWork);


console.log(35 % 7);


let income = 1000;

console.log(`my income is ${income} may`);


let prices = 10.5;
let day = "Monday";

day === "Monday" ? prices -= 1.5 : prices += 1.5;
console.log(prices);



const isTaskCompleted = false;


if (10 > 0) {
    console.log('Task completed');
} else {
    console.log('Task incompleted');
}


const arrayOfNumbers = [10, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});

console.log(sum); // 10



const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {  
  console.log(number);
});



const myCat = {
    _name: 'Dottie',
    surname:  'Dor',
    get name() {
      return this._name;  
    },
    set name(newName) {
      this._name = newName;  
    }
  };
  

  Object.defineProperty(myCat, '_name', {
    writable: false,
    configurable: false,
    eumerable: false
  });

  // Reference invokes the getter
  console.log(myCat.name);
  
  // Assignment invokes the setter
  myCat._name = 'Tied';
  console.log(myCat.name);

  console.log(myCat);

  myCat.name = 'Yankee';
  console.log(myCat.name);
