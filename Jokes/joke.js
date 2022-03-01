const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');     //getting elements

get_joke.addEventListener('click', generateJoke);  // calling function generateJoke when clicked

generateJoke();   // function Invocation

async function generateJoke() {
	const jokeRes = await fetch('https://icanhazdadjoke.com/', {   // calling API
		headers: {
			'Accept': 'application/json'  //  json response
		}
	});
	const joke = await jokeRes.json();
	// console.log(joke);
	jokeEl.innerHTML = joke.joke;
}




