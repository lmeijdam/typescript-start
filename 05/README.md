## 05 - Modules

Tot nu toe waren al de classes en object gedefinieerd in één enkel bestand. Dat is voor een workshop als deze makkelijk uitleggen. 

Maar 'in-real-life' wil je natuurlijk zoveel mogelijk gescheiden houden. Denk maar aan het *SOLID* principe waarbij de S staat voor Single Responsibillity. 

Dat geldt niet alleen voor de functies, maar ook de voor de bestanden en classes.

In dit hoofdstuk gaan we aan de slag met het loshalen van classes en objecten. Losse classfiles noem je binnen TypeScript 'Modules'.

In dit hoofdstuk gebruiken we, voor 'the-sake-of-laziness' de broncode uit hoofdstuk 02. Daar hadden we een garage aangemaakt en enkele auto's in de garage opgeslagen.

Zowel de garage, de kleur enumeratie alsook de auto objecten schreven we allemaal in één enkel 'main.ts' bestand. Deze gaan we nu netjes opdelen.

1. Allereerst maken we op dezelfde locatie als voorheen een nieuwe folder aan. Noem deze; '05'.

2. Maak in de root van deze folder een `tsconfig.json` bestand aan. 
  
  Zoals eerder benoemd heten 'classes' in TypeScript 'modules'. Voor het kunnen importeren van 'modules. hebben we een extra javascript library nodig genaamd: 'RequireJs'.
  
  RequireJs is een JavaScript module loader. Om de te kunnen gebruiken dienen we in de 'tsconfig' in plaats van 'module:commonjs', 'module:AMD' te gebruiken. (waarbij AMD staat voor Asynchronous Module Definition)
  
  ```json
  {
    "compilerOptions": {
        "module": "amd", // NODIG VOOR RequireJS
        "target": "es5",
        "sourceMap": true,
        "noImplicitAny": true,
        "removeComments": true
    }
  }
  ```

3. Daarnaast maken we, bijna, hetzelfde `index.html` bestand aan met onderstaande code. Sla het bestand op maar sluit deze nog niet.

    ```html
    <!DOCTYPE html>
    <html>
        <head><title> H05: Modules</title></head>
        <body>
            
        </body>
    </html>
    ```
    
4. Omdat we dus RequireJs willen gebruiken dienen we deze te importeren in het HTML bestand. Voor het gemak linken we nu naar een minified versie van de RequireJs library.
  Je kan er ook voor kiezen om Require te downloaden en vervolgens in de 'scripts' folder op te slaan.

  In de '<body>' sectie van het 'index.html' bestand voegen we onderstaande regel toe:
  
  ```html
    <script data-main="scripts/main.js" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.2.0/require.min.js"  /></script>
  ```
  Het stukje *'data-main="scripts/main.js"'* geeft aan dat na het inladen van de RequireJS library de main.js zich in de 'scripts' folder bevindt.
  
  Sla het index.html bestand op en sluit deze.
  
5. In de root folder maak je nu een '**scripts**' folder aan en maak in deze folder een `main.ts` bestand.
  Kopieer al de code vanuit het 'main.ts' bestand van **hoofdstuk 02** naar het 'main.ts' bestand in dit hoofdstuk en sla vervolgens het bestand op.

6. Maak in de 'scripts' folder een nieuw bestand en noem deze `color.ts`. Knip vanuit het 'main.ts' bestand de 'Color' enum. 

  Hiermee haal je dus de 'Color' enum uit het 'main.ts' bestand waardoor TypeScript direct allerlei foutmelding uitkotst, die lossen we zo op.

7. Omdat in deze workshop 'Color' het enige object is wat in het 'color.ts' bestand komt kunnen we aangeven dat 'Color' de default `export` is van het 'color.ts' bestand
  ```javascript
  export default Color;
  ```

8. Het uiteindelijke 'color.ts' bestand ziet er dan als volgt uit:
  ```javascript
    enum Color {
        Green,
        Gray,
        Red,
        White,
        Brown,
        Black
    }
    
    export default Color;
  ```

9. In het 'main.ts' bestand moeten we nu aangeven gebruik te willen maken van een andere module. Dit gaat eigenlijk vrij simpel met behulp van de onderstaande code.

    Plaats deze code bovenaan in het 'main.ts' bestand
    ```javascript
    import Color from "./color";
    ```
    NB: Een tip van Peter Kassenaar. (kassenaar.com)::  Wanneer je een bestand gaat importeren, type dan eerst het stukje code ' from "./filename" '. De IDE kan namelijk in dat geval, zodra je het voorgaande woord 'import' tikt, middels IntelliSense aangeven wat er allemaal vanuit dat bestand te importeren is. Wanneer je eerst 'import' tikt, dan weet de IDE niet vanuit welk bestand je iets wilt importeren dus ontbreekt op dat moment IntelliSense. 

10. Na het importeren van de 'Color' enum zal de 'main.ts' code ook weer werken zoals verwacht. Dit kunnen we testen door de TypeScript compiler te starten en vervolgens de 'index.html' te openen in de browser.
  Controleer het resultaat door de Console te openen middels **F12**.

11. Nu gaan we een stap verder door ook het 'Car' object los te halen van het 'main.ts' bestand. Maak hiertoe in de 'scripts' folder een nieuw bestand aan en noem deze 'car.ts'.

12. Knip en plak nu de 'Car' class uit de 'main.ts' naar het 'car.ts' bestand. Ook hier geeft TypeScript direct een foutmelding in het 'main.ts' bestand, ook dit lossen we later op.

13. In het 'car.ts' bestand moeten we een referentie leggen naar de 'Color' enum. Dit doen we op dezelfde manier als voorheen door bovenaan in het 'car.ts' bestand de import te schrijven:
  ```javascript
   import Color from "color';
  ``` 

14. Vervolgens geven we aan dat de class Car de enige class is in dit bestand met `default` en exporteren we de class:

  ```javascript
    export default Car;
  ``` 

15. Het uiteindelijke 'car.ts' bestand ziet er dan als volgt uit:
  ```javascript
    import Color from 'color';

    class Car {
        constructor(public brand: string, public type: string, public doors: Number, public color: Color) {
            console.log("Car created: " + brand + " " + type + ". Color: " + Color[color] + ". Doors: " +  doors);
        }
    }

    export default Car;
  ```

16. In het 'main.ts' moeten we de 'Car' class importeren. Dit doen we ná de 'Color' class:
  ```javascript
    import Color from "./color";
    import Car from "./car";

    class Garage{ 
        // [knip]
  ```

17. Tussendoor kunnen we nogmaals controleren of alles nog goed gaat door de TypeScript compiler te runnen (of te laten lopen met `tsc -w`) en de html pagina te verversen.

18. Tot slot kun je op dezelfde manier de 'Garage' class loshalen en linken aan de 'main' class. In de 'Garage' class is alleen het importeren van de 'Car' class benodigd. De 'color' enum wordt niet gebruikt in de 'Garage' class.