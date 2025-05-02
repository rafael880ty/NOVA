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
// Select both cards and button links for observation
const itemsToObserve = document.querySelectorAll('.item-card, .button-link');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Apply animation only to item cards
            if (entry.target.classList.contains('item-card')) {
                entry.target.style.animation = 'cardFadeInUp 0.6s ease-out forwards';
            } else {
                 // Ensure button links are visible immediately if they are in view
                 entry.target.style.opacity = '1';
                 entry.target.style.transform = 'translateY(0)';
            }
            observer.unobserve(entry.target); // Optional: stop observing once animated/visible
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

itemsToObserve.forEach(item => {
    item.style.opacity = '0'; // Start hidden for animation or visibility check
    observer.observe(item);
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

/* Ensure button links within cards start hidden too if needed */
.item-card .button-link {
    opacity: 0; /* Inherit card's starting opacity */
    transform: translateY(30px); /* Match card's starting transform */
    /* Animation will be applied when the card animates in */
}

`;
document.head.appendChild(styleSheet);


// The body fade-in animation is handled by CSS
