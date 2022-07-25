// let email="burakk.oozel@gmail.com";
let email = 'burakk.oozel@gmail.com';
console.log(email);

//Birleştirme

let ad = "Burak";
let soyad = "ÖZEL HHH";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[1]);

//kaç karakter 
console.log(adSoyad.length);

//String metodlar
console.log(adSoyad.toUpperCase());
let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);

//Kaçıncı indexte Bulunduğu
let index = adSoyad.indexOf('k');
console.log(index);
let indexLast = adSoyad.lastIndexOf('a');
console.log(indexLast);

//Slice Kullanımı
let ilkIsim = adSoyad.slice(0,5);
console.log(ilkIsim);

//Replace Kullanımı
let yerDegistir = adSoyad.replace(" ","");
console.log(yerDegistir);

//ReplaceAll kullanımı
let yerDegistirAll = adSoyad.replaceAll(" ","");
console.log(yerDegistirAll);



