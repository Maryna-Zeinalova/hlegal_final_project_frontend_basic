let consultationButton = document.getElementById('consultation-button');
let consultationForm = document.getElementById('consultation-form');
let closeForm = document.getElementById('close-form');
consultationButton.addEventListener('click', () => {
    consultationButton.preventDefault;
    consultationForm.classList.remove('dissappear');
    consultationForm.classList.add('appear');
})
closeForm.addEventListener('click', () => {
    consultationForm.classList.remove('appear');
    consultationForm.classList.add('disappear');
})