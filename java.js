// 1 Masala
let son_1 = prompt("4 xonali sonni kiriting:");

if (son_1.length === 4) {
  let ikkinchiRaqam = parseInt(son_1[1]);
  let birinchiRaqam = parseInt(son_1[0]);
  let tortinchiRaqam = parseInt(son_1[3]);
  let uchinchiRaqam = parseInt(son_1[2]);

  let juftRaqamlar = "";

  if (birinchiRaqam % 2 === 0) {
    juftRaqamlar += birinchiRaqam + " ";
  }

  if (ikkinchiRaqam % 2 === 0) {
    juftRaqamlar += ikkinchiRaqam + " ";
  }

  if (uchinchiRaqam % 2 === 0) {
    juftRaqamlar += uchinchiRaqam + " ";
  }

  if (tortinchiRaqam % 2 === 0) {
    juftRaqamlar += tortinchiRaqam + " ";
  }

  if (juftRaqamlar !== "") {
    console.log("Juft raqamlar: " + juftRaqamlar);
  } else {
    console.log("Juft raqamlar yo'q");
  }
} else {
  console.log("Noto'g'ri son kiritildi");
}

// 2 Masala
let son_3 = +prompt("3 xonali sonni kiriting:");

let natija = son_3 % 2 === 0 && son_3 % 5 === 0;

console.log(natija);

// 3 Masala
let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));


let ortacha = (son1 + son2 + son3) / 3;

console.log("Sonlar ortachasi: " + ortacha);

// 4 Masala
let qiymat = prompt("Sonni kiriting:");

let uzunlik = qiymat.length;

let palindrom = uzunlik > 1; 

if (uzunlik > 1) {
    for (var i = 0; i < uzunlik / 2; i++) {
        if (qiymat[i] !== qiymat[uzunlik - 1 - i]) {
            palindrom = false;
            break;
        }
    }
}

if (palindrom) {
    console.log(qiymat + " Palindrom son.");
} else {
    console.log(qiymat + " Palindrom emas.");
}

// Bitta alohida misol Poyezd
let lines = prompt("Poyezdning ketishi va kechikishi soatlari:\n(Masalan: 10 15)");

let times = lines.split(" ");

let ketishSoati = parseInt(times[0]);
let kechikishSoati = parseInt(times[1]);

let nechchadaKetadi = 0;

if (kechikishSoati <= ketishSoati) {
    nechchadaKetadi = kechikishSoati + 24 - ketishSoati;
} else {
    nechchadaKetadi = kechikishSoati - ketishSoati;
}

console.log("Poyezd " + nechchadaKetadi + " Soat ichida ketadi.");
