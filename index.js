// const names = ['Alex', 'Bob', 'Johny', 'Atta']

// const obj = Object.assign({}, names)

// console.log(obj)
// { '0': 'Alex', '1': 'Bob', '2': 'Johny', '3': 'Atta' }


// const names = ['Alex', 'Bob', 'Johny', 'Atta']

// const obj = { ...names }

// console.log(obj)
// { '0': 'Alex', '1': 'Bob', '2': 'Johny', '3': 'Atta' }



// const names = ['Alex', 'Bob', 'Johny', 'Atta']

// const obj = {}

// names.forEach((elem, i) => {
//   obj[i] = elem
// })

// console.log(obj)
// { 0: "Alex", 1: "Bob", 2: "Johny", 3: "Atta" }


// names.forEach((elem, i) => {
//     obj[`key${i}`] = elem
//   })
  
//   console.log(obj)
  // { key0: 'Alex', key1: 'Bob', key2: 'Johny', key3: 'Atta' }


//   Array.prototype.toObject = function () {
//     const obj = {}
  
//     this.forEach((elem, i) => {
//       obj[i] = elem
//     })
  
//     return obj
//   }
  
//   const newObj = ['Alex', 'Bob', 'Johny', 'Atta'].toObject()
  
//   console.log(newObj)
  // { '0': 'Alex', '1': 'Bob', '2': 'Johny', '3': 'Atta' }

//   const props = [
//     ['name', 'John Doe'],
//     ['age', 29]
//   ]
  
//   const obj = Object.fromEntries(props)
  
//   console.log(obj)
  // { name: 'John Doe', age: 29 }


//   const map = new Map([
//     ['name', 'Alex Hales'],
//     ['age', 27],
//     ['country', 'United States']
//   ])
  
//   console.log(map)
  // Map(3) {
  //   'name' => 'Alex Hales',
  //   'age' => 27,
  //   'country' => 'United States'
  // }
  
//   console.log(map.delete('name')) // true
//   console.log(map.delete('name')) // false -> already removed
//   console.log(map.delete('job')) // false -> Not found

// const map = new Map([
//     ['name', 'Alex Hales'],
//     ['age', 27],
//     ['country', 'United States']
//   ])
  
//   map.clear()
  
//   console.log(map.size) // 0
//   console.log(map) // Map(0) {}

// const map = new Map()

// console.log(map.size) // 0

// map.set('name', 'Atta')
// map.set('age', 34)

// console.log(map.size) // 2

// const map = new Map([
//     ['name', 'Atta'],
//     ['age', 34]
//   ])
  
//   console.log(map.size) // 2
  
//   map.size = 6
  
//   console.log(map.size) // 2 --> Remains the same

// const numbers = [1, 2, 3, 4]

// Truncate to 3-element
// numbers.length = 3

// console.log(numbers) 
// [1, 2, 3]

// Increase size to 5
// numbers.length = 5

// console.log(numbers) 
// [ 1, 2, 3, <2 empty items> ]

// const map = new Map([
//     ['name', 'Alex'],
//     ['scores', [75, 87]],
//     ['bio', { age: 27, country: 'Pakistan' }]
//   ])
  
//   console.log(map)
//   // Map(3) {
//   //     'name' => 'Alex',
//   //     'scores' => [ 75, 87 ],
//   //     'bio' => { age: 27, country: 'Pakistan' }
//   // }
  
//   // Update name (STRING)
//   map.set('name', 'Alex Hales')
//   console.log(map.get('name')) // Alex Hales
  
//   // Update scores (ARRAY)
//   map.set('scores', [...map.get('scores'), 99])
//   console.log(map.get('scores')) // [ 75, 87, 99 ]
  
//   // Update bio (OBJECT)
//   map.set('bio', { ...map.get('bio'), job: 'Engineer' })
  
//   console.log(map.get('bio'))
//   // { age: 27, country: 'Pakistan', job: 'Engineer' }


// const map = new Map([
//     ['name', 'Alex'],
//     ['scores', [75, 87]],
//     ['bio', { age: 27, country: 'Pakistan' }]
//   ])
  
//   map.set('email', 'alex@example.com')
  
//   console.log(map)
  // Map(4) {
  //     'name' => 'Alex',
  //     'scores' => [ 75, 87 ],
  //     'bio' => { age: 27, country: 'Pakistan' },
  //     'email' => 'alex@example.com'
  // }

//   const map = new Map()

// map.set('name', 'John Doe')
// map.set('age', 27)
// map.set('country', 'Pakistan')

// console.log(map)

// Map(3) {
//     'name' => 'John Doe',
//     'age' => 27,
//     'country' => 'Pakistan'
// }

// const map = new Map()

// map.set('name', 'John Doe').set('age', 27).set('country', 'Pakistan')

// console.log(map)

// Map(3) {
//     'name' => 'John Doe',
//     'age' => 27,
//     'country' => 'Pakistan'
// }


// const map = new Map()

// map.set('name', 'John')
// map.set('name', 'John Doe')

// console.log(map)

// Map(1) {
//     'name' => 'John Doe'
// }

// const menu = {
//     sandwich: '🥪',
//     cookie: '🍪',
//     popcorn: '🍿'
//   }
  
//   const pizza = () => '🍕'
  
//   const foods = new Map()
  
//   foods.set(menu, 5.9)
//   foods.set(pizza, 'What is Pizza?')
  
//   console.log(foods.get(menu)) // 5.9
//   console.log(foods.get(pizza)) // What is Pizza?