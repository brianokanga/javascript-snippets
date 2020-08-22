// Lecture: Bind, call and apply

var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function (style, timeOfDay) {
		if (style === 'formal') {
			console.log(
				'Good ' +
					timeOfDay +
					", Ladies and gentlemen! I'm " +
					this.name +
					", I'm a " +
					this.job +
					" and I'm " +
					this.age +
					' years old.'
			);
		} else if (style === 'friendly') {
			console.log(
				"Hey! What's up? I'm " +
					this.name +
					", I'm a " +
					this.job +
					" and I'm " +
					this.age +
					' years old. Have a nice ' +
					timeOfDay +
					'.'
			);
		}
	},
};

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer',
};

john.presentation('formal', 'formal');

//how to use the prentation method on Emily object(lacks the method)
//this is known as method borrowing
// the call method
john.presentation.call(emily, 'friendly', 'afternoon');

//apply method(accepts args are an array)
john.presentation.apply(emily, ['friendly', 'afternoon']);

//the bind method(generate a copy, returns a function)

var johnFriendly = john.presentation.bind(john, 'friendly');

//from bind, a copy of the john function with preset args
johnFriendly('morning');

//method carrying
johnFriendly('NIGHT(from johnFriendly.bind)');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('AFTERNOON(from bind)');

console.log('=======ANOTHER EXAPLE USING BIND TO VARY FULLAGE================');

// Lecture: Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

//using bind
var ages = arrayCalc(years, calculateAge);
//from bind, a copy of the john function with preset args 20 as fullage
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
