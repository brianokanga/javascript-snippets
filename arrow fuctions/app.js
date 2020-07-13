// const sayHello = function () {
//   console.log ('Hello Sir');
// };

// method 1
// const sayHello = () => {
//   console.log ('Hello Sir');
// };

//one line function does not need braces
// const sayHello = () => console.log ('Hello man');

// sayHello ();

//one line return
// const sayHello = () => 'Hello maze';

// const sayHello = () => ({msg: 'Hello from object'});

// console.log (sayHello ());

//sigle param does not need params
// const sayHello = name => console.log (`hello ${name}`);

// sayHello ('brayo');

//multiple params require parenthsis
// const sayHello = (firstName, lastName) =>
//   console.log (`hello ${firstName} ${lastName}`);

// sayHello ('brayo');

// const users = ['Eliza', 'Monica', 'Nicolette'];

// const nameLength = users.map (function (name) {
//   return name.length;
// });

// const users = ['Eliza', 'Monica', 'Nicolette'];

// const nameLength = users.map (name => {
//   return name.length;
// });

const users = ['Eliza', 'Monica', 'Nicolette'];

const nameLength = users.map (name => name.length);

console.log (nameLength);
