// const BobWeight = +prompt('Bob bro vazningiz nechchi?');
// const BobHeight = +prompt('Bob aka boyingizni ham ayting');
// const JohnWeight = +prompt('John bro vazningiz nechchi?');
// const JohnHeight = +prompt('John aka boyingizni ham ayting');

// const BmiBob = BobWeight / BobHeight ** 2;
// const BmiJohn = JohnWeight / JohnHeight ** 2;
// console.log(BmiBob);
// console.log(BmiJohn);

// if (BmiBob > BmiJohn) {
//     console.log(`Bobning BMI ${BmiBob} Johnning ${BmiJohn} dan katta shuncha katta ekan`);
// } else {
//     console.log(`Johning BMI ${BmiJohn} Bobning ${BmiBob} dan katta`);
// }


// const userAge = +prompt("Yoshingizni kiriting");

// if (userAge <= 18) {
//     console.log(`${userAge} yosh ayni o'qiydigan vaqt`);
// } else if (userAge > 18 && userAge < 60) {
//     console.log(`${userAge} yosh ayni ishlaydigan vaqt`);
// } else {
//     console.log(`${userAge} yosh ayni dam oladigan vaqt`);
// }

// const day = prompt("Kunni kiriting");

// if (day === "Monday") {
//     console.log("O'qishga borishingiz kerak va 18:30 da dars berishingiz kerak");
// } else if (day === "Tuesday") {
//     console.log("Uxlang");
// } else {
//     console.log("Noto'g'ri kiritildi");
// }

// switch (day) {
//     case 'Monday':
//         console.log("O'qishga borishingiz kerak va 18:30 da dars berishingiz kerak");
//         break;
//     case 'Tuesday':
//         console.log("Uxlang");
//         break;
//     case 'Wednesday':
//         console.log('Chorshanba');
//         break;
//     default:
//         console.log("Noto'g'ri kiritildi");
//         break;
// }
// const userAge = +prompt("Yoshingiz");

// if (userAge >= 18) {
//     console.log('Sizga mumkin');
// } else {
//     console.log("Hali yoshsiz");
// }

// const userCalc = userAge >= 18 ? " Sizga mumkin" : "Hali yoshsiz";

// switch (userAge >= 18) {
//     case '0':
//         console.log('Sizga mumkin');
//         break;
//     default:
//         console.log("Hali yoshsiz");
//         break;
// }

// console.log(makeJuice(7, 5));

// function makeJuice(apples, oranges) {
//     const juice = `Juice with ${apples} apples, ${oranges} oranges`;
//     return juice;
// }
// console.log(makeJuice2(10, 8));
// const makeJuice2 = function (apples, oranges) {
//     const juice = `Juice with ${apples} apples, ${oranges} oranges`;
//     return juice;
// }


// const userBirthYear = +prompt('Tugilgan yilingiz');

// const calcAge = function (birthYear) {
//     const age = 2023 - birthYear;
//     return age;
// }

// console.log(calcAge(2008));


const calcAge2 = (birthYear) => {
    const age = 2023 - birthYear;
    return age;
}

const calcAge3 = (birthYear) => 2023 - birthYear;

console.log(calcAge3(2004));









