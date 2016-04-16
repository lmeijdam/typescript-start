## 01 - Hello TypeScript

Voordat we aan de slag kunnen met TypeScrypt installeer je TypeScript via NPM (Node Package Manager) met onderstaand commando:

     ```
     npm install typescript -g
     ```  
   *NB: Download NPM via [nodejs.org](https://nodejs.org/en/)*


1. Maak op een locatie naar keuze een folder aan en noem deze '01'. Vanuit deze folder beginnen we het 'project'.

2. Maak in de root van deze folder een nieuw bestaand aan en noem deze; `main.js`.  (de .ts extensie gebruiken we nu nog niet) 

3. In het `main.js` bestand maak je een 'Main' class met een constructor die twee parameters accepteert, 'name' en 'age. 
  ```javascript
  class Main {
      constructor(name, age) {
          
      }
  };
  ```
4. Deze parameters schrijf je binnen de constructor weg naar de publieke tegenhanger ('this.name' en 'this.age')
  ```javascript
  this.name = name;
  this.age = age;
  ```
5. Buiten de constructor, maar binnen de 'Main' class, schrijf je een functie genaamd 'run'. Deze bevat geen input parameters.
```javascript
  run() {
  }
  ```
6. Schrijf in de 'run' functie de volgende regel 'code'. Deze regel retourneert een HTML Heading-1 met de ingevoerde 'name' en 'age' properties.    
      ```javascript
       return "<h1> Hi, " + this.name + " (" + this.age + ")</h1>";  
      ```  
      
7. Direct onder de main class instantieer je de zojuist geschreven class op de volgende manier: (waarbij je je eigen naam en leeftijd invult op de plaats van parameters)
      ```javascript
       var main = new Main("JENAAM", 88); // Vul hier je eigen naam en leeftijd in.  
      ```  
8. Daaronder roep je de run() functie aan en schrijf je deze weg naar de innerHTML van de document.body:
      ```javascript
       document.body.innerHTML = main.run();  
      ```  
 Je uiteindelijke `main.js` zou er als volgt uit moeten zien:

 ```javascript
 class Main {
     constructor(name, age) {
         this.name = name;
         this.age = age;
      }
     
     run() {
         return "<h1> Hi, " + this.name + " (" + this.age + ")</h1>";
     }
 };
 
 var main = new Main("JENAAM", 88); // Vul hier je naam en leeftijd in.
     
 document.body.innerHTML = main.run();
 ```

9. In de root folder maak je een nieuwe bestand aan, noem deze `index.html`.
10. Voer vervolgens onderstaande HTML code in en sla het `index.html` bestand op. 
 ```html
 <!DOCTYPE html>
 <html>
   <head><title>01: TypeScript Demo </title></head>
   <body>
     <script src='main.js'></script>
   </body>
 </html>
 ```

11. Open Windows Verkenner en dubbelklik op het `index.html` bestand zodat deze geopend wordt in de browser. Je ziet nu een naam met tussenhaakjes je leeftijd staan.
  ## Hi, JENAAM (88)

12. Open nu de main.js code en wijzig de initialisatie van de Main class als volgt:
  ```javascript
  var main = new Main(1234, "JENAAM"); // Vul hier je leeftijd en naam in.
  ```

13. Sla het gewijzigde main.js bestand op en open index.html opnieuw in je browser (of ververs de pagina, als je deze nog had laten staan) Het resultaat is dan:
  ## Hi, 1234 (JENAAM)

  Zoals je ziet maakt het JavaScript geen drol uit of je nu eerst een tekst (je naam) of eerst een getal (je leeftijd) invoert. De code draait zonder problemen en ook de editor vind het allemaal best.
  
  Met TypeScript kunnen we niet het probleem van de omgekeer parameters weghalen maar wel kunnen we voorkomen dat jij als programmeur deze fout maakt. 
  TypeScript zorgt er alleen voor dat in de editor gecontroleerd wordt of alle types (what's in a name) correct zijn opgevoerd.
  
  In de volgende stappen schrijven we de main.js om naar TypeScript en zullen we al snel de kracht van TypeScript ondervinden.
  
14. We beginnen met het hernoemen van het main.js bestand naar main.ts (waarbij .ts natuurlijk verwijst naar TypeScript)

15. Wanneer we nu het main.ts bestand openen zien we al direct vele meldingen onder de code verschijnen. Waaronder bijvoorbeeld; *'Parameter 'name' explicitly has an 'any' type'* 
  Dit betekend dat het type van de parameter 'name' niet gedefinieerd is. Om in TypeScript het type aan te geven van de parameter zetten we achter de parameternaam een dubbele punt met daarachter een spatie gevolgd door de typenaam. Zoals onderstaand:
  ```javascript 
  constructor(name: string, age: Number) {
  ```
16. Nu zien we in de constructor ook meldingen verschijnen onder de 'this.name' en 'this.age'. We moeten in TypeScript publieke parameter expliciet definieren. 
  Dit doen we binnen de Main class net voor de constructor. 
  ```javascript
      class Main {
        name: string;
        age: Number;
        
  ```

 
  
17. Wanneer we nu onderstaande regel aanroepen krijgen we direct een tweetal foutmeldingen: 
  ```javascript
  var main = new Main(1234, "JENAAM");
  ```
  
  ```
   'Argument of type 'Number' is not assignable to parameter of type 'string''

   'Argument of type 'string' is not assignable to parameter of type 'Number''
  ```
  Hiermee zien we niet alleen de werking van TypeScript maar ook het voordeel voor de programmeur. Je kan nu direct zien als je een type verkeerd toewijst.
   
18. Wanneer we nu echter de index.html pagina openen zien we niets dan een blanko pagina.
  Dit komt omdat we in stap 14 het main.**js** bestand hernoemt hebben naar main.**ts**. Geen van de browsers kan op het moment overweg met TypeScript. 
  Dit betekend dat we nog 1 kleine extra stap moeten doen en dat is het compileren van TypeScript naar JavaScript.
  
19. Open hiervoor command prompt (Windows, Run: cmd.exe) en navigeer naar je root folder. Zorg dat je IN de root folder zit!
20. Type vervolgens onderstaand command en ram op enter.
  ```
  tsc
  ```
  Met dit commando spreken we de TypeScript Compiler (tsc) aan. Deze compileert alle *.ts bestanden naar *.js bestanden.
21. Zoals je ziet krijg je een foutmelding, nuja, niet echt een foutmelding maar meer een lijst met opties. 
  We kunnen er voor kiezen om een parameter mee te geven aan het TSC commando, maar dat doen we niet, bijvoorbeeld
  ```
  tsc main.ts
  ```
  Wat we willen is dat het commando gewoon zelf in de folder kijkt welke TS bestanden er omgezet kunnen worden.
  Hiertoe moeten we een tsconfig.json configuratie bestan aanmaken.
22. Maak in de hoofdmap een nieuwe bestand aan en noem deze 'tsconfig.json'. Sla het bestand op en open deze.
23. In het `tsconfig.json` bestand  schrijf je een open accolade `{` direct gevolgd door een sluit accolade `}`.   
  
24. Sla het bestand op en keer terug naar command prompt. Run daar nogmaals het 'tsc' commando.
  Zoals je ziet gaat het nu wel goed en zal het main.**ts** bestand worden geconverteerd naar een main.**js** bestand.
25. Bekijk de index.html pagina in de browser. Nu werkt alles weer als 'vanouds'.
26. Omdat je natuurlijk niet voor elke wijziging terug wilt naar je command prompt om het 'tsc' commando te runnen is er een watcher beschikbaar.

  Deze zorgt er voor dat zodra een *.ts bestand gewijzigd wordt in de aangegeven folder de typescript compiler het bestand direct omzet naar een JavaScript tegenhanger.
  
  Je start de TypeScript Watcher door in Command Prompt te navigeren naar de root folder en daar onderstaand commando te runnen (zorg er dus wel voor dat je een tsconfig.json aangemaakt hebt)
  ```
  tsc -w
  ```