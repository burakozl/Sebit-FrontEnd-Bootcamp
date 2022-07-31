// const formValues = document.querySelector('.question-form');
// console.log(formValues[0].value);

// const result = document.querySelector('.result');

// const btnGonder = document.querySelector('.btn');
// console.log(btnGonder);

// btnGonder.addEventListener("click", (e) => {

//     let selectedAnswers = [];
//     let total = 0;
//     for (let i = 0; i < formValues.length; i++) {
//         if (formValues[i].checked) {
//             selectedAnswers.push(formValues[i].value)
//         }
//     }
//     console.log(selectedAnswers);

//     selectedAnswers.map(e => {
//         if(e === "E"){
//             total + = 25;
//         }
//     });
//     console.log();
    



//     e.preventDefault();
// });

const correctAnswers = ["E","E","E","E"];
const form = document.querySelector('.question-form');

const result = document.querySelector(".result");


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

    let score = 0;
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;//her evet cavabı için score 25 ekleniyor
        }
    });
    result.classList.remove("d-none");//d-none classı silindi
    result.querySelector('#percentage').textContent = `${score}%`;
});

