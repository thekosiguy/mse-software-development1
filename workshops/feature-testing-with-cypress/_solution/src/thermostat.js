class Thermostat {
  constructor() {
    this.temp = 20
  }

  up() {
    this.temp++
    return this.temp
  }

  down () {
    this.temp--
    return this.temp
  }
}
