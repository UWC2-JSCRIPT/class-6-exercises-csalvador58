/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/** Per class 6 exercise slides 
Create a Car class that creates instances with the following properties and methods (determine what
goes on the instance vs the prototype):
    • currentSpeed: initially set to zero
    • model: set by constructor function (i.e. "Taurus")
    • accelerate: function, increases current speed by 1
    • brake: function, decreases current speed by 1
    • toString: function, returns a string representation of the object

Create an instance, accelerate twice, brake once, and console log the instance.toString()
 */

class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
    }
    accelerate() {
        this.currentSpeed++;
    }
    brake() {
        this.currentSpeed--;
    }
    toString() {
        return `${this.model} vehicle's current speed is: ${this.currentSpeed}`;
    }
};

const honda = new Car('CRV');
honda.accelerate();
honda.accelerate();
honda.brake();
console.log(honda.toString());
// CRV vehicle's current speed is: 1

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/** Per class 6 exercise slides 
Create an ElectricCar class that inherits from Car, with the following additional properties 
and methods:
    • motor instance property set to "electric"
    • accelerate method that calls the inherited class accelerate
        method twice every time it is run (electric vehicles accelerate faster!) 
    • different toString function from inherited class

Create an instance, accelerate twice, brake once, and console log the instance.toString()
 */

class ElectricCar extends Car {
    constructor(model) {
        super(model);
        super.currentSpeed;
        this.motor = 'electric'
    }
    accelerateEV() {
        super.accelerate();
        super.accelerate();
    };
    toString() {
        return `The ${this.motor} ${super.toString()}`;
    }
}

const tesla = new ElectricCar('Model X');
tesla.accelerateEV();   // speed = 2
tesla.accelerateEV();   // speed = 4
tesla.brake();          // speed = 3
console.log(tesla.toString());
// The electric Model X vehicle's current speed is: 3
