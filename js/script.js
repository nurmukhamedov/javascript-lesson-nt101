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

let age = prompt("Yoshingiz");

if (age >= 18) {
	console.log("Siz guvohnoma olsabgiz boladi");
} else {
	let yearsLeft = 18 - age;
	console.log(`Siz guvohnoma olishingizga ${yearsLeft} yil bor`);
}
