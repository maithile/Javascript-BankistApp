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
const eurtoUsd = 1.1;
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//  Create USername
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

// Display Balance
const cacuBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

// Display Summary
const calDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur);
  labelSumIn.innerHTML = `${incomes}€ `;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, inter) => acc + inter, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Display movment
const displayMoments = function (movements, sort = false) {
  containerMovements.innerHTML = ' ';
  const sortMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;
  sortMovements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//////////////* sort *////////////////
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMoments(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////// Update IU ///////////////////
const updataeUI = function (updateAcc) {
  // Display balance
  cacuBalance(updateAcc);
  // Display movement
  displayMoments(updateAcc.movements);
  // display sumary
  calDisplaySummary(updateAcc);
};

///////////// Login In ///////////////////
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI
    labelWelcome.textContent = `hello ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    updataeUI(currentAccount);
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

///////////// Loan ///////////////////
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amoutRequest = Number(inputLoanAmount.value);
  if (amoutRequest > 0 && currentAccount.movements.some(mov => mov >= 0)) {
    currentAccount.movements.push(amoutRequest);

    // update UI
    updataeUI(currentAccount);
  }

  inputLoanAmount.value = '';
});
///////////// Transfer ///////////////////

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updataeUI(currentAccount);
  }
  inputTransferTo.value = inputTransferAmount.value = '';
});

///////////// Delete Account  ///////////////////
// dung splice cat no di
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
  }
  inputCloseUsername.value = inputClosePin.value = '';
  // hide account
  containerApp.style.opacity = 0;
});

// console.log(movements.slice());
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

//
// Sung dung hang lien tiep
// const eurtoUsd = 1.1;
// const income = movements
//   .filter(mov => mov < 0) // phan tu duong
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurtoUsd;
//   })
//   .reduce((acc, cur) => acc + cur, 0);

// const trees = ['birch', 'maple', 'oak', 'poplar'];

// const resultFind = trees.find(tree => tree.startsWith('m'));
// console.log(resultFind);

// const resultFillter = trees.filter(tree => tree.startsWith('m'));
// console.log(resultFillter);

// const firstWithdrawll = movements.find(mov => mov < 0);
// console.log(firstWithdrawll);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// // flat method
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const arrDeep = [
//   [[1, 2], 3],
//   [4, 5],
// ];
// console.log(arr.flat());
// console.log(arrDeep.flat(2));

// const accMoves = accounts.map(acc => acc.movements);

// console.log(accMoves);

// const allMoves = accMoves.flat();
// console.log(allMoves);
// console.log(allMoves.reduce((acc, cur) => acc + cur, 0));

// const totalMoves = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((mov, cur) => mov + cur, 0);
// console.log(totalMoves);

// // flat map
// const totalMove = accounts
//   .flatMap(acc => acc.movements)
//   .flat()
//   .reduce((mov, cur) => mov + cur, 0);
// console.log(totalMove);

// sort

// tring

// const myLife = ['Simon', 'Duong', 'LA', 'Family', 'goodFriends'];
// console.log(myLife.sort());

// test
// console.log(movements);

// notteeeeeeeeeeeee
// neu return > 0van giu nguyen vi tri
// neu return < 0 doi vi tri

// const sortMoves = movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// const sortMoves = movements.sort((a, b) => a - b);
// console.log(sortMoves);

// more ways to create and filling arrays

// const arr = [1, 2, 3, 4, 5, 6, 7]; // cach 1
// console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // cach 2

// const x = new Array(7);

// x.fill(1, 3, 4);
// console.log(x);

// arr.fill('passed', 0, 4);
// console.log(arr);

// // recreate array
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 4 }, (_, i) => i);

// map chi lay duoc so

// labelBalance.addEventListener('click', function () {
//   const movesUI1 = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   // console.log(movesUI1);

//   // cach khac
//   const movesUT2 = [...document.querySelectorAll('.movements__value')];
// });

/////////////////// practice 1 /////////////////
const bankDepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);

// another way
const bankDepositSum2 = accounts.flatMap(acc => acc.movements);

/////////////////// practice 2  /////////////////
// const bankDeposit1000 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(mov => mov >= 1000);
// console.log(bankDeposit1000.length);

const bankDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(bankDeposit1000);

const { deposit, withdraw } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposit += cur) : (sum.withdraw += cur);
      sum[cur > 0 ? 'deposit' : 'withdraw'] += cur; // ui za tui quen cho nay
      return sum;
    },
    { deposit: 0, withdraw: 0 }
  );
// console.log(deposit, withdraw);

//// I wan to say thank Jonas a lot

//////////////// change title //////////////

// kêt thúc phần aray m học được rất nhiều thứ, chuyển sang phần luyện tập nào

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  // console.log(titleCase);
  return capitalize(titleCase); //loai  tu dau tien
};

// console.log(convertTitleCase('and here is another title WITH an EXAMPLE'));
