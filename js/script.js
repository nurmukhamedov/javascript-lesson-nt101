// const number = [-1, 2, -3.25, 9, 10.6, -7];
// const myArra = [5, 6, 7, 8, 10]
// const positiveNumbers = [];

// const calcPositiveNums = function (nums) {
//     for (let element of nums) {
//         if (element < 0) {
//             element = -element
//         }
//         positiveNumbers.push(Math.round(element))
//     }
// }

// calcPositiveNums(number);
// console.log(positiveNumbers);


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let iterator = 0;

// while (iterator <= 10) {
//     console.log(iterator);
//     iterator++
// }

// let dice = Math.round(Math.random() * 10 + 1);

// while (dice !== 9) {
//     dice = Math.round(Math.random() * 10 + 1);
//     if (dice === 9) {
//         console.log(`Siz yutdingi 9 chiqdi`);
//     } else {
//         console.log(`Boshqa son ${dice} chiqdi`);
//     }
// }


const form = document.querySelector('.form');
const formName = document.querySelector('.form__name');
const formRelation = document.querySelector('.form__relation');
const formNumber = document.querySelector('.form__number');
const formButton = document.querySelector('.form__button');
const allSpan = document.querySelectorAll('.form__span');



form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!formName.value) {
        allSpan[0].innerText = 'Iltimos ism kiriting';
        formName.classList.add('form__name--style');

    } else {
        allSpan[0].innerText = '';
        formName.classList.remove('form__name--style');
    }
    if (!formRelation.value) {
        allSpan[1].innerText = 'Iltimos qarindoshizi kiriting';
        formRelation.classList.add('form__name--style');
    } else {
        allSpan[1].innerText = '';
        formRelation.classList.remove('form__name--style');
    }
    if (!formNumber.value) {
        allSpan[2].innerText = 'Iltimos raqam kiriting';
        formNumber.classList.add('form__name--style');
    } else {
        allSpan[2].innerText = '';
        formNumber.classList.remove('form__name--style');
    }

    const box = document.querySelector('.box');


    const contact = document.createElement('div');
    contact.classList.add('form__contact');


    const image = document.createElement('img');
    image.src = './images/bmw.png';
    image.alt = 'BMW car';
    image.classList.add('form__image');
    contact.appendChild(image);

    const nameSpan = document.createElement('span');
    nameSpan.innerText = formName.value;
    nameSpan.classList.add('form__contact-span');
    contact.appendChild(nameSpan);

    const relationSpan = document.createElement('span');
    relationSpan.innerText = formRelation.value;
    relationSpan.classList.add('form__contact-span');
    contact.appendChild(relationSpan);

    const numberSpan = document.createElement('span');
    numberSpan.innerText = formNumber.value;
    numberSpan.classList.add('form__contact-span');
    contact.appendChild(numberSpan);


    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'delete';
    buttonDelete.classList.add('form__delete');

    buttonDelete.onclick = function () {
        box.removeChild(contact);
    }
    contact.appendChild(buttonDelete);

    box.appendChild(contact);

})
