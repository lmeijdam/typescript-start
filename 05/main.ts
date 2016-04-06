// var button = document.createElement("button");
// button.onclick = function () {
//     alert("Clicked");
// }

// button.innerText = "Click me!";

// document.body.appendChild(button);

interface IFoo {
    
}

class Generics1<T extends IFoo>{
    
}

class Generics2<T>{
    constructor(public value: T){
        
    }
    
    getValue() : T {
        return this.value;
    }
}

var test = new Generics2<number>(5);
test.getValue();