'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
////////////// Loop methods //////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Caculator Balance
const cacuBalance = function (mov) {
  const sum = movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  labelBalance.innerHTML = `${sum} EUR`;
};
cacuBalance(account1.movements);
// Display movment
const displayMoments = function (movements) {
  containerMovements.textContent = ' ';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMoments(account1.movements);

//////////////* Ham Map *////////////////

//change to USD
// const eurtoUsd = 1.1;
// const movementUSD = movements.map(function (mov) {
//   return mov * eurtoUsd;
// });
// arrow function
// const eurtoUsd = 1.1;
// const movementUSD = movements.map(mov => mov * eurtoUsd);
// console.log(movements);
// console.log(movementUSD);

// // chay bang loop
// const moveLoopUSD = [];
// for (const mov of movements) {
//   const loopMov = mov * eurtoUsd;
//   moveLoopUSD.push(loopMov);
// }
// console.log(moveLoopUSD);

// // push string inside
// const moventString = movements.map(function (mov, i) {
//   return `you have ${mov > 0 ? 'deposit' : 'withdral'}: ${mov}`;

//   if (mov > 0) {
//     return `You have deposit ${mov}`;
//   } else {
//     return `You have withdral ${mov}`;
//   }
// });
// console.log(moventString);

//////////////* Compute Username *////////////////
// const createUsername = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsername(accounts); // ok kha la hay
// console.log(accounts);

//////////////* Fillter *////////////////

// const moventDepisit = movements.filter(function (mov) {
//   return mov > 0;
// });

// const moventWithdrall = movements.filter(function (mov) {
//   return mov < 0;
// });
// const testLoop = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     testLoop.push(mov);
//   }
// }

// console.log(moventWithdrall);
// console.log(moventDepisit);
// console.log(testLoop);

//////////////* Reduce  *////////////////

// const sum = movements.reduce(function (acc, cur, i, arr) {
//   // console.log(`loop ${i} : ${acc}`);
//   return acc + cur;
// }, 0);

// tim max in array
// console.log(movements);
// const max = movements.reduce(function (acc, cur) {
//   if (acc > cur) return acc;
//   else return mov;
// }, movements[0]);
// forloop
// let testSum = 0;
// for (const mov of movements) {
//   testSum = testSum + mov;
// }
// console.log(testSum);
