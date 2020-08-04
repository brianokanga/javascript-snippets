const http = new EasyHTTP ();

//Get Users
// http
//   .get ('https://jsonplaceholder.typicode.com/users')
//   .then (data => console.log (data))
//   .catch (data => console.log (err));

//create data
const data = {
  name: 'john Doe',
  Username: 'johndoe',
  email: 'johndoe@gmail.com',
};

//Create User
// http
//   .post ('https://jsonplaceholder.typicode.com/users', data)
//   .then (data => console.log (data))
//   .catch (data => console.log (err));

//Update user
// http
//   .put ('https://jsonplaceholder.typicode.com/users/2', data)
//   .then (data => console.log (data))
//   .catch (data => console.log (err));

// Delete user
http
  .delete ('https://jsonplaceholder.typicode.com/users/2')
  .then (data => console.log (data))
  .catch (data => console.log (err));
