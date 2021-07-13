describe("Thermostat", function() {
  it("has a temp", function() {
    const thermostat = new Thermostat()
    expect(thermostat.temp).toEqual(20)
  })

  it("can increase temp by 1", function() {
    const thermostat = new Thermostat()
    expect(thermostat.up()).toEqual(21)
  })

  it("can increase temp by 1 twice", function() {
    const thermostat = new Thermostat()
    thermostat.up()
    expect(thermostat.up()).toEqual(22)
  })
})
