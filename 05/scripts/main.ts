import Color from "./color";
import Car from "./car";
import Garage from "./garage";

class Main{
    
    public garage: Garage;
    
    private car1: Car;
    private car2: Car;
    private car3: Car;  
    
    constructor(){       
        this.garage = new Garage();
        
        this.car1 = new Car("Nissan", "GTR R35", 2, Color.Black);
        this.car2 = new Car("Alfa Romeo", "Giulia", 4, Color.Red);
        this.car3 = new Car("BMW", "i8", 2, Color.White);
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