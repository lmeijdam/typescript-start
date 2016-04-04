var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Main = (function () {
    function Main(something) {
        this.something = something;
        this.veld = Color.Red;
    }
    Main.prototype.saySomething = function () {
        if (this.veld === Color.Blue)
            return "<h1>" + this.something + "</h1>";
        return "Niet helemaal juist";
    };
    Main.prototype.saySomething2 = function (naam) {
        return "<h1>" + naam + "</h1>";
    };
    Main.prototype.saySomething3 = function (naam) {
        return naam ? naam : "Niets";
    };
    return Main;
}());
;
var main = new Main("Hello, Microsoft mensen!");
document.body.innerHTML = main.saySomething3();
//# sourceMappingURL=main.js.map