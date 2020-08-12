let firstName = 'ELiza';
let age = 25;

age >= 18 ? console.log('drinks beer') : console.log('drnks beer');
console.log('===============================');


let height = -2;

if(height){
    console.log('variable is defined');
}else{
    console.log('variable is NOT defined');
}

console.log('===============================');

//tip calculator
function tipCalculator(bill){
    let percentage;
    if(bill < 50){
        percentage = .2;
    }else if(bill >= 50 && bill < 200){
        percentage = .15;
    }else{
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(1000));
