// var age = 22;

// var isStudent = true;
// console.log(isStudent);
// var myMoney;
// console.log(myMoney);
// myMoney = 5;
// console.log(myMoney);

// var myId = Symbol("9895");

// var myBigNumber = BigInt(1324);
// alert("Siz rostdan sayt cookieslariga rozimisiz");

// var userFirstName = prompt("Sizning ismingiz nima?");
// var userAge = prompt("Yoshingiz");
// console.log(
// 	" Mening ismim " +
// 		userFirstName +
// 		" men " +
// 		userAge +
// 		"\n" +
// 		"\n" +
// 		" yoshdaman ",
// );

// const myCountry = "Uzbekistan";
// let population = 35;
// const continent = "Asia";

// const infoAboutUzbekistan =
// 	" I live in " +
// 	myCountry +
// 	" population: " +
// 	population +
// 	" continent " +
// 	continent;

// console.log(`I live in  ${myCountry} `);

// const myName = "Muhammadrasul";
// const birthYear = prompt("Tug'ilgan yilingiz");
// const currentYear = prompt("Hozirgi yil");
// const myAge = currentYear - birthYear;

// const fiveDegree = 50 % 3;
// console.log(` ${fiveDegree}`);

// let dateBirth = prompt("yilingiz");

// if (dateBirth == 2004) {
// 	console.log("Sizlarni sindirish bandasigamas");
// } else if (dateBirth >= 2005) {
// 	console.log("Sizga ozgina bor");
// } else {
// 	console.log("Sinibsiz");
// }

// let age = prompt("Yoshingiz");

// if (age >= 18) {
// 	console.log("Siz guvohnoma olsabgiz boladi");
// } else {
// 	let yearsLeft = 18 - age;
// 	console.log(`Siz guvohnoma olishingizga ${yearsLeft} yil bor`);
// }




// task - 1
// let birthYear = prompt('Tug`ilgan yilingizni kiriting')
// let century;


// if (birthYear >= 2001) {
//     console.log(` Siz ${century = 21}-asrda tug'ilgansiz`);
// } else {
//     console.log(`Siz ${century = 20}-asrda tug'ilgansiz`);
// }

// const number1 = +prompt('Birinchi raqamni kiriting');
// const number2 = +prompt('Ikkinchi raqamni kiriting');
// const userAnswer = +prompt('Kiritgan raqamlaringiz yig`ingisini kiriting');

// if (userAnswer === number1 + number2) {
//     console.log(`${userAnswer} javobi to'g'ri edi`);
// } else {
//     console.log(`${userAnswer} bu javob xato aslida ${number1 + number2} bo'lishi kerak edi`);
// }

// let ticketPriceInDollar = 500;
// let hotelPriceInDollar = 250;
// let otherPriceInEuro = 120;
// let usdToUzs = 11000;
// let euroToUzs = 12000;
// const userBudget = +prompt('Safar uchun qancha pulingiz bor');

// let totalPriceInSum = (ticketPriceInDollar + hotelPriceInDollar) * usdToUzs + otherPriceInEuro * euroToUzs;

// if (userBudget >= totalPriceInSum) {
//     console.log('Oq yo`l');
// } else {
//     console.log(`Ozgina sabr qiling sizga atigi ${totalPriceInSum - userBudget} yetmayapti`);
// }

// const myNum = Math.round(Math.random() * (25 - 20) + 20);
// console.log(myNum);
// let myNum = 1.25481351321;

// console.log(myNum.toFixed(1));

// let userNum = Number(prompt('Raqam kiriting'));

// console.log(userNum);

// let n = 1 + '1';
// console.log(typeof n);
// n = n - "1";
// console.log(n);
// console.log(2 + 3 + 4 + "5");
// const myNum = '0';
// console.log(Boolean(myNum));
// const money = 0;
// if (money) { console.log("Pulingiz bor ekan!") }
// else {
//     console.log("Pulingiz yo'q ekan!")
// }
// let height;

// if (!height) {
//     console.log('Yay! Height qiymati berildi!')
// } else {
//     console.log('Iltimos height kiriting!')
// }
// const hasDriverLicence = true;
// const hasGoodVision = false;

// if (hasDriverLicence || hasGoodVision) {
//     console.log("Moshina haydasangiz bo'ladi!")
// } else {
//     console.log("Hayday olmaysiz!")
// }
// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);
// console.log(!hasDriverLicence);


// let myWord = document.getElementsByTagName("div");

// console.log(myWord);

const BobWeight = +prompt('Bob bro vazningiz nechchi?');
const BobHeight = +prompt('Bob aka boyingizni ham ayting');
const JohnWeight = +prompt('John bro vazningiz nechchi?');
const JohnHeight = +prompt('John aka boyingizni ham ayting');

const BmiBob = BobWeight / BobHeight ** 2;
const BmiJohn = JohnWeight / JohnHeight ** 2;
console.log(BmiBob);
console.log(BmiJohn);

if (BmiBob > BmiJohn) {
    console.log("Bob sizning BMI baland ekan");
} else {
    console.log("John sizning BMI baland ekan");
}







