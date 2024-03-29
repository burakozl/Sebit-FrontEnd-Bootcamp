const correctAnswers = ["8","10","3","25"];
const form = document.querySelector('.question-form');
const result = document.querySelector(".result");
const fullCorrect = document.querySelector("#fullCorrect");
const button = document.querySelector(".btn");

console.log(form);
console.log(result);

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const userAnswers = [ //radiobutton checked değerleri diziye attık
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value
    ];
    console.log(userAnswers);
    let score = 0;
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;//her evet cavabı için score 25 ekleniyor
        }
    });
    result.classList.remove("d-none");//d-none classı silindi
    result.querySelector('#percentage').textContent = `${score}%`;
    if(score === 100){
        fullCorrect.classList.remove("d-none");
        button.setAttribute('disabled','');
    }
});