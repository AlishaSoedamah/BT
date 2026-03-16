deathdate.max = new Date().toISOString().split('T')[0];

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

form.setAttribute('novalidate', '');

form.addEventListener('submit', (event) => {	
	event.preventDefault();
});

inputs.forEach(input => {
	input.addEventListener('blur', (event) => {
		const error = document.getElementById("error-" + input.id);
		if (!input.validity.valid)
			{
				if (error)
				{
					error.textContent = "Voorletter(s) zijn incorrect";
					input.setAttribute('aria-describedby', "error-" + input.id);
				}
		}
		// else if (!input.validity.tooLong)
		else {
			if (error)
			{
				input.removeAttribute('aria-describeby');
				error.textContent = "";
			}
		}
	})
});


