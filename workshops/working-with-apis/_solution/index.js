// implement me

window.addEventListener('load', function() {
  const appKey = "ADD YOUR KEY HERE"
  $.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${appKey}&units=metric`, function(data) {
    const appElement = document.getElementById("app")
    appElement.innerText = `The temperature is ${data.main.temp}C`
  })
})
