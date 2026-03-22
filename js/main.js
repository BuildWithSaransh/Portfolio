// Navigation - Set active link based on current page
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    setupScrollAnimations();
    setupHamburgerMenu();
});

// Set Active Navigation Link
function setActiveNavLink() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page link
        if (link.getAttribute('href') === currentLocation || 
            (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Setup Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate, .stagger').forEach(element => {
        observer.observe(element);
    });
}

// Hamburger Menu Toggle
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
                hamburger.classList.remove('active');
            }
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add stagger animation delay to featured cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.featured-card, .card');
    cards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-image');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
