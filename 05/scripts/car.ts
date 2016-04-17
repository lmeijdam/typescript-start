import Color from 'color';

class Car {
    constructor(public brand: string, public type: string, public doors: Number, public color: Color) {
        console.log("Car created: " + brand + " " + type + ". Color: " + Color[color] + ". Doors: " +  doors);
    }
}

export default Car;