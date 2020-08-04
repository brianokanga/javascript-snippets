// async function myFunc () {
//   const promise = new Promise ((resolve, reject) => {
//     setTimeout (() => resolve ('Hello'), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // await till promise is resolved
//     return res;
//   } else {
//     await Promise.reject (new Error ('Something went wrong'));
//   }
// }

// myFunc ().then (res => console.log (res)).catch (err => console.log (err));

async function getUsers () {
  const response = await fetch ('https://jsonplaceholder.typicode.com/users');

  //onlu proceed once that function is resolved
  const data = await response.json ();

  //only proceed once the second functions is resolved
  return data;
}

getUsers ().then (users => console.log (users));
