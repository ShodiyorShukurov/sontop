// GET ELEMENTS
const elForm = document.querySelector('.js-form');
const elFormInput = elForm.querySelector('.js-form-input');
const elFormBtn = elForm.querySelector('.js-btn');
const elAttempt = document.querySelector('.js-attempt');
const elResult = document.querySelector('.js-result');

let maxAttempts = 7;
const randomNumber = Math.floor(Math.random() * 100);

// console.log(randomNumber)

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    maxAttempts--;
    elAttempt.textContent = `${maxAttempts} ta urinish qoldi!`;
    const inputValue = Number(elFormInput.value.trim());

    if (inputValue > randomNumber) {
        elResult.textContent = "Ixtiyoriy sondan kichikroq sonni kiriting";
        elResult.classList.remove("alert-success");
        elResult.classList.add('alert-warning');
    } else if (inputValue < randomNumber) {
        elResult.textContent = "Ixtiyoriy sondan kattaroq sonni kiriting";
        elResult.classList.remove('alert-warning');
        elResult.classList.add("alert-danger");
    } else {
        elResult.textContent = "Urra topdingiz😍!!!";
        elResult.classList.remove('alert-warning');
        elResult.classList.add("alert-success");
    }

    if (maxAttempts === 0) {
        elFormInput.disabled = true;
        elResult.classList.add("alert-danger");
        elAttempt.classList.add("alert-danger");
        elAttempt.textContent = "Urinishlar soni tugadi!"
        elResult.textContent = "Afsus yuqazdingiz😢!!!"
        elFormBtn.textContent = "Again";
        elFormBtn.addEventListener('click', ()=>{
            window.location.reload();
        })
    }
    elFormInput.value = "";
})