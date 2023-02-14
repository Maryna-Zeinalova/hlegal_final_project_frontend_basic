let button = document.getElementById('mob-btn');
let overlay = document. getElementById('overlay');
let menu = document.getElementById('mob-menu');
let close = document.getElementById('close-btn');
let bg = document.getElementById('mob-bg');

button.addEventListener('click', () => {
    overlay.classList.add('active');
    menu.classList.add('active');
    bg.classList.add('active');
})
close.addEventListener('click', () => {
    overlay.classList.remove('active');
    menu.classList.remove('active');
    bg.classList.remove('active');
})


// let tabButtons = document.querySelectorAll('.tab__lables .lable');
// let tabContentItems = document.querySelectorAll('.tab__content .content__item');

// tabButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         tabButtons.forEach((btn) => {
//             btn.classList.remove('active');
//         })
//         button.classList.add('active');

//         tabContentItems.forEach((block) => {
//             block.classList.remove('active');
//         })
//         tabContentItems[index].classList.add('active');
//     })
// })

// let btnNews = document.getElementById('btn-news');
// let btnArticles = document.getElementById('btn-articles');
// btnArticles.addEventListener('click', () => {
//     btnNews.classList.remove('active-button');
//     btnArticles.classList.add('active-button');
    
// })
// btnNews.addEventListener('click', () => {
//     btnArticles.classList.remove('active-button');
//     btnNews.classList.add('active-button');
    
// })


// let swipeBtn = document.getElementById('swipe-down-btn');
// swipeBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     let tab = document.querySelector(".tab");
//     window.scrollTo({
//         top: tab.offsetTop,
//         behavior: 'smooth'
//     })
// })


// let consultationButton = document.getElementById('consultation-button');
// let consultationForm = document.getElementById('consultation-form');
// let closeForm = document.getElementById('close-form');
// consultationButton.addEventListener('click', () => {
//     consultationButton.preventDefault;
//     consultationForm.classList.remove('dissappear');
//     consultationForm.classList.add('appear');
// })
// closeForm.addEventListener('click', () => {
//     consultationForm.classList.remove('appear');
//     consultationForm.classList.add('disappear');
// })