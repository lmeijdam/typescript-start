## 02 - Types, Classes & Access Modifiers

Nu we de beginselen van TypeScript hebben ontdekt kunnen we in dit hoofdstuk verder kijken we naar classes, types en access modifiers zodat we object georienteerd kunnen gaan programmeren.

Twee types hebben we al gezien, teksten `string` en getallen `Number`.

1. Maak op dezelfde locatie als voorheen een nieuwe folder aan en noem deze; '02'.

2. Maak in de root van deze folder wederom een `tsconfig.json` bestand aan en zet ook hierin een `{` en een `}`. Sla het bestand op en sluit deze vervolgens.

3. Maak in de root van deze folder een `index.html` bestand aan met onderstaande code. Sla het bestand op en sluit deze weer.

    ```html
    <!DOCTYPE html>
    <html>
        <head><title> H02: Classes, Types & Access Modifiers</title></head>
        <body>
            <script src='main.js'></script>
        </body>
    </html>
    ```
4. Maak in de root van deze folder een `main.ts` aan.

5. In dit hoofdstuk gaan we een garage maken waarin we auto's kunnen *parkeren*. Voordat we auto's kunnen *parkeren* moeten we eerst auto's hebben. Daarom maken we in de 'main.ts' onze eerste `Class` met de naam 'Car' aan.

    ```javascript
    class Car {
    }
    ```

6. In deze klasse kunnen maken we een drietal public properties zodat we het merk, het type en het aantal deuren van de auto kunnen opslaan.

    ```javascript
    class Car {
        brand: string;
        type: string;
        doors: Number;
    }
    ```

7. Deze drie waarden zetten we direct bij het 'creeeren' van een Car. Hiertoe schrijven we wederom een constructor met daarin de 3 waarden.
    ```javascript
    class Car {
        brand: string;
        type: string;
        doors: Number;
    
        constructor(brand: string, type: string, doors: Number) {
            this.brand = brand;
            this.type = type;
            this.doors = doors;
        }
    }
    ```

8. Wanneer we nu een `Car` object willen aanmaken hoeven we niets anders te doen dan onderstaande code aan te roepen.
    ```javascript
    var car = new Car("Nissan", "GTR R35", 2);
    ```

9. Een auto is natuurlijk geen auto zonder een kleur. Kleuren zijn, over het algemeen, voorgedefinieerd. De beschikbare keuzes willen we daarom opslaan in een `Enum`.
  
  Wie wel eens een `Enum` heeft geschreven in JavaScript weet dat dit niet heel 'simpel' is. Gelukkig ondersteun TypeScript ook Enumerations waardoor het bijna even makkelijk als in C#.
  
  Schrijf **bovenaan** in het `main.ts` bestand onderstaande code: 
  
  *NB: Het is belangrijk dat de Color `Enum` **bovenaan**, dus nog voor de Car class, gedefinieerd wordt omdat anders de Car de `Color` niet kan vinden.*

    ```
    enum Color {
        Green,
        Gray,
        Red,
        White,
        Brown,
        Black
    }
    ```
10. In de Car class maken voegen we een 'Color' optie toe aan de publieke parameters en ook aan de constructor. 

  Ook voegen we een korte console.log() regel toe zodat we in het console windows van de browser straks onze informatie terug kunnen vinden. 

  De uiteindelijke code van de Car class wordt als volgt:

  ```javascript
    class Car {
        brand: string;
        type: string;
        doors: Number;
        color: Color;

        constructor(public brand: string, type: string, doors: Number, color: Color) {
            this.brand = brand;
            this.type = type;
            this.doors = doors;
            this.color = color;

            console.log("Car created: " + brand + " " + type + ". Color: " + Color[color] + ". Doors: " +  doors);
        }
    }
  ```

11. Eigenlijk hebben we in bovenstaande code een hele hoop overhead geschreven. In TypeScript is het namelijk niet meer nodig om de input parameters specifiek weg te schrijven naar de public parameters.
  
  Dit kunnen we gemakkelijker in 1x schrijven door voor de input parameters een `public` modifier te noteren. 
  ```javascript 
  constructor(public brand: string, public type: string, public doors: Number, public color: Colors) {
  ```
  Hierdoor kan de rest van de constructor, als ook de property definities weg en blijft slecht onderstaande code over:
  
  ```javascript
    class Car {
            constructor(public brand: string, public type: string, public doors: Number, public color: Color) {
                console.log("Car created: " + brand + " " + type + ". Color: " + Color[color] + ". Doors: " +  doors);
        }
    }
  ```
  
12. Onder de 'Car' class maken we nu, net als in hoofdstuk 1, een 'Main' class aan. Dit is onze 'entry' class. We schrijven hier direct een lege constructor bij:
  ```javascript
    class Main{
   
        constructor(){ }        
    }
  ```
  
