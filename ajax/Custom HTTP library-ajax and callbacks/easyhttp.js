function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
    //XHR open
    this.http.open('GET', url, true);

    //xhr onload
    let self = this;
    this.http.onload = function () {
        //check status
        if (self.http.status === 200) {
            callback(self.http.responseText);
        } else {
            callback('error :' + self.http.status);
        }
    }
    //xhr send
    this.http.send();
}

//Make an HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
    //xhr open
    this.http.open('POST', url, true);

    //set content type
    this.http.setRequestHeader('content-type', 'application/json');

    //xhr onload
    let self = this;
    this.http.onload = function () {
        callback(self.http.responseText);
    }

    //xhr send
    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT request
easyHTTP.prototype.put = function (url, data, callback) {
    //xhr open
    this.http.open('PUT', url, true);

    //set content type
    this.http.setRequestHeader('content-type', 'application/json');

    //xhr onload
    let self = this;
    this.http.onload = function () {
        callback(self.http.responseText);
    }

    //xhr send
    this.http.send(JSON.stringify(data));
}



//Make an HTTP DELETE request
easyHTTP.prototype.delete = function (url, callback) {
    //XHR open
    this.http.open('DELETE', url, true);

    //xhr onload
    let self = this;
    this.http.onload = function () {
        //check status
        if (self.http.status === 200) {
            callback(null, 'post Deleted');
        } else {
            callback('error :' + self.http.status);
        }
    }
    //xhr send
    this.http.send();
}