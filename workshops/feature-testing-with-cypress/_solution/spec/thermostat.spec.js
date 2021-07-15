describe("Thermostat", function() {
  let thermostat

  beforeEach(function() {
    thermostat = new Thermostat()
  })

  it("has a default temp of 20", function() {
    expect(thermostat.temp).toEqual(20)
  })

  it("can increase temp by 1", function() {
    expect(thermostat.up()).toEqual(21)
  })

  it("can increase temp by 1 twice", function() {
    thermostat.up()

    expect(thermostat.up()).toEqual(22)
  })

  it("can decrease temp by 1", function() {
    expect(thermostat.down()).toEqual(19)
  })

  it("can decrease temp by 1 twice", function() {
    thermostat.down()

    expect(thermostat.down()).toEqual(18)
  })
})
