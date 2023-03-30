class Animal {
    name: string;
    age: number;
    sound: string;
  
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    makeSound(): void {
      console.log(`${this.name} makes a ${this.sound} sound`);
    }
  }
  
  class Mammal extends Animal {
    furColor: string;
  
    constructor(name: string, age: number, sound: string, furColor: string) {
      super(name, age, sound);
      this.furColor = furColor;
    }
  
    hasFur(): void {
      console.log(`${this.name} has ${this.furColor} fur`);
    }
  }
  
  class Bird extends Animal {
    wingspan: number;
  
    constructor(name: string, age: number, sound: string, wingspan: number) {
      super(name, age, sound);
      this.wingspan = wingspan;
    }
  
    hasWings(): void {
      console.log(`${this.name} has a wingspan of ${this.wingspan} inches`);
    }
  }
  
  class Fish extends Animal {
    swimSpeed: number;
  
    constructor(name: string, age: number, sound: string, swimSpeed: number) {
      super(name, age, sound);
      this.swimSpeed = swimSpeed;
    }
  
    swimsFast(): void {
      console.log(`${this.name} swims at a speed of ${this.swimSpeed} mph`);
    }
  }
  
  // Example usage:
  const lion = new Mammal("Lion", 5, "roar", "brown");
  lion.makeSound(); // "Lion makes a roar sound"
  lion.hasFur(); // "Lion has brown fur"
  
  const eagle = new Bird("Eagle", 3, "screech", 72);
  eagle.makeSound(); // "Eagle makes a screech sound"
  eagle.hasWings(); // "Eagle has a wingspan of 72 inches"
  
  const shark = new Fish("Shark", 10, "chomp", 50);
  shark.makeSound(); // "Shark makes a chomp sound"
  shark.swimsFast(); // "Shark swims at a speed of 50 mph"
  