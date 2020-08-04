// function hello() {
//   return "Hello";
// }
// hello();

async function hello() { return "Hello" };
hello();


//async function expression
let hello = async function () { return "Hello" };
hello();

//async arrow function
let hello = async () => { return "Hello" };

// the above all do the same thing

// to consume the promise , we use .then
hello().then((value) => console.log(value))


async function hello() {
  return greeting = await Promise.resolve("Hello");
};

hello().then(alert);

