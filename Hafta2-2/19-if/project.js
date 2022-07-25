const yeniSifre = "dssssdadasdd";

if(yeniSifre.length > 12){
    console.log("Güçlü Şifre");
}else if(yeniSifre.length >= 8 && yeniSifre.length <= 12){
    console.log("Yeterli Şifre");
}else{
    console.log("Şifreyi yeniden giriniz");
}