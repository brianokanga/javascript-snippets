document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //CREATE AN XHR OBJECT instatiate
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);

    //option used for spinners/loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    //OLD SYNTAX
    // xhr.onreadystatechange = function () {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }


    //request error
    xhr.onerror = function () {
        console.log('Request error....');
    }



    //OLD SYNTAX
    // xhr.onreadystatechange = function () {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}