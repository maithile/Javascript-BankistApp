// // // challenge 1
// // const dogStore = {
// //   kateDogs: [4, 1, 15, 8, 3],
// //   juliaDogs: [3, 5, 2, 12, 7],
// // };

// // // challenge 1
// // const checkDogs = function (kateDogs, juliaDogs) {
// //   const onlyDogs = juliaDogs.slice(1, -2);
// //   const mixDogs = juliaDogs.concat(onlyDogs);

// //   mixDogs.forEach((dog, i) => {
// //     if (dog > 3) {
// //       console.log(`Dog number ${i + 1} is an adult , and is ${dog} years old`);
// //     } else {
// //       console.log(`Dog number ${i + 1} is an baby , and is ${dog} years old`);
// //     }
// //   });
// // };

// // checkDogs(dogStore.kateDogs, dogStore.juliaDogs);

// // viet ham ne
// // const calcAverageHumanAge = function (dogs) {
// //   const humanAge = dogs.map(function (dog) {
// //     return dog <= 2 ? 2 * dog : 16 + dog * 4;
// //   });
// //   const aldutl = humanAge.filter(age => age >= 18);
// //   const averge = aldutl.reduce((acc, cur) => acc + cur, 0) / aldutl.length;
// //   return averge;
// // };

// // tinh ham map <= 2 thi x2, nugoc laij 16+dog*4
// // loc >=18
// // timh trung binh

// // const calcAverageHumanAge = function (avg) {
// //   const totalAge = avg
// //     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
// //     .filter(aldut => aldut >= 18)
// //     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// //   return totalAge;
// // };

// // console.log('-------result-----');
// // const avg1 = calcAverageHumanAge(dogsArray.kateDog);
// // console.log(avg1);
// // const avg2 = calcAverageHumanAge(dogsArray.julliDog);
// // console.log(avg2);

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, // it
//   { weight: 8, curFood: 200, owners: ['Matilda'] }, // nhieu
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, // nhieu
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// ////////////// challenge 1 ////////////////////
// // ad new property

// const testT = dogs.forEach(function (dog) {
//   dog.recomFood = Math.trunc(dog.weight ** 0.75 * 28);
// });

// ////////////// challenge 2 ////////////////////
// const saraDog = dogs.find(el => el.owners.includes('Sarah'));
// console.log(
//   `Sarah dog eating too ${
//     saraDog.curFood > saraDog.recomFood ? 'much' : 'little'
//   } `
// );

// ////////////// challenge 3 ////////////////////
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recomFood)
//   .flatMap(dog => dog.owners);

// const ownersEatToolittle = dogs
//   .filter(dog => dog.curFood < dog.recomFood)
//   .flatMap(dog => dog.owners);

// ////////////// challenge 4 ////////////////////
// console.log(ownersEatToolittle.join(' and ') + ' eating to little');
// console.log(ownersEatTooMuch.join(' and ') + ' eating to much');

// ////////////// challenge 5 ////////////////////
// // console.log(dogs.some(dog => dog.curFood === dog.recomFood));
// ////////////// challenge 6 ////////////////////

// const dogOkay = dog =>
//   dog.curFood > dog.recomFood * 0.9 && dog.curFood < dog.recomFood * 1.1;

// console.log(dogs.some(dogOkay));
// ////////////// challenge 7 ////////////////////
// console.log(dogs.filter(dogOkay));

// ////////////// challenge 8 ////////////////////
// // tao ham coppy
// // sap xep no theo thu tu tang dan

// const sortDog = dogs.slice().sort((a, b) => a.recomFood - b.recomFood);

// console.log(sortDog);
