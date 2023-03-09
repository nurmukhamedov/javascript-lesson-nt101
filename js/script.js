// const url = 'https://reqres.in/api/users';



// const tableBody = document.getElementById('tbody');
// const form = document.getElementById('add-user-form');

// fetch(url).then(response => response.json()).then(data => {
//     data.data.map((user) => {

//         const { id, first_name, last_name, email, avatar } = user;
//         const row = document.createElement('tr');
//         row.innerHTML = `
//              <td>${id}</td>
//              <td>${first_name}</td>
//              <td>${last_name}</td>
//              <td>${email}</td>
//              <td> <img src = "${avatar}" alt="${first_name}" /> </td>

//              <td>
//                 <button class="edit-button" data-id="${id}"  data-name="${first_name}" data-lname="${last_name}" data-email="${email}">Edit</button>
//              </td>
//              <td>
//                 <button class="delete-button" data-id="${id}" >Delete</button>
//              </td>
//         `

//         tableBody.appendChild(row)
//     })
// }).catch(error => console.error(error));



// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const id = document.getElementById('update-id').value;
//     const name = document.getElementById('name').value;
//     const lName = document.getElementById('lName').value;
//     const email = document.getElementById('email').value;
//     const avatar = document.getElementById('avatar').files[0];

//     if (id) {
//         updateUser(id, name, lName, email);
//         form.reset();

//     } else {

//         const formData = {
//             name: name,
//             lname: lName,
//             email: email
//         }

//         fetch(url, {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(formData)
//         }).then(response => response.json()).then(data => {
//             const row = document.createElement('tr');

//             const reader = new FileReader();
//             reader.readAsDataURL(avatar);

//             reader.onload = () => {
//                 const avatarUrl = reader.result;

//                 row.innerHTML = `
//                 <td>${data.id}</td>
//                 <td>${name}</td>
//                 <td>${lName}</td>
//                 <td>${email}</td>
//                 <td>
//                 <img src = "${avatarUrl}" alt="${name}" />
//                 </td>
//                 <td>
//                    <button class="edit-button" data-id="${data.id}"  data-name="${name}" data-lname="${lName}" data-email="${email}">Edit</button>
//                 </td>
//                 <td>
//                    <button class="delete-button" data-id=${id} >Delete</button>
//                 </td>
//                 `
//             }

//             tableBody.appendChild(row);
//             form.reset();

//         }).catch(error => console.error(error));
//     }
// })


// tableBody.addEventListener('click', (e) => {

//     if (e.target.classList.contains('edit-button')) {
//         const id = e.target.dataset.id;
//         const name = e.target.dataset.name;
//         const lname = e.target.dataset.lname;
//         const email = e.target.dataset.email;

//         form.querySelector('#update-id').value = id;
//         form.querySelector('#name').value = name;
//         form.querySelector('#lName').value = lname;
//         form.querySelector('#email').value = email;

//         document.querySelector('#save-user-button').textContent = 'Update User';

//     } else if (e.target.classList.contains('delete-button')) {
//         const id = e.target.dataset.id;

//         deleteUser(id).then(() => {
//             const tableRow = e.target.closest("tr");
//             tableRow.remove();
//         }).catch((error) => {
//             console.error(error);
//         })
//     }

// })

// async function deleteUser(id) {
//     try {
//         const response = await fetch(`${url}/${id}`, {
//             method: 'DELETE'
//         });
//         if (response.ok) {
//             return response.text();
//         }
//     } catch (error) {
//         return console.error(error);
//     }
// }

// async function updateUser(id, name, lname, email) {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("lname", lname);
//     formData.append('email', email);


//     try {
//         const response = await fetch(`${url}/${id}`, {
//             method: 'PUT',
//             body: formData
//         });
//         const data = await response.json();
//         const tableRows = document.querySelectorAll('#user-list tbody tr');

//         for (let row of tableRows) {
//             if (row.cells[0].textContent === id.toString()) {
//                 row.cells[1].textContent = name;
//                 row.cells[2].textContent = lname;
//                 row.cells[3].textContent = email;
//             }
//         }
//         document.querySelector('#save-user-button').textContent = 'Save';
//         return data;
//     } catch (error) {
//         return console.error(error);
//     }
// }



const url1 = 'https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://restcountries.com/v3.1/all';

// const getData = (url) => {
//     return new Promise((resolve, reject) => {

//         fetch(url).then((response) => {

//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new error('Response was not ok')
//             }

//         }).then((data) => {
//             resolve(data);
//         }).catch((error) => {
//             reject(error);
//         })

//     })
// }

// getData(url1).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error(error);
// });

// getData(url2).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error(error);
// });



// function getData2(url) {
//     return new Promise((resolve, reject) => {
//         let data = new XMLHttpRequest();
//         data.open('GET', url);

//         data.onload = function () {
//             if (data.status === 200) {
//                 resolve(data)
//             } else {
//                 reject(Error('Data olishda xatolik'))
//             }
//         }
//         data.onerror = function () {
//             reject(Error('Data olishda xatolik'))
//         };

//         data.send();
//     });
// }

// getData2(url1).then(function (response) {
//     return response
// }).then(function (myData) {
//     console.log(myData);
// }).catch(function (error) {
//     console.error(error);
// })


setTimeout(() => {
    console.log('Men 1');
}, 2000);

console.log('Men 2');