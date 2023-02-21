// const arr1 = [1, 2, 4];
// const arr2 = [6, 7, 8, 9, 10];
// const arr3 = ['Hello', 'World', true, false];

// function name(params) {

//     const myName = 'Muhammadrasul';
//     console.log(myName);
// }
// name();

// if (true) {
//     const myName = 'Dilshod';
//     var age = 22;
// }

// console.log(age);
// const myName = 'Sardor';

// // const newArr = arr1.concat(arr2, arr3);

// // console.log(newArr);

// const filteredArray = arr1.findIndex((element) => element > 2);
// console.log(filteredArray);

// const infos = {
//     name: 'Alice',
//     cat: {
//         name: 'Dina'
//     }
// }

// const catName = infos.cat?.name;
// console.log(catName);

// console.log('Hello World');

// function name(params) {

//     const myName = 'Muhammadrasul';
//     console.log(myName);
// }
// name();

// const age = 22;

// function myName() {
//     return 'Muhammadrasul';
// }

// console.log(myName());
// console.log(age); 


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
        quantity: 2
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 15
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 20
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

const carsNumber = document.querySelector('.number');

const totalCars = cars.reduce((acc, element) => {
    return acc + element.quantity
}, 0)

carsNumber.innerHTML = `<h3>Total cars: ${totalCars}</h3>`



