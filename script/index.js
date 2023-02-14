let tabButtons = document.querySelectorAll('.tab__lables .lable');
let tabContentItems = document.querySelectorAll('.tab__content .content__item');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButtons.forEach((btn) => {
            btn.classList.remove('active');
        })
        button.classList.add('active');

        tabContentItems.forEach((block) => {
            block.classList.remove('active');
        })
        tabContentItems[index].classList.add('active');
    })
})

let swipeBtn = document.getElementById('swipe-down-btn');
swipeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let tab = document.querySelector(".tab");
    window.scrollTo({
        top: tab.offsetTop,
        behavior: 'smooth'
    })
})