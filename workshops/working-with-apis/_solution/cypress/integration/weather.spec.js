describe('weather data', function() {
  it("when I visit the home page, I see the current temp", function() {
    cy.intercept("https://api.openweathermap.org/data/2.5/weather*", { fixture: "weather-london.json" })

    cy.visit('/')

    cy.get('#app').should("contain", "The temperature is 21C")
  })
})
