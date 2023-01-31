// const calcAverageResult = (attempt1, attempt2, attempt3) => {
//     const averageResult = (attempt1 + attempt2 + attempt3) / 3;
//     return averageResult;
// }
// const team1 = calcAverageResult(90, 80, 170);
// const team2 = calcAverageResult(90, 88, 160);



// const winnerFunction = function (data1, data2, data3) {
//     if (data1 > data2) {
//         return 'Birinchi jamoa yutdi';
//     } else if (data1 === data2) {
//         return 'Durrang'
//     } else {
//         return 'Ikkinchi jamoa g`alaba qozondi'
//     }
// }

// console.log(winnerFunction(team1, team2));

// const totalStudents = 2500;

// const calcPercentage = function (studnetsNumber) {
//     const calc = studnetsNumber / totalStudents * 100;
//     return `Sizning guruhdagi o'quvchilar 'quv markazning umumiy o'quvchilarini ${calc.toFixed(1)}% ni tashkil qilar ekan`
// }

// console.log(calcPercentage(36));

// function myFun(a = 1, b = 1, c = 0) {
//     return a + b + c
// }
// console.log(myFun(2));


// const country = "Canada";
// switch (country) {
//     case "France":
//     case "Spain":
//     case "Ireland":
//     case "Poland":
//         console.log("This country is in Europe.");
//         break;
//     case "United States":
//     case "Canada":
//         console.log('This country is in North America');
//         break;
//     default:
//         console.log("This country is not in Europe.");
// }



// switch (value1) {
//     case '1':
//         switch (value2) {
//             case '1':
//                 val = "90"; break;
//             case '2':
//                 val = "80"; break;
//             case '3':
//                 val = "70"; break;
//         }
//         break;
//     case '2':
//         switch (value2) {
//             case '1':
//                 val = "80"; break;
//             case '2':
//                 val = "90"; break;
//             case '3':
//                 val = "70"; break;
//         }
//         break;
// }
// const para1 = document.querySelector('p').textContent;
// const para2 = document.querySelector('p').innerText;
// const para3 = document.querySelector('p').innerHTML;
// console.log(para1);
// console.log(para2);
// console.log(para3);


// const inputName = document.querySelector('.name');
// const box = document.querySelector('.box');
// const btn = document.querySelector('.btn');



// btn.addEventListener('click', function () {
//     box.innerHTML = `<span>${inputName.value}</span>`
// });

// inputName.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         box.innerHTML = `${inputName.value}`
//     }

const box = document.querySelector('.box');
const btn = document.querySelector('.btn-change');


btn.addEventListener('click', function () {
    box.classList.toggle('box-extra');
});
// })
// // console.log(inputName.value = 'Muhammadrasul');

// btn.addEventListener('click', function () {
//     box.innerHTML = `<h1>${inputName.value}</h1>`;
// })

// const box = document.querySelector('.box');
// const btnChange = document.querySelector('.btn-change');

// btnChange.addEventListener('click', function () {
//     box.classList.toggle("box-extra");
// })
