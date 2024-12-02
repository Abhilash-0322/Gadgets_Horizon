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

// document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('click', function () {
//         const modalContent = card.innerHTML;
//         const modal = document.createElement('div');
//         modal.className = 'modal';
//         modal.innerHTML = `
//             <div class="modal-content">
//                 ${modalContent}
//                 <button class="close-modal">Close</button>
//             </div>
//         `;
//         document.body.appendChild(modal);
//         document.querySelector('.close-modal').addEventListener('click', () => modal.remove());
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('img');
    lazyImages.forEach(img => {
        img.loading = 'lazy';
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
