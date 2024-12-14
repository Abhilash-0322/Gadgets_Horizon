document.getElementById('search-bar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('review-section');
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

const darkBtn = document.createElement('button');
darkBtn.id = 'scroll-top';
darkBtn.style.position = 'fixed'; // Fixes the button's position
darkBtn.style.bottom = '20px'; // Adjusts position relative to the viewport
darkBtn.style.right = '20px';
darkBtn.style.width = '50px'; // Makes the button circular
darkBtn.style.height = '50px';
darkBtn.style.zIndex='10';
darkBtn.style.borderRadius = '50%'; // Ensures the button is round
darkBtn.style.display = 'block';
darkBtn.style.border = 'none'; // Removes border for a cleaner look
darkBtn.style.backgroundColor = 'black'; // Sets the background color
darkBtn.style.color = 'cyan'; // Sets text color
darkBtn.style.cursor = 'pointer'; // Changes cursor to a pointer
darkBtn.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)'; // Adds shadow for better visibility
darkBtn.textContent = '🌙'; // Adds an icon-like text for better UX
document.body.appendChild(darkBtn);

darkBtn.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; // Ensure text is visible
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'cyan'; // Ensure text is visible
    }
});