const Thermostat = require('../src/thermostat.js');

describe('Test if we can create thermostat object', function () {
    it('Create object and has degree', function () {
        let thermostat = new Thermostat();

        expect(thermostat.degree).toEqual(20);
    })
})

describe('Check if up function is working', function () {
    it('Check if up function increases degree by 1', function () {
        let thermostat = new Thermostat();

        thermostat.up();

        expect(thermostat.degree).toEqual(21);
    })
})

describe('Check if down function is working', function () {
    it('Check if down function decreases degree by 1', function () {
        let thermostat = new Thermostat();

        thermostat.down();

        expect(thermostat.degree).toEqual(19);
    })
})

describe('Check minimum temps', function () {
    it('Check if minimum temp initializs', function () {
        let thermostat = new Thermostat();

        expect(thermostat.minimum).toEqual(10); 
    })
    it('Degree cant drop below minimum', function () {
        let thermostat = new Thermostat(10);

        thermostat.down();

        expect(thermostat.degree).toEqual(10);
    })   
})

describe('Power saving', function () {
    it('Check if power saving bool is initialized', function () {
        let thermostat = new Thermostat();

        expect(thermostat.power).toEqual(true);
    })
    it('Check if you can toggle power', function () {
        let thermostat = new Thermostat();

        thermostat.toggle();

        expect(thermostat.power).toEqual(false);
    })
    it('Check if maximum temperature is limited with power on', function () {
        let thermostat = new Thermostat(25);

        thermostat.up();

        expect(thermostat.degree).toEqual(25);
    })
    it('Check if maximum tmperature is limited with power off', function () {
        let thermostat = new Thermostat(32);

        thermostat.toggle();

        thermostat.up();

        expect(thermostat.degree).toEqual(32);
    })
})

describe('Reset button', function () {
    it('can reset degree through reset method', function () {
        let thermostat = new Thermostat();

        thermostat.up();
        thermostat.up();
        thermostat.up();

        thermostat.reset();

        expect(thermostat.degree).toEqual(20);
    })
    it('can reset power through reset method', function () {
        let thermostat = new Thermostat();

        thermostat.toggle();

        thermostat.reset();

        expect(thermostat.power).toEqual(true);
    })
})

describe('Energy usage', function () {
    it('low energy usage displayed', function () {
        let thermostat = new Thermostat(15);

        expect(thermostat.usage()).toEqual('low usage');
    })
    it('medium energy usage displayed', function () {
        let thermostat = new Thermostat(20);

        expect(thermostat.usage()).toEqual('medium usage');
    })
    it('high energy usage displayed', function () {
        let thermostat = new Thermostat(25);

        thermostat.toggle();

        thermostat.up();
        thermostat.up();
        thermostat.up();

        expect(thermostat.usage()).toEqual('high usage');
    })
})