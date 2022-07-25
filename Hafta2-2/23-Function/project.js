function hello() {
    console.log("Hello");
}

// hello();
// hello();
// hello();

//Fonksiyonlara parametre gönderme

const canboz = function (ad = "Can", soyad = "Boz") {//default parametre
    console.log(`Ad Soyad ${ad} ${soyad}`);
};

canboz('Burak', 'OZEL');//fonksiyona gönderilem parametreler
canboz();

//Eski tipten arrowa hafif geçiş
const kareAlani = function (kenar) {
    return kenar * kenar;
}

let sonuc = kareAlani(6);
console.log(sonuc);

//arrow ilk verison
// const kareAlanim = (kenar) => {
//     return kenar**2;
// }

//tek paramete ise
// const kareAlanim = kenar => {
//     return kenar**2;
// }

//tek satır kod varsa
const kareAlanim = kenar => kenar ** 2;
console.log(kareAlanim(7));

// const donus = () => {
//     return "Burak"
// }

const stringDonus = () => "Burak";
console.log(stringDonus());

//uygulama
//Ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın

const urunSatis = (urunler, vergi) => {
    let toplam = 0;
    for (let i = 0; i < urunler.length; i++) {
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;
}
let sonucc = urunSatis([10, 20, 30], 0.25);
console.log(sonucc);
