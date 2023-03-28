const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	const username = form.elements.username.value;
	const password = form.elements.password.value;
	if (username === 'admin' && password === 'password') {
		window.location.href = 'welcome.html';
	} else {
		alert('Invalid username or password. Please try again.');
	}
});
