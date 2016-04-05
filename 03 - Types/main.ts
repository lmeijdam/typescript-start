
// https://github.com/TypeStrong/learn-typescript/blob/master/02-type-system-introduction/index.ts

// Types
enum Color { Red, Green, Blue }

class Main {
    veld: Color;

    constructor(public something: string) {
        this.veld = Color.Red;
    }

    saySomething(): string {
        if (this.veld === Color.Blue)
            return "<h1>" + this.something + "</h1>";
        return "Niet helemaal juist";
    }

    saySomething2(naam: string): string {
        return "<h1>" + naam + "</h1>";
    }

    saySomething3(naam? : string): string {
        return naam ? naam : "Niets";
    }
};

var main = new Main("Hello, Microsoft mensen!");

var element = document.getElementById("types");
element.innerHTML = "test";

// Interfaces

interface IRunnable{
    run(): void;
}

interface IBarkable{
    bark(): string;
}

class Dog implements IBarkable, IRunnable{
    run(){
        console.log("I am running");
        
    }
    
    bark(){
        return "Bark!";
    }
}

// Inheritance