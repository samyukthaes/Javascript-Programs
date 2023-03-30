var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a ").concat(this.sound, " sound"));
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, sound, furColor) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.furColor = furColor;
        return _this;
    }
    Mammal.prototype.hasFur = function () {
        console.log("".concat(this.name, " has ").concat(this.furColor, " fur"));
    };
    return Mammal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, sound, wingspan) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.wingspan = wingspan;
        return _this;
    }
    Bird.prototype.hasWings = function () {
        console.log("".concat(this.name, " has a wingspan of ").concat(this.wingspan, " inches"));
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound, swimSpeed) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.swimSpeed = swimSpeed;
        return _this;
    }
    Fish.prototype.swimsFast = function () {
        console.log("".concat(this.name, " swims at a speed of ").concat(this.swimSpeed, " mph"));
    };
    return Fish;
}(Animal));
// Example usage:
var lion = new Mammal("Lion", 5, "roar", "brown");
lion.makeSound(); // "Lion makes a roar sound"
lion.hasFur(); // "Lion has brown fur"
var eagle = new Bird("Eagle", 3, "screech", 72);
eagle.makeSound(); // "Eagle makes a screech sound"
eagle.hasWings(); // "Eagle has a wingspan of 72 inches"
var shark = new Fish("Shark", 10, "chomp", 50);
shark.makeSound(); // "Shark makes a chomp sound"
shark.swimsFast(); // "Shark swims at a speed of 50 mph"
