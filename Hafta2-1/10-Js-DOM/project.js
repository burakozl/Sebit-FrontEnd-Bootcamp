// const button = document.querySelector('button'); 1. yöntem
// const button = document.querySelector('#buttonId'); 2. yöntem
// const button = document.querySelector('.buttonClass'); 3. yöntem

const button = document.getElementById('buttonId'); //4.yöntem
// const button = document.getElementsByClassName('buttonClass')[0]; 5.yöntem

//ilk yöntem 
// button.addEventListener('click', () => {
//     console.log("Tıklandı");
// });

//ikinci yöntem

// function add() {
//     console.log("Tıklandı");
// }

console.log(button);

const liElemanlari = document.querySelectorAll('li');
console.log(liElemanlari);

liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', (e) => {
        //console.log(e.target);
        e.target.style.color = 'blue';
    });
});

const ulDegerlerim = document.querySelector('ul');
console.log(ulDegerlerim);

// ulDegerlerim.remove();

liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', (e) => {
        //console.log(e.target);
        e.target.remove();
    });
});
const liElemanim = document.createElement('li');
liElemanim.textContent = 'JavaScipt';
//append =>  sona eleman ekler
//prepend => başa eleman ekler

button.addEventListener('click',() => {
    ulDegerlerim.append(liElemanim);
})