13. In de 'Main' class definieren we een drietal parameters welke een drietal autos vertegenwoordigen. 

  Dit keer willen we de parameters niet publiekelijk beschikbaar maken maar binnen de 'Main' class afschermen. 

  In plaats van een `public` **access modifier** gebruiken we hiervoor de `private` variant. :
  ```javascript
    class Main{

        private car1: Car;
        private car2: Car;
        private car3: Car;  
        
        constructor(){ }
    }
  ```
  
14. In de constructor van de 'Main' class instantieren we nu een drietal auto's. Dit mag je natuurlijk naar wens doen maar voor het gemak krijg je **gratis** een aantal voorbeelden:
  ```javascript
    constructor(){           
        this.car1 = new Car("Nissan", "350Z", 2, Color.Black);
        this.car2 = new Car("Alfa Romeo", "Giulia", 4, Color.Red);
        this.car3 = new Car("BMW", "i8", 2, Color.White);    
    }
  ```
  
15. Buiten de 'Main' class, maar in hetzelfde `main.ts` bestand, schrijven we onderstaande regel zodat we de 'Main' class instantieren bij het opstarten van de webpagina.

  ```javascript
    var main = new Main();
  ```

16. Wanneer we nu in de Windows Verkenner het 'index.html' bestand openen... zien we niets. Inderdaad, we moeten het TypeScript bestand nog compileren naar JavaScript.
  
  Hiertoe openen we wederom Command Prompt, navigeren we binnen de Command Prompt naar de folder die we hebben aangemaakt voor dit hoofdstuk en runnen we het 'tsc' commando.

  In de folder zou je nu een `main.js` bestand moeten verschijnen. Ga nu terug naar de browser en ververs de pagina.
  
  *Weer niets?* 
  
  Dat klopt, we hebben namelijk geen data naar de pagina geschreven maar naar de 'console' van de browser. Druk daarom op **F12** en klik vervolgens op het tablad 'Console'.
  
  Nu zie je de autos die zijn aangemaakt in de constructor:
  
  ```
    Car created: Nissan GTR R35. Color: Black. Doors: 2
    Car created: Alfa Romeo Giulia. Color: Red. Doors: 4
    Car created: BMW i8. Color: White. Doors: 2
  ```  

17. Terug naar het 'main.ts' bestand. Tussen de 'Main' en de 'Car' class maken we een nieuwe class aan. Deze noemen we 'Garage'. 
  
  Hierin schrijven we direct een tweetal public properties;
    1. Een `boolean` genaamd 'doorOpen', welke de status van de garage deur onthoudt
    2. Een `Array` van `Car` objecten, welke de auto's in de garage onthoudt.

  ```javascript
    class Garage{
        doorOpen: boolean;
        cars: Array<Car>;
    }
  ```

18. De constructor instantieert de 'doorOpen' parameter als `false` en een lege 'cars' array `[]`:

  ```javascript
    class Garage{
        doorOpen: boolean;
        cars: Array<Car>;
        
        constructor(){
            this.doorOpen = false;
            this.cars = [];
        }
    }
  ```

19. In de garage kunnen we auto's plaatsen. Dit implementeren we door een 'addCar' functie te schrijven binnen de 'Garage' class. Aan deze functie geven we dan, uiteraard, een Car object mee.
  tegelijkertijd checken we of de garagedeur wel open is alvorens we er een auto in rijden, anders wordt het zo'n zooitje. 
  ```javascript
    addCar(car: Car){
        if(this.doorOpen) {
            console.log("Car added to garage: " + car.brand + " " + car.type);
        }
        else {
            console.log("Couldn't add car. Reason: The garage door is closed. Please open the door first.");
        }
    }
  ```

19. Natuurlijk willen we ook de auto daadwerkelijk bewaren in de `Array<Car>`. We kunnen objecten toeven aan een `Array` door eerst het aantal items in de `Array` op te halen zodat we vervolgens dit nummer kunnen gebruiken om de locatie van het object in de `Array` te kunnen bepalen. 
  ```javascript
    addCar(car: Car){
        if(this.doorOpen) {
            var currentAmountOfCars = this.cars.length;
            this.cars[currentAmountOfCars] = car;
            
            console.log("Car added to garage: " + car.brand + " " + car.type);
        }
        else {
            console.log("Couldn't add car. Reason: The garage door is closed. Please open the door first.");
        }
    }
  ```
  
  ```javascript
    var currentAmountOfCars = this.cars.length;
    this.cars[currentAmountOfCars] = car;
  ```

20. Zoals je in de vorige stap hebt kunnen lezen moeten we, voordat we een auto kunnen 'opslaan' in de garage, de garagedeur kunnen openen en ogischerwijs willen we de deur ook weer kunnen sluiten. 

  Hiertoe voegen we een tweetal functies toe 'closeDoor' en 'openDoor' die beiden niets retourneren. Deze markeren we daarom met het `void` keyword. 

  NB: Het `void` keyword mag je overigens ook weglaten maar voor de compleetheid van de workshop noemen we hem toch maar.

  De functies 'closeDoor' en 'openDoor' schrijf je tussen de constructor van de Main class en de 'addCar' functie.

  ```javascript                  
        closeDoor() : void  {
            this.doorOpen = false;
        }
        
        openDoor() : void {
            this.doorOpen = true;
        }
  ```

