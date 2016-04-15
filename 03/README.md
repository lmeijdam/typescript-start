## Module 03: Interfaces en Inheritance

In de vorige module heb je kennis gemaakt met Classes. Om nu nog meer object georienteerd te werk te gaan is het mogelijk om in TypeScript te werken met overerving. Daarnaast is het ook mogelijk om met interfaces te gaan werken.

### Voor de oefeningen
1. Maak een map aan met de naam 'module 03'. Van uit deze folder gaan we te werk.
2. Open deze map nu met Visual Studio Code (of gebruik deze map als bestemming voor je project in Visual Studio 2015).
3. Maak een nieuw configuratiebestand aan genaamd tsconfig.json. Vul deze met de volgende inhoud:

    ```javascript
    {
        "compilerOptions": {
            "module": "commonjs",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "sourceMap": true
        }
    }
    ```
Dit is het configuratiebestand die vaker gebruikt is/zal worden in de volgende oefeningen.

### Interfaces 
Om te beginnen gaan we beginnen met een simpele oefening waarbij we een interface gaan implementeren.

1. Maak een nieuw bestand aan genaamd 'main.ts'. In dit bestand gaan we te werk.
2. Boven in het bestand schrijf je het interface keyword gevolgd met IShootable(). Met 1 simpele methode 'shoot()' van het type 'void'. 
3. Als je dit gedaan hebt zal je code er als volgt uitzien:
    ```javascript
    interface IShootable() {
        shoot(): void;   
    }
    ```
4. Nu gaan we deze interface implementeren in een Class. Maak een nieuwe class genaamd 'Gun' en gebruik het keyword 'implements' om vervolgens de IShootable interface te gebruiken.
5. Je krijgt nu een melding als je met je muis over 'Gun' gaat, welke inmiddels rode krinkels bevat. Als je de melding leest zie je; *'Class 'Gun' incorrectly implements interface 'IShootable'. Property 'shoot' is missing in type 'Gun'.'*.
6. Dit is de correcte melding want in de class Gun heb je de methode shoot() nog niet geimplementeerd.
7. Implementeer nu de methode 'shoot' in de class 'Gun' en laat deze simpelweg iets naar de console loggen. Voor dit voorbeeld wordt er 'Shooting!' getoond in de console.
8. Je ziet nu dat de melding verdwenen is en je kunt dit nu gaan testen.
9. Maak een nieuwe instantie aan van 'Gun' en roep vervolgens de methode 'shoot' aan van dat object.
10. Maak een html pagina aan genaamd index.html of kopieer de index.html uit de vorige module en vul deze met:
    ```html
    <!DOCTYPE html>
    <html>
    <head><title>Module 03: Interfaces en Inheritance</title></head>
    <body>
        <script src='main.js'></script>
    </body>
    </html>
    ```
11. Open het command prompt en compileer je main.ts bestand met het commando 'tsc'. Nu wordt de compiler aangeroepen en zie je dat er een .js bestand aangemaakt wordt. 
12. Open vervolgens het index.html bestand in je favoriete browser en bekijk de console. Je ziet nu dat de door jouw opgegeven tekst in stap 7 getoond wordt.
13. Open nu het 'main.js' bestand en je zult zien dat de interface niet meegecompileerd is. Dit is niet erg. JavaScript kan simpelweg niet overweg met 'interface'.

### Inheritance
Nu je kennis hebt gemaakt met interfaces is het tijd voor overerving. Ook hier zal er een simpel voorbeeld gebruikt worden om je kennis te laten maken. 

1. Open het main.ts bestand waar je aan hebt gewerkt met Interfaces. Deze bestaande implementatie gaan we uitbreiden.
2. Maak onder de class 'Gun' een nieuwe class genaamd 'Handgun' en maak daarna direct nog een nieuwe class genaamd 'Rifle'. 
3. Voor dat we hier een invulling aan gaan geven gaan we eerst de bestaande class 'Gun' uitbreiden met een constructor. In de constructor van 'Gun' voeg je als parameter **'public name: string'** toe. Hiermee zorg je dat 'name' beschikbaar wordt voor elke instantie van 'Gun'.
4. Pas de output in de 'shoot' methode aan zodat de naam getoond wordt in combinatie met wat tekst zodra deze functie aangeroepen wordt.
5. Vervolgens gebruik je het keyword 'extends' in de 'HandGun' class en vul je dit aan met 'Gun'. Je code voor 'Handgun' moet er nu als volgt uit zien:
    ```javascript
    class Handgun extends Gun {
    }
    ```
6. Geef nu een constructor op voor 'Handgun' met als parameter **'name: string'**. Je ziet nu dat er de volgende melding verschijnt; *'Constructors for derived classes must contain a 'super' call.'*.
7. Dit geeft aan dat je de 'super(name)' call moet verwerken in de constructor. Gelukkig kun je de constructor weglaten in 'Handgun' en je ziet dat het nog steeds werkt.
8. Voeg nu ook voor 'Rifle' de 'extends Gun' toe om ook 'Rifle' te laten over erven.
9. Maak nu 2 variabele aan waarvan er 1 een instantie is van 'Handgun' en de andere van 'Rifle'. Geef in de instantieren een naam op. Deze is nu namelijk verplicht na het wijzigen van de constructor van 'Gun' in stap 3.
10. Roep de methode 'shoot' vervolgens aan van beide instanties en test dit in de browser door de index.html te openen of te herladen (F5). **Let er op dat je wel weer eerst de TypeScript compileert met het 'tsc' commando**.
11. Breidt nun main.ts uit zodat er gechecked kan worden of de variabele een instantie is van Gun, Handgun en/of Rifle.
12. Dit kan heel gemakkelijk door 'VARIABELENAAM instanceof Gun' te loggen naar de console.
13. Doe dit een aantal keren voor zowel het 'Handgun' object en het 'Rifle' object. Je zult zien dat het 'Handgun' object geen 'Rifle' is, maar wel een 'Gun'. Dit is gelukkig ook verwacht.
14. Test dit nogmaals door de index.html te herladen nadat je het 'tsc' commando hebt uitgevoerd.
15. Kijk naar de javascript die door de compiler gegenereerd wordt in 'main.js'. Je zult hier nu zien dat 'Gun' wordt meegegeven aan zowel 'Handgun' en 'Rifle'.
16. Bestudeer de javascript code een beetje en je ziet dat het schrijven van deze code je eigenlijk bespaard wordt met het gebruik van TypeScript.. Yeey!

### Vervolg
Je hebt nu wat basis kennis gemaakt met zowel overerving als met interfaces. Maar hier het houdt natuurlijk niet op. Er zijn nog vele dingen die je kunt testen. Zoals:
- De 'shoot' methode van 'Gun' implementeren in de afgeleide class 'Handgun'. Je zult hier zien dat dit heel gemakkelijk gaat. In talen zoals C# en Java moest je gebruik maken van het 'override' en het 'virtual' keyword. In TypeScript zijn alle functies al standaard 'virtual' en dus ook 'overridable'.
- Je kunt gaan spelen met overerving tussen interfaces. Gebruik hiervoor ook weer het keyword 'extends'. Je zult hier zien dat er in de afgeleidde interface extra properties en functions kunnen worden toegevoegd die gebruikt kunnen worden.
- In het meegeleverde 'main.ts' bestand zijn wat andere voorbeelden gegeven voor de combinatie tussen interfaces en overerving. Je kunt dit eventueel kopieren en er zelf mee spelen.

In de volgende [module](https://github.com/lmeijdam/typescript-start/tree/master/04) ga je aan de slag met Generics. 