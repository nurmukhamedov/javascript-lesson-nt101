// const studentId = document.querySelector('#studentId');
// const btn = document.querySelector('#lookupButton');
// const studentInfo = document.querySelector('#studentInfo');



// const students = [
//     { id: 1, name: 'Alice', grade: 'A' },
//     { id: 2, name: 'Bob', grade: 'C' },
//     { id: 3, name: 'Charlie', grade: 'B' },
//     { id: 4, name: 'Dave', grade: 'A' },
//     { id: 5, name: 'Eve', grade: 'B' },
// ];

// btn.addEventListener('click', () => {
//     const id = +studentId.value;
//     const student = students.find((s) => s.id === id);
//     if (student) {
//         studentInfo.innerHTML = `<h3> Name: ${student.name} va ${student.grade} </h3>`;
//     } else {
//         studentInfo.innerHTML = `<h3> Bunday id raqamli user yo'q</h3>`;
//     }
// });

// const myList = document.querySelectorAll('.myList li');


// myList.forEach((list) => {
//     list.addEventListener('click', () => {
//         console.log(`Clicked ${list.textContent}`);
//     });
// })


// console.log(window);

// localStorage.setItem('1', 'Muhammadrasul');
// localStorage.setItem('2', 'Mirzohid');



// const student1 = localStorage.getItem('1');
// const student2 = localStorage.getItem('2');
// console.log(typeof student1);
// console.log(student2);

// const person = {
//     name: 'John',
//     age: 30
// }


// const jsonObj = JSON.stringify(person);
// const jsonPareObjs = JSON.parse(jsonObj)

// console.log(jsonObj);
// console.log(jsonPareObjs);


// const block = document.querySelector('.block');
// const text = document.querySelector('.text');

// const box = block.previousElementSibling;
// const card = block.nextElementSibling;
// const myList = text.parentNode;


// console.log(block);
// console.log(box);
// console.log(card);
// console.log(myList);

// const link = document.querySelector('.link');
// const myList = link.closest('.text');
// console.log(myList);

const form = document.querySelector('.form');

const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const itemId = document.querySelector('#itemId');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (itemId.value) {
        item = JSON.parse(localStorage.getItem(itemId.value));
        item.name = nameInput.value;
        item.price = priceInput.value;

    } else {
        item = {
            name: nameInput.value,
            price: priceInput.value
        }
        itemId.value = `item ${Date.now()}`;
    }

    localStorage.setItem(itemId.value, JSON.stringify(item));
    nameInput.value = "";
    priceInput.value = "";
    itemId.value = "";

    renderList();
});
const itemList = document.querySelector('.itemList');




function renderList() {
    itemList.innerHTML = '';

    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const item = JSON.parse(localStorage.getItem(key));

            console.log(item);
            const list = document.createElement('li');
            list.innerHTML = `Name: ${item.name} Price: ${item.price}`;
            itemList.appendChild(list);
            const editButton = document.createElement('button');
            editButton.innerHTML = 'Edit';

            list.appendChild(editButton)
            editButton.addEventListener('click', () => {
                nameInput.value = item.name;
                priceInput.value = item.price;
                itemId.value = key;
            })
        }
    }
}
renderList();




