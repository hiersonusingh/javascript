// const arr = ['zero', 'one', 'two'];

// const obj1 = Object.assign({}, arr);
// console.log(obj1); // 👉️ {0: 'zero', 1: 'one', 2: 'two'}


// const arr = ['zero', 'one', 'two'];

// const obj = {};

// arr.forEach((element, index) => {
//   obj[`key${index}`] = element;
// });

// 👇️️ {'key0': 'zero', 'key1': 'one', 'key2': 'two'}
// console.log(obj);

// const arr = ['zero', 'one', 'two'];

// const obj = {};

// arr.forEach((element, index) => {
//   obj[index] = element;
// });

// 👇️️ { '0': 'zero', '1': 'one', '2': 'two' }
// console.log(obj);


// const arr = ['zero', 'one', 'two'];

// const obj = {...arr};
// console.log(obj); // 👉️ {0: 'zero', 1: 'one', 2: 'two'}

// const arr = [
//     ['name', 'bobby hadz'],
//     ['age', 30],
//   ];
  
//   const obj = Object.fromEntries(arr);
  
//   console.log(obj); // 👉️ { name: 'bobby hadz', age: 30 }
  
// const arr = ['zero', 'one', 'two'];

// const obj = arr.reduce((accumulator, value, index) => {
//   return {...accumulator, ['key' + index]: value};
// }, {});

// 👇️️ {'key0': 'zero', 'key1': 'one', 'key2': 'two'}
// console.log(obj);


// const arr = [
//     {name: 'country', value: 'Austria'},
//     {name: 'age', value: 30},
//     {name: 'city', value: 'Vienna'},
//   ];
  
//   const obj = Object.fromEntries(
//     arr.map(obj => [obj.name, obj.value])
//   );
  
//   👇️ { country: 'Austria', age: 30, city: 'Vienna' }
//   console.log(obj);

// const arr = [
//     {name: 'country', value: 'Austria'},
//     {name: 'age', value: 30},
//     {name: 'city', value: 'Vienna'},
//   ];
  
  // 👇️ [ [ 'country', 'Austria' ], [ 'age', 30 ], [ 'city', 'Vienna' ] ]
//   console.log(arr.map(obj => [obj.name, obj.value]));



// const obj = {};

// const arr = ['bobby', 'hadz', 'com'];

// for (let index = 0; index < arr.length; index++) {
//   obj[index] = arr[index];
// }

// 👇️ { '0': 'bobby', '1': 'hadz', '2': 'com' }
// console.log(obj);

  
  
