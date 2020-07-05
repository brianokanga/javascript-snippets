//Get elememt and add event listener
document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

//load single customers
// create function
function loadCustomer(e) {
    // instatiate xhr
    const xhr = new XMLHttpRequest();

    // xhr.open
    xhr.open('GET', 'customer.json', true);

    //xhr.onload
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.name}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;

        }
    }

    // xhr.send
    xhr.send();
}





// load customers
// create function
function loadCustomers(e) {
    // instatiate xhr
    const xhr = new XMLHttpRequest();

    // xhr.open
    xhr.open('GET', 'customers.json', true);

    //xhr.onload
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);

            let output = '';
            customers.forEach(function (customer) {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.name}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
            });

            document.getElementById('customers').innerHTML = output;

        }
    }

    // xhr.send
    xhr.send();
}