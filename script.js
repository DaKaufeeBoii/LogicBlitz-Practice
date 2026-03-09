document.addEventListener('DOMContentLoaded', () => {
    // Select all cards
    const cards = document.querySelectorAll('.quiz-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the subject from the data attribute (python, or ml)
            const subject = card.getAttribute('data-subject');

            // Visual feedback before redirecting
            const btn = card.querySelector('.start-btn');
            const originalText = btn.innerText;
            btn.innerText = "Loading...";

            // Simulate a brief loading state, then redirect
            // Update this part in your existing script.js
            setTimeout(() => {
                window.location.href = `quiz.html?subject=${subject}`;
            }, 500);
        });
    });
});