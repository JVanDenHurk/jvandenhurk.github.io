const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
})

// Intersection Observer for subtle animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions)
document.querySelectorAll('.cert-card, .project-card, .blog-card').forEach(card => {
    observer.observe(card);
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
