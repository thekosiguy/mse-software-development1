window.addEventListener('load', function () {

	$.get("http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=c0c7f2271ebb8abeb6167ed6c431cbe9", function (data) {
		const appElement = document.getElementById("message");
		const appElement2 = document.getElementById("current");
		x = data.main.temp;		
		thermostat = new Thermostat(x);
		appElement.innerText = thermostat.degree + 'C';
		progress.setAttribute('value', thermostat.degree);
		appElement2.innerText = `Temperature in ${data.name} is ${x}C`
	})

	let thermostat;

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

		message.innerText = thermostat.up() + 'C';
		progress.setAttribute('value', thermostat.degree);
		if (thermostat.usage() === 'high usage') background.style.backgroundColor = 'rgb(150, 0, 0)';
		else if (thermostat.usage() === 'medium usage') background.style.backgroundColor = 'rgb(255, 255, 0)';
		else background.style.backgroundColor = 'rgb(0, 255, 0)';

	})
	downButton.addEventListener('click', function () {

		message.innerText = thermostat.down() + 'C';
		progress.setAttribute('value', thermostat.degree);
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
			message.innerText = thermostat.degree + 'C';
			dotText.innerText = "On";
		}
	})
	resetButton.addEventListener('click', function () {
		thermostat.reset();
		message.innerText = thermostat.degree + 'C';
		progress.setAttribute('value', thermostat.degree);
		background.style.backgroundColor = 'rgb(255, 255, 0)';
		dot.style.backgroundColor = "green";
		dotText.innerText = "On";
    })

	

})

