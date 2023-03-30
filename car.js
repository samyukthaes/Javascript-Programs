var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    Car.prototype.accelerate = function () {
        this.speed += 10;
        console.log("Speeding up to ".concat(this.speed, " mph..."));
    };
    Car.prototype.decelerate = function () {
        if (this.speed >= 10) {
            this.speed -= 10;
            console.log("Slowing down to ".concat(this.speed, " mph..."));
        }
        else {
            console.log("Can't slow down any further!");
        }
    };
    Car.prototype.stop = function () {
        this.speed = 0;
        console.log("Stopping the car...");
    };
    Car.prototype.showSpeed = function () {
        console.log("Current speed: ".concat(this.speed, " mph"));
    };
    return Car;
}());
function main() {
    var car = new Car("Tesla", "Model S", 2023);
    console.log("Welcome to your ".concat(car.make, " ").concat(car.model, "!"));
    var command = "";
    while (command !== "quit") {
        command = prompt("Enter a command (accelerate, decelerate, stop, quit):") || "";
        switch (command) {
            case "accelerate":
                car.accelerate();
                car.showSpeed();
                break;
            case "decelerate":
                car.decelerate();
                car.showSpeed();
                break;
            case "stop":
                car.stop();
                car.showSpeed();
                break;
            case "quit":
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid command. Try again.");
                break;
        }
    }
}
main();
