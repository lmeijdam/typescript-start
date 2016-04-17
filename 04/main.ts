// Simple example
class NonGenericClass{
    constructor(public value: any){        
    }
}

class GenericClass<T>{
    constructor(public value: T) { }
}

// non generic any -> Problem scenario
var anyValue = new NonGenericClass("hello");
anyValue.value = true;
anyValue.value = 5;
// will all work and do not give errors

// string
var stringValue1 = new GenericClass<string>("stringValue1");
//stringValue1.value = 5; // error because the type given was 

var stringElement1 = document.createElement("p");
//stringElement1.innerText = `Value from Generic1<string>; ${stringValue1.value}`;
document.body.appendChild(stringElement1);

// number
var numberValue2 = new GenericClass<number>(5);
//numberValue2.value = true; // will not work because true is of type Boolean.

var numberElement2 = document.createElement("p");
//numberElement2.innerText = `Value from Generic2<number>; ${numberValue2.value}`;
document.body.appendChild(numberElement2);



// Practical example ; Factory
interface IMailItem {
    recipient: string;
}

class EmailMessage implements IMailItem {
    recipient: string;
    message: string;
}

class EmailAppointment implements IMailItem {
    recipient: string;
    location: string;
    date: Date;
}

class EmailContact {
    name: string;
    //address: string;
    //recipient: string;
    
}

// non-Generic Factory
class NgMailItemFactory {
    create(mailType: { new (): IMailItem }) {
        return new mailType();
    }
}

var ngMailFactory = new NgMailItemFactory(); // ng = non-generic
var emailMessage1 = ngMailFactory.create(EmailMessage); // only recipient is accessable

console.log(emailMessage1 instanceof EmailMessage); // true
console.log(emailMessage1 instanceof EmailAppointment); // false
// var contact1 = ngMailFactory.create(EmailContact); // this is possible if i add a recipient field.
// Problem? Need a way to cast the message to EmailMessage to be able to edit the message.
// <EmailMessage>emailMessage.message won't work.
// emailMessage.message = "Test"; // Fail

// Solution 1
class MailItemFactory { 
    create<T>(type: { new (): T }) {
        return new type();
    }
}

var mailItemFactory = new MailItemFactory();
var emailMessageItem = mailItemFactory.create<EmailMessage>(EmailMessage); // both message and recipient are accessable now.
emailMessageItem.message = "TestFrom";
console.log(emailMessageItem.message); // will return TestFrom

// Solution 2
class Factory<T> { 
    create(type: { new (): T}) {
        return new type();
    }
}
// This way you can create a Factory for ALL objects.

var emailMessageFactory = new Factory<EmailMessage>(); // only add EmailMessage
var emailAppointmentFactory = new Factory<EmailAppointment>(); // only add EmailAppointment
var emailmessage2 = emailMessageFactory.create(EmailMessage);
emailmessage2.message = "TestEmail";
//var emailappointment2 = emailMessageFactory.create(EmailAppointment); // will not work
var emailappointment2 = emailAppointmentFactory.create(EmailAppointment);
emailappointment2.location = "Eindhoven";

// Will do the job but you still need to give the type of the item you want to create. And if you want to make the emailMessageFactory do some custom stuff for the items it processes you

// Solution 3 - I find this the most clean and SOLID solution
interface IFactory<T>{
    create() : T 
}

class MessageFactory implements IFactory<EmailMessage>{
    create() { 
        var objectToReturn = new EmailMessage();
        objectToReturn.message = "EmailMessage";
        return objectToReturn;
    }
}

class AppointmentFactory implements IFactory<EmailAppointment>{    
    create() { 
        var objectToReturn = new EmailAppointment();
        objectToReturn.location = "Eindhoven";
        return objectToReturn;
    }
}

var messageFactory = new MessageFactory();
var email1 = messageFactory.create(); // will be an EmailMessage
console.log(email1.message); // EmailMessage

var appointmentFactory = new AppointmentFactory();
var appointment1 = appointmentFactory.create(); // will be an EmailAppointment
console.log(appointment1.location); // Eindhoven
