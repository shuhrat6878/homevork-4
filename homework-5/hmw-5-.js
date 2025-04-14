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

// 7-misoll

// let oy = +prompt('1 dan 12 gacha  kiriting !!');
// function faslniAniqla(oy) {
//   switch (oy) {
//     case 12:
//     case 1:
//     case 2:
//           return "Qish";
//           break;
//     case 3:
//     case 4:
//     case 5:
//           return "Bahor";
//           break;
//     case 6:
//     case 7:
//     case 8:
//           return "Yoz";
//           break;
//     case 9:
//     case 10:
//     case 11:
//           return "Kuz";
//           break;
//     default:
//       return "Bunday oy yoq";
//   }
// }

// console.log(faslniAniqla(oy));

// 8-misoll

// let raqam = +prompt('Raqam  kiriting !!');
// function raqamYoz(raqam) {
//   switch (raqam) {
//     case 1:
//       return "bir";
//     case 2:
//       return "ikki";
//     case 3:
//       return "uch";
//     case 4:
//       return "to'rt";
//     case 5:
//       return "besh";
//     default:
//       return "noto'g'ri raqam";
//   }
// }

// console.log(raqamYoz(raqam));

// 9-misoll

// let baho = +prompt('Raqam  kiriting !!');

// function bahoKirit(baho) {
//   switch (baho) {
//     case 5:
//       return "A'lo";
//     case 4:
//       return "Yaxshi";
//     case 3:
//       return "Qoniqarli";
//     case 2:
//       return "Qoniqarsiz";
//     case 1:
//       return "Yomon";
//     default:
//       return "Noto'g'ri baho";
//   }
// }

// console.log(bahoKirit(baho));

// 10-misol

// let fasl = prompt('Fasil  kiriting !!');

// function faslOylari(fasl) {
//   switch (fasl.toLowerCase()) {
//     case "qish":
//       return "Dekabr, Yanvar, Fevral";
//     case "bahor":
//       return "Mart, Aprel, May";
//     case "yoz":
//       return "Iyun, Iyul, Avgust";
//     case "kuz":
//       return "Sentabr, Oktabr, Noyabr";
//     default:
//       return "Bunday fasl yo'q";
//   }
// }

// console.log(faslOylari(fasl));

// 11-misol

// const son = prompt("Son kiriting:");

// if (son === null || son === "") {
//     console.log("son kiritmadingiz");
// } else {
//     const sonRaqam = Number(son);
//     if (isNaN(sonRaqam)) {
//         console.log("Noto'g'ri son kiritdingiz");
//     } else if (sonRaqam === 0) {
//         console.log("Nol");
//     } else {
//         const musbatManfiy = sonRaqam > 0 ? "Musbat" : "Manfiy";
//         const juftToq = sonRaqam % 2 === 0 ? "juft" : "toq";

//         console.log(`${musbatManfiy} ${juftToq} son`);
//     }
// }
// 12-misol


// function rangQora(rang) {
//   switch (rang.toLowerCase()) {
//     case "qizil":
//       return "#FF0000";
//     case "yashil":
//       return "#00FF00";
//     case "ko'k":
//       return "#0000FF";
//     default:
//       return "Bunday rang kodi yo'q";
//   }
// }

// console.log(rangQora("qizil"));
// console.log(rangQora("yashil"));
// console.log(rangQora("qora"));
// console.log(rangQora("Qizil"));




// 13-misol

// function toqSon(n) {
//   let natija = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       natija += i;
//       if (i < n - 1 || (i === n && n % 2 !== 0)) {
//         natija += ", ";
//       }
//     }
//   }
//   console.log(natija);
// }

// toqSon(10);
// toqSon(5);
// toqSon(1);
// toqSon(2);

// 14-misol

// function raqamYigindi(son) {
//   let yigindi = 0;
//   const sonSatr = son.toString();
  
//   for (let i = 0; i < sonSatr.length; i++) {
//     yigindi += parseInt(sonSatr[i]);
//   }

//   return yigindi;
// }

// console.log(raqamYigindi(456));
// console.log(raqamYigindi(123456));

// 15-misol


// function teskariQilish(satr) {
//   let teskariSatr = "";

//   for (let i = satr.length - 1; i >= 0; i--) {
//     teskariSatr += satr[i];
//   }

//   return teskariSatr;
// }


// console.log(teskariQilish("salom"));
// console.log(teskariQilish("dunyo"));



// 16-misol


// function jadvalKop(n) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
//   }
// }

// jadvalKop(5);

// 17-misoll


// function qoshish(n, k) {
//   let yigindi = 0;
//   let i = 0;

//   while (i < k) {
//     yigindi += n;
//     i++;
//   }

//   console.log(yigindi);
// }


// qoshish(3, 4);
// qoshish(2, 5);


// 18-misoll

// function almashtirish(son) {
//   let sonSatr = son.toString();
//   let natija = "";

//   for (let i = 0; i < sonSatr.length; i++) {
//     if ((i + 1) % 2 === 0) {
//       natija += "0";
//     } else {
//       natija += sonSatr[i];
//     }
//   }

//   return parseInt(natija);
// }


// console.log(almashtirish(12345));
// console.log(almashtirish(98765));

// 19-misoll

// function fizzBuzz(n) {
//   let natija = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       natija += "FizzBuzz";
//     } else if (i % 3 === 0) {
//       natija += "Fizz";
//     } else if (i % 5 === 0) {
//       natija += "Buzz";
//     } else {
//       natija += i;
//     }

//     if (i < n) {
//       natija += ", ";
//     }
//   }
//   console.log(natija);
// }

// fizzBuzz(15); 



// 20-misoll


function kopaytirish(n) {
  for (let i = 1; i <= n; i++) {
    let qator = "";
    for (let j = 1; j <= n; j++) {
      qator += i * j + "  ";
    }
    console.log(qator);
  }
}

kopaytirish(3);
console.log("\n");
kopaytirish(4);





