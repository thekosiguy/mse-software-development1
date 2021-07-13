window.addEventListener('load', function () {

	const thermostat = new Thermostat();

	const upButton = document.getElementById("upButton");

	const message = document.getElementById("message");

	const downButton = document.getElementById("downButton");

	const toggleButton = document.getElementById("toggleButton");

	const dot = document.getElementById("dot");

	upButton.addEventListener('click', function () {

		message.innerText =  thermostat.up();

	})
	downButton.addEventListener('click', function () {

		message.innerText = thermostat.down();

	})
	toggleButton.addEventListener('click', function () {
		if (thermostat.power) {
			dot.style.backgroundColor = "red";
			thermostat.toggle();
		}
		else {
			dot.style.backgroundColor = "green";
			thermostat.toggle();
			message.innerText = thermostat.degree;
		}
    })

})

