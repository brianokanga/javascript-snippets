//instantiate Easyhtttp
const http = new easyHTTP;


//Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, responses) {
    if (err) {
        console.log(err)
    } else {
        console.log(responses);
    }
});



//Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(response);
//     }
// });


// POSTS
//create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


//Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//Delete Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err)
    } else {
        console.log(response);
    }
});