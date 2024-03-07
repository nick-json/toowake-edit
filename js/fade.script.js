document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("card-visible");
            }
        });
    }, {
        rootMargin: "0px",
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => observer.observe(card));
});
