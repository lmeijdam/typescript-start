// Simple Interfaces Example
interface IShootable {
    shoot(): void;
}

class Gun implements IShootable {
    constructor(public name: string){
        
    }
    
    shoot() {
        console.log(this.name  + " is shooting!!");        
    }
}

// Simple Inheritance Example
class Handgun extends Gun { }

class Rifle extends Gun { }

var p250 = new Handgun("p250");
p250.shoot();
var M4a1 = new Rifle("M4a1");
M4a1.shoot();

console.log(p250 instanceof Gun); // true
console.log(p250 instanceof Rifle); // false
console.log(p250 instanceof Handgun); // true
console.log(M4a1 instanceof Rifle); // true

// Full implementation of Inheritance and Interfaces
interface ISwimmable {
    swim(): string;
}

interface IFlyable {
    fly(): string;
}

interface IRunnable {
    run(): string;
}

abstract class AnimalBase {
    name: string;
    private imgUrl: string;

    constructor(name: string, imgUrl?: string) {
        this.name = name;
        this.imgUrl = imgUrl;

        console.log("Created: " + name);
    }

    abstract action(): any;

    AsHtml(): string {
        return `
        ${this.getLabel()}
        ${this.getActionAsQuote()} 
        `;
    }
    
    private getActionAsQuote(): string {
        return `<blockquote><p>${this.action()}</p></blockquote>`;
    }

    private getLabel(): string {
        if (!this.imgUrl)
            return `<p><b>${name}</b></p>`;
        return `<p>
        <img src="${this.imgUrl}" height="100"/>
        <p><b>${name}</b></p>
        </p>`;
    }
}

class Dog extends AnimalBase implements IRunnable {
    constructor(name: string, imgUrl?: string) {
        super(name, imgUrl);
    }

    run() {
        return "I will keep on running";
    }

    action(){
        return this.run();
    }
}

class Bird extends AnimalBase implements IFlyable {
    constructor(name: string, imgUrl?: string) {
        super(name, imgUrl);
    }

    fly() {
        return "I'd love to fly";
    }

    action() {
        return this.fly();
    }
}

class Fish extends AnimalBase implements ISwimmable {
    constructor(name: string, imgUrl?: string) {
        super(name, imgUrl);
    }

    swim() {
        return "I love swimming";
    }

    action() {
        return this.swim();
    }
}

//var animal = new AnimalBase(); // Results in error because AnimalBase is abstract
var Lassie = new Dog("Lassie", "http://cx.aos.ask.com/question/aq/700px-394px/kind-dog-lassie_870333c6a15c5d1b.jpg");
var Flipper = new Fish("Flipper", "https://ryanlbrooks.files.wordpress.com/2011/06/dsc1024.jpg");
var Zazu = new Bird("Zazu", "http://vignette4.wikia.nocookie.net/thelionkingstimonandpumbaa/images/3/38/Zazu_onrock.jpg/revision/latest?cb=20121111174415");

// Lassie.fly() // Error
// Zazu.run() // error

var parentContainer = document.createElement("div");

// Dog
var dogParagraph = document.createElement("div");
dogParagraph.innerHTML = Lassie.AsHtml();

// Bird
var birdParagraph = document.createElement("div");
birdParagraph.innerHTML = Zazu.AsHtml();

// Fish
var fishParagraph = document.createElement("div");
fishParagraph.innerHTML = Flipper.AsHtml();

parentContainer.appendChild(dogParagraph);
parentContainer.appendChild(birdParagraph);
parentContainer.appendChild(fishParagraph);

document.body.appendChild(parentContainer);