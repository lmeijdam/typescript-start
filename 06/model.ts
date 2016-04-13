import * as Enums from "./enums";

abstract class PeopleBase {    
    constructor(public name: string, public gender: Enums.Gender){
        
    }
    
    sayHello() : string{
        return "Hello";
    }
}

export class African extends PeopleBase {
    // empty
}
export class European extends PeopleBase {
    // empty
}
export class American extends PeopleBase {
    // empty
}
export class Asian extends PeopleBase {
    // empty
}