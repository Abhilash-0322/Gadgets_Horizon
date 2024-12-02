document.getElementById('search-bar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scroll-top';
scrollTopBtn.textContent = 'Top';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
});
