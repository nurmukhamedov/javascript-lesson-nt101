// const x = 5;
// const y = x;



// let z = 6;
// z = 7;
// console.log(x);
// console.log(y);

// const obj = {
//     name: 'John',
//     age: 31
// }


// const obj2 = obj;

// console.log(obj, obj2);

// console.log(obj2.age = 45);

// console.log(obj, obj2);

// const xArray = [1, 2, 3, 4];

// const zArray = xArray;

// zArray.push(5, 6, 7);

// console.log(zArray, xArray);

// let myName = 'Dave';

// myName = 'John';
// myName = 'Jack';

// const array = [1, 2, 3, 4, 5];

// array.push(8);


// const yArray = [1, 2, 3, 4, 5];

// yArray.push(8, 9);

// const zArray = yArray;

// zArray.push(25);
// console.log(zArray);
// console.log(yArray);

// const scoreObj1 = {
//     name: 44,
//     age: 12,
//     third: {
//         a: 1, b: 2
//     }
// }

// const newObjWithDeep = scoreObj1;

// newObjWithDeep.name = 'Hello world';

// console.log(scoreObj1);

// console.log(newObjWithDeep);

// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = JSON.parse(JSON.stringify(arr1));

// arr2.push(11);

// console.log(arr1);
// console.log(arr2);

// const person1 = {
//     name: 'John',
//     age: 31,
// }
// const person2 = {
//     name: 'Tifanny',
//     age: 25,
// }
// const person3 = {
//     name: 'Jack',
//     age: 45,
// }

// function info(a, b, c) {
//     return this.name + " " + this.age + (a + b + c)
// }

// const arr = [1, 2, 3];

// const newInfo1 = info.call(person2, 1, 2, 3);
// const newInfo2 = info.call(person1, 1, 2, 3);

// const newInfo3 = info.apply(person3, arr);

// console.log(newInfo1);
// console.log(newInfo2);
// console.log(newInfo3);


const url = 'https://reqres.in/api/users';

fetch(url).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));

const person = {
    name: name.value,
    job: job.value,
    age: age.value,
    id: id.value
}

fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(person)
}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));

const newObj = {
    name: 'Jake',
    job: 'Animator',
    age: 18,
    id: 4040
}
const objectId = 1;

fetch(`${url}/${objectId}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newObj)
}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));

const objectIdToDelete = 1;

fetch(`${url}/${objectIdToDelete}`, {
    method: 'DELETE'
}).then(response => response.ok ? 'Object deleted' : 'Object deletion failed').catch(error => console.error(error));





