var Main = (function () {
    function Main(something) {
        this.something = something;
    }
    Main.prototype.saySomething = function () {
        return "<h1>" + this.something + "</h1>";
    };
    return Main;
})();
;

var main = new Main("Hello, world!");

document.body.innerHTML = main.saySomething();
