class Thermostat {
    constructor(degree = 20, minimum = 10) {
        
        let x = degree.toFixed(0);
        if (x > 25) x = 25;
        else if (x < 10) x = 10;

        this.degree = x;
        this.minimum = minimum;
        this.power = true;
        this.currentTemp = x;
    }

    up() {
        if (this.power) {
            ++this.degree;
            if (this.degree > 25) this.degree = 25;
            return this.degree;
            
        }
        else {
            ++this.degree;
            if (this.degree > 32) this.degree = 32;
            return this.degree;
        }
        return this.degree;
    }

    down() {
        --this.degree;
        if (this.degree <= this.minimum) this.degree = 10;
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
        this.degree = this.currentTemp;
        this.power = true;
    }

    usage() {
        if (this.degree < 18) return 'low usage';
        else if (this.degree <= 25) return 'medium usage';
        else return 'high usage';
    }
}

//module.exports = Thermostat;