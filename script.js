deathdate.max = new Date().toISOString().split('T')[0];

const form = document.querySelector('form');
const input = document.querySelector('input');
const error = document.querySelector('.error');

form.setAttribute('novalidate', '');

input.addEventListener('blur', (event) => {
	if (!input.validity.valid)
	{
		error.textContent = "Voorletter(s) zijn incorrect";
		input.setAttribute('aria-describedby', 'error-id');
	}
	else {
		input.removeAttribute('aria-describeby');
		error.textContent = "";
	}
})
