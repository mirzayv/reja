// Masalani izohi
// A-TASK:

// Shunday 2 parametrli function tuzing,
// hamda birinchi parametrdagi harfni ikkinchi parametrdagi so‘zdan
// necha marta qatnashganini return qilishi kerak.

// Masalan: countLetter("e", "engineer") → 3

// masalani yechimi:
/* function countLetter(letter, word) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("e", "engineer")); // 3 */

/* function countLetter(letter, word) {
  let count = 0;

  for (let char of word) {
    console.log(char, word, letter);
    if (char === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("e", "engineer")); // 3 */

// Masalani izohi
// B-TASK:
// Shunday 1 parametrli function tuzing,
// u berilgan string ichidagi raqamlar sonini qaytarsin.
// masalan countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// masalani yechimi:

/* function countDigits(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      count++;
    }
  }

  return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9")); // 7 */
//console.log('train task ishga tushdi!');

//Masalani izohi
//TASK-C:

//Shop nomli class tuzing, 3 ta parametr qabul qiladi (non, lag'mon, cola).
//3 ta metod bo‘ladi: qoldiq, sotish, qabul.

//masalani yechimi:
/* class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    console.log(
      `${this.non}ta non, ${this.lagmon}ta lag'mon, ${this.cola}ta cola mavjud`,
    );
  }

  sotish(mahsulot, soni) {
    this[mahsulot] -= soni;
    console.log(`${soni}ta ${mahsulot} sotildi`);
  }

  qabul(mahsulot, soni) {
    this[mahsulot] += soni;
    console.log(`${soni}ta ${mahsulot} qabul qilindi`);
  }
}

// test
const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
 */

//D-TASK

// Masalani izohi
// TASK-D:
// Ikkita parametr ega function tuzing,
// berilgan birinchi va ikkinchi parametr qiymatlari
// o'zaro to'liq mos kelsa true qaytarsin.
// Masalan: checkContent("mitgroup", "gmtiprou") return true

/* function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Testlar:
console.log(checkContent("mitgroup", "gmtiprou")); // true
console.log(checkContent("hello", "olehl")); // true
console.log(checkContent("abc", "def")); // false
console.log(checkContent("abc", "ab")); // false */

// Masalani izohi
// TASK-E:
// Shunday function tuzing,
// u bitta string argumentini qabul qilib,
// qabul qilingan stringni teskari ko'rinishda return qilsin.
//
// Masalan:
// getReverse("hello") return "olleh"

/* function getReverse(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

console.log(getReverse("hello")); // olleh */

// TASK-F

// Masalani izohi
// Yagona string argumentga ega findDoublers nomli
// function tuzing.
// Agar stringda bittadan ortiq bir xil harflar
// ishtirok etgan bo‘lsa true, aks holda false qaytarsin.

// Masalan:
// findDoublers("hello") return true

//function findDoublers(str) {
//for (let i = 0; i < str.length; i++) {
//if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//return true;
//}
//}

//return false;
//}

//console.log(findDoublers("hello")); // true
//console.log(findDoublers("Bruce")); // false

// G-TASK

// Masalani izohi
// TASK-G:
// Yagona parametrga ega function tuzing.
// Array tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.
// Masalan: getHighestIndex([5, 21, 12, 21, 8]) return 1

/* function getHighestIndex(arr) {
  let highest = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
      index = i;
    }
  }

  return index;
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); */

// H-TASK

// Masalani izohi
// TASK-H:
// Integerlardan iborat arrayni qabul qilib,
// faqatgina positive sonlarni olib
// string holatida return qilsin.
//
// Masalan:
// getPositive([1, -4, 2]) return "12"

/* function getPositive(arr) {
  return arr.filter((num) => num > 0).join("");
}

console.log(getPositive([1, -4, 2])); */

// TASK-I

// Masalani izohi
// Array ichida eng ko'p takrorlangan raqamni topib qaytarsin.

// Masalan:
// majorityElement([1, 2, 3, 4, 5, 4, 3, 4]) return 4

function majorityElement(arr) {
  let max = 0;
  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > max) {
      max = count;
      result = arr[i];
    }
  }

  return result;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// console.log("Jack Ma maslahatlari");
/* const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq xato qiling", // 20-30
  "uzingizni ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
]; */
// callback function
/* function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("Insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a < 20 && a <= 30) callback(null, list[1]);
  else if (a < 30 && a <= 40) callback(null, list[2]);
  else if (a < 40 && a <= 50) callback(null, list[3]);
  else if (a < 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}

console.log("passed here 0");

maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log(data);
  }
});

console.log("passed here 1");
 */
/* function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    callback(null, list[5]);
  }
} */

/* function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}
 */

/* maslahatBering(10, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
}); */

/* maslahatBering(25, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
}); */

/* maslahatBering(55, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});
 */
/* maslahatBering("salom", (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});
 */
/* 
maslahatBering("salom", (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
 */
/* console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");
 */

/* async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];
    // setTimeout(function () {
    //   return list[5];
    // }, 5000);
  }
} */

/* async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
} */

// call via then/catch
// then/catch
// console.log("passed here 0");
// maslahatBering(65)
//  .then((data) => {
//    console.log("javob:", data);
//  })
//  .catch((err) => {
//    console.log("ERROR:", err);
//  });
// console.log("passed here 1");

// call via async/await
/* // async/await
async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);

  javob = await maslahatBering(31);
  console.log(javob);

  javob = await maslahatBering(41);
  console.log(javob);
}

run();
 */

//Async function
/* async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });
  }
}

// then/catch
async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);
}

run();
 */