21. Nu we de deur kunnen openen en sluiten is het ook wel handig om de status van de deur op te halen. 

  Dit schrijven we in een functie genaamd 'getDoorStatus' welke in dit geval een tekst retourneert. Deze markeren we daarom met het 'string' keyword.

  Als de deur open is `return` dan een tekst *Door is open*. En als de deur gesloten is `return` *Door is closed*. Dit doen we niet met een if/else statement. Want die hebben we al gezien, maar met een 'Switch' statement.
  
  Een `switch` statement in TypeScript is identiek aan een `switch` in C#: 

  ```javascript
    getDoorStatus() : string {
        
        switch(this.doorOpen)
        {
            case true:
                return "Door is open";
            // break; Normaal gebruik je een 'break' om het einde van de 'case' aan te geven. Maar omdat we hier retourneren is dat niet nodig.
            case false:
                return "Door is closed";   
        }
    }
  ```

22. Nu zijn we er bijna. We hebben nu aan class 'Car', een class 'Garage' en een 'Main' class. In de 'Main' class definieren en instantieren we al een aantal auto's. 

  Dit gaan we ook voor de garage nog even doen.

  De garage willen van *buiten* kunnen aanroepen dus voor de 'Garage' parameter gebruiken we weer een `public` accessmodifier. 
  
  In de constructor maken we een lege garage aan. 
  
  ```javascript
    class Main{
    
        public garage: Garage;
    
        // [knip]
    
        constructor(){    
            this.garage = new Garage();
        
            // [knip]
        }
    }
  ```

23. We schrijven in de 'Main' class nog een laatste functie genaamd 'run' die de eerste auto in de garage probeert te rijden, 

  dan de garagedeur opent, vervolgens auto 2 en 3 in de garage parkeert en tot slot de garagedeur weer sluit. 
  
  De 'run' functie komt na de constructor binnen de 'main' class en ziet er als volgt uit: 
 
  ```javascript
    class Main{
        // [knip]
            
        constructor(){       
            // [knip]
        }
    
        run(){       
            this.garage.addCar(this.car1);
            this.garage.openDoor();
            console.log(this.garage.getDoorStatus());
            this.garage.addCar(this.car2);
            this.garage.addCar(this.car3);
            this.garage.closeDoor();
            console.log(this.garage.getDoorStatus());
        }
    }
  ```

24. Tot slot roepen we de 'run' functie aan ná initialisatie van de 'Main' class onderin het TypeScript bestand.

  ```javascript
    var main = new Main();
    main.run();
  ```
  
25. Run de TypeScript Compiler (Command Prompt: ~foldername> tsc) en ververs de index.html pagina in de browser. Bekijk in de console (F12) het resultaat.

  ```
    Car created: Nissan GTR R35. Color: Black. Doors: 2
    Car created: Alfa Romeo Giulia. Color: Red. Doors: 4
    Car created: BMW i8. Color: White. Doors: 2
    Couldn't add car. Reason: The garage door is closed. Please open the door first.
    Door is open
    Car added to garage: Alfa Romeo Giulia
    Car added to garage: BMW i8
    Door is closed
  ```

26. Omdat we de garage een `public` modifier hebben meegegeven kunnen we in TypeScript, na het aanroepen van de 'main.run()' code, in de garage 'kijken' hoeveel auto's er nu daadwerkelijk in de garage staan.
  
  ```javascript
    console.log("Amount of cars in garage: " + main.garage.cars.length);
  ```
  
  Wanneer we echter van auto 1 het merk wensen op te vragen zien we dat TypeScript dit niet leuk vind. Het 'car1' object hebben we namelijk binnen de 'Main' class als `private` aangemaakt.
  Hierdoor krijgen we na het schrijven van de de volgende code:
  
  ```javascript
    console.log("Brand of Car1: " + main.car1.brand);
  ```
  
  De volgende foutmelding:
  
  ```
    Property 'car1' is private and only accessible within class 'main'.
  ```
  
  Wanneer je nu de wijzigingen opslaat, de TypeScript compiler runt (als je die nog niet had 'watchen' middels **tsc -w**) en vervolgens de website refresht.
  
  Zie je dat de laatste regel **'Brand of Car1: Nissan'** gewoon het merk van de eerste auto retourneert. 
  
  Dit komt omdat, ondanks dat TypeScript dit niet cool vindt, JavaScript het niets uitmaakt.

<br />
<br />
TL;DR; In dit hoofdstuk hebben we gezien hoe we object georienteerd 'classes' kunnen maken. 

Hoe we variabelen publiekelijk beschikbaar kunnen maken, maar ook hoe we ze kunnen 'afschermen' door het gebruik van een `private` access modifier. 

Tot slot hebben we naast de `Number` en de `string`, uit het vorige hoofdstuk, ook de `Enum`, de `boolean`, de `Array` en de `switch` gezien.