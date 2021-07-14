class Thermostat {
    constructor(degree = 20, minimum = 10) {
        this.degree = degree;
        this.minimum = minimum;
        this.power = true;
    }

    up() {
        if (this.power) {
            if (this.degree !== 25) return ++this.degree;
        }
        else {
            if (this.degree !== 32) return ++this.degree;
        }
        return this.degree;
    }

    down() {
        if (this.degree !== this.minimum) return --this.degree;
        return this.degree;
    }

    toggle() {
        if (this.power) this.power = false;
        else {
            if (this.degree > 25) this.degree = 25;
            this.power = true;
        };
    }

    reset() {
        this.degree = 20;
        this.power = true;
    }

    usage() {
        if (this.degree < 18) return 'low usage';
        else if (this.degree <= 25) return 'medium usage';
        else return 'high usage';
    }
}

//module.exports = Thermostat;