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
					error.textContent = "Voornaam is incorrect";
					input.setAttribute('aria-describedby', "error-" + input.id);
				}
		}
		// else if (input.validity.valueMissing)
		// {
		// 	if (error)
		// 		{
		// 			error.textContent = "Dit veld is verplicht";
		// 			input.setAttribute('aria-describedby', "error-" + input.id);
		// 		}
		// }
		else {
			if (error)
			{
				input.removeAttribute('aria-describedby');
				error.textContent = "";
			}
		}
	})
});
