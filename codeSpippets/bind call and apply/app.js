// bind, call and apply

let john = {
	name: 'john',
	age: 30,
	job: 'teacher',
	presentation: function (style, timeOfDay) {
		if (style === 'formal') {
			console.log(
				`Good ${timeOfDay}, ladies and gentlemen, I'm  ${this.name}, I'm a ${this.job} and I'm ${this.age} years old `
			);
		} else if (style === 'friendly') {
			console.log(
				`Hey what's up, I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}`
			);
		}
	},
};

//method borrowing
let eliza = {
	name: 'Eliza',
	age: 25,
	job: 'dev',
};

john.presentation('formal', 'morning');

john.presentation.call(eliza, 'formal', 'evening');

// apply method
john.presentation.apply(eliza, ['formal', 'afternoon']);

//bind method returns a function
//carrying technique
let johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
