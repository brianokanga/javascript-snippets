// function constructor(object literal way)
//object blueprint
let john = {
	name: 'john',
	yearOfBirth: 1990,
	job: 'teacher',
};

//fuunction constructor
let Person = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

//inheritance
Person.prototype.calculateAge = function () {
	console.log(2020 - this.yearOfBirth);
};
//properties
Person.prototype.lastName = 'Msitsa';

//instantiation
let eliza = new Person('Elizabeth', 1994, 'Dev');

let edward = new Person('Edward', 1995, 'Marketer');

let marline = new Person('Marline', 1984, 'Designer');

eliza.calculateAge();
edward.calculateAge();
marline.calculateAge();

console.log(`my name is ${eliza.name} ${eliza.lastName}`);
console.log(edward.lastName);
console.log(marline.lastName);

//option2
//object.create
// let personProto = {
// 	calculateAge: function () {
// 		console.log(2020 - this.yearOfBirth);
// 	},
// };

// let john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1995;
// john.job = 'dev';

// let eliza = object.create(personProto, {
// 	name: { value: 'Elzabeth' },
// 	yearOfBirth: { value: 1994 },
// 	job: { value: 'Manager' },
// });
