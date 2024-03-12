const form = document.getElementById('survey-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const question1 = document.getElementById('question-1');
	const question2 = document.getElementById('question-2');
	const question3 = document.getElementById('question-3');

	const data = {
		question1: question1.value,
		question2: question2.value,
		question3: question3.value
	};

	console.log(data);
});