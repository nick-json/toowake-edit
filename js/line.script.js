document.addEventListener("DOMContentLoaded", () => {
    const line = document.querySelector('.line');
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

    window.addEventListener('scroll', () => {
        const scrollPercentage = window.scrollY / maxScrollHeight;
        const bottomValue = 100 - (scrollPercentage * 100);
        line.style.bottom = `${Math.min(Math.max(bottomValue, 0), 100)}%`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');

        if (navigation.style.width) {
            navigation.style.width = null;
        } else {
            navigation.style.width = '250px';
        }
    });
});