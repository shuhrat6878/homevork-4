// 1-misol

// let a = +prompt('1 da 100 gacha baho kiriting !!');

// if (90 < a && a < 100) {
//     console.log('Alo');
// }else if (70 < a && a < 89){
//     console.log("Yaxshi");
// }else if (60 < a && a < 69){
//     console.log("Qoniqarli");
// }else if (0 < a && a < 59){
//     console.log("Qoniqarsiz");
// }

// 2-miaol

// let a = +prompt('1 da 7 gacha Raqam kiriting !!');

// switch (a) {
//     case 1:
//         console.log('Dushanba');
//         break;
//     case 2:
//         console.log('Seshanba');
//         break;
//     case 3:
//         console.log('Chorshanba');
//         break;
//     case 4:
//         console.log('Payshanba');
//         break;
//     case 5:
//         console.log('Juma');
//         break;
//     case 6:
//         console.log('Shanba');
//         break;
//     case 7:
//         console.log('Yakshanba');
//         break;
//     default:{
//         console.log("Bunday hafta kuni yoq")
//     }
// }

// 3-misoll

// let a = +prompt('yosh ucun Raqam kiriting !!');

// if (0 < a && a <= 12) {
//     console.log("Bola");
// } else if (13 <= a && a <= 19) {
//     console.log("'O'smir");
// }else if (20 <= a && a <= 59) {
//     console.log("Katta");
// }else {
//     console.log("Qariya");
// }
//  4-misol
// function engKattasi(a, b, c) {
//   let katta;

//   if (a >= b && a >= c) {
//     katta = a;
//   } else if (b >= a && b >= c) {
//     katta = b;
//   } else {
//     katta = c;
//   }

//   return katta;
// }

// console.log(engKattasi(5, 8, 3));
// console.log(engKattasi(10, 10, 10));
// console.log(engKattasi(2, 2, 3));

// 5-misoll

// function logParol(login, parol) {
//   if (login === "admin" && parol === "12345") {
//     return "Xush kelibsiz, Admin";
//   } else if (login === "user" && parol === "password") {
//     return "Xush kelibsiz, Foydalanuvchi";
//   } else {
//     return "Login yoki parol xato";
//   }
// }

// console.log(logParol("admin", "12345"));
// console.log(logParol("user", "password"));
// console.log(logParol("admin", "wrong"));

// funcsiya 2-misol

// function post(image, title, tags) {
//     this.image = image;
//     this.title = title;
//     this.tags = tags;
//     this.likes = Math.floor(Math.random() * 1000) + 1;
//     this.views = Math.floor(Math.random() * 1000) + 1;
// }

// let insta = new post("photo.jpg", "Bugun zor kun", ["fun", "holiday"]);
// let insta2 = new post("photo.jpg", "Bugun zor kun", ["fun", "holiday"]);

// console.log(insta);
// console.log(insta2);

// funcsiya 3-misopl

// let sizeObj={
//     small: 2500,
//     medium: 4000,
//     large: 6000,
// };
// let extraObj = {
//     cheese: 10000,
//     tomato: 8000,
//     free: 13000,
// };

// function orderPizza(size, extra) {
//     let extraPrice = 0;
//     for (let i=0; i < extra.length; i++) {
//         extraPrice += extraObj[extra[i]];
//     }
//     this.size = size;
//     this.extra = extra;
//     this.price = sizeObj[this.size] + extraPrice;
//     this.time = `${Math.floor(Math.random()*45)+15} daqiqa` ;
// }
// let order = new orderPizza("medium", ["cheese", "tomato"]);
// let order2 = new orderPizza("medium", ["cheese", "tomato", "free"]);



// console.log(order);
// console.log(order2);


// function telegramBt(massage, replay, time){
//     this.massage = massage;
//     if ()
//     this.replay = replay;
//     this.time = time;

// }

// 8- misoll

// function randCommit() {
//     let str = "qwertyuipasdfghjklzxcvbnm123456789";
//     let commit = "";
//     let saveCommit = [];
//     for (let i = 0; i < 8; i++){
//         commit += str[Math.floor(Math.random() * str.length)];

//     }
//     if (!saveCommit.includes(commit)) {
//         saveCommit.push(commit);
//         return commit;
//     } else {
//         return randCommit();

//     }
// }

// console.log(randCommit());

