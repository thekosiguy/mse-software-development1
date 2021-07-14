// implement me

window.addEventListener('load', function() {
  const appKey = "6173e6646d88596bf16603decfee950c"
  $.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${appKey}&units=metric`, function(data) {
    const appElement = document.getElementById("app")
    appElement.innerText = `The temperature is ${data.main.temp}C`
  })
})
