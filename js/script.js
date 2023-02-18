// const arr = [2, 4, 6, 8, 10, 2];

// const checkIndexArray = function(numbers, num) {
//     const checkedNum = numbers.indexOf(num);
//     if(checkedNum === -1) {
//         return []
//     } else {
//         return [checkedNum]
//     }
// }
// console.log(checkIndexArray(arr, 2));

// Tekshirilgan yosh siz tekshirgan obyektlarni barcha agelaridan kichik
// Tekshirilgan yosh siz tekshirgan obyektlarni barcha agelaridan kichik emas

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// const checkAge = function (allPeople, age) {
//     return allPeople.age >= age
// }

// const checkPeople = people.every((person) => checkAge(person, 26));

// if (checkPeople) {
//     console.log('Tekshirilgan yosh siz tekshirgan obyektlarni barcha agelaridan kichik');
// } else {
//     console.log('Tekshirilgan yosh siz tekshirgan obyektlarni barcha agelaridan kichik emas');
// }

// const checkAge = function (allPeople, userAge) {
//     const checkedPeople = allPeople.every((person) => person.age >= userAge);
//     if (checkedPeople) {
//         return 'Tekshirilgan yosh siz tekshirgan obyektlarni barcha agelaridan kichik';
//     } else {
//         return 'Tekshirilgan yosh siz tekshirgan obyektlarni barcha agelaridan kichik emas';
//     }
// }
// console.log(checkAge(people, 25));




// const arr = [2, 4, 6, 8, 10, 2];

// console.log(arr);

// arr.forEach((num, index, array) => {
//     array[index] = num * 2
// });

// console.log(arr);


// const arr2 = [2, 4, 6, 8, 10, 2];

// const doubledNumbers = arr2.map((num, index) => {
//     return num * 2;
// });

// console.log(doubledNumbers);

// console.log(arr2);


// const numbers = [5, 6, 7, 52, 1, 4, 3, 4, 9, 11,];

// console.log(numbers);

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// const names = ['John', 'David', 'Alice', 'Becker'];

// names.sort().reverse();

// console.log(names);



// const numbers = [1, 2, 13, 5, 20, 6, 8, 4];

// const filteredNum = numbers.filter((num) => {
//     return num >= 5
// })

// console.log(filteredNum);

// const animals = [
//     {
//         age: 2,
//         type: 'dog'
//     },
//     {
//         age: 3,
//         type: 'cat'
//     },
//     {
//         age: 8,
//         type: 'dog'
//     },
//     {
//         age: 8,
//         type: 'horse'
//     },
//     {
//         age: 8,
//         type: 'dog'
//     },
//     {
//         age: 8,
//         type: 'elephant'
//     }
// ]

// const allDogs = animals.filter((animal) => {
//     if (animal.type === 'dog') {
//         return animal
//     }
// })
// console.log(allDogs);



// const numbers = [1, 2, 13, 5, 20, 6, 8, 4];

// const sumNumbers = numbers.reduce((acc, element) => {
//     return acc + element
// })
// console.log(sumNumbers);






const cars = [
    {
        img: 'https://motor.ru/imgs/2022/03/03/10/5274800/6ddcf7e5e0a907893873e987c81ec9d1fedcc76e.jpg',
        car: 'BMW',
        status: 'new',
        quantity: 8
    },
    {
        img: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/720x720_the-new-bmw-i7-xdriv.jpg.grp-transform/small/720x720_the-new-bmw-i7-xdriv.jpg',
        car: 'BMW',
        status: 'old',
        quantity: 12
    },
    {
        img: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_675,w_1200/q_auto:eco/f_auto/v1/cms/uploads/ggutkfdonramc5akyims',
        car: 'Mercedes Benz',
        status: 'new',
        quantity: 2
    },
    {
        img: 'https://www.investing.com/academy/wp-content/uploads/2022/08/tesla-statistics.jpg',
        car: 'Tesla',
        status: 'new',
        quantity: 15
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 19
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 19
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 19
    }
]


const cardContainer = document.querySelector('.row');


const allDatas = cars.map((element) => {
    return `
    <div class="col-lg-4 zafar">
    <div class="card" style="width: 100%;">
        <img src=${element.img}
            class="card-img-top" alt=${element.car}>
        <div class="card-body">
            <h5 class="card-title">${element.car}</h5>
            <p class="card-text">${element.status}</p>
             <span>${element.quantity}</span>
        </div>
    </div>
</div>
    `
});

console.log(allDatas.join(''));

cardContainer.innerHTML = allDatas.join('');















