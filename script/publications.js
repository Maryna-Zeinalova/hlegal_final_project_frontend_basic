let btnNews = document.getElementById('btn-news');
let btnArticles = document.getElementById('btn-articles');
btnArticles.addEventListener('click', () => {
    btnNews.classList.remove('active-button');
    btnArticles.classList.add('active-button');
    
})
btnNews.addEventListener('click', () => {
    btnArticles.classList.remove('active-button');
    btnNews.classList.add('active-button');
    
})