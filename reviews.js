document.getElementById('search-bar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('review-header');
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});