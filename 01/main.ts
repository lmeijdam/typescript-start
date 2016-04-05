class Main {
    constructor(public something: string) { }
    
    saySomething() {
        return "<h1>" + this.something + "</h1>";
    }
};

var main = new Main("Hello, World!");
    
document.body.innerHTML = main.saySomething();