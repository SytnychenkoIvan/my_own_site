// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";


const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const data = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		message: document.getElementById('message').value
	};

	const response = await fetch('/.netlify/functions/telegram', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (response.ok) {
		alert('Сообщение отправлено!');
		form.reset();
	} else {
		alert('Ошибка');
	}
});