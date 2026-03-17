deathdate.max = new Date().toISOString().split('T')[0];

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

form.setAttribute('novalidate', '');

inputs.forEach(input => {
	input.addEventListener('blur', (event) => {
		const error = document.getElementById("error-" + input.id);
		if (!input.validity.valid)
			{
				if (error)
				{
					error.textContent = input.title || 'Dit veld klopt niet' ;
					input.setAttribute('aria-describedby', "error-" + input.id);
				}
		}
		else if (input.validity.valueMissing)
		{
			if (error)
				{
					error.textContent = "Dit veld is verplicht";
					input.setAttribute('aria-describedby', "error-" + input.id);
				}
		}
		else {
			if (error)
			{
				input.removeAttribute('aria-describedby');
				error.textContent = "";
			}
		}
	})
});

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let isValid = true;

	inputs.forEach(input => {
		const error = document.getElementById("error-" + input.id);

		if (!input.validity.valid) {
			isValid = false;

			if (error) {
				if (input.validity.valueMissing) {
					error.textContent = input.title || "Dit veld is verplicht";
					input.setAttribute('aria-describedby', "error-" + input.id);
				} 
			}
		} else {
			if (error) {
				error.textContent = "";
				input.removeAttribute('aria-describedby');
			}
		}
	});

	if (isValid) {
		form.submit();
	}
});