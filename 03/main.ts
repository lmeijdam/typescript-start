enum Colors {
    'Apple Green',
    'Diamond Silver',
    'Candy Red',
    'Chocolate Brown',
    'Stone Cole Black'
}

class Car {
    brand: string;
    type: string;
    doors: Number;
    color: Colors;

    constructor(brand: string, type: string, doors: Number, color: Colors) {
        this.brand = brand;
        this.type = type;
        this.doors = doors;
        this.color = color;

        console.log("Car created: " + brand + " " + type + " color: " + color.toString() + "(doors: " +  doors + " )" );
    }
}

class Garage{
    doorOpen: boolean;
    cars: Array<Car>;
    
    constructor(){
        this.doorOpen = false;
        this.cars = [];
    }
        
    closeDoor(){
        this.doorOpen = false;
    }
    
    openDoor(){
        this.doorOpen = true;
    }
    
    addCar(car: Car){
        var currentAmountOfCars = this.cars.length;
        this.cars[currentAmountOfCars + 1] = car;
    }    
}

// todo: HTML show, if the door is open. If open, show the amount of cars in the garage and the brands and colors of these cars.