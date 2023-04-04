// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello my name is ${this.name} I am ${this.age} years old`);
//     }
// }


// const john = new Person('John', 31);
// john.sayHello();
// const jack = new Person('Jack', 25);
// jack.sayHello();

// console.log(john);
// console.log(jack);

// function People(name, age, status) {
//     this.firstName = name;
//     this.userAge = age;
//     this.userStatus = status;

//     this.greet = function () {
//         console.log(`Hello my name is ${this.name} I am ${this.age} years old and I am ${this.status}`);
//     }
// }

// const bob = new People('Bob', 25, 'Married');

// console.log(bob);

// class Person {
//     constructor(name, age) {
//         let _name = name;
//         let _age = age;

//         this.getName = function () {
//             return _name;
//         }

//         this.getAge = function () {
//             return _age;
//         }
//     }
// }

// const person = new Person('John', 30);


// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     start() {
//         console.log(`Starting car`);
//     }
//     stop() {
//         console.log('Stoping car');
//     }
// }

// const myCar = new Car('GM', 'Gentra1.5', 2022);
// const myFriendsCar = new Car('Honda', 'Civic', 2023);

// console.log(myFriendsCar);

// console.log(myCar);

// myCar.start()

// console.log(localStorage);


class Animal {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    speak() {
        console.log(`${this.name} shovqinli`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
    }

    speak() {
        console.log(`${this.name} woof `);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age)
    }
    speak() {
        console.log(`${this.name} meow`);
    }
}


const myCat = new Cat('Flyu', 2);


console.log(myCat);



// class newCat extends Cat {
//     constructor(name, age) {
//         super(name, age)
//     }
//     speak() {
//         return 'Hello World'
//     }
// }

// const newCat1 = new newCat('Bla bla', 2);
// console.log(newCat1);
// const dog = new Dog('Bobik', 2);
// const cat = new Cat('Kisa', 1.5);

// console.log(dog);
// console.log(cat.speak());



class CartItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        let itemIndex = this.items.findIndex((i) => i.name === item.name);

        if (itemIndex === -1) {
            this.items.push(item);
        } else {
            this.items[itemIndex].quantity += item.quantity;
        }

    }

}

// Cart hamda cartItem degan constructor class yaratib olasiz. CartItemda name, price, quantity propertylar bo'ladi,. Cart classda esa addItem degan metod bo'ladi shu yordamida array yasab olasiz. 

// Example usage:
let cart = new Cart();

let item1 = new CartItem("Apple", 0.99, 3);
let item2 = new CartItem("Orange", 1.49, 2);
let item3 = new CartItem("Banana", 0.49, 5);

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

console.log(cart.items);