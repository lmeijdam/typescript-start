import Car from 'car';

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

export default Garage;