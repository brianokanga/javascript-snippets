// //privacy using IIFE
// (function () {
// 	// function constructor
// 	function Question(question, answers, correct) {
// 		this.question = question;
// 		this.answers = answers;
// 		this.correct = correct;
// 	}

// 	Question.prototype.displayQuestion = function () {
// 		console.log(this.question);

// 		for (let i = 0; i < this.answers.length; i++) {
// 			console.log(`${i} : ${this.answers[i]}`);
// 		}
// 	};

// 	Question.prototype.checkAnswer = function (ans) {
// 		if (ans === this.correct) {
// 			console.log('Correct answer!!');
// 		} else {
// 			console.log('Wrong answer');
// 		}
// 	};

// 	//instantiate object with arguments
// 	let q1 = new Question('Is Js a cool programming language', ['Yes', 'No'], 0);

// 	let q2 = new Question(
// 		'What the name of the tutor',
// 		['John', 'Michael', 'Jonas'],
// 		2
// 	);

// 	let q3 = new Question(
// 		'What the best way to discribe coding?',
// 		['boring', 'Hard', 'Fun', 'Tidius'],
// 		2
// 	);

// 	//store the questions in an array and select randomly
// 	let questions = [q1, q2, q3];

// 	let n = Math.floor(Math.random() * questions.length);

// 	questions[n].displayQuestion();

// 	let answer = parseInt(prompt('Please enter the correct answer..'));

// 	questions[n].checkAnswer(answer);
// })();

//part 2
//privacy using IIFE
(function () {
	// function constructor
	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	Question.prototype.displayQuestion = function () {
		console.log(this.question);

		for (let i = 0; i < this.answers.length; i++) {
			console.log(`${i} : ${this.answers[i]}`);
		}
	};

	Question.prototype.checkAnswer = function (ans, callback) {
		let sc;
		if (ans === this.correct) {
			console.log('Correct answer!!');
			callback(true);
		} else {
			console.log('Wrong answer, please Try Again...');
			sc = callback(false);
		}

		this.displayScore(sc);
	};

	Question.prototype.displayScore = function (score) {
		console.log(`Your current score is ${score}`);
		console.log(`=================================`);
	};

	//instantiate object with arguments
	let q1 = new Question('Is Js a cool programming language', ['Yes', 'No'], 0);

	let q2 = new Question(
		'What the name of the tutor',
		['John', 'Michael', 'Jonas'],
		2
	);

	let q3 = new Question(
		'What the best way to discribe coding?',
		['boring', 'Hard', 'Fun', 'Tidius'],
		2
	);

	//store the questions in an array and select randomly
	let questions = [q1, q2, q3];

	function score() {
		let sc = 0;
		return function (correct) {
			if (correct) {
				sc++;
			}
			return score;
		};
	}

	let keepScore = score();

	function nextQuestion() {
		let n = Math.floor(Math.random() * questions.length);

		questions[n].displayQuestion();

		let answer = prompt('Please enter the correct answer..');

		//repeat the game
		if (answer !== 'exit') {
			questions[n].checkAnswer(parseInt(answer), keepScore);

			nextQuestion();
		}
	}

	nextQuestion();
})();
