let isimler = ['burak','can','ali'];
// console.log(isimler[0]);

// isimler[1] = 'osman';
// console.log(isimler);

let yaslar = [43,5,6,32];
console.log(yaslar[3]);

let rastgele = ["Burak", "Ozel", 10, 15];
console.log(rastgele);

//Dizimin elaman sayısı
console.log(rastgele.length);

//Join kullanımı
let tireli = isimler.join("-");
console.log(tireli);

let virgullu = isimler.join(", ");
console.log(virgullu);

//indexof kullanımı
let sira = isimler.indexOf('ali');
console.log(sira);

//concat metodu => ana dizi değişmez
let eklenmis = isimler.concat(['osman','ebru']);
console.log(eklenmis);
console.log(isimler);

//push metodu => ana dizi değişir
isimler.push('leyla');
console.log(isimler);

//pop kullanımı
isimler.pop(); // son elemanı siler
console.log(isimler);


