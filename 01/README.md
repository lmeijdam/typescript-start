## 01 - Starten met TypeScript

Om te beginnen met TypeScript zorg je er eerst voor dat je TypeScript hebt geinstalleerd via de NPM (Node Package Manager). Dit installeer je globaal met het volgende commando; 

```
npm install -g typescript
```

Zodra je dit gedaan hebt creëer je een main.ts bestand met de volgende inhoud:
```js
class Main {
    constructor(public something: string) { }
    
    saySomething() {
        return "<h1>" + this.something + "</h1>";
    }
};

var main = new Main("Hello, world!"); // Hier mag je zelf invullen wat je getoond wil hebben op het scherm.
    
document.body.innerHTML = main.saySomething();
```

Als 1 na laatste stap maken we nog even een index.html om een interface te geven aan de app.
```html
<!DOCTYPE html>
<html>
  <head><title> TypeScript Demo </title></head>
  <body>
    <script src='main.js'></script>
  </body>
</html>
```

Voor de oplettende onder jullie, je ziet dat de script tag verwijst naar main.js, maar we een main.ts bestand hebben. Dit klopt. We moeten TypeScript namelijk nog omzetten naar plain javascript. Dit doen we met het commando
```
tsc
```

Met bovenstaand commando spreken we de TypeScript compiler aan. Open nu index.html en test of je de ingevulde waarde van 'new Main("waarde")' te zien krijgt op het scherm. 

Als dit werkt ga alvast door naar stap 2.
