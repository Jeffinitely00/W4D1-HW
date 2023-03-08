/**
 ********** Creating Classes & Factories
 */ 



class Hamster {
    constructor (name, owner) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice() {
        return this.price;
    }
} 


class Person extends Hamster{
    constructor(name, owner) {
        super(name, owner);
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        console.log(this.name)
    }
    getAge() {
        console.log(this.age)
    }
    getWeight() {
        console.log(this.weight)
    }
    greet() {
        console.log(`Hi! My name is ${this.name}`)
    }
    eat() {
      this.weight++;
      this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= super.getPrice();
    }
}

const person = new Person("Timmy", "Timmy")
console.log(person)


person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
console.log(person);

person.eat();
person.eat();
person.eat();
person.eat();
person.eat();
console.log(person);

person.exercise();
person.exercise();
person.exercise();
person.exercise();
person.exercise();
console.log(person);

person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
console.log(person);

const hamster = new Hamster("Gus", "Timmy")
console.log(hamster)

person.buyHamster();
console.log(person)

person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
person.ageUp();
console.log(person);

person.eat();
person.eat();
console.log(person);

person.exercise();
person.exercise();
console.log(person);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/**
 * Chef Make Dinners
 */

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
    serve() {
        return `Tonight's dinner will consist of ${this.appetizer}, a ${this.entree} and ${this.dessert} for desert.`
    }
}

class Chef extends Dinner{
    constructor () {
        super(appetizer, entree, dessert)
    }
    serve() {
        return `Tonight's dinner will consist of ${this.appetizer}, a ${this.entree} and ${this.dessert} for desert.`
    }
}

let dinner1 = new Dinner("Pigs in a Blanket", "Butter Chicken", "Cheesecake");
let dinner2 = new Dinner("Mozarella Sticks", "Palak Paneer", "Fudge");
let dinner3 = new Dinner("Crockpot Buffalo Chicken Wings", "Spicy Pork Vindaloo", "Chocolate Chip Cookies");

console.log(dinner1.serve());
console.log(dinner2.serve());
console.log(dinner3.serve());