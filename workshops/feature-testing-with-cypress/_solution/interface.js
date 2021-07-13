window.addEventListener('load', function() {
  const thermostat = new Thermostat
  const upButton = document.getElementById("up-button")
  const downButton = document.getElementById("down-button")

  const message = document.getElementById("message")

  upButton.addEventListener('click', function() {
    message.innerText = thermostat.up()
  })

  downButton.addEventListener('click', function() {
    message.innerText = thermostat.down()
  })
})
