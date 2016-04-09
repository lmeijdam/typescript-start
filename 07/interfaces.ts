export interface IInterface{
    doSomething(): void;
}

export function printValue(value: string) {
    console.log(value);
    
}

export module TestModule {
    export function printValue2(value: string) {        
        console.log(value);
    }
    
}