## Module 04: Generics

Net als in C# is het ook in TypeScript mogelijk gebruik te maken van generics. Enkele van de voornaamste voordelen van generics is dat het type-safe is en makkelijk herbruikbaar. Een heel bekend voorbeeld voor Generics is ÁrrayList. Bij instantiatie geef je namelijk op uit welk type de ArrayList bestaat. In deze module zie je in een korte reeks aan oefeningen hoe je in TypeScript werkt met Generics.

1. Om te beginnen maak je een nieuwe map aan met een willekeurige naam (bv. Generics).

2. Maak hier een tsconfig.json bestand en vul deze met de volgende inhoud;
    ```json
    {
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "sourceMap": true
        }
    }
    ```

3. Maak vervolgens een *main.ts* bestand en laat deze nog even leeg.

4. Als laatste maak je of kopieer je de *index.html* uit 1 van de vorige modules. Zorg ervoor dat de inhoud overeenkomt met;
    ```html
    <html lang="en">
    <head>
        <title>Module 04: Generics</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <script src="main.js"></script>
    </body>
    </html>
    ``` 

5. Open nu *main.ts* en maak hier 2 classes. 1 voor een non-generic oplossing en de andere voor een generic oplossing. Voor deze module is er een hele simpele implementatie gegeven aan deze 2 classes. Dit is:
    ```javascript
    class NonGenericClass{
    constructor(public value: any){        
        }
    }

    class GenericClass<T>{
        constructor(public value: T) { }
    }
    ```

6. Zoals je ziet wordt er bij de 2e class (GenericClass) een nieuwe syntax geintroduceerd. De <..> geeft aan dat deze class generic is. de <..> is ook te gebruiken bij een interface of bij functies.

7. Om dit nu te testen maak je 2 variabeles en probeer je de 'value' te wijzigen. In code ziet dit er bijvoorbeeld als volgt uit:
    ```javascript 
    var anyValue = new NonGenericClass("hello");
    anyValue.value = true;
    anyValue.value = 5;

    // string
    var stringValue1 = new GenericClass<string>("stringValue1");
    stringValue1.value = 5; // error because the type given was 
    ```
    
8. Het eerste scenario zal zonder problemen compileren en zal ook geen melding geven. Echter geeft het 2e scenario een foutmelding bij 'stringValue1.value = 5;' : **Type 'number' is not assignable to type 'string'.**. Dit treed op omdat er bij het aanmaken het type **string** is meegegeven. Een ander type dan string toevoegen gaat voor de 'GenericClass' niet werken.

9. Zet de foutive regel maar in commentaar en ga vervolgens verder met de volgende stap.

    > Als je het gecompileerde JavaScript bestand zou bekijken, zul je zien dat de <T> niet mee wordt genomen bij de GenericClass. Dit is omdat JavaScript zelf geen Generics ondersteund.

10. Om een ander voorbeeld te geven combineren we een implementatie met een factory. Maak 2 classes. Een class genaamd 'EmailAppointment' en een class 'EmailMessage'. Geef beide classe minimaal 2 velden die volledig verschillen van elkaar. Bijvoorbeeld voor EmailAppointment de velden 'date' en 'location' en voor EmailMessage 'message' en 'recipient'.

11. (Optioneel) Om de classes te laten werken met een interface kun je ook de interface 'IMailItem' maken en hier al wat verlden in definieren die vervolgens gebruikt worden in zowel EmailMessage als in EmailAppointment.

12. Creëer nu een nieuwe classe genaamd 'MailItemFactory'. Deze factory hoeft niet generic te zijn. We gaan hier namelijk gebruik maken van een generic methode die een EmailAppointment of EmailMessage op basis van het opgegeven type.

13. In de MailItemFactory komt 1 methode. Dit is de 'create' methode. Deze geeft een nieuwe instantie terug en ziet er als volgt uit;
    ```javascript
    create<T>(type: { new (): T }) {
        return new type();
    }
    ```
    
14. Zoals je kunt zien wordt er een 'new (): T' syntax toegevoegd aan de parameter 'type'. Dit is nodig voor TypeScript om te weten dat er een nieuw object van het type T (nog onbekend) geinstantieerd gaat of kan worden. Dit is terug te lezen op de website; [Generics](https://www.typescriptlang.org/docs/handbook/generics.html).

15. Als je nu een nieuwe instantie zou maken van de MailItemFactory kun je de create methode aanroepen. Je kunt nu willekeurig objecten laten maken van zowel EmailMessage als EmailAppointment met *'VARIABELENAAM.create<EmailAppointment>(EmailAppointment);'*.

16. Je zult nu ook zien dat wanneer je als 'type' een EmailAppointment opgeeft, maar een EmailMessage probeerd te maken er de volgende melding wordt gegeven door TypeScript: *'Argument of type 'typeof EmailMessage' is not assignable to parameter of type 'new () => EmailAppointment'*

    > Vreemd genoeg is dit **wel** mogelijk wanneer de velden vanuit EmailAppointment in EmailMessage geplaatst worden. TypeScript geeft hier namelijk geen foutmelding meer over omdat beide objecten (classes) uit dezelfde properties bestaan. Let hier dus op.

17. In de praktijk komt het vrijwel nooit voor dat je 1 factory methode/class gebruikt voor het maken van 2 verschillende objecten. Dit omdat je vaak nog wat logica wilt toevoegen voor je het nieuwe object teruggeeft. Om dit op te lossen zie je in de bijgeleverde code in 'main.ts' dat er bij het commentaar van 'Solution 3' een ander voorbeeld staat.

18. Om hier op in te haken. Je ziet dat de logica voor de class 'EmailMessage' in de 'MessageFactory' kan worden toegevoegd en dat dit een implementatie is van de 'IFactory<T>' interface. Denk hierbij aan het *SOLID* principe.

    > SOLID: (Single responsibility, Open-closed, Liskov substitution, Interface segregation and Dependency inversion) - [WIKI](https://nl.wikipedia.org/wiki/SOLID)
    
Nu je kennis hebt gemaakt met Generics kun je aan de slag met de volgende [module](https://github.com/lmeijdam/typescript-start/tree/master/05). Hier ga je nog meer in op het toepassen van het SOLID principe waarbij je het opsplitsen van code in verschillende bestanden mogelijk kan maken. 
