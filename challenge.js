// // challenge
// const dogStore = {
//   kateDogs: [4, 1, 15, 8, 3],
//   juliaDogs: [3, 5, 2, 12, 7],
// };

// // challenge 1
// const checkDogs = function (kateDogs, juliaDogs) {
//   const onlyDogs = juliaDogs.slice(1, -2);
//   const mixDogs = juliaDogs.concat(onlyDogs);

//   mixDogs.forEach((dog, i) => {
//     if (dog > 3) {
//       console.log(`Dog number ${i + 1} is an adult , and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is an baby , and is ${dog} years old`);
//     }
//   });
// };

// checkDogs(dogStore.kateDogs, dogStore.juliaDogs);

const dogsArray = {
  kateDog: [5, 2, 4, 1, 15, 8, 3],
  julliDog: [16, 6, 10, 5, 6, 1, 4],
};

// viet ham ne

const calcAverageHumanAge = function (dogs) {
  const humanAge = dogs.map(function (dog) {
    return dog <= 2 ? 2 * dog : 16 + dog * 4;
  });
  const aldutl = humanAge.filter(age => age >= 18);
  console.log(humanAge);
  console.log(aldutl);
  const averge = aldutl.reduce((acc, cur) => acc + cur, 0) / aldutl.length;
  return averge;
};
const avg1 = calcAverageHumanAge(dogsArray.kateDog);
console.log(avg1);
const avg2 = calcAverageHumanAge(dogsArray.julliDog);
console.log(avg2);
