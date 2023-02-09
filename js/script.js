// const input = document.querySelector('.input');

// const button = document.querySelector('.button');

// const box = document.querySelector('.box');

// const replacedName = function (name) {
//     const nameToArray = name.split(' ');
//     return nameToArray.reverse().join(' ');
// }
// button.addEventListener('click', () => {
//     box.innerHTML = `<h2>${replacedName(input.value)}</h2>`
// })

// const userProperty = prompt('Userni properiysini kiriting');
// console.log(userProperty);

// const person = {
//     firstName: 'Muhammadrasul',
//     lastName: 'Nurmukhamedov',
//     age: 22,
//     greeting: function () {
//         console.log(`Hello I am ${this.firstName} and I am ${this.age} years`);
//     }
// }

// const person2 = {
//     firstName: 'Mirjalol',
//     lastName: 'Fozilov',
//     age: 18,
//     greet: person.greeting
// }

// const myArr = [1, 2, 3, 4, 5];

// for (const iterator of myArr) {
//     console.log(iterator);
// }

// for (const key in person2) {
//     console.log(person2[key]);
// }

const calcTravelTime = function (distance) {
    const walkingSpeed = 5;
    const bikeSpeed = 20;
    const carSpeed = 60;
    const planeSpeed = 800;

    const walkingTime = (distance / walkingSpeed).toFixed(1);
    const bikeTime = (distance / bikeSpeed).toFixed(1);
    const carTime = (distance / carSpeed).toFixed(1);
    const planeTime = (distance / planeSpeed).toFixed(1);

    return {
        walking: walkingTime,
        biking: bikeTime,
        driving: carTime,
        flying: planeTime
    }

}

const btn = document.querySelector('#calculate-button');
const result = document.querySelectorAll('.result-li');
console.log(result);

btn.addEventListener('click', () => {
    const userDistance = document.querySelector('#distance').value;
    const travel = calcTravelTime(userDistance);
    console.log(travel);
    result[0].innerText = `Piyoda: ${travel.walking} soat`;
    result[1].innerText = `Velikda: ${travel.biking} soat`;
    result[2].innerText = `Mashinada: ${travel.driving} soat`;
    result[3].innerText = `Samalyotda: ${travel.flying} soat`;
})

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myArr2 = [1, 2, 3, 4, 5,];

const calcSum = function (num) {
    let sum = 0;
    for (const element of num) {
        sum = sum + element
    }
    return sum
}

console.log(calcSum(myArr));
console.log(calcSum(myArr2));

const numbers = [1, 2, -3, -9, -9.25, -3.4, 2.7];


















// for (const key in person) {
//     console.log(person[key]);
// }
// // Muhammadrasul, 22






