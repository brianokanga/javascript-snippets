//get element
document.querySelector('.get-jokes').addEventListener('click', getJokes);

//create function
function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    //instantiate object
    const xhr = new XMLHttpRequest();

    // xhr open
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    // xhr load
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    // xhr send
    xhr.send();

    e.preventDefault();
}