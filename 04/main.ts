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

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends AnimalBase implements IRunnable {
    constructor(name: string) {
        super(name);
    }

    run() {
        return "I will keep on running";
    }
}

class Bird extends AnimalBase implements IFlyable {
    constructor(name: string) {
        super(name);
    }

    fly() {
        return "I'd love to fly";
    }
}

class Fish extends AnimalBase implements ISwimmable {
    constructor(name: string) {
        super(name);
    }

    swim() {
        return "I love swimming";
    }
}

//var animal = new AnimalBase(); // Results in error because AnimalBase is abstract
var Lassie = new Dog("Lassie");
var Flipper = new Fish("Flipper");
var Zazu = new Bird("Zazu");

// Lassie.fly() // Error
// Zazu.run() // error

var parentContainer = document.createElement("div");

// Dog
var dogParagraph = document.createElement("div");
dogParagraph.innerHTML = createHtml(Lassie.name, Lassie.run(), "http://cx.aos.ask.com/question/aq/700px-394px/kind-dog-lassie_870333c6a15c5d1b.jpg");

// Bird
var birdParagraph = document.createElement("div");
birdParagraph.innerHTML = createHtml(Zazu.name, Zazu.fly(), "http://vignette4.wikia.nocookie.net/thelionkingstimonandpumbaa/images/3/38/Zazu_onrock.jpg/revision/latest?cb=20121111174415");

// Fish
var fishParagraph = document.createElement("div");
fishParagraph.innerHTML = createHtml(Flipper.name, Flipper.swim(), "https://ryanlbrooks.files.wordpress.com/2011/06/dsc1024.jpg");

parentContainer.appendChild(dogParagraph);
parentContainer.appendChild(birdParagraph);
parentContainer.appendChild(fishParagraph);

document.body.appendChild(parentContainer);

// Template
function createHtml(name: string, action: string, imageUrl?: string): string {
    return `
    ${getLabel(name, imageUrl)}
    ${getQuote(action)} 
    `;
}

function getLabel(name: string, imageUrl?: string): string {
    if (!imageUrl)
        return `<p><b>${name}</b></p>`;
    return `<p>
    <img src="${imageUrl}" height="100"/>
    <p><b>${name}</b></p>
        </p>`;

}

function getQuote(action: string): string {
    return `<blockquote><p>${action}</p></blockquote>`;

}