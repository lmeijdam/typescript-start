// class Main {
//     constructor(public something: string) { }
    
//     saySomething() {
//         return "<h1>" + this.something + "</h1>";
//     }
// };

// var main = new Main("Hello, World!");
    
// document.body.innerHTML = main.saySomething();

class Main {
    name: string;
    age: Number;
   
    constructor(name: string, age: Number) {
             this.name = name;
             this.age = age;
    }
    
    run() {
        return "<h1> Hi, " + this.name + " (" + this.age + ")</h1>";
    }
};

var main = new Main(1234, "JENAAM");
    
document.body.innerHTML = main.run();