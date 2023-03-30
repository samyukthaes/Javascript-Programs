class Car {
    make: string;
    model: string;
    year: number;
    speed: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    accelerate(): void {
      this.speed += 10;
      console.log(`Speeding up to ${this.speed} mph...`);
    }
  
    decelerate(): void {
      if (this.speed >= 10) {
        this.speed -= 10;
        console.log(`Slowing down to ${this.speed} mph...`);
      } else {
        console.log("Can't slow down any further!");
      }
    }
  
    stop(): void {
      this.speed = 0;
      console.log("Stopping the car...");
    }
  
    showSpeed(): void {
      console.log(`Current speed: ${this.speed} mph`);
    }
  }
  
  function main(): void {
    const car = new Car("Tesla", "Model S", 2023);
  
    console.log(`Welcome to your ${car.make} ${car.model}!`);
  
    let command = "";
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
  