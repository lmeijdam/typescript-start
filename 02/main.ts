enum Colors {
    Green,
    Gray,
    Red,
    White,
    Brown,
    Black
}

class Car {
    // brand: string;
    // type: string;
    // doors: Number;
    // color: Colors;

    constructor(public brand: string, public type: string, public doors: Number, public color: Colors) {
        // this.brand = brand;
        // this.type = type;
        // this.doors = doors;
        // this.color = color;

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
        
    closeDoor() : void  {
        this.doorOpen = false;
    }
    
    openDoor() : void {
        this.doorOpen = true;
    }
    
    getDoorStatus() : string {
        
        switch(this.doorOpen)
        {
            case true:
                return "Door is open";
            // break; Normaal gebruik je een 'break' om het einde van de 'case' aan te geven. Maar omdat we hier retourneren is dat niet nodig.
            case false:
                return "Door is closed";   
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
        console.log(this.garage.getDoorStatus());
        this.garage.addCar(this.car2);
        this.garage.addCar(this.car3);
        this.garage.closeDoor();
        console.log(this.garage.getDoorStatus());
    }
}

var main = new Main();
main.run();

console.log("Amount of cars in garage: " + main.garage.cars.length);

console.log("Brand of Car1: " + main.car1.brand); // Throws TypeScript Exception: Property 'car1' is private and only accessible within class 'main'.