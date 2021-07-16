xdescribe('weather data', function() {
// implement me
    it('gets data from the weather api', function () {
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=7a57d9f63f374d9200b00c0b9c8e78dd"
        cy.intercept(apiUrl, {fixture: '../fixtures/weather.json'})
        cy.visit('/').
        cy.get('#name').should('contain', 'London')
    })
})
