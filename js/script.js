
// const form = document.getElementById('form');
// const userName = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const cnfPassword = document.getElementById('cnfpassword');
// const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// function setError(input, message) {
//     const formControl = input.parentElement; 
//     const small = formControl.querySelector('small');
//     formControl.className = 'form-control error';
//     small.innerText = message;
// }

//  function setSuccessFor(input) {
//     const formControl = input.parentElement; 
//     console.log(formControl);
//     formControl.className = 'form-control success';
//  }
//  function isEmail(email) {
//     return validateEmail.test(email);
//  }
 
// form.addEventListener('submit', (e) => { 
//     e.preventDefault();
//     checkInputs();
// }); 

// function checkInputs() {
//     const userNameValue = userName.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const cnfpasswordValue = cnfpassword.value.trim();
    
//     if(userNameValue === '') {
//         setError(userName, 'username qism bo`sh bo`lishi mumkin emas')
//     } else {
//         setSuccessFor(userName);
//     } 
//     if(emailValue === '') {
//         setError(email, 'Email qism bo`sh bo`lishi mumkin emas')
//     } else if(!isEmail(emailValue)) {
//         setError(email, 'Mumkin bo`lmagan belgilar ishlatildi')
//     }
//     else {
//         setSuccessFor(email);
//     }
//     if(passwordValue === '') {
//         setError(password, 'password qism bo`sh bo`lishi mumkin emas')
//     }else {
//         setSuccessFor(password)
//     } 
//     if (cnfpasswordValue === '') {
//         setError(cnfPassword, 'password confirm qism bo`sh bo`lishi mumkin emas')
//     }  else if(passwordValue !== cnfpasswordValue) {
//         setError(cnfPassword, 'Parol mos kelmadi')
//     } else {
//         setSuccessFor(cnfPassword)
//     }
// }

// const ourGroup = ['Mirzohid', 'Mardonbek', 2, true, 'Zafar', 'Nuriddin'];
// const testArr = [];
// ourGroup.unshift(5, false, 'Hello');
// ourGroup.pop();
// ourGroup.shift();
// ourGroup.shift();
// ourGroup.shift();
// ourGroup.shift();
// console.log(ourGroup);

// const myNewArr = ['Shohjahon', 'Fazliddin', ['Barkamol', 'Sherzod']];
// const myNewNested = myNewArr[2];
// console.log(myNewNested[0]); 

// const myBills = [125, 555, 44];

// function myFun(params) {
    
// }
// myFun(myBills[0])
// myFun(myBills[1])
// myFun(myBills[2])
// const years = [1980, 2000, 2001, 2012];

// const calcAge = (birthYear) => {
//     return 2023 - birthYear;
// }


 
// console.log(calcTip(bills[0]))
// calcTip(bills[1]);
// calcTip(bills[2]);





// function calcTip(bill) {
//     if(bill >= 50 && bill <= 300) {
//         return bill *0.15
//      } else {
//        return bill * 0.3
//      }
// }

// const bills = [125, 555, 44, 80];

//   for(let i =0; i < bills.length; i++) {
//        const myBill = bills[i];
//      calcTip(myBill) 
// }
