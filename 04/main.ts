interface ISwimmable {
    swim(): string;
}

interface IFlyable {
    fly(): string;
}

interface IRunnable {
    run(): string;
}

class AnimalBase {
    constructor(name: string) {

    }
}

class Dog extends AnimalBase implements IRunnable {
    constructor(name: string) {
        super(name);
    }

    run() {
        return "i'm Running";
    }
}

class Bird extends AnimalBase implements IFlyable {
    constructor(name: string) {
        super(name);
    }

    fly() {
        return "i'm Flying";
    }
}

class Fish extends AnimalBase implements ISwimmable {
    constructor(name: string) {
        super(name);
    }

    swim() {
        return "i'm Swimming";
    }
}
