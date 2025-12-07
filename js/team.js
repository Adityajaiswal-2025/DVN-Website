// Fade-in animation for all team cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".team-card");
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add("fade-in");
        }, i * 120);
    });
});
