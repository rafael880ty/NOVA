// Simple script to log a message or add future interactivity
console.log("Bem-vindo ao site da NØVA!");

// Smooth scroll for navigation links (basic implementation)
// CSS `scroll-behavior: smooth;` handles this natively in modern browsers.
// This JS is a fallback or for browsers that might need it, but often unnecessary now.
/*
document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
*/

// Example: Animate cards on scroll into view (optional enhancement)
const cards = document.querySelectorAll('.item-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'cardFadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target); // Optional: stop observing once animated
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the card is visible
});

cards.forEach(card => {
    card.style.opacity = '0'; // Start hidden for animation
    observer.observe(card);
});

// Add CSS keyframes for the animation (add this to style.css or here in a style tag)
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = `
@keyframes cardFadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(styleSheet);


// The body fade-in animation is handled by CSS