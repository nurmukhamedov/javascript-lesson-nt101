// const form = document.querySelector('.form');

// const nameInput = document.querySelector('#name');
// const priceInput = document.querySelector('#price');
// const itemId = document.querySelector('#itemId');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (itemId.value) {
//         item = JSON.parse(localStorage.getItem(itemId.value));
//         item.name = nameInput.value;
//         item.price = priceInput.value;

//     } else {
//         item = {
//             name: nameInput.value,
//             price: priceInput.value
//         }
//         itemId.value = `item ${Date.now()}`;
//     }

//     localStorage.setItem(itemId.value, JSON.stringify(item));
//     nameInput.value = "";
//     priceInput.value = "";
//     itemId.value = "";

//     renderList();
// });
// const itemList = document.querySelector('.itemList');


// function renderList() {
//     itemList.innerHTML = '';
//     let totalPrice = 0;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             const item = JSON.parse(localStorage.getItem(key));
//             console.log(item);
//             const list = document.createElement('li');
//             list.innerHTML = `Name: ${item.name} Price: ${item.price}`;
//             itemList.appendChild(list);
//             const editButton = document.createElement('button');
//             editButton.innerHTML = 'Edit';
//             list.appendChild(editButton)
//             editButton.addEventListener('click', () => {
//                 nameInput.value = item.name;
//                 priceInput.value = item.price;
//                 itemId.value = key;
//             });
//             const deleteButton = document.createElement('button');
//             deleteButton.innerHTML = 'Delete';
//             list.appendChild(deleteButton);
//             deleteButton.addEventListener('click', () => {
//                 localStorage.removeItem(key);
//                 renderList();
//             })
//             totalPrice = totalPrice + Number(item.price);
//             console.log(totalPrice);
//         }

//     }
// }
// renderList();


// const myFragment = document.createDocumentFragment();
// const container = document.getElementById('countries');

// const text1 = document.createElement('p');
// const text2 = document.createElement('p');
// const text3 = document.createElement('p');



// myFragment.appendChild(text1);
// myFragment.appendChild(text2);
// myFragment.appendChild(text3);

// container.appendChild(myFragment);

// console.log('Alert tugasa chiqaman');
// alert('Hello World');

// const text = document.querySelector('.text');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {

//     setTimeout(() => {
//         text.style.color = 'red';

//     }, 2000);

//     text.innerText = 'Hello World';

// })

// let pizza;

// function orderPizza() {
//     console.log('Order Pizza');

//     setTimeout(() => {
//         pizza = 'My Pizza';
//     }, 3000);

//     console.log('Pizza was ordered');
// }

// orderPizza(); //
// // 'Order Pizza'

// // My pizza hozircha qayerdadir turadi
// // Pizza was ordered

// // Eat undefined


// console.log(`Eat ${pizza}`);

// setTimeout(() => {
//     console.log(pizza);
// }, 2500);


const name = 'uzbekistan';
const url = `https://restcountries.com/v3.1/name/${name}`;

const countryWrapper = document.querySelector('#countries');

fetch(url).then((response) => {
    if (!response.ok) {
        throw new Error('Ishlamayapti')
    }
    return response.json();
}).then((data) => {
    data.map((country) => {

        const countryElement = document.createElement('div');
        const flagElement = document.createElement('img');
        const countryName = document.createElement('h3');
        const populationElement = document.createElement('span');
        flagElement.src = country.flags.png;
        flagElement.alt = country.name.common;
        countryName.innerText = country.name.common;
        countryElement.appendChild(flagElement);
        populationElement.innerText = country.population;

        countryElement.appendChild(countryName);
        countryElement.appendChild(populationElement);
        countryWrapper.appendChild(countryElement);
        console.log(country);

    })

}).catch((error) => console.error('Nimadir xato ketgan API ga qara', error));





