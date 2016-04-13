enum Colors {
    Green,
    Gray,
    Red,
    White,
    Brown,
    Black
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

        console.log("Car created: " + brand + " " + type + ". Color: " + Colors[color] + ". Doors: " +  doors);
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
        this.showDoorStatus();
    }
    
    openDoor(){
        this.doorOpen = true;
        this.showDoorStatus();
    }
    
    showDoorStatus(){
        
        if(this.doorOpen) {
            console.log("Door status: Open");
        }
        else {
            console.log("Door status: Closed");
        }
    }
    
    addCar(car: Car){

        if(this.doorOpen) {
            var currentAmountOfCars = this.cars.length;
            this.cars[currentAmountOfCars] = car;
            console.log("Car added to garage: " + car.brand + " " + car.type);
        }
        else {
            console.log("Couldn't add car. Reason: The garage door is closed. Please open the door first.");
        }
    }    
}


class Main{
    
    public garage: Garage;
    
    private car1: Car;
    private car2: Car;
    private car3: Car;  
    
    constructor(){       
        this.garage = new Garage();
        
        this.car1 = new Car("Nissan", "GTR R35", 2, Colors.Black);
        this.car2 = new Car("Alfa Romeo", "Giulia", 4, Colors.Red);
        this.car3 = new Car("BMW", "i8", 2, Colors.White);
    }
    
    run(){       
        this.garage.addCar(this.car1);
        this.garage.openDoor();
        this.garage.addCar(this.car2);
        this.garage.addCar(this.car3);
        this.garage.closeDoor();
    }
}


var main = new Main();
main.run();

console.log("Garage amount of cars: " + main.garage.cars.length);

console.log("Brand of Car1: " + main.car1.brand); // Throws TypeScript Exception: Property 'car1' is private and only accessible within class 'main'.