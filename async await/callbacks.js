//callbacks example
function greeting(name) {
    alert('Hello ' + name);
}

function processInput(callback) {
    let name = prompt('Please enter your name');
    callback(name);
    //this is a synchronous callback as it execute immediately
}

processInput(greeting);
// greeting("brian");

