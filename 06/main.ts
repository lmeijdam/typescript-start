//import Interfaces = require('./interfaces'); // werkt met AMD
import {Interfaces} from "./interfaces"; // Module
import {Elements} from "./elements"; 
import * as Model from "./model"; 

// class Main implements Interfaces.IInterface {
//     constructor(public value: string) { }
//     doSomething() {
//         Interfaces.printValue(this.value);
//         TestModule.printValue2(this.value);
//         Interfaces.TestModule.printValue2(this.value);
//     }
// }

// var test = new Main("Test");
// test.doSomething();

Elements.addBtn.onclick = () => { createNewElement() };

function createNewElement() {
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    
    col1.innerText = "rowcol1";
    row.appendChild(col1);
    
    Elements.peopleTable.appendChild(row);
}
