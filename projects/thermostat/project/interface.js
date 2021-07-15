window.addEventListener('load', function () {

	const thermostat = new Thermostat();

	const upButton = document.getElementById("upButton");

	const message = document.getElementById("message");

	const downButton = document.getElementById("downButton");

	const toggleButton = document.getElementById("toggleButton");

	const dot = document.getElementById("dot");

	const dotText = document.getElementById("dotText");

	const resetButton = document.getElementById("resetButton");

	const background = document.getElementById("background");

	const progress = document.getElementById("progressBar");

	upButton.addEventListener('click', function () {

		message.innerText = thermostat.up();
		progress.setAttribute('value', message.innerText);
		if (thermostat.usage() === 'high usage') background.style.backgroundColor = 'rgb(150, 0, 0)';
		else if (thermostat.usage() === 'medium usage') background.style.backgroundColor = 'rgb(255, 255, 0)';
		else background.style.backgroundColor = 'rgb(0, 255, 0)';

	})
	downButton.addEventListener('click', function () {

		message.innerText = thermostat.down();
		progress.setAttribute('value', message.innerText);
		if (thermostat.usage() === 'high usage') background.style.backgroundColor = 'rgb(150, 0, 0)';
		else if (thermostat.usage() === 'medium usage') background.style.backgroundColor = 'rgb(255, 255, 0)';
		else background.style.backgroundColor = 'rgb(0, 255, 0)';

	})
	toggleButton.addEventListener('click', function () {
		if (thermostat.power) {
			dot.style.backgroundColor = "red";
			thermostat.toggle();
			dotText.innerText = "Off";
		}
		else {
			dot.style.backgroundColor = "green";
			thermostat.toggle();
			message.innerText = thermostat.degree;
			dotText.innerText = "On";
		}
	})
	resetButton.addEventListener('click', function () {
		thermostat.reset();
		message.innerText = thermostat.degree;
		progress.setAttribute('value', message.innerText);
		background.style.backgroundColor = 'rgb(255, 255, 0)';
		dot.style.backgroundColor = "green";
		dotText.innerText = "On";
    })


})

