//import Interfaces = require('./interfaces'); // werkt met AMD
import * as Interfaces from "./interfaces"; // Alle exports
import {TestModule} from "./interfaces"; // Module

class Main implements Interfaces.IInterface {
    constructor(public value: string) { }
    doSomething() {
        Interfaces.printValue(this.value);
        TestModule.printValue2(this.value);
        Interfaces.TestModule.printValue2(this.value);
    }
}

var test = new Main("Test");
test.doSomething();